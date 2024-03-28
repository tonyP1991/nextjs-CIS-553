'use client';

import Link from 'next/link';
import styles from './header/header.module.css';
import AuthBar from '@/components/header/authBar';
import SearchBar from "@/components/SearchBar";

export default function Header() {
    return (
        <div className={'container'}>
            <header className={styles.header}>
                <AuthBar />
                <div className={styles['logo-container']}>
                    <Link href={'/'} className={styles.logo}>
                        Manic books
                    </Link>
                </div>
            </header>
        </div>
    );
}
