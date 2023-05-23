import { FC } from 'react';

import styles from './footer.module.scss';

interface FooterProps {
  className: string;
  content: string;
  fontFamily: string;
}

export const Footer: FC<FooterProps> = ({ className, content, fontFamily }) => {
  return (
    <footer className={`${styles[className]} ${fontFamily}`}>{content}</footer>
  );
};
