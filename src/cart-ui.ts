import { cart, MENU, findItem, priceForItem, formatMoney, type MenuItem } from './cart'

/* ============================
 * Cart drawer state
 * ============================ */

const drawer = document.getElementById('cartDrawer')!
const overlay = document.getElementById('cartOverlay')!
const cartBody = document.getElementById('cartBody')!
const cartFoot = document.getElementById('cartFoot')!
const cartBadge = document.getElementById('cartBadge')!
const cartHeadTitle = document.getElementById('cartHeadTitle')!
const cartHeadSub = document.getElementById('cartHeadSub')!
const cartBackBtn = document.getElementById('cartBackBtn')!

type CheckoutStep = 'cart' | 'info' | 'review' | 'confirm'
type CheckoutInfo = {
  name: string
  phone: string
  pickupTime: string
  notes: string
  orderNumber?: string
}

let checkoutStep: CheckoutStep = 'cart'
let checkoutInfo: CheckoutInfo = { name: '', phone: '', pickupTime: 'asap', notes: '' }

const TAX_RATE = 0.06 // VA combined sales tax approx

function setStep(step: CheckoutStep) {
  checkoutStep = step
  if (step === 'cart') {
    cartHeadTitle.textContent = 'Cart'
    cartHeadSub.textContent = 'Your Order'
    cartBackBtn.classList.add('cart-back-hidden')
  } else if (step === 'info') {
    cartHeadTitle.textContent = 'Pickup Details'
    cartHeadSub.textContent = 'Step 1 of 2'
    cartBackBtn.classList.remove('cart-back-hidden')
  } else if (step === 'review') {
    cartHeadTitle.textContent = 'Review'
    cartHeadSub.textContent = 'Step 2 of 2'
    cartBackBtn.classList.remove('cart-back-hidden')
  } else {
    cartHeadTitle.textContent = 'Order Placed!'
    cartHeadSub.textContent = "We've got it"
    cartBackBtn.classList.add('cart-back-hidden')
  }
  render()
}

export function openCart() {
  drawer.classList.add('open')
  overlay.classList.add('open')
  document.body.style.overflow = 'hidden'
  if (checkoutStep === 'confirm') setStep('cart')
}

export function closeCart() {
  drawer.classList.remove('open')
  overlay.classList.remove('open')
  document.body.style.overflow = ''
}

function render() {
  if (checkoutStep === 'cart') renderCart()
  else if (checkoutStep === 'info') renderInfo()
  else if (checkoutStep === 'review') renderReview()
  else renderConfirm()
}

/* ============================
 * Step 1 — Cart contents
 * ============================ */
