import Head from 'next/head';
import Image from 'next/image';
import bannerImage from '../public/assets/demo-landing.jpg';
import RecentBlogList from '../components/landing/recent-blog-list/RecentBlogList';
import NewsList from '../components/landing/news-list/NewsList';
import { Header } from '../components/layout/header/Header';

export default function Home() {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <Header />
      <main className="main-container">
        <div className="top-section">
          <div className="main-banner-container">
            <Image
              src={bannerImage}
              alt="Banner Cover"
              layout="fill"
              objectFit="cover"
              objectPosition="right top"
              loading="eager"
            />
          </div>
        </div>
        <div className="bottom-section">
          <RecentBlogList />
          <NewsList />
        </div>
      </main>

      <footer></footer>
    </>
  );
}
