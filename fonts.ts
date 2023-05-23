import { Amarante, Lato, Rubik } from 'next/font/google';

export const amarante = Amarante({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-amarante',
});

export const lato = Lato({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-lato',
});

export const rubik = Rubik({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-rubik',
});