function renderCart() {
  const lines = cart.list()
  cartBadge.textContent = String(cart.count())
  cartBadge.classList.toggle('show', cart.count() > 0)

  if (lines.length === 0) {
    cartBody.innerHTML = `
      <div class="cart-empty">
        <div class="cart-empty-icon">🍕</div>
        <h3 class="font-display text-2xl text-cream">Your cart is empty</h3>
        <p class="mt-2 text-sm text-cream/65">Add a pizza, some wings, or a sub to get started.</p>
        <button class="btn-amber mt-6" id="cartEmptyBrowse">Browse the menu</button>
      </div>
    `
    document.getElementById('cartEmptyBrowse')?.addEventListener('click', () => {
      closeCart()
      document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })
    })
    cartFoot.innerHTML = ''
    cartFoot.classList.add('cart-foot-hidden')
    return
  }

  cartFoot.classList.remove('cart-foot-hidden')
  cartBody.innerHTML = lines
    .map(
      (line) => `
      <div class="cart-line" data-uid="${line.uid}">
        <img src="${line.image}" alt="" class="cart-line-img"/>
        <div class="cart-line-body">
          <div class="flex items-start justify-between gap-2">
            <h4 class="font-serif text-base font-bold text-cream leading-tight">${escapeHtml(line.name)}</h4>
            <button class="cart-line-remove" data-uid="${line.uid}" aria-label="Remove">×</button>
          </div>
          <p class="text-xs text-cream/55">${escapeHtml(line.sizeLabel)}</p>
          ${line.options.length ? `<p class="mt-1 text-xs text-cream/55">${line.options.map(escapeHtml).join(', ')}</p>` : ''}
          <div class="mt-2 flex items-center justify-between">
            <div class="qty-stepper">
              <button class="qty-btn" data-uid="${line.uid}" data-action="dec" aria-label="Decrease">−</button>
              <span class="qty-num">${line.quantity}</span>
              <button class="qty-btn" data-uid="${line.uid}" data-action="inc" aria-label="Increase">+</button>
            </div>
            <span class="font-mono text-sm font-bold text-amber">${formatMoney(line.unitPrice * line.quantity)}</span>
          </div>
        </div>
      </div>
    `
    )
    .join('')

  cartBody.querySelectorAll<HTMLElement>('.cart-line-remove').forEach((el) => {
    el.addEventListener('click', () => cart.remove(el.dataset.uid!))
  })
  cartBody.querySelectorAll<HTMLElement>('.qty-btn').forEach((el) => {
    el.addEventListener('click', () => {
      const line = cart.list().find((l) => l.uid === el.dataset.uid)
      if (!line) return
      const delta = el.dataset.action === 'inc' ? 1 : -1
      cart.updateQty(line.uid, line.quantity + delta)
    })
  })

  cartFoot.innerHTML = `
    <div class="cart-summary">
      <div class="flex items-center justify-between">
        <span class="text-cream/70">Subtotal</span>
        <span class="font-display text-2xl text-amber">${formatMoney(cart.subtotal())}</span>
      </div>
      <p class="mt-1 text-xs text-cream/55">Tax added at review. Pickup ready in 15–20 min.</p>
    </div>
    <button class="btn-checkout" id="goToInfoBtn">
      Checkout
      <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M5 12h14M13 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </button>
  `
  document.getElementById('goToInfoBtn')?.addEventListener('click', () => setStep('info'))
}

/* ============================
 * Step 2 — Customer info form
 * ============================ */
function renderInfo() {
  cartBody.innerHTML = `
    <form id="infoForm" class="checkout-form">
      <div class="form-group">
        <label class="form-label" for="ck-name">Your Name</label>
        <input type="text" id="ck-name" class="form-input" required value="${escapeHtml(checkoutInfo.name)}" placeholder="John Smith"/>
      </div>

      <div class="form-group">
        <label class="form-label" for="ck-phone">Phone Number</label>
        <input type="tel" id="ck-phone" class="form-input" required value="${escapeHtml(checkoutInfo.phone)}" placeholder="(703) 555-0123"/>
        <p class="form-hint">We'll call if there's any issue with your order.</p>
      </div>

      <div class="form-group">
        <label class="form-label">Pickup Time</label>
        <div class="pickup-options">
          ${['asap', '30min', '45min', '60min'].map(t => `
            <label class="pickup-option ${checkoutInfo.pickupTime === t ? 'selected' : ''}">
              <input type="radio" name="pickup" value="${t}" ${checkoutInfo.pickupTime === t ? 'checked' : ''}/>
              <span class="pickup-label">${pickupLabel(t)}</span>
              <span class="pickup-time">${pickupTime(t)}</span>
            </label>
          `).join('')}
        </div>
      </div>

      <div class="form-group">
        <label class="form-label" for="ck-notes">Special Instructions <span class="form-label-opt">(optional)</span></label>
        <textarea id="ck-notes" class="form-input form-textarea" rows="2" placeholder="No onions, extra napkins, etc.">${escapeHtml(checkoutInfo.notes)}</textarea>
      </div>
    </form>
  `

  cartFoot.classList.remove('cart-foot-hidden')
  cartFoot.innerHTML = `
    <button class="btn-checkout" id="goToReviewBtn">
      Review Order
      <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M5 12h14M13 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </button>
  `

  document.getElementById('goToReviewBtn')?.addEventListener('click', () => {
    const name = (document.getElementById('ck-name') as HTMLInputElement)?.value.trim()
    const phone = (document.getElementById('ck-phone') as HTMLInputElement)?.value.trim()
    const notes = (document.getElementById('ck-notes') as HTMLTextAreaElement)?.value.trim() ?? ''
    const pickup = (document.querySelector<HTMLInputElement>('input[name="pickup"]:checked'))?.value ?? 'asap'

    if (!name) { showToast('Please enter your name'); return }
    if (!phone || phone.length < 7) { showToast('Please enter a valid phone number'); return }

    checkoutInfo = { name, phone, pickupTime: pickup, notes }
    setStep('review')
  })

  cartBody.querySelectorAll<HTMLElement>('.pickup-option').forEach((el) => {
    el.addEventListener('click', () => {
      cartBody.querySelectorAll('.pickup-option').forEach((p) => p.classList.remove('selected'))
      el.classList.add('selected')
      ;(el.querySelector('input') as HTMLInputElement).checked = true
    })
  })
}

