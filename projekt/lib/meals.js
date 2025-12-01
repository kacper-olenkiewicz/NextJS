const DUMMY_MEALS = [
  {
    title: 'Juicy Cheese Burger',
    slug: 'juicy-cheese-burger',
    creator: 'Alex Johnson',
    creatorEmail: 'alex@example.com',
    summary: 'Stacked with cheddar, smoky bacon, and a tangy house sauce on a toasted brioche bun.',
    image: '/images/burger.jpg',
    instructions: `1. Shape beef patties and season on both sides.
2. Grill or pan-sear until the internal temperature reaches 70°C.
3. Top with cheddar, add bacon, and toast the buns.
4. Build the burger with lettuce, tomato, pickles, and house sauce.`,
  },
  {
    title: 'Creamy Veggie Curry',
    slug: 'creamy-veggie-curry',
    creator: 'Priya Desai',
    creatorEmail: 'priya@example.com',
    summary: 'A fragrant coconut curry with roasted sweet potato, chickpeas, and seasonal greens.',
    image: '/images/curry.jpg',
    instructions: `1. Roast diced sweet potato until tender.
2. Sauté onions, garlic, and ginger with curry paste.
3. Stir in coconut milk, chickpeas, and the roasted vegetables.
4. Simmer for 10 minutes and finish with fresh spinach and lime.`,
  },
  {
    title: 'Handmade Gyoza Dumplings',
    slug: 'handmade-gyoza-dumplings',
    creator: 'Sora Tanaka',
    creatorEmail: 'sora@example.com',
    summary: 'Pan-seared dumplings with a savory pork and cabbage filling, served with citrus soy.',
    image: '/images/dumplings.jpg',
    instructions: `1. Mix pork, cabbage, garlic, ginger, and soy sauce into a filling.
2. Wrap spoonfuls in gyoza wrappers, sealing with water.
3. Pan-fry bottoms until golden, then steam with a splash of water.
4. Serve hot with a mix of soy sauce, rice vinegar, and yuzu.`,
  },
  {
    title: 'Wood-Fired Pepperoni Pizza',
    slug: 'wood-fired-pepperoni-pizza',
    creator: 'Marco Rossi',
    creatorEmail: 'marco@example.com',
    summary: 'Thin crust pizza fired at high heat for blistered edges and bubbling mozzarella.',
    image: '/images/pizza.jpg',
    instructions: `1. Stretch fermented dough into a 30 cm round.
2. Spread crushed tomatoes, mozzarella, and pepperoni slices.
3. Bake on a stone at 300°C until edges blister.
4. Finish with basil and a drizzle of chilli oil.`,
  },
  {
    title: 'Classic Schnitzel with Lemon',
    slug: 'classic-schnitzel-with-lemon',
    creator: 'Greta Müller',
    creatorEmail: 'greta@example.com',
    summary: 'Crisp, golden veal schnitzel served with parsley potatoes and lemon wedges.',
    image: '/images/schnitzel.jpg',
    instructions: `1. Pound veal slices thin and season generously.
2. Dredge through flour, egg wash, and breadcrumbs.
3. Shallow fry in clarified butter until puffed and golden.
4. Drain on paper towels and serve with lemon and parsley potatoes.`,
  },
];

export function getMeals() {
  return DUMMY_MEALS;
}

export function getMeal(slug) {
  return DUMMY_MEALS.find((meal) => meal.slug === slug);
}

export function getFeaturedMeals() {
  return DUMMY_MEALS.slice(0, 3);
}
