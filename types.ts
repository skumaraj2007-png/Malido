
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: 'Main' | 'Drinks' | 'Bakery';
  isBestseller?: boolean;
  image: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