function pickupLabel(t: string) {
  return t === 'asap' ? 'ASAP' : t === '30min' ? 'In 30 min' : t === '45min' ? 'In 45 min' : 'In 1 hour'
}
function pickupTime(t: string) {
  const now = new Date()
  const mins = t === 'asap' ? 20 : t === '30min' ? 30 : t === '45min' ? 45 : 60
  const target = new Date(now.getTime() + mins * 60_000)
  return target.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })
}

/* ============================
 * Step 3 — Review
 * ============================ */
function renderReview() {
  const lines = cart.list()
  const subtotal = cart.subtotal()
  const tax = subtotal * TAX_RATE
  const total = subtotal + tax

  cartBody.innerHTML = `
    <section class="review-section">
      <p class="modal-label">Pickup</p>
      <div class="review-row">
        <span class="text-cream/65">Name</span>
        <span class="text-cream font-semibold">${escapeHtml(checkoutInfo.name)}</span>
      </div>
      <div class="review-row">
        <span class="text-cream/65">Phone</span>
        <span class="text-cream font-semibold">${escapeHtml(checkoutInfo.phone)}</span>
      </div>
      <div class="review-row">
        <span class="text-cream/65">Ready at</span>
        <span class="text-amber font-bold">${pickupTime(checkoutInfo.pickupTime)}</span>
      </div>
      ${checkoutInfo.notes ? `
        <div class="review-row review-row-stacked">
          <span class="text-cream/65">Notes</span>
          <span class="text-cream">${escapeHtml(checkoutInfo.notes)}</span>
        </div>
      ` : ''}
    </section>

    <section class="review-section">
      <p class="modal-label">Order Summary</p>
      <div class="review-items">
        ${lines.map(line => `
          <div class="review-item">
            <span class="review-item-qty">${line.quantity}×</span>
            <div class="review-item-body">
              <div class="text-cream font-semibold">${escapeHtml(line.name)} <span class="text-cream/55 font-normal text-xs">${escapeHtml(line.sizeLabel)}</span></div>
              ${line.options.length ? `<div class="text-cream/55 text-xs">${line.options.map(escapeHtml).join(', ')}</div>` : ''}
            </div>
            <span class="font-mono text-sm font-bold text-amber">${formatMoney(line.unitPrice * line.quantity)}</span>
          </div>
        `).join('')}
      </div>
    </section>
  `

  cartFoot.classList.remove('cart-foot-hidden')
  cartFoot.innerHTML = `
    <div class="cart-summary">
      <div class="totals">
        <div class="total-row"><span class="text-cream/65">Subtotal</span><span class="font-mono text-cream">${formatMoney(subtotal)}</span></div>
        <div class="total-row"><span class="text-cream/65">Tax (6%)</span><span class="font-mono text-cream">${formatMoney(tax)}</span></div>
        <div class="total-row total-final"><span class="text-cream">Total</span><span class="font-display text-2xl text-amber">${formatMoney(total)}</span></div>
      </div>
      <p class="payment-note">Pay at pickup — cash, card, Apple Pay, Google Pay accepted.</p>
    </div>
    <button class="btn-checkout btn-place-order" id="placeOrderBtn">
      Place Order
      <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M20 6L9 17l-5-5" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </button>
  `

  document.getElementById('placeOrderBtn')?.addEventListener('click', placeOrder)
}

