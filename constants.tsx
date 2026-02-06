
import React from 'react';
import { MenuItem, NavLink } from './types';

export const NAV_LINKS: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reservations', href: '#reservation' },
];

export const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'Avocado Sourdough Toast',
    description: 'Fresh mashed avocado, cherry tomatoes, radish, and balsamic glaze on artisanal sourdough.',
    price: '$14.00',
    category: 'Main',
    isBestseller: true,
    image: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=2510&auto=format&fit=crop',
  },
  {
    id: '2',
    name: 'Truffle Mushroom Pasta',
    description: 'Hand-cut tagliatelle with wild forest mushrooms and a rich white truffle cream sauce.',
    price: '$22.00',
    category: 'Main',
    image: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cc54d896-37cc-467a-b91c-8aaee392ee33_3840w.webp',
  },
  {
    id: '3',
    name: 'Signature Flat White',
    description: 'Velvety microfoam over a double shot of our house-blend espresso beans.',
    price: '$5.50',
    category: 'Drinks',
    image: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2671&auto=format&fit=crop',
  },
  {
    id: '4',
    name: 'Matcha Ceremonial Latte',
    description: 'High-grade ceremonial matcha whisked with your choice of organic milk.',
    price: '$6.50',
    category: 'Drinks',
    image: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/41a7086c-63e9-428d-975e-179c8863bfd5_800w.webp',
  },
  {
    id: '5',
    name: 'Honey Lavender Croissant',
    description: 'Flaky, butter-rich pastry filled with house-made lavender honey cream.',
    price: '$7.00',
    category: 'Bakery',
    isBestseller: true,
    image: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5fe49f96-1c36-4800-8d69-bcddec308154_1600w.webp',
  },
  {
    id: '6',
    name: 'Wildberry Cheesecake',
    description: 'New York style cheesecake topped with a medley of locally sourced forest berries.',
    price: '$9.00',
    category: 'Bakery',
    image: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f951c57b-e8fe-4421-8181-b1d3d87f210e_800w.webp',
  }
];
