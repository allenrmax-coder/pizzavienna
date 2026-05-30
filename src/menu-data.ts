export type MenuSize = { label: string; price: number }

export type MenuItem = {
  id: string
  name: string
  description?: string
  image: string
  type: 'pizza' | 'wings' | 'sub' | 'salad' | 'simple'
  sizes: MenuSize[]
  toppings?: string[]
  sauces?: string[]
  dressings?: string[]
  toppingPrice?: number[]  // [small, large] or [single]
  category: string
}

const PIZZA_TOPPINGS = [
  'Pepperoni', 'Halal Sausage', 'Halal Ham', 'Halal Chicken',
  'Mushroom', 'Onion', 'Green Pepper', 'Jalapeño',
  'Black Olive', 'Banana Pepper', 'Fresh Garlic', 'Pineapple',
  'Fresh Basil', 'Extra Cheese',
]

const WING_SAUCES = [
  'Mild Buffalo', 'Hot Buffalo', 'BBQ', 'Honey BBQ',
  'Garlic Parm', 'Lemon Pepper', 'Sweet Chili', 'Plain',
]

const SALAD_DRESSINGS = [
  'Ranch', 'Italian', 'Balsamic Vinaigrette', 'Caesar', 'Blue Cheese',
]

// Verified Unsplash IDs (cropped square)
const IMG = {
  pizzaCheese: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&q=80&fit=crop',
  pizzaPepperoni: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&q=80&fit=crop',
  pizzaSpecialty: 'https://images.unsplash.com/photo-1593504049359-74330189a345?w=600&q=80&fit=crop',
  pizzaMargherita: 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=600&q=80&fit=crop',
  pizzaBBQ: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80&fit=crop',
  pizzaWhite: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=600&q=80&fit=crop',
  pizzaMedi: 'https://images.unsplash.com/photo-1590947132387-155cc02f3212?w=600&q=80&fit=crop',
  pizzaMeat: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=600&q=80&fit=crop',
  pizzaPhilly: 'https://images.unsplash.com/photo-1571066811602-716837d681de?w=600&q=80&fit=crop',
  wings: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=600&q=80&fit=crop',
  stromboli: 'https://images.unsplash.com/photo-1620812097820-b76d2b0c3784?w=600&q=80&fit=crop',
  calzone: 'https://images.unsplash.com/photo-1536999036161-1e0fdfedee65?w=600&q=80&fit=crop',
  subItalian: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?w=600&q=80&fit=crop',
  subChicken: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=600&q=80&fit=crop',
  subMeatball: 'https://images.unsplash.com/photo-1619096252214-ef06c45683e3?w=600&q=80&fit=crop',
  subCheesesteak: 'https://images.unsplash.com/photo-1539252554935-80c34c1ab1c2?w=600&q=80&fit=crop',
  saladGarden: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80&fit=crop',
  saladCaesar: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=600&q=80&fit=crop',
  saladGreek: 'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=600&q=80&fit=crop',
  garlicKnots: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=600&q=80&fit=crop',
  mozzSticks: 'https://images.unsplash.com/photo-1531749668029-2db88e4276c7?w=600&q=80&fit=crop',
  fries: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600&q=80&fit=crop',
  chickenTenders: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=600&q=80&fit=crop',
  cannoli: 'https://images.unsplash.com/photo-1607478910900-ef5378e0e1f3?w=600&q=80&fit=crop',
  tiramisu: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&q=80&fit=crop',
  cheesecake: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=600&q=80&fit=crop',
  brownie: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&q=80&fit=crop',
  soda: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=600&q=80&fit=crop',
  water: 'https://images.unsplash.com/photo-1564419320461-6870880221ad?w=600&q=80&fit=crop',
}