/* ============================
 * Step 4 — Confirmation
 * ============================ */
function placeOrder() {
  const orderNumber = String(Math.floor(1000 + Math.random() * 9000))
  const orderRecord = {
    orderNumber,
    placedAt: new Date().toISOString(),
    info: { ...checkoutInfo },
    items: cart.list(),
    subtotal: cart.subtotal(),
    tax: cart.subtotal() * TAX_RATE,
    total: cart.subtotal() * (1 + TAX_RATE),
  }
  try {
    const history = JSON.parse(localStorage.getItem('pizzavienna_orders') ?? '[]')
    history.unshift(orderRecord)
    localStorage.setItem('pizzavienna_orders', JSON.stringify(history.slice(0, 25)))
  } catch {}

  checkoutInfo.orderNumber = orderNumber
  cart.clear()
  setStep('confirm')
}

function renderConfirm() {
  const { name, phone, pickupTime: pt, notes, orderNumber } = checkoutInfo
  cartBody.innerHTML = `
    <div class="confirm-screen">
      <div class="confirm-check">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" class="h-10 w-10"><path d="M20 6L9 17l-5-5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </div>
      <h2 class="font-display text-4xl text-cream uppercase tracking-wide">Thanks, ${escapeHtml(name.split(' ')[0])}!</h2>
      <p class="mt-2 text-cream/70 text-center">Your order is in. Pick it up at <span class="text-amber font-bold">${pickupTime(pt)}</span>.</p>

      <div class="confirm-card">
        <p class="confirm-label">Order Number</p>
        <p class="confirm-number">#${orderNumber}</p>
        <p class="confirm-hint">Show this to the counter at pickup.</p>
      </div>

      <div class="confirm-meta">
        <div class="review-row"><span class="text-cream/65">Pickup at</span><span class="text-cream">235 Maple Ave E, Vienna VA</span></div>
        <div class="review-row"><span class="text-cream/65">Phone</span><span class="text-cream">${escapeHtml(phone)}</span></div>
        ${notes ? `<div class="review-row"><span class="text-cream/65">Notes</span><span class="text-cream">${escapeHtml(notes)}</span></div>` : ''}
      </div>

      <a href="tel:+17033190002" class="call-store">
        <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke-linecap="round" stroke-linejoin="round"/></svg>
        Call (703) 319-0002 if anything's wrong
      </a>
    </div>
  `

  cartFoot.classList.remove('cart-foot-hidden')
  cartFoot.innerHTML = `
    <button class="btn-checkout btn-amber-checkout" id="doneOrderBtn">
      Order Something Else
    </button>
  `
  document.getElementById('doneOrderBtn')?.addEventListener('click', () => {
    checkoutInfo = { name: '', phone: '', pickupTime: 'asap', notes: '' }
    setStep('cart')
    closeCart()
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })
  })
}

/* ============================
 * Toast helper
 * ============================ */
function showToast(msg: string) {
  const t = document.createElement('div')
  t.className = 'app-toast'
  t.textContent = msg
  document.body.appendChild(t)
  requestAnimationFrame(() => t.classList.add('show'))
  setTimeout(() => {
    t.classList.remove('show')
    setTimeout(() => t.remove(), 300)
  }, 2400)
}

/* ============================
 * Item configuration modal
 * ============================ */

const modal = document.getElementById('itemModal')!
const modalOverlay = document.getElementById('modalOverlay')!
const modalBody = document.getElementById('modalBody')!

type ModalState = {
  item: MenuItem
  sizeIdx: number
  toppings: Set<string>
  sauces: Set<string>
  dressing: string | null
  quantity: number
}

let state: ModalState | null = null

