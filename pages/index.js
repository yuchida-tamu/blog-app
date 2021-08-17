import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Blog</title>
        <meta name="description" content="Tania Murillo Duran's website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main-container">
        <div className="top-section">
          <div className="main-banner-container"></div>
        </div>
        <div className="bottom-section">
          <ul className="recent-blog-list">
            <li className="blog-list__item">Bionic: New chapter is added</li>
            <li className="blog-list__item">Bionic: New chapter is added</li>
            <li className="blog-list__item">Bionic: New chapter is added</li>
          </ul>
          <div className="news-container">
            <h2>NEWS</h2>
            <hr className="divider" />
            <ul className="news-list">
              <li className="news-list__item">Bionic: New chapter is added</li>
              <li className="news-list__item">Bionic: New chapter is added</li>
              <li className="news-list__item">Bionic: New chapter is added</li>
              <li className="news-list__item">Bionic: New chapter is added</li>
            </ul>
            <a>More</a>

            <hr className="divider" />
          </div>
        </div>
      </main>

      <footer></footer>
    </div>
  );
}
