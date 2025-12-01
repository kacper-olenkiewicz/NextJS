import Image from 'next/image';
import Link from 'next/link';

import NavLink from './nav-link';
import styles from './main-header.module.css';
import logoImg from '@/assets/logo.png';

export default function MainHeader() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logoButton}>
        <Image
          src={logoImg}
          alt="A plate with food on it"
          width={80}
          height={80}
        />
      </Link>

      <nav className={styles.nav}>
        <ul>
          <li>
            <NavLink href="/meals">Browse Meals</NavLink>
    
          </li>
          <li>
            <NavLink href="/community">Foodies Community</NavLink>
          </li>
          <li>
            <NavLink href="/meals/share">Share a Meal</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