export function openItemModal(itemId: string) {
  const item = findItem(itemId)
  if (!item) return

  state = {
    item,
    sizeIdx: 0,
    toppings: new Set(),
    sauces: new Set(),
    dressing: item.dressings?.[0] ?? null,
    quantity: 1,
  }

  renderModal()
  modal.classList.add('open')
  modalOverlay.classList.add('open')
  document.body.style.overflow = 'hidden'
}

export function closeModal() {
  modal.classList.remove('open')
  modalOverlay.classList.remove('open')
  document.body.style.overflow = ''
  state = null
}

function renderModal() {
  if (!state) return
  const { item, sizeIdx, toppings, sauces, dressing, quantity } = state
  const total = priceForItem(item, sizeIdx, toppings.size) * quantity

  modalBody.innerHTML = `
    <div class="modal-image">
      <img src="${item.image}" alt="${escapeHtml(item.name)}" loading="eager"/>
      <button class="modal-close-btn" id="modalCloseBtn" aria-label="Close">×</button>
      <span class="modal-cat">${escapeHtml(item.category)}</span>
    </div>
    <div class="modal-content">
      <h2 class="font-display text-3xl text-navy uppercase tracking-wide sm:text-4xl">${escapeHtml(item.name)}</h2>
      ${item.description ? `<p class="mt-2 text-navy/70">${escapeHtml(item.description)}</p>` : ''}

      ${item.sizes.length > 1
        ? `<div class="modal-section">
             <p class="modal-label">Choose a Size</p>
             <div class="size-options">
               ${item.sizes.map((s, i) => `
                 <button class="size-option ${i === sizeIdx ? 'selected' : ''}" data-size="${i}">
                   <span class="size-label">${escapeHtml(s.label)}</span>
                   <span class="size-price">${formatMoney(s.price)}</span>
                 </button>
               `).join('')}
             </div>
           </div>`
        : ''
      }

      ${item.toppings && item.type === 'pizza'
        ? `<div class="modal-section">
             <p class="modal-label">Add Toppings <span class="modal-label-hint">+${formatMoney(item.toppingPrice![sizeIdx] ?? item.toppingPrice![0])} each</span></p>
             <div class="topping-grid">
               ${item.toppings.map(t => `
                 <label class="topping-option ${toppings.has(t) ? 'selected' : ''}">
                   <input type="checkbox" data-topping="${escapeHtml(t)}" ${toppings.has(t) ? 'checked' : ''}/>
                   <span>${escapeHtml(t)}</span>
                 </label>
               `).join('')}
             </div>
           </div>`
        : ''
      }

      ${item.sauces && item.type === 'wings'
        ? `<div class="modal-section">
             <p class="modal-label">Choose Sauces <span class="modal-label-hint">(pick any)</span></p>
             <div class="topping-grid">
               ${item.sauces.map(s => `
                 <label class="topping-option ${sauces.has(s) ? 'selected' : ''}">
                   <input type="checkbox" data-sauce="${escapeHtml(s)}" ${sauces.has(s) ? 'checked' : ''}/>
                   <span>${escapeHtml(s)}</span>
                 </label>
               `).join('')}
             </div>
           </div>`
        : ''
      }

      ${item.dressings && item.type === 'salad'
        ? `<div class="modal-section">
             <p class="modal-label">Choose a Dressing</p>
             <div class="size-options">
               ${item.dressings.map(d => `
                 <button class="size-option ${d === dressing ? 'selected' : ''}" data-dressing="${escapeHtml(d)}">
                   <span class="size-label">${escapeHtml(d)}</span>
                 </button>
               `).join('')}
             </div>
           </div>`
        : ''
      }

      <div class="modal-section">
        <p class="modal-label">Quantity</p>
        <div class="qty-stepper qty-stepper-lg">
          <button class="qty-btn" id="modalQtyDec" aria-label="Decrease">−</button>
          <span class="qty-num">${quantity}</span>
          <button class="qty-btn" id="modalQtyInc" aria-label="Increase">+</button>
        </div>
      </div>
    </div>

    <div class="modal-foot">
      <button class="btn-add-to-cart" id="addToCartBtn">
        <span>Add to Cart</span>
        <span class="modal-total">${formatMoney(total)}</span>
      </button>
    </div>
  `

  bindModalEvents()
}

