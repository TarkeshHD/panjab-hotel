export interface MenuItem {
  id: number;
  name: string;
  nameKn: string;
  description: string;
  descriptionKn: string;
  price: string;
  category: 'parathas' | 'meals' | 'tandoori' | 'drinks' | 'snacks';
  image: string;
}

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: 'Paneer Paratha',
    nameKn: 'ಪನೀರ್ ಪರೋಠಾ',
    description: 'Stuffed with spiced cottage cheese, served with butter & curd',
    descriptionKn: 'ಸಂಬಾರ್ ಪನೀರ್ ತುಂಬಿಸಿ, ಬೆಣ್ಣೆ ಮತ್ತು ಮೊಸರೊಂದಿಗೆ',
    price: '₹60',
    category: 'parathas',
    image: 'https://images.pexels.com/photos/55810/indian-paratha-golden-crispy-bread-55810.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 2,
    name: 'Poori Chole',
    nameKn: 'ಪೂರಿ ಚೋಲೆ',
    description: 'Deep-fried puffy bread with spiced chickpea curry',
    descriptionKn: 'ಆಳವಾಗಿ ಕರಿದ ಬ್ರೆಡ್ ಮತ್ತು ಸಂಬಾರ್ ಕಡಲೆ ಕರಿ',
    price: '₹70',
    category: 'meals',
    image: 'https://images.pexels.com/photos/16240763/pexels-photo-16240763.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 3,
    name: 'Butter Tandoori Chicken',
    nameKn: 'ಬೆಣ್ಣೆ ಟಂಡೂರಿ ಚಿಕನ್',
    description: 'Juicy chicken marinated in spices, cooked in tandoor oven',
    descriptionKn: 'ರಸಭರಿತ ಚಿಕನ್, ಸಂಬಾರ್ ಮ್ಯಾರಿನೇಟ್, ಟಂಡೂರ್ ಒವನ್‌ನಲ್ಲಿ',
    price: '₹150',
    category: 'tandoori',
    image: 'https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 4,
    name: 'Butter Naan',
    nameKn: 'ಬೆಣ್ಣೆ ನಾನ್',
    description: 'Soft fluffy bread brushed with melted butter, from tandoor',
    descriptionKn: 'ಮೃದುವಾದ ಬ್ರೆಡ್, ಕರಗಿದ ಬೆಣ್ಣೆಯೊಂದಿಗೆ, ಟಂಡೂರ್‌ನಿಂದ',
    price: '₹40',
    category: 'tandoori',
    image: 'https://images.pexels.com/photos/55810/indian-paratha-golden-crispy-bread-55810.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 5,
    name: 'Sweet Lassi',
    nameKn: 'ಸಿಹಿ ಲಸ್ಸಿ',
    description: 'Creamy yogurt drink blended with sugar and cardamom',
    descriptionKn: 'ಕ್ರೀಮಿ ಮೊಸರು ಪಾನೀಯ, ಸಕ್ಕರೆ ಮತ್ತು ಏಲಕ್ಕಿಯೊಂದಿಗೆ',
    price: '₹50',
    category: 'drinks',
    image: 'https://images.pexels.com/photos/5946952/pexels-photo-5946952.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 6,
    name: 'Manchurian',
    nameKn: 'ಮಂಚೂರಿಯನ್',
    description: 'Crispy vegetable balls tossed in tangy Indo-Chinese sauce',
    descriptionKn: 'ಕರಕರನೆ ತರಕಾರಿ ಬಾಲ್‌ಗಳು, ಟ್ಯಾಂಗಿ ಇಂಡೋ-ಚೈನೀಸ್ ಸಾಸ್‌ನಲ್ಲಿ',
    price: '₹80',
    category: 'snacks',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: 'food' | 'ambience';
}

export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: 'https://images.pexels.com/photos/55810/indian-paratha-golden-crispy-bread-55810.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Golden crispy paratha with butter',
    category: 'food',
  },
  {
    id: 2,
    src: 'https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Tandoori chicken cooking in clay oven',
    category: 'food',
  },
  {
    id: 3,
    src: 'https://images.pexels.com/photos/16240763/pexels-photo-16240763.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Poori with chole curry',
    category: 'food',
  },
  {
    id: 4,
    src: 'https://images.pexels.com/photos/5946952/pexels-photo-5946952.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Refreshing sweet lassi drink',
    category: 'food',
  },
  {
    id: 5,
    src: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Delicious vegetable manchurian',
    category: 'food',
  },
  {
    id: 6,
    src: 'https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Warm restaurant ambience',
    category: 'ambience',
  },
  {
    id: 7,
    src: 'https://images.pexels.com/photos/260932/pexels-photo-260932.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Cozy dining setup',
    category: 'ambience',
  },
  {
    id: 8,
    src: 'https://images.pexels.com/photos/3438970/pexels-photo-3438970.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Restaurant kitchen vibes',
    category: 'ambience',
  },
];

export interface Review {
  id: number;
  text: string;
  textKn: string;
  author: string;
  rating: number;
}

export const reviews: Review[] = [
  {
    id: 1,
    text: 'Must visit place for homely food lovers. Cheap in price.',
    textKn: 'ಮನೆಯಂತಹ ಆಹಾರ ಪ್ರಿಯರಿಗೆ ಭೇಟಿ ನೀಡಲೇಬೇಕು. ಬೆಲೆ ಕಡಿಮೆ.',
    author: 'Rahul M.',
    rating: 4,
  },
  {
    id: 2,
    text: 'Food is tasty. Parathas and manchurians must try.',
    textKn: 'ಆಹಾರ ರುಚಿಕರವಾಗಿದೆ. ಪರೋಠಾ ಮತ್ತು ಮಂಚೂರಿಯನ್ ಖಂಡಿತ ಪ್ರಯತ್ನಿಸಿ.',
    author: 'Priya S.',
    rating: 5,
  },
  {
    id: 3,
    text: 'Varieties of North Indian foods available.',
    textKn: 'ವಿವಿಧ ಉತ್ತರ ಭಾರತೀಯ ಆಹಾರಗಳು ಲಭ್ಯ.',
    author: 'Amit K.',
    rating: 4,
  },
  {
    id: 4,
    text: 'Good spot, decent pricing, prompt service, authentic Punjabi food.',
    textKn: 'ಉತ್ತಮ ಸ್ಥಳ, ಸಮಂಜಸ ಬೆಲೆ, ತ್ವರಿತ ಸೇವೆ, ನಿಜವಾದ ಪಂಜಾಬಿ ಆಹಾರ.',
    author: 'Sneha R.',
    rating: 4,
  },
];
