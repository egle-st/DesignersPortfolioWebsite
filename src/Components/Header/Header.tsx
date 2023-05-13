import { FC, useEffect, useState } from 'react';
import { FaInstagram, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
import { HiBars3 } from 'react-icons/hi2';
import { AiOutlineClose } from 'react-icons/ai';
import Link from 'next/link';
import Image from 'next/image';

import styles from './Header.module.scss';

interface HeaderProps {
  links: LinksInfo[];
}

interface LinksInfo {
  id: number;
  path: string;
  title: string;
}

export const Header: FC<HeaderProps> = ({ links }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollDirection, setScrollDirection] = useState('up');
  const [hamburgerButton, setHamburgerButton] = useState(true);
  const [menuIsOpen, setMenuToOpen] = useState(false);

  // mobile hamburger button and menu state change:
  const handleHambugerButton = () => {
    if (hamburgerButton === false) {
      setHamburgerButton(!hamburgerButton);

      setMenuToOpen(false);
    } else {
      setHamburgerButton(!hamburgerButton);

      setMenuToOpen(true);
    }
  };
  // header hide and show on scroll direction:
  useEffect(() => {
    const handleScroll = () => {
      if (scrollPosition < window.scrollY) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition, scrollDirection]);
  // header links map functions:
  const topLinksMap = () => {
    {
      const topLinks = links
        .filter(
          (link: LinksInfo) =>
            link.path === '/about' || link.path === '/contact'
        )
        .map((link: LinksInfo) => (
          <Link key={link.id} href={link.path} className={styles.link}>
            {link.title}
          </Link>
        ));
      return topLinks;
    }
  };

  const bottomLinksMap = () => {
    {
      const bottomLinks = links
        .filter(
          (link: LinksInfo) => link.path === '/work' || link.path === '/shop'
        )
        .map((link: LinksInfo) => (
          <Link key={link.id} href={link.path} className={styles.link}>
            {link.title}
          </Link>
        ));
      return bottomLinks;
    }
  };

  return (
    <header
      className={` ${
        scrollDirection === 'down' ? styles['hidden'] : styles['visible']
      } ${menuIsOpen && styles['open-menu']} `}
      data-testid={menuIsOpen ? 'open-menu' : ''}
    >
      <nav className={styles.navigation}>
        <div className={styles.links}>
          <div className={styles['links-top']}>{topLinksMap()}</div>
          <div className={styles['links-bottom']}>{bottomLinksMap()}</div>
        </div>

        <div className={styles.logo}>
          <Image
            src='/images/112.png'
            width={140}
            height={70}
            alt='logo'
            className={styles['logo-image']}
          />
        </div>

        <div className={styles['social-media']}>
          <Link
            href='https://www.linkedin.com'
            className={styles.social}
            aria-label='LinkedIn'
          >
            <FaLinkedinIn />
          </Link>
          <Link
            href='https://www.instagram.com'
            className={styles.social}
            aria-label='Instagram'
          >
            <FaInstagram />
          </Link>
          <Link
            href='/shop'
            className={styles.social}
            aria-label='Send Message'
          >
            <FaEnvelope />
          </Link>
        </div>
        <button
          onClick={handleHambugerButton}
          className={styles['btn-burger']}
          data-testid='btn-burger'
        >
          {menuIsOpen ? (
            <AiOutlineClose className={styles['hamburger-menu']} />
          ) : (
            <HiBars3
              className={`${styles['hamburger-menu']} ${styles['x-menu']}`}
            />
          )}
        </button>
        <hr className={styles.line} />
      </nav>
    </header>
  );
};