function bindModalEvents() {
  if (!state) return

  document.getElementById('modalCloseBtn')?.addEventListener('click', closeModal)

  modalBody.querySelectorAll<HTMLElement>('.size-option[data-size]').forEach((el) => {
    el.addEventListener('click', () => {
      if (!state) return
      state.sizeIdx = Number(el.dataset.size)
      renderModal()
    })
  })

  modalBody.querySelectorAll<HTMLInputElement>('input[data-topping]').forEach((el) => {
    el.addEventListener('change', () => {
      if (!state) return
      const t = el.dataset.topping!
      if (el.checked) state.toppings.add(t)
      else state.toppings.delete(t)
      renderModal()
    })
  })

  modalBody.querySelectorAll<HTMLInputElement>('input[data-sauce]').forEach((el) => {
    el.addEventListener('change', () => {
      if (!state) return
      const s = el.dataset.sauce!
      if (el.checked) state.sauces.add(s)
      else state.sauces.delete(s)
      renderModal()
    })
  })

  modalBody.querySelectorAll<HTMLElement>('.size-option[data-dressing]').forEach((el) => {
    el.addEventListener('click', () => {
      if (!state) return
      state.dressing = el.dataset.dressing!
      renderModal()
    })
  })

  document.getElementById('modalQtyDec')?.addEventListener('click', () => {
    if (!state || state.quantity <= 1) return
    state.quantity -= 1
    renderModal()
  })
  document.getElementById('modalQtyInc')?.addEventListener('click', () => {
    if (!state) return
    state.quantity += 1
    renderModal()
  })

  document.getElementById('addToCartBtn')?.addEventListener('click', () => {
    if (!state) return
    const { item, sizeIdx, toppings, sauces, dressing, quantity } = state
    const options: string[] = []
    if (item.type === 'pizza' && toppings.size) options.push(...Array.from(toppings))
    if (item.type === 'wings' && sauces.size) options.push(...Array.from(sauces))
    if (item.type === 'salad' && dressing) options.push(`Dressing: ${dressing}`)

    cart.add({
      itemId: item.id,
      name: item.name,
      image: item.image,
      sizeLabel: item.sizes[sizeIdx].label,
      unitPrice: priceForItem(item, sizeIdx, toppings.size),
      options,
      quantity,
    })

    closeModal()
    openCart()
  })
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

/* ============================
 * Wire up navigation buttons & live-render cart
 * ============================ */

// Re-render on cart change ONLY when we're on the cart step
cart.subscribe(() => {
  cartBadge.textContent = String(cart.count())
  cartBadge.classList.toggle('show', cart.count() > 0)
  if (checkoutStep === 'cart') renderCart()
})
render()

document.getElementById('cartBtn')?.addEventListener('click', openCart)
document.getElementById('cartCloseBtn')?.addEventListener('click', closeCart)
overlay.addEventListener('click', closeCart)
modalOverlay.addEventListener('click', closeModal)

// Back button steps backward through the checkout
cartBackBtn.addEventListener('click', () => {
  if (checkoutStep === 'info') setStep('cart')
  else if (checkoutStep === 'review') setStep('info')
})

// Esc to close
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    if (modal.classList.contains('open')) closeModal()
    else if (drawer.classList.contains('open')) closeCart()
  }
})

// Wire up the existing menu rows — bind by data-item-id on .menu-item or any element marked .order-trigger.
document.querySelectorAll<HTMLElement>('[data-item-id]').forEach((el) => {
  el.addEventListener('click', (ev) => {
    ev.preventDefault()
    const id = el.dataset.itemId!
    openItemModal(id)
  })
  el.style.cursor = 'pointer'
})