export const MENU: MenuItem[] = [
  // PIZZAS
  { id: 'cheese',       name: 'Cheese',       description: 'Just sauce and cheese, the way the boss likes it.',     image: IMG.pizzaCheese,     type: 'pizza', category: 'Pizzas',         sizes: [{label: '12" Small', price: 12.99}, {label: '16" Large', price: 15.99}], toppings: PIZZA_TOPPINGS, toppingPrice: [1.75, 2.25] },
  { id: 'pepperoni',    name: 'Pepperoni',    description: 'Cup-and-char pepperoni, generously layered.',           image: IMG.pizzaPepperoni,  type: 'pizza', category: 'Pizzas',         sizes: [{label: '12" Small', price: 14.49}, {label: '16" Large', price: 17.99}], toppings: PIZZA_TOPPINGS, toppingPrice: [1.75, 2.25] },
  { id: 'sausage',      name: 'Halal Sausage', description: 'House-seasoned halal beef sausage.',                   image: IMG.pizzaSpecialty,  type: 'pizza', category: 'Pizzas',         sizes: [{label: '12" Small', price: 14.99}, {label: '16" Large', price: 18.49}], toppings: PIZZA_TOPPINGS, toppingPrice: [1.75, 2.25] },
  { id: 'veggie',       name: 'Veggie',       description: 'Mushroom, onion, green pepper, black olive, tomato.',   image: IMG.pizzaMedi,       type: 'pizza', category: 'Pizzas',         sizes: [{label: '12" Small', price: 15.99}, {label: '16" Large', price: 19.49}], toppings: PIZZA_TOPPINGS, toppingPrice: [1.75, 2.25] },
  { id: 'hawaiian',     name: 'Hawaiian',     description: 'Halal ham, pineapple, mozz.',                           image: IMG.pizzaPepperoni,  type: 'pizza', category: 'Pizzas',         sizes: [{label: '12" Small', price: 15.49}, {label: '16" Large', price: 18.99}], toppings: PIZZA_TOPPINGS, toppingPrice: [1.75, 2.25] },
  { id: 'byo',          name: 'Build Your Own', description: 'Start with cheese, add toppings of your choice.',      image: IMG.pizzaCheese,     type: 'pizza', category: 'Pizzas',         sizes: [{label: '12" Small', price: 12.99}, {label: '16" Large', price: 15.99}], toppings: PIZZA_TOPPINGS, toppingPrice: [1.75, 2.25] },

  // SPECIALTY PIES
  { id: 'special-pv',   name: 'Pizza Vienna Special', description: 'Pepperoni, sausage, mushroom, onion, green pepper, black olive.', image: IMG.pizzaSpecialty, type: 'pizza', category: 'Specialty Pies', sizes: [{label: '16" Large', price: 22.99}], toppings: PIZZA_TOPPINGS, toppingPrice: [2.25] },
  { id: 'margherita',   name: 'Margherita',   description: 'Fresh mozzarella, basil, San Marzano, finished with EVOO.', image: IMG.pizzaMargherita, type: 'pizza', category: 'Specialty Pies', sizes: [{label: '16" Large', price: 19.49}], toppings: PIZZA_TOPPINGS, toppingPrice: [2.25] },
  { id: 'bbq-chicken',  name: 'BBQ Chicken',  description: 'Grilled halal chicken, red onion, smoky BBQ glaze, cilantro.', image: IMG.pizzaBBQ, type: 'pizza', category: 'Specialty Pies', sizes: [{label: '16" Large', price: 20.99}], toppings: PIZZA_TOPPINGS, toppingPrice: [2.25] },
  { id: 'buffalo-chick',name: 'Buffalo Chicken', description: 'Halal chicken tossed in buffalo, mozz, ranch drizzle.', image: IMG.pizzaBBQ, type: 'pizza', category: 'Specialty Pies', sizes: [{label: '16" Large', price: 20.99}], toppings: PIZZA_TOPPINGS, toppingPrice: [2.25] },
  { id: 'white-pie',    name: 'White Pie',    description: 'Ricotta, mozz, garlic, oregano. No red sauce.',          image: IMG.pizzaWhite,      type: 'pizza', category: 'Specialty Pies', sizes: [{label: '16" Large', price: 19.99}], toppings: PIZZA_TOPPINGS, toppingPrice: [2.25] },
  { id: 'mediterranean',name: 'Mediterranean', description: 'Feta, kalamata, sun-dried tomato, spinach, red onion.', image: IMG.pizzaMedi,       type: 'pizza', category: 'Specialty Pies', sizes: [{label: '16" Large', price: 21.99}], toppings: PIZZA_TOPPINGS, toppingPrice: [2.25] },
  { id: 'meat-lovers',  name: 'Meat Lovers',  description: 'Pepperoni, halal sausage, ham, halal beef.',             image: IMG.pizzaMeat,       type: 'pizza', category: 'Specialty Pies', sizes: [{label: '16" Large', price: 23.49}], toppings: PIZZA_TOPPINGS, toppingPrice: [2.25] },
  { id: 'philly',       name: 'Philly Cheesesteak', description: 'Halal shaved beef, mozz, onion, green pepper, no sauce.', image: IMG.pizzaPhilly, type: 'pizza', category: 'Specialty Pies', sizes: [{label: '16" Large', price: 21.99}], toppings: PIZZA_TOPPINGS, toppingPrice: [2.25] },

  // WINGS
  { id: 'wings-6',      name: '6 Wings',      description: 'Hand-tossed halal wings. Served with ranch or blue cheese, celery.', image: IMG.wings, type: 'wings', category: 'Wings', sizes: [{label: '6 pieces', price: 8.99}], sauces: WING_SAUCES },
  { id: 'wings-10',     name: '10 Wings',     description: 'Hand-tossed halal wings. Served with ranch or blue cheese, celery.', image: IMG.wings, type: 'wings', category: 'Wings', sizes: [{label: '10 pieces', price: 13.99}], sauces: WING_SAUCES },
  { id: 'wings-20',     name: '20 Wings',     description: 'Hand-tossed halal wings. Served with ranch or blue cheese, celery.', image: IMG.wings, type: 'wings', category: 'Wings', sizes: [{label: '20 pieces', price: 25.99}], sauces: WING_SAUCES },
  { id: 'wings-50',     name: '50 Wings (Party)', description: 'Hand-tossed halal wings for a crowd.', image: IMG.wings, type: 'wings', category: 'Wings', sizes: [{label: '50 pieces', price: 59.99}], sauces: WING_SAUCES },
  { id: 'boneless',     name: 'Boneless Wings', description: 'Halal boneless wings tossed in your choice of sauce.',  image: IMG.wings, type: 'wings', category: 'Wings', sizes: [{label: '1 lb', price: 13.99}], sauces: WING_SAUCES },

  // STROMBOLI / CALZONES
  { id: 'cheese-cal',   name: 'Cheese Calzone',  description: 'Ricotta, mozz, parm.',                                image: IMG.calzone, type: 'simple', category: 'Stromboli & Calzones', sizes: [{label: 'One', price: 11.99}] },
  { id: 'pepp-stromb',  name: 'Pepperoni Stromboli', description: 'Pepperoni, mozz, parsley.',                       image: IMG.stromboli, type: 'simple', category: 'Stromboli & Calzones', sizes: [{label: 'One', price: 13.49}] },
  { id: 'ital-stromb',  name: 'Italian Stromboli',   description: 'Halal salami, ham, mozz.',                        image: IMG.stromboli, type: 'simple', category: 'Stromboli & Calzones', sizes: [{label: 'One', price: 14.49}] },
  { id: 'steak-stromb', name: 'Steak & Cheese',  description: 'Halal shaved steak, mozz, onion, pepper.',            image: IMG.subCheesesteak, type: 'simple', category: 'Stromboli & Calzones', sizes: [{label: 'One', price: 14.99}] },
  { id: 'veg-cal',      name: 'Veggie Calzone',  description: 'Spinach, mushroom, onion, ricotta, mozz.',            image: IMG.calzone, type: 'simple', category: 'Stromboli & Calzones', sizes: [{label: 'One', price: 13.49}] },

  // SUBS
  { id: 'sub-italian',  name: 'Italian Sub',     description: 'Halal salami, ham, capicola, provolone, lettuce, tomato, oil & vinegar.', image: IMG.subItalian, type: 'sub', category: 'Subs & Hoagies', sizes: [{label: '8"', price: 10.99}, {label: '12"', price: 13.99}] },
  { id: 'sub-meatball', name: 'Meatball Parm',   description: 'Halal meatballs, marinara, mozz, parm.',              image: IMG.subMeatball, type: 'sub', category: 'Subs & Hoagies', sizes: [{label: '8"', price: 10.99}, {label: '12"', price: 13.99}] },
  { id: 'sub-chicken',  name: 'Chicken Parm',    description: 'Breaded halal chicken, marinara, mozz.',              image: IMG.subChicken, type: 'sub', category: 'Subs & Hoagies', sizes: [{label: '8"', price: 11.49}, {label: '12"', price: 14.49}] },
  { id: 'sub-steak',    name: 'Cheesesteak',     description: 'Halal shaved beef, mozz, onion, pepper.',             image: IMG.subCheesesteak, type: 'sub', category: 'Subs & Hoagies', sizes: [{label: '8"', price: 11.49}, {label: '12"', price: 14.49}] },
  { id: 'sub-buffalo',  name: 'Buffalo Chicken Sub', description: 'Halal chicken, buffalo, mozz, lettuce, ranch.',   image: IMG.subChicken, type: 'sub', category: 'Subs & Hoagies', sizes: [{label: '8"', price: 11.49}, {label: '12"', price: 14.49}] },
  { id: 'sub-eggplant', name: 'Eggplant Parm',   description: 'Breaded eggplant, marinara, mozz.',                   image: IMG.subItalian, type: 'sub', category: 'Subs & Hoagies', sizes: [{label: '8"', price: 10.49}, {label: '12"', price: 13.49}] },

  // SALADS
  { id: 'sal-garden',   name: 'Garden Salad',    description: 'Mixed greens, tomato, cucumber, onion, olive.',       image: IMG.saladGarden, type: 'salad', category: 'Salads', sizes: [{label: 'Regular', price: 9.49}], dressings: SALAD_DRESSINGS },
  { id: 'sal-caesar',   name: 'Caesar Salad',    description: 'Romaine, parm, croutons, Caesar dressing.',           image: IMG.saladCaesar, type: 'salad', category: 'Salads', sizes: [{label: 'Regular', price: 9.99}], dressings: SALAD_DRESSINGS },
  { id: 'sal-greek',    name: 'Greek Salad',     description: 'Romaine, feta, kalamata, tomato, cucumber, onion.',   image: IMG.saladGreek, type: 'salad', category: 'Salads', sizes: [{label: 'Regular', price: 11.49}], dressings: SALAD_DRESSINGS },
  { id: 'sal-antipasto',name: 'Antipasto',       description: 'Halal salami & ham, provolone, olives, peppers.',     image: IMG.saladGarden, type: 'salad', category: 'Salads', sizes: [{label: 'Regular', price: 12.99}], dressings: SALAD_DRESSINGS },
  { id: 'sal-buffalo',  name: 'Buffalo Chicken Salad', description: 'Mixed greens, buffalo chicken, blue cheese, tomato.', image: IMG.saladGarden, type: 'salad', category: 'Salads', sizes: [{label: 'Regular', price: 12.99}], dressings: SALAD_DRESSINGS },

  // SIDES
  { id: 'side-knots',   name: 'Garlic Knots (6)', description: 'Brushed with garlic butter and parsley.',           image: IMG.garlicKnots, type: 'simple', category: 'Sides & Starters', sizes: [{label: 'Order of 6', price: 5.49}] },
  { id: 'side-gb',      name: 'Garlic Bread w/ Cheese', description: 'Crusty bread, garlic butter, melted mozz.',    image: IMG.garlicKnots, type: 'simple', category: 'Sides & Starters', sizes: [{label: 'Order', price: 6.99}] },
  { id: 'side-mozz',    name: 'Mozzarella Sticks (5)', description: 'Golden fried, served with marinara.',          image: IMG.mozzSticks, type: 'simple', category: 'Sides & Starters', sizes: [{label: 'Order of 5', price: 7.49}] },
  { id: 'side-cheese-fries', name: 'Cheese Fries', description: 'Crispy fries topped with melted cheese.',           image: IMG.fries, type: 'simple', category: 'Sides & Starters', sizes: [{label: 'Order', price: 6.99}] },
  { id: 'side-fries',   name: 'French Fries',    description: 'Crispy golden fries.',                                image: IMG.fries, type: 'simple', category: 'Sides & Starters', sizes: [{label: 'Order', price: 4.99}] },
  { id: 'side-onion',   name: 'Onion Rings',     description: 'Battered crispy rings.',                              image: IMG.fries, type: 'simple', category: 'Sides & Starters', sizes: [{label: 'Order', price: 5.99}] },
  { id: 'side-tenders', name: 'Halal Chicken Tenders (4)', description: 'Crispy halal chicken tenders.',            image: IMG.chickenTenders, type: 'simple', category: 'Sides & Starters', sizes: [{label: 'Order of 4', price: 8.99}] },

  // DESSERTS
  { id: 'dess-cannoli', name: 'Cannoli',         description: 'Crisp shell, sweet ricotta, chocolate chips.',        image: IMG.cannoli, type: 'simple', category: 'Sweets', sizes: [{label: 'One', price: 4.99}] },
  { id: 'dess-tiramisu',name: 'Tiramisu',        description: 'Layered coffee-soaked sponge with mascarpone.',       image: IMG.tiramisu, type: 'simple', category: 'Sweets', sizes: [{label: 'Slice', price: 6.49}] },
  { id: 'dess-cheese',  name: 'NY Cheesecake',   description: 'Classic creamy New York-style cheesecake.',           image: IMG.cheesecake, type: 'simple', category: 'Sweets', sizes: [{label: 'Slice', price: 6.49}] },
  { id: 'dess-brownie', name: 'Chocolate Brownie', description: 'Rich, fudgy, baked fresh.',                         image: IMG.brownie, type: 'simple', category: 'Sweets', sizes: [{label: 'One', price: 3.99}] },

  // DRINKS
  { id: 'drink-fountain', name: 'Fountain Drink', description: 'Coke, Diet Coke, Sprite, Dr Pepper, Lemonade.',     image: IMG.soda, type: 'simple', category: 'Drinks', sizes: [{label: '20 oz', price: 2.99}] },
  { id: 'drink-2l',     name: '2-Liter Bottle',  description: 'Choose your soda.',                                   image: IMG.soda, type: 'simple', category: 'Drinks', sizes: [{label: '2 L', price: 4.49}] },
  { id: 'drink-water',  name: 'Bottled Water',   description: 'Pure spring water.',                                  image: IMG.water, type: 'simple', category: 'Drinks', sizes: [{label: 'Bottle', price: 1.99}] },
  { id: 'drink-pelle',  name: 'San Pellegrino',  description: 'Italian sparkling water.',                            image: IMG.water, type: 'simple', category: 'Drinks', sizes: [{label: 'Bottle', price: 3.49}] },
  { id: 'drink-snapple',name: 'Snapple',         description: 'Choose your flavor.',                                 image: IMG.soda, type: 'simple', category: 'Drinks', sizes: [{label: 'Bottle', price: 2.99}] },
]

export function findItem(id: string): MenuItem | undefined {
  return MENU.find((m) => m.id === id)
}
