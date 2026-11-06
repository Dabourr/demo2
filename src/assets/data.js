const img = (id) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=900&q=80`

export const images = {
  hero: img('1517248135467-4c7edcad34c4'),
  intro: img('1414235077428-338989a2e8c0'),
  cta: img('1504674900247-0877df9cc836'),
  story: img('1577219491135-ce391730fb2c'),
  mission: img('1466978913421-dad2ebd01d17'),
  pageAbout: img('1555396273-367ea4eb4db5'),
  pageMenu: img('1544025162-d76694265947'),
  pageGallery: img('1559339352-11d035aa65de'),
  pageContact: img('1424847651672-bf20a4b0982b'),
}

export const atmosphere = [
  { src: img('1551218808-94e220e084d2'), title: 'The Dining Room' },
  { src: img('1590846406792-0adc7f938f1d'), title: 'Evening Lounge' },
  { src: img('1514362545857-3bc16c4c7d1b'), title: 'The Bar' },
]

export const menuItems = [
  { id: 1, name: 'Heirloom Garden Salad', category: 'Starters', price: 12, description: 'Crisp greens, cherry tomatoes, cucumber, feta and lemon-herb dressing.', image: img('1540189549336-e6e99c3679fe') },
  { id: 2, name: 'Roasted Tomato Soup', category: 'Starters', price: 9, description: 'Slow-roasted tomatoes, basil oil and toasted sourdough croutons.', image: img('1547592180-85f173990554') },
  { id: 3, name: 'Avocado Toast', category: 'Starters', price: 11, description: 'Grilled country bread, smashed avocado, chili flakes and soft egg.', image: img('1482049016688-2d3e1b311543') },
  { id: 4, name: 'Wood-Fired Ribeye', category: 'Mains', price: 38, description: '12oz dry-aged ribeye, rosemary butter and charred seasonal vegetables.', image: img('1600891964599-f61ba0e24092') },
  { id: 5, name: 'Grilled Atlantic Salmon', category: 'Mains', price: 29, description: 'Citrus-glazed salmon fillet with herbed quinoa and asparagus.', image: img('1519708227418-c8fd9a32b7a2') },
  { id: 6, name: 'Harbor Grill Shrimp', category: 'Mains', price: 27, description: 'Garlic and paprika shrimp with saffron rice and lemon aioli.', image: img('1559847844-5315695dadae') },
  { id: 7, name: 'Ember Smash Burger', category: 'Mains', price: 19, description: 'Double beef patty, aged cheddar, caramelized onions and house sauce.', image: img('1551782450-a2132b4ba21d') },
  { id: 8, name: 'Tagliatelle Bolognese', category: 'Pasta', price: 22, description: 'Fresh egg pasta with a slow-cooked beef and pork ragù.', image: img('1621996346565-e3dbc646d9a9') },
  { id: 9, name: 'Spaghetti Pomodoro', category: 'Pasta', price: 18, description: 'San Marzano tomatoes, garlic, fresh basil and parmesan.', image: img('1473093295043-cdd812d0e601') },
  { id: 10, name: 'Margherita Pizza', category: 'Pasta', price: 17, description: 'Stone-baked crust, fior di latte mozzarella and basil.', image: img('1565299624946-b28f40a0ae38') },
  { id: 11, name: 'Dark Chocolate Cake', category: 'Desserts', price: 10, description: 'Rich layered chocolate cake with salted caramel cream.', image: img('1565958011703-44f9829ba187') },
  { id: 12, name: 'Berry Pavlova', category: 'Desserts', price: 9, description: 'Crisp meringue, vanilla cream and fresh seasonal berries.', image: img('1488477181946-6428a0291777') },
  { id: 13, name: 'Gelato Trio', category: 'Desserts', price: 8, description: 'Three scoops of house-made gelato with almond crumble.', image: img('1563805042-7684c019e1cb') },
  { id: 14, name: 'Olive Grove Spritz', category: 'Drinks', price: 13, description: 'Aperitivo, prosecco, orange and a splash of soda.', image: img('1544145945-f90425340c7e') },
  { id: 15, name: 'Ember Old Fashioned', category: 'Drinks', price: 15, description: 'Smoked bourbon, demerara, bitters and orange peel.', image: img('1514362545857-3bc16c4c7d1b') },
]

export const galleryImages = [
  { src: img('1517248135467-4c7edcad34c4'), alt: 'Main dining room' },
  { src: img('1414235077428-338989a2e8c0'), alt: 'Chef special plate' },
  { src: img('1555396273-367ea4eb4db5'), alt: 'Outdoor terrace' },
  { src: img('1565299624946-b28f40a0ae38'), alt: 'Margherita pizza' },
  { src: img('1504674900247-0877df9cc836'), alt: 'Fresh ingredients' },
  { src: img('1551218808-94e220e084d2'), alt: 'Restaurant interior' },
  { src: img('1600891964599-f61ba0e24092'), alt: 'Wood-fired ribeye' },
  { src: img('1514362545857-3bc16c4c7d1b'), alt: 'Signature cocktails' },
  { src: img('1546069901-ba9599a7e63c'), alt: 'Garden bowl' },
  { src: img('1466978913421-dad2ebd01d17'), alt: 'Evening ambience' },
  { src: img('1565958011703-44f9829ba187'), alt: 'Chocolate cake' },
  { src: img('1577219491135-ce391730fb2c'), alt: 'Our head chef' },
]