// Build menu items dynamically — grid of premium image cards
document.querySelectorAll<HTMLElement>('.menu-list[data-category]').forEach((listEl) => {
  const cat = listEl.dataset.category!
  const items = MENU.filter((m) => m.category === cat)
  // Switch from list to grid layout
  listEl.classList.add('menu-grid')

  listEl.innerHTML = items
    .map((item) => {
      const minPrice = item.sizes[0].price
      const sizesPrefix = item.sizes.length > 1 ? 'from ' : ''
      const fallback = placeholderFor(item.type, item.name)
      return `
        <button class="menu-card" data-item-id="${item.id}">
          <div class="menu-card-image">
            ${fallback}
            <img src="${item.image}" alt="${escapeHtml(item.name)}" loading="lazy" onerror="this.style.display='none'"/>
            <span class="menu-card-tag">${categoryShort(item.category)}</span>
          </div>
          <div class="menu-card-body">
            <h4>${escapeHtml(item.name)}</h4>
            ${item.description ? `<p>${escapeHtml(item.description)}</p>` : ''}
            <div class="menu-card-foot">
              <span class="menu-card-price">${sizesPrefix}${formatMoney(minPrice)}</span>
              <span class="menu-card-add">
                <svg class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6"><path d="M12 5v14M5 12h14" stroke-linecap="round"/></svg>
                Add
              </span>
            </div>
          </div>
        </button>
      `
    })
    .join('')

  listEl.querySelectorAll<HTMLElement>('[data-item-id]').forEach((el) => {
    el.addEventListener('click', (ev) => {
      ev.preventDefault()
      openItemModal(el.dataset.itemId!)
    })
  })
})

function categoryShort(cat: string): string {
  const map: Record<string, string> = {
    'Pizzas': 'Pizza',
    'Specialty Pies': 'Specialty',
    'Wings': 'Halal Wings',
    'Stromboli & Calzones': 'Stromboli',
    'Subs & Hoagies': 'Sub',
    'Salads': 'Salad',
    'Sides & Starters': 'Side',
    'Sweets': 'Dessert',
    'Drinks': 'Drink',
  }
  return map[cat] || cat
}

function placeholderFor(type: string, name: string): string {
  // SVG placeholder that displays if the photo fails. Uses brand colors + a food icon.
  const initial = escapeHtml(name.charAt(0))
  const icons: Record<string, string> = {
    pizza: '<circle cx="50" cy="50" r="32" fill="#D89248"/><circle cx="50" cy="50" r="28" fill="#F5BA3C"/><circle cx="42" cy="44" r="5" fill="#C8102E"/><circle cx="58" cy="46" r="5" fill="#C8102E"/><circle cx="48" cy="58" r="5" fill="#C8102E"/>',
    wings: '<path d="M30 60 Q40 30 60 35 Q70 50 55 65 Q40 70 30 60Z" fill="#D89248"/><path d="M40 55 Q50 40 60 45" fill="none" stroke="#A86529" stroke-width="2"/>',
    sub: '<rect x="20" y="40" width="60" height="20" rx="10" fill="#D89248"/><rect x="22" y="42" width="56" height="6" rx="3" fill="#FFE085"/><rect x="22" y="50" width="56" height="6" rx="3" fill="#86c87a"/>',
    salad: '<circle cx="50" cy="55" r="30" fill="#5a7a3a"/><circle cx="40" cy="50" r="6" fill="#86c87a"/><circle cx="55" cy="48" r="5" fill="#9eb87a"/><circle cx="50" cy="60" r="5" fill="#C8102E"/>',
    simple: '<rect x="25" y="35" width="50" height="35" rx="6" fill="#D89248"/><rect x="28" y="38" width="44" height="6" rx="2" fill="#FFE085"/>',
  }
  const icon = icons[type] || icons.simple
  return `
    <div class="menu-card-fallback" aria-hidden="true">
      <svg viewBox="0 0 100 100" class="menu-card-fallback-icon">${icon}</svg>
      <span class="menu-card-fallback-letter">${initial}</span>
    </div>
  `
}

/* Hook the existing featured cards too */
document.querySelectorAll<HTMLElement>('[data-featured-id]').forEach((el) => {
  el.addEventListener('click', (ev) => {
    ev.preventDefault()
    openItemModal(el.dataset.featuredId!)
  })
  el.style.cursor = 'pointer'
})
