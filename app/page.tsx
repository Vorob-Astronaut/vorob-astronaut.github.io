'use client';

import Image from "next/image";
import Link from 'next/link';
import styles from "./page.module.scss";

const APP_URL = 'https://apps.apple.com/us/app/stats-for-spotify-receiptify/id1622577500';
const GOOGLE_PLAY_URL = 'https://play.google.com/store/apps/details?id=com.receiptify&hl=en';
export default function Home() {
  const handleAppStoreClick = () => {
    window.open('https://apps.apple.com/app/receptify/id6474282023', '_blank');
  };

  const handleGooglePlayClick = () => {
    window.open('https://play.google.com/store/apps/details?id=com.receptify.app', '_blank');
  };

  return (
    <div className={styles.mainWrapper}>
      <header className={styles.headerWrapper}>
        <Image src="logo.svg" height={50} width={50} alt="logo"></Image>
        <h1 className={styles.brandName}>Receiptify</h1>
        <div className={styles.supportText}><a href="mailto:wulong@receiptifyapp.com">Support</a></div>
      </header>
      <div>
        <div className={styles.mainView}>
          <div className={styles.mainViewText}>
            <h1 className={styles.title}>Dive into the details of your music journey</h1>
            <div className={styles.subtitle}>
              Discover a whole new world of music by gaining special insights
              into your unique taste in tunes.
            </div>
            <div className={styles.appStoreIconWrapper}>
              <Link onClick={handleAppStoreClick} target="_blank" href={APP_URL}>
                <Image className={styles.appStoreIcon} src="/app-store.svg" width={329 / 1.35} height={97 / 1.35} alt="app store"></Image>
              </Link>
              <Link onClick={handleGooglePlayClick} target="_blank" href={GOOGLE_PLAY_URL}>
                <Image className={styles.appStoreIcon} src="/google-play.svg" width={329 / 1.5} height={97 / 1.5} alt="google play"></Image>
              </Link>
            </div>
          </div>
          <Image priority className={styles.phoneImage} src="/iphone-home-screen.png" width={319 / 1.3} height={601 / 1.3} alt="iphone"></Image>
        </div>
        <div className={styles.numbersBorder}>
          <div className={styles.numbersWrapper}>
            <div className={styles.numbers}>500k+</div>
            <span className={styles.numbers__text}>Happy user</span>
          </div>
          <div className={styles.numbersWrapper}>
            <div className={styles.numbers}>4.75</div>
            <span className={styles.numbers__text}>Ratting from user</span>
          </div>
          <div className={styles.numbersWrapper}>
            <div className={styles.numbers}>69+</div>
            <span className={styles.numbers__text}>Countries</span>
          </div>
          <div className={styles.numbersWrapper}>
            <div className={styles.numbers}>12M+</div>
            <span className={styles.numbers__text}>Tracks</span>
          </div>
        </div>
        <h2 className={styles.receiptTitle}>See most-played tracks in a Receipt-like format</h2>
        <div className={styles.receiptImageWrapper}>
          <Image src="/iphone-receipt-screen.png" width={319} height={601} alt="app store"></Image>
        </div>
        <div className={styles.dowloadWrapper}>
          <div className={styles.dowloadText}>Install App and start your journey</div>
          <div className={styles.appStoreIconWrapper}>
            <Link onClick={handleAppStoreClick} target="_blank" href={APP_URL}>
              <Image className={styles.appStoreIcon} src="/app-store.svg" width={329 / 1.35} height={97 / 1.35} alt="app store"></Image>
            </Link>
            <Link onClick={handleGooglePlayClick} target="_blank" href={GOOGLE_PLAY_URL}>
              <Image className={styles.appStoreIcon} src="/google-play.svg" width={329 / 1.5} height={97 / 1.5} alt="google play"></Image>
            </Link>
          </div>
        </div>
      </div>
      <footer className={styles.footerWrapper}>
        <div className={styles.firstColumnWrapper}>
          <p className={styles.copyrightText}>© Wulong Apps LLC 2024</p>
        </div>
        <div className={styles.legalText}>
          <p className={styles.footerTitle}>Legal</p>
          <p className={styles.footerSubtext}><a href="https://drive.google.com/file/d/1XDIpgEO0iB7MLD9IXcxPWSKA230bmy9_/view">Privacy Policy</a></p>
        </div>
        <div>
          <p className={styles.footerTitle}>Contact</p>
          <p className={styles.footerSubtext}><a href="mailto:wulong@receiptifyapp.com">wulong@receiptifyapp.com</a></p>
        </div>
      </footer>
    </div>
  );
}
