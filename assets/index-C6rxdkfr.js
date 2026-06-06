var X=Object.defineProperty;var ee=(e,t,a)=>t in e?X(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;var P=(e,t,a)=>ee(e,typeof t!="symbol"?t+"":t,a);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const u of r.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function a(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=a(n);fetch(n.href,r)}})();const m=["Pepperoni","Halal Sausage","Halal Ham","Halal Chicken","Mushroom","Onion","Green Pepper","Jalapeño","Black Olive","Banana Pepper","Fresh Garlic","Pineapple","Fresh Basil","Extra Cheese"],z=["Mild Buffalo","Hot Buffalo","BBQ","Honey BBQ","Garlic Parm","Lemon Pepper","Sweet Chili","Plain"],w=["Ranch","Italian","Balsamic Vinaigrette","Caesar","Blue Cheese"],s={pizzaCheese:"/pizzavienna/menu/cheesepizza.png",pizzaPepperoni:"https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&q=80&fit=crop",pizzaSpecialty:"https://images.unsplash.com/photo-1593504049359-74330189a345?w=600&q=80&fit=crop",pizzaMargherita:"https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=600&q=80&fit=crop",pizzaBBQ:"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80&fit=crop",pizzaWhite:"https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=600&q=80&fit=crop",pizzaMedi:"https://images.unsplash.com/photo-1590947132387-155cc02f3212?w=600&q=80&fit=crop",pizzaMeat:"https://images.unsplash.com/photo-1628840042765-356cda07504e?w=600&q=80&fit=crop",pizzaPhilly:"https://images.unsplash.com/photo-1571066811602-716837d681de?w=600&q=80&fit=crop",wings:"https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=600&q=80&fit=crop",stromboli:"https://images.unsplash.com/photo-1620812097820-b76d2b0c3784?w=600&q=80&fit=crop",calzone:"https://images.unsplash.com/photo-1536999036161-1e0fdfedee65?w=600&q=80&fit=crop",subItalian:"https://images.unsplash.com/photo-1509722747041-616f39b57569?w=600&q=80&fit=crop",subChicken:"https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=600&q=80&fit=crop",subMeatball:"https://images.unsplash.com/photo-1619096252214-ef06c45683e3?w=600&q=80&fit=crop",subCheesesteak:"https://images.unsplash.com/photo-1539252554935-80c34c1ab1c2?w=600&q=80&fit=crop",saladGarden:"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80&fit=crop",saladCaesar:"https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=600&q=80&fit=crop",saladGreek:"https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=600&q=80&fit=crop",garlicKnots:"https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=600&q=80&fit=crop",mozzSticks:"https://images.unsplash.com/photo-1531749668029-2db88e4276c7?w=600&q=80&fit=crop",fries:"https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600&q=80&fit=crop",chickenTenders:"https://images.unsplash.com/photo-1562967914-608f82629710?w=600&q=80&fit=crop",cannoli:"https://images.unsplash.com/photo-1607478910900-ef5378e0e1f3?w=600&q=80&fit=crop",tiramisu:"https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&q=80&fit=crop",cheesecake:"https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=600&q=80&fit=crop",brownie:"https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&q=80&fit=crop",soda:"https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=600&q=80&fit=crop",water:"https://images.unsplash.com/photo-1564419320461-6870880221ad?w=600&q=80&fit=crop"},V=[{id:"cheese",name:"Cheese",description:"Just sauce and cheese, the way the boss likes it.",image:s.pizzaCheese,type:"pizza",category:"Pizzas",sizes:[{label:'12" Small',price:12.99},{label:'16" Large',price:15.99}],toppings:m,toppingPrice:[1.75,2.25]},{id:"pepperoni",name:"Pepperoni",description:"Cup-and-char pepperoni, generously layered.",image:s.pizzaPepperoni,type:"pizza",category:"Pizzas",sizes:[{label:'12" Small',price:14.49},{label:'16" Large',price:17.99}],toppings:m,toppingPrice:[1.75,2.25]},{id:"sausage",name:"Halal Sausage",description:"House-seasoned halal beef sausage.",image:s.pizzaSpecialty,type:"pizza",category:"Pizzas",sizes:[{label:'12" Small',price:14.99},{label:'16" Large',price:18.49}],toppings:m,toppingPrice:[1.75,2.25]},{id:"veggie",name:"Veggie",description:"Mushroom, onion, green pepper, black olive, tomato.",image:s.pizzaMedi,type:"pizza",category:"Pizzas",sizes:[{label:'12" Small',price:15.99},{label:'16" Large',price:19.49}],toppings:m,toppingPrice:[1.75,2.25]},{id:"hawaiian",name:"Hawaiian",description:"Halal ham, pineapple, mozz.",image:s.pizzaPepperoni,type:"pizza",category:"Pizzas",sizes:[{label:'12" Small',price:15.49},{label:'16" Large',price:18.99}],toppings:m,toppingPrice:[1.75,2.25]},{id:"byo",name:"Build Your Own",description:"Start with cheese, add toppings of your choice.",image:s.pizzaCheese,type:"pizza",category:"Pizzas",sizes:[{label:'12" Small',price:12.99},{label:'16" Large',price:15.99}],toppings:m,toppingPrice:[1.75,2.25]},{id:"special-pv",name:"Pizza Vienna Special",description:"Pepperoni, sausage, mushroom, onion, green pepper, black olive.",image:s.pizzaSpecialty,type:"pizza",category:"Specialty Pies",sizes:[{label:'16" Large',price:22.99}],toppings:m,toppingPrice:[2.25]},{id:"margherita",name:"Margherita",description:"Fresh mozzarella, basil, San Marzano, finished with EVOO.",image:s.pizzaMargherita,type:"pizza",category:"Specialty Pies",sizes:[{label:'16" Large',price:19.49}],toppings:m,toppingPrice:[2.25]},{id:"bbq-chicken",name:"BBQ Chicken",description:"Grilled halal chicken, red onion, smoky BBQ glaze, cilantro.",image:s.pizzaBBQ,type:"pizza",category:"Specialty Pies",sizes:[{label:'16" Large',price:20.99}],toppings:m,toppingPrice:[2.25]},{id:"buffalo-chick",name:"Buffalo Chicken",description:"Halal chicken tossed in buffalo, mozz, ranch drizzle.",image:s.pizzaBBQ,type:"pizza",category:"Specialty Pies",sizes:[{label:'16" Large',price:20.99}],toppings:m,toppingPrice:[2.25]},{id:"white-pie",name:"White Pie",description:"Ricotta, mozz, garlic, oregano. No red sauce.",image:s.pizzaWhite,type:"pizza",category:"Specialty Pies",sizes:[{label:'16" Large',price:19.99}],toppings:m,toppingPrice:[2.25]},{id:"mediterranean",name:"Mediterranean",description:"Feta, kalamata, sun-dried tomato, spinach, red onion.",image:s.pizzaMedi,type:"pizza",category:"Specialty Pies",sizes:[{label:'16" Large',price:21.99}],toppings:m,toppingPrice:[2.25]},{id:"meat-lovers",name:"Meat Lovers",description:"Pepperoni, halal sausage, ham, halal beef.",image:s.pizzaMeat,type:"pizza",category:"Specialty Pies",sizes:[{label:'16" Large',price:23.49}],toppings:m,toppingPrice:[2.25]},{id:"philly",name:"Philly Cheesesteak",description:"Halal shaved beef, mozz, onion, green pepper, no sauce.",image:s.pizzaPhilly,type:"pizza",category:"Specialty Pies",sizes:[{label:'16" Large',price:21.99}],toppings:m,toppingPrice:[2.25]},{id:"wings-6",name:"6 Wings",description:"Hand-tossed halal wings. Served with ranch or blue cheese, celery.",image:s.wings,type:"wings",category:"Wings",sizes:[{label:"6 pieces",price:8.99}],sauces:z},{id:"wings-10",name:"10 Wings",description:"Hand-tossed halal wings. Served with ranch or blue cheese, celery.",image:s.wings,type:"wings",category:"Wings",sizes:[{label:"10 pieces",price:13.99}],sauces:z},{id:"wings-20",name:"20 Wings",description:"Hand-tossed halal wings. Served with ranch or blue cheese, celery.",image:s.wings,type:"wings",category:"Wings",sizes:[{label:"20 pieces",price:25.99}],sauces:z},{id:"wings-50",name:"50 Wings (Party)",description:"Hand-tossed halal wings for a crowd.",image:s.wings,type:"wings",category:"Wings",sizes:[{label:"50 pieces",price:59.99}],sauces:z},{id:"boneless",name:"Boneless Wings",description:"Halal boneless wings tossed in your choice of sauce.",image:s.wings,type:"wings",category:"Wings",sizes:[{label:"1 lb",price:13.99}],sauces:z},{id:"cheese-cal",name:"Cheese Calzone",description:"Ricotta, mozz, parm.",image:s.calzone,type:"simple",category:"Stromboli & Calzones",sizes:[{label:"One",price:11.99}]},{id:"pepp-stromb",name:"Pepperoni Stromboli",description:"Pepperoni, mozz, parsley.",image:s.stromboli,type:"simple",category:"Stromboli & Calzones",sizes:[{label:"One",price:13.49}]},{id:"ital-stromb",name:"Italian Stromboli",description:"Halal salami, ham, mozz.",image:s.stromboli,type:"simple",category:"Stromboli & Calzones",sizes:[{label:"One",price:14.49}]},{id:"steak-stromb",name:"Steak & Cheese",description:"Halal shaved steak, mozz, onion, pepper.",image:s.subCheesesteak,type:"simple",category:"Stromboli & Calzones",sizes:[{label:"One",price:14.99}]},{id:"veg-cal",name:"Veggie Calzone",description:"Spinach, mushroom, onion, ricotta, mozz.",image:s.calzone,type:"simple",category:"Stromboli & Calzones",sizes:[{label:"One",price:13.49}]},{id:"sub-italian",name:"Italian Sub",description:"Halal salami, ham, capicola, provolone, lettuce, tomato, oil & vinegar.",image:s.subItalian,type:"sub",category:"Subs & Hoagies",sizes:[{label:'8"',price:10.99},{label:'12"',price:13.99}]},{id:"sub-meatball",name:"Meatball Parm",description:"Halal meatballs, marinara, mozz, parm.",image:s.subMeatball,type:"sub",category:"Subs & Hoagies",sizes:[{label:'8"',price:10.99},{label:'12"',price:13.99}]},{id:"sub-chicken",name:"Chicken Parm",description:"Breaded halal chicken, marinara, mozz.",image:s.subChicken,type:"sub",category:"Subs & Hoagies",sizes:[{label:'8"',price:11.49},{label:'12"',price:14.49}]},{id:"sub-steak",name:"Cheesesteak",description:"Halal shaved beef, mozz, onion, pepper.",image:s.subCheesesteak,type:"sub",category:"Subs & Hoagies",sizes:[{label:'8"',price:11.49},{label:'12"',price:14.49}]},{id:"sub-buffalo",name:"Buffalo Chicken Sub",description:"Halal chicken, buffalo, mozz, lettuce, ranch.",image:s.subChicken,type:"sub",category:"Subs & Hoagies",sizes:[{label:'8"',price:11.49},{label:'12"',price:14.49}]},{id:"sub-eggplant",name:"Eggplant Parm",description:"Breaded eggplant, marinara, mozz.",image:s.subItalian,type:"sub",category:"Subs & Hoagies",sizes:[{label:'8"',price:10.49},{label:'12"',price:13.49}]},{id:"sal-garden",name:"Garden Salad",description:"Mixed greens, tomato, cucumber, onion, olive.",image:s.saladGarden,type:"salad",category:"Salads",sizes:[{label:"Regular",price:9.49}],dressings:w},{id:"sal-caesar",name:"Caesar Salad",description:"Romaine, parm, croutons, Caesar dressing.",image:s.saladCaesar,type:"salad",category:"Salads",sizes:[{label:"Regular",price:9.99}],dressings:w},{id:"sal-greek",name:"Greek Salad",description:"Romaine, feta, kalamata, tomato, cucumber, onion.",image:s.saladGreek,type:"salad",category:"Salads",sizes:[{label:"Regular",price:11.49}],dressings:w},{id:"sal-antipasto",name:"Antipasto",description:"Halal salami & ham, provolone, olives, peppers.",image:s.saladGarden,type:"salad",category:"Salads",sizes:[{label:"Regular",price:12.99}],dressings:w},{id:"sal-buffalo",name:"Buffalo Chicken Salad",description:"Mixed greens, buffalo chicken, blue cheese, tomato.",image:s.saladGarden,type:"salad",category:"Salads",sizes:[{label:"Regular",price:12.99}],dressings:w},{id:"side-knots",name:"Garlic Knots (6)",description:"Brushed with garlic butter and parsley.",image:s.garlicKnots,type:"simple",category:"Sides & Starters",sizes:[{label:"Order of 6",price:5.49}]},{id:"side-gb",name:"Garlic Bread w/ Cheese",description:"Crusty bread, garlic butter, melted mozz.",image:s.garlicKnots,type:"simple",category:"Sides & Starters",sizes:[{label:"Order",price:6.99}]},{id:"side-mozz",name:"Mozzarella Sticks (5)",description:"Golden fried, served with marinara.",image:s.mozzSticks,type:"simple",category:"Sides & Starters",sizes:[{label:"Order of 5",price:7.49}]},{id:"side-cheese-fries",name:"Cheese Fries",description:"Crispy fries topped with melted cheese.",image:s.fries,type:"simple",category:"Sides & Starters",sizes:[{label:"Order",price:6.99}]},{id:"side-fries",name:"French Fries",description:"Crispy golden fries.",image:s.fries,type:"simple",category:"Sides & Starters",sizes:[{label:"Order",price:4.99}]},{id:"side-onion",name:"Onion Rings",description:"Battered crispy rings.",image:s.fries,type:"simple",category:"Sides & Starters",sizes:[{label:"Order",price:5.99}]},{id:"side-tenders",name:"Halal Chicken Tenders (4)",description:"Crispy halal chicken tenders.",image:s.chickenTenders,type:"simple",category:"Sides & Starters",sizes:[{label:"Order of 4",price:8.99}]},{id:"dess-cannoli",name:"Cannoli",description:"Crisp shell, sweet ricotta, chocolate chips.",image:s.cannoli,type:"simple",category:"Sweets",sizes:[{label:"One",price:4.99}]},{id:"dess-tiramisu",name:"Tiramisu",description:"Layered coffee-soaked sponge with mascarpone.",image:s.tiramisu,type:"simple",category:"Sweets",sizes:[{label:"Slice",price:6.49}]},{id:"dess-cheese",name:"NY Cheesecake",description:"Classic creamy New York-style cheesecake.",image:s.cheesecake,type:"simple",category:"Sweets",sizes:[{label:"Slice",price:6.49}]},{id:"dess-brownie",name:"Chocolate Brownie",description:"Rich, fudgy, baked fresh.",image:s.brownie,type:"simple",category:"Sweets",sizes:[{label:"One",price:3.99}]},{id:"drink-fountain",name:"Fountain Drink",description:"Coke, Diet Coke, Sprite, Dr Pepper, Lemonade.",image:s.soda,type:"simple",category:"Drinks",sizes:[{label:"20 oz",price:2.99}]},{id:"drink-2l",name:"2-Liter Bottle",description:"Choose your soda.",image:s.soda,type:"simple",category:"Drinks",sizes:[{label:"2 L",price:4.49}]},{id:"drink-water",name:"Bottled Water",description:"Pure spring water.",image:s.water,type:"simple",category:"Drinks",sizes:[{label:"Bottle",price:1.99}]},{id:"drink-pelle",name:"San Pellegrino",description:"Italian sparkling water.",image:s.water,type:"simple",category:"Drinks",sizes:[{label:"Bottle",price:3.49}]},{id:"drink-snapple",name:"Snapple",description:"Choose your flavor.",image:s.soda,type:"simple",category:"Drinks",sizes:[{label:"Bottle",price:2.99}]}];function te(e){return V.find(t=>t.id===e)}const G="pizzavienna_cart_v1";class ae{constructor(){P(this,"items",[]);P(this,"listeners",new Set);this.load()}load(){try{const t=localStorage.getItem(G);t&&(this.items=JSON.parse(t))}catch{this.items=[]}}save(){try{localStorage.setItem(G,JSON.stringify(this.items))}catch{}this.listeners.forEach(t=>t())}subscribe(t){return this.listeners.add(t),()=>this.listeners.delete(t)}list(){return[...this.items]}count(){return this.items.reduce((t,a)=>t+a.quantity,0)}subtotal(){return this.items.reduce((t,a)=>t+a.unitPrice*a.quantity,0)}add(t){const a=this.items.find(i=>i.itemId===t.itemId&&i.sizeLabel===t.sizeLabel&&se(i.options,t.options));a?a.quantity+=t.quantity:this.items.push({...t,uid:`${t.itemId}-${Date.now()}-${Math.random().toString(36).slice(2,7)}`}),this.save()}remove(t){this.items=this.items.filter(a=>a.uid!==t),this.save()}updateQty(t,a){const i=this.items.find(n=>n.uid===t);i&&(a<=0?this.remove(t):(i.quantity=a,this.save()))}clear(){this.items=[],this.save()}}function se(e,t){if(e.length!==t.length)return!1;const a=[...e].sort(),i=[...t].sort();return a.every((n,r)=>n===i[r])}const l=new ae;function _(e,t,a){const i=e.sizes[t];if(!i)return 0;let n=i.price;if(e.type==="pizza"&&e.toppingPrice){const r=e.toppingPrice[t]??e.toppingPrice[0];n+=r*a}return n}function g(e){return`$${e.toFixed(2)}`}const T=document.getElementById("cartDrawer"),H=document.getElementById("cartOverlay"),f=document.getElementById("cartBody"),h=document.getElementById("cartFoot"),E=document.getElementById("cartBadge"),L=document.getElementById("cartHeadTitle"),B=document.getElementById("cartHeadSub"),k=document.getElementById("cartBackBtn");let y="cart",d={name:"",phone:"",pickupTime:"asap",notes:""};const M=.06;function v(e){y=e,e==="cart"?(L.textContent="Cart",B.textContent="Your Order",k.classList.add("cart-back-hidden")):e==="info"?(L.textContent="Pickup Details",B.textContent="Step 1 of 2",k.classList.remove("cart-back-hidden")):e==="review"?(L.textContent="Review",B.textContent="Step 2 of 2",k.classList.remove("cart-back-hidden")):(L.textContent="Order Placed!",B.textContent="We've got it",k.classList.add("cart-back-hidden")),K()}function J(){T.classList.add("open"),H.classList.add("open"),document.body.style.overflow="hidden",y==="confirm"&&v("cart")}function x(){T.classList.remove("open"),H.classList.remove("open"),document.body.style.overflow=""}function K(){y==="cart"?Z():y==="info"?ie():y==="review"?oe():ce()}function Z(){const e=l.list();if(E.textContent=String(l.count()),E.classList.toggle("show",l.count()>0),e.length===0){f.innerHTML=`
      <div class="cart-empty">
        <div class="cart-empty-icon">🍕</div>
        <h3 class="font-display text-2xl text-cream">Your cart is empty</h3>
        <p class="mt-2 text-sm text-cream/65">Add a pizza, some wings, or a sub to get started.</p>
        <button class="btn-amber mt-6" id="cartEmptyBrowse">Browse the menu</button>
      </div>
    `,document.getElementById("cartEmptyBrowse")?.addEventListener("click",()=>{x(),document.getElementById("menu")?.scrollIntoView({behavior:"smooth"})}),h.innerHTML="",h.classList.add("cart-foot-hidden");return}h.classList.remove("cart-foot-hidden"),f.innerHTML=e.map(t=>`
      <div class="cart-line" data-uid="${t.uid}">
        <img src="${t.image}" alt="" class="cart-line-img"/>
        <div class="cart-line-body">
          <div class="flex items-start justify-between gap-2">
            <h4 class="font-serif text-base font-bold text-cream leading-tight">${o(t.name)}</h4>
            <button class="cart-line-remove" data-uid="${t.uid}" aria-label="Remove">×</button>
          </div>
          <p class="text-xs text-cream/55">${o(t.sizeLabel)}</p>
          ${t.options.length?`<p class="mt-1 text-xs text-cream/55">${t.options.map(o).join(", ")}</p>`:""}
          <div class="mt-2 flex items-center justify-between">
            <div class="qty-stepper">
              <button class="qty-btn" data-uid="${t.uid}" data-action="dec" aria-label="Decrease">−</button>
              <span class="qty-num">${t.quantity}</span>
              <button class="qty-btn" data-uid="${t.uid}" data-action="inc" aria-label="Increase">+</button>
            </div>
            <span class="font-mono text-sm font-bold text-amber">${g(t.unitPrice*t.quantity)}</span>
          </div>
        </div>
      </div>
    `).join(""),f.querySelectorAll(".cart-line-remove").forEach(t=>{t.addEventListener("click",()=>l.remove(t.dataset.uid))}),f.querySelectorAll(".qty-btn").forEach(t=>{t.addEventListener("click",()=>{const a=l.list().find(n=>n.uid===t.dataset.uid);if(!a)return;const i=t.dataset.action==="inc"?1:-1;l.updateQty(a.uid,a.quantity+i)})}),h.innerHTML=`
    <div class="cart-summary">
      <div class="flex items-center justify-between">
        <span class="text-cream/70">Subtotal</span>
        <span class="font-display text-2xl text-amber">${g(l.subtotal())}</span>
      </div>
      <p class="mt-1 text-xs text-cream/55">Tax added at review. Pickup ready in 15–20 min.</p>
    </div>
    <button class="btn-checkout" id="goToInfoBtn">
      Checkout
      <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M5 12h14M13 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </button>
  `,document.getElementById("goToInfoBtn")?.addEventListener("click",()=>v("info"))}function ie(){f.innerHTML=`
    <form id="infoForm" class="checkout-form">
      <div class="form-group">
        <label class="form-label" for="ck-name">Your Name</label>
        <input type="text" id="ck-name" class="form-input" required value="${o(d.name)}" placeholder="John Smith"/>
      </div>

      <div class="form-group">
        <label class="form-label" for="ck-phone">Phone Number</label>
        <input type="tel" id="ck-phone" class="form-input" required value="${o(d.phone)}" placeholder="(703) 555-0123"/>
        <p class="form-hint">We'll call if there's any issue with your order.</p>
      </div>

      <div class="form-group">
        <label class="form-label">Pickup Time</label>
        <div class="pickup-options">
          ${["asap","30min","45min","60min"].map(e=>`
            <label class="pickup-option ${d.pickupTime===e?"selected":""}">
              <input type="radio" name="pickup" value="${e}" ${d.pickupTime===e?"checked":""}/>
              <span class="pickup-label">${ne(e)}</span>
              <span class="pickup-time">${A(e)}</span>
            </label>
          `).join("")}
        </div>
      </div>

      <div class="form-group">
        <label class="form-label" for="ck-notes">Special Instructions <span class="form-label-opt">(optional)</span></label>
        <textarea id="ck-notes" class="form-input form-textarea" rows="2" placeholder="No onions, extra napkins, etc.">${o(d.notes)}</textarea>
      </div>
    </form>
  `,h.classList.remove("cart-foot-hidden"),h.innerHTML=`
    <button class="btn-checkout" id="goToReviewBtn">
      Review Order
      <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M5 12h14M13 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </button>
  `,document.getElementById("goToReviewBtn")?.addEventListener("click",()=>{const e=document.getElementById("ck-name")?.value.trim(),t=document.getElementById("ck-phone")?.value.trim(),a=document.getElementById("ck-notes")?.value.trim()??"",i=document.querySelector('input[name="pickup"]:checked')?.value??"asap";if(!e){W("Please enter your name");return}if(!t||t.length<7){W("Please enter a valid phone number");return}d={name:e,phone:t,pickupTime:i,notes:a},v("review")}),f.querySelectorAll(".pickup-option").forEach(e=>{e.addEventListener("click",()=>{f.querySelectorAll(".pickup-option").forEach(t=>t.classList.remove("selected")),e.classList.add("selected"),e.querySelector("input").checked=!0})})}function ne(e){return e==="asap"?"ASAP":e==="30min"?"In 30 min":e==="45min"?"In 45 min":"In 1 hour"}function A(e){const t=new Date,a=e==="asap"?20:e==="30min"?30:e==="45min"?45:60;return new Date(t.getTime()+a*6e4).toLocaleTimeString([],{hour:"numeric",minute:"2-digit"})}function oe(){const e=l.list(),t=l.subtotal(),a=t*M,i=t+a;f.innerHTML=`
    <section class="review-section">
      <p class="modal-label">Pickup</p>
      <div class="review-row">
        <span class="text-cream/65">Name</span>
        <span class="text-cream font-semibold">${o(d.name)}</span>
      </div>
      <div class="review-row">
        <span class="text-cream/65">Phone</span>
        <span class="text-cream font-semibold">${o(d.phone)}</span>
      </div>
      <div class="review-row">
        <span class="text-cream/65">Ready at</span>
        <span class="text-amber font-bold">${A(d.pickupTime)}</span>
      </div>
      ${d.notes?`
        <div class="review-row review-row-stacked">
          <span class="text-cream/65">Notes</span>
          <span class="text-cream">${o(d.notes)}</span>
        </div>
      `:""}
    </section>

    <section class="review-section">
      <p class="modal-label">Order Summary</p>
      <div class="review-items">
        ${e.map(n=>`
          <div class="review-item">
            <span class="review-item-qty">${n.quantity}×</span>
            <div class="review-item-body">
              <div class="text-cream font-semibold">${o(n.name)} <span class="text-cream/55 font-normal text-xs">${o(n.sizeLabel)}</span></div>
              ${n.options.length?`<div class="text-cream/55 text-xs">${n.options.map(o).join(", ")}</div>`:""}
            </div>
            <span class="font-mono text-sm font-bold text-amber">${g(n.unitPrice*n.quantity)}</span>
          </div>
        `).join("")}
      </div>
    </section>
  `,h.classList.remove("cart-foot-hidden"),h.innerHTML=`
    <div class="cart-summary">
      <div class="totals">
        <div class="total-row"><span class="text-cream/65">Subtotal</span><span class="font-mono text-cream">${g(t)}</span></div>
        <div class="total-row"><span class="text-cream/65">Tax (6%)</span><span class="font-mono text-cream">${g(a)}</span></div>
        <div class="total-row total-final"><span class="text-cream">Total</span><span class="font-display text-2xl text-amber">${g(i)}</span></div>
      </div>
      <p class="payment-note">Pay at pickup — cash, card, Apple Pay, Google Pay accepted.</p>
    </div>
    <button class="btn-checkout btn-place-order" id="placeOrderBtn">
      Place Order
      <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M20 6L9 17l-5-5" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </button>
  `,document.getElementById("placeOrderBtn")?.addEventListener("click",re)}function re(){const e=String(Math.floor(1e3+Math.random()*9e3)),t={orderNumber:e,placedAt:new Date().toISOString(),info:{...d},items:l.list(),subtotal:l.subtotal(),tax:l.subtotal()*M,total:l.subtotal()*(1+M)};try{const a=JSON.parse(localStorage.getItem("pizzavienna_orders")??"[]");a.unshift(t),localStorage.setItem("pizzavienna_orders",JSON.stringify(a.slice(0,25)))}catch{}d.orderNumber=e,l.clear(),v("confirm")}function ce(){const{name:e,phone:t,pickupTime:a,notes:i,orderNumber:n}=d;f.innerHTML=`
    <div class="confirm-screen">
      <div class="confirm-check">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" class="h-10 w-10"><path d="M20 6L9 17l-5-5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </div>
      <h2 class="font-display text-4xl text-cream uppercase tracking-wide">Thanks, ${o(e.split(" ")[0])}!</h2>
      <p class="mt-2 text-cream/70 text-center">Your order is in. Pick it up at <span class="text-amber font-bold">${A(a)}</span>.</p>

      <div class="confirm-card">
        <p class="confirm-label">Order Number</p>
        <p class="confirm-number">#${n}</p>
        <p class="confirm-hint">Show this to the counter at pickup.</p>
      </div>

      <div class="confirm-meta">
        <div class="review-row"><span class="text-cream/65">Pickup at</span><span class="text-cream">235 Maple Ave E, Vienna VA</span></div>
        <div class="review-row"><span class="text-cream/65">Phone</span><span class="text-cream">${o(t)}</span></div>
        ${i?`<div class="review-row"><span class="text-cream/65">Notes</span><span class="text-cream">${o(i)}</span></div>`:""}
      </div>

      <a href="tel:+17033190002" class="call-store">
        <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke-linecap="round" stroke-linejoin="round"/></svg>
        Call (703) 319-0002 if anything's wrong
      </a>
    </div>
  `,h.classList.remove("cart-foot-hidden"),h.innerHTML=`
    <button class="btn-checkout btn-amber-checkout" id="doneOrderBtn">
      Order Something Else
    </button>
  `,document.getElementById("doneOrderBtn")?.addEventListener("click",()=>{d={name:"",phone:"",pickupTime:"asap",notes:""},v("cart"),x(),document.getElementById("menu")?.scrollIntoView({behavior:"smooth"})})}function W(e){const t=document.createElement("div");t.className="app-toast",t.textContent=e,document.body.appendChild(t),requestAnimationFrame(()=>t.classList.add("show")),setTimeout(()=>{t.classList.remove("show"),setTimeout(()=>t.remove(),300)},2400)}const D=document.getElementById("itemModal"),N=document.getElementById("modalOverlay"),S=document.getElementById("modalBody");let c=null;function R(e){const t=te(e);t&&(c={item:t,sizeIdx:0,toppings:new Set,sauces:new Set,dressing:t.dressings?.[0]??null,quantity:1},b(),D.classList.add("open"),N.classList.add("open"),document.body.style.overflow="hidden")}function C(){D.classList.remove("open"),N.classList.remove("open"),document.body.style.overflow="",c=null}function b(){if(!c)return;const{item:e,sizeIdx:t,toppings:a,sauces:i,dressing:n,quantity:r}=c,u=_(e,t,a.size)*r;S.innerHTML=`
    <div class="modal-image">
      <img src="${e.image}" alt="${o(e.name)}" loading="eager"/>
      <button class="modal-close-btn" id="modalCloseBtn" aria-label="Close">×</button>
      <span class="modal-cat">${o(e.category)}</span>
    </div>
    <div class="modal-content">
      <h2 class="font-display text-3xl text-navy uppercase tracking-wide sm:text-4xl">${o(e.name)}</h2>
      ${e.description?`<p class="mt-2 text-navy/70">${o(e.description)}</p>`:""}

      ${e.sizes.length>1?`<div class="modal-section">
             <p class="modal-label">Choose a Size</p>
             <div class="size-options">
               ${e.sizes.map((p,F)=>`
                 <button class="size-option ${F===t?"selected":""}" data-size="${F}">
                   <span class="size-label">${o(p.label)}</span>
                   <span class="size-price">${g(p.price)}</span>
                 </button>
               `).join("")}
             </div>
           </div>`:""}

      ${e.toppings&&e.type==="pizza"?`<div class="modal-section">
             <p class="modal-label">Add Toppings <span class="modal-label-hint">+${g(e.toppingPrice[t]??e.toppingPrice[0])} each</span></p>
             <div class="topping-grid">
               ${e.toppings.map(p=>`
                 <label class="topping-option ${a.has(p)?"selected":""}">
                   <input type="checkbox" data-topping="${o(p)}" ${a.has(p)?"checked":""}/>
                   <span>${o(p)}</span>
                 </label>
               `).join("")}
             </div>
           </div>`:""}

      ${e.sauces&&e.type==="wings"?`<div class="modal-section">
             <p class="modal-label">Choose Sauces <span class="modal-label-hint">(pick any)</span></p>
             <div class="topping-grid">
               ${e.sauces.map(p=>`
                 <label class="topping-option ${i.has(p)?"selected":""}">
                   <input type="checkbox" data-sauce="${o(p)}" ${i.has(p)?"checked":""}/>
                   <span>${o(p)}</span>
                 </label>
               `).join("")}
             </div>
           </div>`:""}

      ${e.dressings&&e.type==="salad"?`<div class="modal-section">
             <p class="modal-label">Choose a Dressing</p>
             <div class="size-options">
               ${e.dressings.map(p=>`
                 <button class="size-option ${p===n?"selected":""}" data-dressing="${o(p)}">
                   <span class="size-label">${o(p)}</span>
                 </button>
               `).join("")}
             </div>
           </div>`:""}

      <div class="modal-section">
        <p class="modal-label">Quantity</p>
        <div class="qty-stepper qty-stepper-lg">
          <button class="qty-btn" id="modalQtyDec" aria-label="Decrease">−</button>
          <span class="qty-num">${r}</span>
          <button class="qty-btn" id="modalQtyInc" aria-label="Increase">+</button>
        </div>
      </div>
    </div>

    <div class="modal-foot">
      <button class="btn-add-to-cart" id="addToCartBtn">
        <span>Add to Cart</span>
        <span class="modal-total">${g(u)}</span>
      </button>
    </div>
  `,le()}function le(){c&&(document.getElementById("modalCloseBtn")?.addEventListener("click",C),S.querySelectorAll(".size-option[data-size]").forEach(e=>{e.addEventListener("click",()=>{c&&(c.sizeIdx=Number(e.dataset.size),b())})}),S.querySelectorAll("input[data-topping]").forEach(e=>{e.addEventListener("change",()=>{if(!c)return;const t=e.dataset.topping;e.checked?c.toppings.add(t):c.toppings.delete(t),b()})}),S.querySelectorAll("input[data-sauce]").forEach(e=>{e.addEventListener("change",()=>{if(!c)return;const t=e.dataset.sauce;e.checked?c.sauces.add(t):c.sauces.delete(t),b()})}),S.querySelectorAll(".size-option[data-dressing]").forEach(e=>{e.addEventListener("click",()=>{c&&(c.dressing=e.dataset.dressing,b())})}),document.getElementById("modalQtyDec")?.addEventListener("click",()=>{!c||c.quantity<=1||(c.quantity-=1,b())}),document.getElementById("modalQtyInc")?.addEventListener("click",()=>{c&&(c.quantity+=1,b())}),document.getElementById("addToCartBtn")?.addEventListener("click",()=>{if(!c)return;const{item:e,sizeIdx:t,toppings:a,sauces:i,dressing:n,quantity:r}=c,u=[];e.type==="pizza"&&a.size&&u.push(...Array.from(a)),e.type==="wings"&&i.size&&u.push(...Array.from(i)),e.type==="salad"&&n&&u.push(`Dressing: ${n}`),l.add({itemId:e.id,name:e.name,image:e.image,sizeLabel:e.sizes[t].label,unitPrice:_(e,t,a.size),options:u,quantity:r}),C(),J()}))}function o(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}l.subscribe(()=>{E.textContent=String(l.count()),E.classList.toggle("show",l.count()>0),y==="cart"&&Z()});K();document.getElementById("cartBtn")?.addEventListener("click",J);document.getElementById("cartCloseBtn")?.addEventListener("click",x);H.addEventListener("click",x);N.addEventListener("click",C);k.addEventListener("click",()=>{y==="info"?v("cart"):y==="review"&&v("info")});document.addEventListener("keydown",e=>{e.key==="Escape"&&(D.classList.contains("open")?C():T.classList.contains("open")&&x())});document.querySelectorAll("[data-item-id]").forEach(e=>{e.addEventListener("click",t=>{t.preventDefault();const a=e.dataset.itemId;R(a)}),e.style.cursor="pointer"});document.querySelectorAll(".menu-list[data-category]").forEach(e=>{const t=e.dataset.category,a=V.filter(i=>i.category===t);e.classList.add("menu-grid"),e.innerHTML=a.map(i=>{const n=i.sizes[0].price,r=i.sizes.length>1?"from ":"",u=de(i.type,i.name);return`
        <button class="menu-card" data-item-id="${i.id}">
          <div class="menu-card-image">
            ${u}
            <img src="${i.image}" alt="${o(i.name)}" loading="lazy" onerror="this.style.display='none'"/>
            <span class="menu-card-tag">${pe(i.category)}</span>
          </div>
          <div class="menu-card-body">
            <h4>${o(i.name)}</h4>
            ${i.description?`<p>${o(i.description)}</p>`:""}
            <div class="menu-card-foot">
              <span class="menu-card-price">${r}${g(n)}</span>
              <span class="menu-card-add">
                <svg class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6"><path d="M12 5v14M5 12h14" stroke-linecap="round"/></svg>
                Add
              </span>
            </div>
          </div>
        </button>
      `}).join(""),e.querySelectorAll("[data-item-id]").forEach(i=>{i.addEventListener("click",n=>{n.preventDefault(),R(i.dataset.itemId)})})});function pe(e){return{Pizzas:"Pizza","Specialty Pies":"Specialty",Wings:"Halal Wings","Stromboli & Calzones":"Stromboli","Subs & Hoagies":"Sub",Salads:"Salad","Sides & Starters":"Side",Sweets:"Dessert",Drinks:"Drink"}[e]||e}function de(e,t){const a=o(t.charAt(0)),i={pizza:'<circle cx="50" cy="50" r="32" fill="#D89248"/><circle cx="50" cy="50" r="28" fill="#F5BA3C"/><circle cx="42" cy="44" r="5" fill="#C8102E"/><circle cx="58" cy="46" r="5" fill="#C8102E"/><circle cx="48" cy="58" r="5" fill="#C8102E"/>',wings:'<path d="M30 60 Q40 30 60 35 Q70 50 55 65 Q40 70 30 60Z" fill="#D89248"/><path d="M40 55 Q50 40 60 45" fill="none" stroke="#A86529" stroke-width="2"/>',sub:'<rect x="20" y="40" width="60" height="20" rx="10" fill="#D89248"/><rect x="22" y="42" width="56" height="6" rx="3" fill="#FFE085"/><rect x="22" y="50" width="56" height="6" rx="3" fill="#86c87a"/>',salad:'<circle cx="50" cy="55" r="30" fill="#5a7a3a"/><circle cx="40" cy="50" r="6" fill="#86c87a"/><circle cx="55" cy="48" r="5" fill="#9eb87a"/><circle cx="50" cy="60" r="5" fill="#C8102E"/>',simple:'<rect x="25" y="35" width="50" height="35" rx="6" fill="#D89248"/><rect x="28" y="38" width="44" height="6" rx="2" fill="#FFE085"/>'};return`
    <div class="menu-card-fallback" aria-hidden="true">
      <svg viewBox="0 0 100 100" class="menu-card-fallback-icon">${i[e]||i.simple}</svg>
      <span class="menu-card-fallback-letter">${a}</span>
    </div>
  `}document.querySelectorAll("[data-featured-id]").forEach(e=>{e.addEventListener("click",t=>{t.preventDefault(),R(e.dataset.featuredId)}),e.style.cursor="pointer"});function me(){const e=document.getElementById("loader");e&&(e.classList.add("hidden-loader"),setTimeout(()=>{e.remove()},800))}const ue=3500,ge=performance.now();function $(){const e=performance.now()-ge,t=Math.max(0,ue-e);setTimeout(me,t)}document.readyState==="complete"?$():(window.addEventListener("load",$,{once:!0}),setTimeout($,5e3));const I=document.getElementById("nav");function U(){I&&(window.scrollY>16?I.classList.add("scrolled"):I.classList.remove("scrolled"))}window.addEventListener("scroll",U,{passive:!0});U();const he=document.getElementById("mobileMenuBtn"),O=document.getElementById("mobileMenu");he?.addEventListener("click",()=>{O?.classList.toggle("hidden")});O?.querySelectorAll("a").forEach(e=>{e.addEventListener("click",()=>O.classList.add("hidden"))});const j=document.querySelectorAll("[data-reveal]");if("IntersectionObserver"in window){const e=new IntersectionObserver(t=>{t.forEach(a=>{a.isIntersecting&&(a.target.classList.add("revealed"),e.unobserve(a.target))})},{threshold:.12,rootMargin:"0px 0px -60px 0px"});j.forEach(t=>e.observe(t))}else j.forEach(e=>e.classList.add("revealed"));const Q=document.getElementById("year");Q&&(Q.textContent=String(new Date().getFullYear()));const q=document.getElementById("floatingOrder"),Y=document.querySelector("footer");q&&Y&&"IntersectionObserver"in window&&new IntersectionObserver(t=>{t.forEach(a=>{q.style.opacity=a.isIntersecting?"0":"1",q.style.pointerEvents=a.isIntersecting?"none":"auto"})},{threshold:.1}).observe(Y);
