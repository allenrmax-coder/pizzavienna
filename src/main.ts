import './style.css'
import './cart-ui'

/* -------------------- LOADER -------------------- */
function dismissLoader() {
  const loader = document.getElementById('loader')
  if (!loader) return
  loader.classList.add('hidden-loader')
  setTimeout(() => {
    loader.remove()
  }, 800)
}

// Keep the loader up long enough for the slice to animate in and the
// wordmark to reveal, then fade away.
const minLoaderTime = 3500
const startedAt = performance.now()

function maybeDismiss() {
  const elapsed = performance.now() - startedAt
  const remaining = Math.max(0, minLoaderTime - elapsed)
  setTimeout(dismissLoader, remaining)
}

if (document.readyState === 'complete') {
  maybeDismiss()
} else {
  window.addEventListener('load', maybeDismiss, { once: true })
  // Safety net: never block the page longer than 5s
  setTimeout(maybeDismiss, 5000)
}

/* -------------------- STICKY NAV -------------------- */
const nav = document.getElementById('nav')
function onScroll() {
  if (!nav) return
  if (window.scrollY > 16) {
    nav.classList.add('scrolled')
  } else {
    nav.classList.remove('scrolled')
  }
}
window.addEventListener('scroll', onScroll, { passive: true })
onScroll()

/* -------------------- MOBILE MENU -------------------- */
const mobileBtn = document.getElementById('mobileMenuBtn')
const mobileMenu = document.getElementById('mobileMenu')

mobileBtn?.addEventListener('click', () => {
  mobileMenu?.classList.toggle('hidden')
})

mobileMenu?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => mobileMenu.classList.add('hidden'))
})

/* -------------------- SCROLL REVEAL -------------------- */
const revealEls = document.querySelectorAll<HTMLElement>('[data-reveal]')

if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed')
          io.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
  )
  revealEls.forEach((el) => io.observe(el))
} else {
  revealEls.forEach((el) => el.classList.add('revealed'))
}

/* -------------------- FOOTER YEAR -------------------- */
const yearEl = document.getElementById('year')
if (yearEl) yearEl.textContent = String(new Date().getFullYear())

/* -------------------- HIDE FLOATING ORDER CTA WHEN FOOTER VISIBLE -------------------- */
const floatingOrder = document.getElementById('floatingOrder')
const footer = document.querySelector('footer')
if (floatingOrder && footer && 'IntersectionObserver' in window) {
  const fio = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        floatingOrder.style.opacity = entry.isIntersecting ? '0' : '1'
        floatingOrder.style.pointerEvents = entry.isIntersecting ? 'none' : 'auto'
      })
    },
    { threshold: 0.1 }
  )
  fio.observe(footer)
}
