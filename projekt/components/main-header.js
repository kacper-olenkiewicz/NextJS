import Link from 'next/link';
import styles from './main-header.module.css';
import Image from 'next/image';
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
          <li><Link href="/meals">meals</Link></li>
          <li><Link href="/meals/share">share</Link></li>
          <li><Link href="/community">community</Link></li>
        </ul>
      </nav>
    </header>
  );
}
