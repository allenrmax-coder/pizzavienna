import { MENU, findItem, type MenuItem } from './menu-data'

export type CartLine = {
  uid: string
  itemId: string
  name: string
  image: string
  sizeLabel: string
  unitPrice: number
  options: string[]
  quantity: number
}

const STORAGE_KEY = 'pizzavienna_cart_v1'

class CartStore {
  private items: CartLine[] = []
  private listeners = new Set<() => void>()

  constructor() {
    this.load()
  }

  load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) this.items = JSON.parse(raw)
    } catch {
      this.items = []
    }
  }

  private save() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.items))
    } catch {}
    this.listeners.forEach((fn) => fn())
  }

  subscribe(fn: () => void) {
    this.listeners.add(fn)
    return () => this.listeners.delete(fn)
  }

  list() {
    return [...this.items]
  }

  count() {
    return this.items.reduce((n, line) => n + line.quantity, 0)
  }

  subtotal() {
    return this.items.reduce((sum, line) => sum + line.unitPrice * line.quantity, 0)
  }

  add(line: Omit<CartLine, 'uid'>) {
    // Merge identical lines (same item + size + same options)
    const existing = this.items.find(
      (l) =>
        l.itemId === line.itemId &&
        l.sizeLabel === line.sizeLabel &&
        sameOptions(l.options, line.options)
    )
    if (existing) {
      existing.quantity += line.quantity
    } else {
      this.items.push({
        ...line,
        uid: `${line.itemId}-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      })
    }
    this.save()
  }

  remove(uid: string) {
    this.items = this.items.filter((l) => l.uid !== uid)
    this.save()
  }

  updateQty(uid: string, qty: number) {
    const line = this.items.find((l) => l.uid === uid)
    if (!line) return
    if (qty <= 0) {
      this.remove(uid)
    } else {
      line.quantity = qty
      this.save()
    }
  }

  clear() {
    this.items = []
    this.save()
  }
}

function sameOptions(a: string[], b: string[]) {
  if (a.length !== b.length) return false
  const sa = [...a].sort()
  const sb = [...b].sort()
  return sa.every((v, i) => v === sb[i])
}

export const cart = new CartStore()
export { MENU, findItem, type MenuItem }

export function priceForItem(item: MenuItem, sizeIdx: number, toppingCount: number) {
  const size = item.sizes[sizeIdx]
  if (!size) return 0
  let total = size.price
  if (item.type === 'pizza' && item.toppingPrice) {
    const perTop = item.toppingPrice[sizeIdx] ?? item.toppingPrice[0]
    total += perTop * toppingCount
  }
  return total
}

export function formatMoney(cents: number) {
  return `$${cents.toFixed(2)}`
}
