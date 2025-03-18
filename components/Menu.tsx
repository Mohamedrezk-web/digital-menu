// app/menu/page.tsx
import { CategoryList } from '@/components/CategoryList';
import { MenuItem } from '@/components/MenuItem';

interface MenuSection {
  category: string;
  items: MenuItem[];
}

const menuItems: MenuSection[] = [
  {
    category: 'Appetizers',
    items: [
      {
        id: '1',
        name: 'Bruschetta',
        description: 'Toasted bread with tomatoes and herbs',
        image: 'https://picsum.photos/seed/espresso/200/200',

        price: 8.99,
      },
      {
        id: '2',
        name: 'Caesar Salad',
        description: 'Romaine lettuce, croutons, parmesan, and Caesar dressing',
        image: 'https://picsum.photos/seed/Caesar-Salad/200/200',

        price: 7.99,
      },
      {
        id: '3',
        name: 'Garlic Bread',
        description: 'Toasted bread with garlic butter and herbs',
        image: 'https://picsum.photos/seed/Garlic-Bread/200/200',

        price: 5.99,
      },
      {
        id: '4',
        name: 'Stuffed Mushrooms',
        description: 'Mushrooms stuffed with cheese and herbs',
        image: 'https://picsum.photos/seed/Stuffed-Mushrooms/200/200',

        price: 9.99,
      },
      {
        id: '5',
        name: 'Spring Rolls',
        description: 'Crispy rolls filled with vegetables',
        image: 'https://picsum.photos/seed/Spring-Rolls/200/200',

        price: 6.99,
      },
    ],
  },
  {
    category: 'Main Courses',
    items: [
      {
        id: '6',
        name: 'Grilled Salmon',
        description: 'Fresh salmon with seasonal vegetables',
        image: 'https://picsum.photos/seed/Grilled-Salmon/200/200',

        price: 24.99,
      },
      {
        id: '7',
        name: 'Steak Frites',
        description: 'Grilled steak with French fries and garlic butter',
        image: 'https://picsum.photos/seed/Steak-Frites/200/200',

        price: 29.99,
      },
      {
        id: '8',
        name: 'Chicken Alfredo',
        description: 'Creamy Alfredo sauce with grilled chicken and pasta',
        image: 'https://picsum.photos/seed/Chicken-Alfredo/200/200',

        price: 18.99,
      },
      {
        id: '9',
        name: 'Vegetable Stir Fry',
        description: 'Assorted vegetables stir-fried in a savory sauce',
        image: 'https://picsum.photos/seed/Vegetable-Stir-Fry/200/200',

        price: 16.99,
      },
      {
        id: '10',
        name: 'BBQ Ribs',
        description: 'Slow-cooked ribs with BBQ sauce',
        image: 'https://picsum.photos/seed/BBQ-Ribs/200/200',

        price: 22.99,
      },
    ],
  },
  {
    category: 'Desserts',
    items: [
      {
        id: '11',
        name: 'Tiramisu',
        description: 'Classic Italian dessert with coffee and mascarpone',
        image: 'https://picsum.photos/seed/Tiramisu/200/200',

        price: 9.99,
      },
      {
        id: '12',
        name: 'Chocolate Lava Cake',
        description: 'Warm chocolate cake with a molten center',
        image: 'https://picsum.photos/seed/Chocolate-Lava-Cake/200/200',

        price: 8.99,
      },
      {
        id: '13',
        name: 'Cheesecake',
        description: 'Creamy cheesecake with a graham cracker crust',
        image: 'https://picsum.photos/seed/Cheesecake/200/200',

        price: 7.99,
      },
      {
        id: '14',
        name: 'Apple Pie',
        description: 'Classic apple pie with a flaky crust',
        image: 'https://picsum.photos/seed/Apple-Pie/200/200',

        price: 6.99,
      },
      {
        id: '15',
        name: 'Ice Cream Sundae',
        description: 'Vanilla ice cream with chocolate sauce and toppings',
        image: 'https://picsum.photos/seed/Ice Cream Sundae/200/200',

        price: 5.99,
      },
    ],
  },
  {
    category: 'Beverages',
    items: [
      {
        id: '16',
        name: 'Espresso',
        description: 'Strong black coffee',
        image: 'https://picsum.photos/seed/espresso/200/200',

        price: 3.99,
      },
      {
        id: '17',
        name: 'Mojito',
        description: 'Classic mint and lime cocktail',
        image: 'https://picsum.photos/seed/espresso/200/200',

        price: 12.99,
      },
      {
        id: '18',
        name: 'Orange Juice',
        description: 'Freshly squeezed orange juice',
        image: 'https://picsum.photos/seed/espresso/200/200',

        price: 4.99,
      },
      {
        id: '19',
        name: 'Iced Tea',
        description: 'Chilled tea with lemon',
        image: 'https://picsum.photos/seed/espresso/200/200',

        price: 3.99,
      },
      {
        id: '20',
        name: 'Red Wine',
        description: 'Glass of premium red wine',
        image: 'https://picsum.photos/seed/espresso/200/200',

        price: 10.99,
      },
    ],
  },
  {
    category: 'Soups',
    items: [
      {
        id: '21',
        name: 'Tomato Soup',
        description: 'Creamy tomato soup with basil',
        image: 'https://picsum.photos/seed/espresso/200/200',

        price: 6.99,
      },
      {
        id: '22',
        name: 'Chicken Noodle Soup',
        description: 'Classic chicken noodle soup',
        image: 'https://picsum.photos/seed/espresso/200/200',

        price: 7.99,
      },
      {
        id: '23',
        name: 'French Onion Soup',
        description: 'Caramelized onion soup with melted cheese',
        image: 'https://picsum.photos/seed/espresso/200/200',

        price: 8.99,
      },
      {
        id: '24',
        name: 'Minestrone',
        description: 'Vegetable soup with pasta and beans',
        image: 'https://picsum.photos/seed/espresso/200/200',

        price: 7.99,
      },
      {
        id: '25',
        name: 'Clam Chowder',
        description: 'Creamy soup with clams and potatoes',
        image: 'https://picsum.photos/seed/espresso/200/200',

        price: 9.99,
      },
    ],
  },
  {
    category: 'Pizza',
    items: [
      {
        id: '26',
        name: 'Margherita',
        description: 'Tomato sauce, mozzarella, and basil',
        image: 'https://picsum.photos/seed/espresso/200/200',

        price: 12.99,
      },
      {
        id: '27',
        name: 'Pepperoni',
        description: 'Tomato sauce, mozzarella, and pepperoni',
        image: 'https://picsum.photos/seed/espresso/200/200',

        price: 14.99,
      },
      {
        id: '28',
        name: 'Vegetarian',
        description: 'Tomato sauce, mozzarella, and assorted vegetables',
        image: 'https://picsum.photos/seed/espresso/200/200',

        price: 13.99,
      },
      {
        id: '29',
        name: 'Hawaiian',
        description: 'Tomato sauce, mozzarella, ham, and pineapple',
        image: 'https://picsum.photos/seed/espresso/200/200',

        price: 15.99,
      },
      {
        id: '30',
        name: 'BBQ Chicken',
        description: 'BBQ sauce, mozzarella, and grilled chicken',
        image: 'https://picsum.photos/seed/espresso/200/200',

        price: 16.99,
      },
    ],
  },
  {
    category: 'Pasta',
    items: [
      {
        id: '31',
        name: 'Spaghetti Bolognese',
        description: 'Spaghetti with meat sauce',
        image: 'https://picsum.photos/seed/espresso/200/200',

        price: 14.99,
      },
      {
        id: '32',
        name: 'Fettuccine Alfredo',
        description: 'Creamy Alfredo sauce with fettuccine',
        image: 'https://picsum.photos/seed/espresso/200/200',

        price: 15.99,
      },
      {
        id: '33',
        name: 'Lasagna',
        description: 'Layered pasta with meat and cheese',
        image: 'https://picsum.photos/seed/espresso/200/200',

        price: 16.99,
      },
      {
        id: '34',
        name: 'Penne Arrabbiata',
        description: 'Penne with spicy tomato sauce',
        image: 'https://picsum.photos/seed/espresso/200/200',

        price: 13.99,
      },
      {
        id: '35',
        name: 'Ravioli',
        description: 'Stuffed pasta with ricotta and spinach',
        image: 'https://picsum.photos/seed/espresso/200/200',

        price: 17.99,
      },
    ],
  },
  {
    category: 'Sides',
    items: [
      {
        id: '36',
        name: 'French Fries',
        description: 'Crispy golden fries',
        image: 'https://picsum.photos/seed/espresso/200/200',

        price: 4.99,
      },
      {
        id: '37',
        name: 'Mashed Potatoes',
        description: 'Creamy mashed potatoes',
        image: 'https://picsum.photos/seed/espresso/200/200',

        price: 5.99,
      },
      {
        id: '38',
        name: 'Coleslaw',
        description: 'Shredded cabbage with mayo dressing',
        image: 'https://picsum.photos/seed/espresso/200/200',

        price: 3.99,
      },
      {
        id: '39',
        name: 'Garlic Parmesan Wings',
        description: 'Crispy wings with garlic parmesan sauce',
        image: 'https://picsum.photos/seed/espresso/200/200',

        price: 11.99,
      },
      {
        id: '40',
        name: 'Onion Rings',
        description: 'Crispy fried onion rings',
        image: 'https://picsum.photos/seed/espresso/200/200',

        price: 6.99,
      },
    ],
  },
];

export default function Menu() {
  const categories = menuItems.map((section) => section.category);

  return (
    <div className='container mx-auto px-4 py-8'>
      <CategoryList
        categories={categories}
        className='sticky top-0 bg-background z-1'
      />

      <div className='mt-8'>
        {menuItems.map((section) => (
          <section
            key={section.category}
            id={section.category.toLowerCase()}
            className='mb-12 scroll-mt-20'
          >
            <h2 className='text-2xl font-bold mb-6'>{section.category}</h2>
            <div className='grid gap-4'>
              {section.items.map((item) => (
                <MenuItem key={item.id} item={item} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
