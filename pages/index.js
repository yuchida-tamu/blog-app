import Head from 'next/head';
import Image from 'next/image';
import { IconContext } from 'react-icons';
import { BsPencil } from 'react-icons/bs';
import bannerImage from '../public/assets/demo-landing.jpg';
import thumbnailImage from '../public/assets/blogThumnail.jpg';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Blog</title>
      </Head>

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
          <ul className="recent-blog-list">
            <li className="blog-list__item">
              <div className="blog-list__item__thumbnail-container">
                <Image
                  src={thumbnailImage}
                  alt="thumbnail"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="right top"
                  loading="eager"
                />
              </div>
              <div className="blog-list__item__content-container">
                <h3>How to write a good blog post</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  aliquam ut est a gravida. Fusce dignissim quis...
                </p>
              </div>
            </li>
            <li className="blog-list__item">
              <div className="blog-list__item__thumbnail-container">
                <Image
                  src={thumbnailImage}
                  alt="thumbnail"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="right top"
                  loading="eager"
                />
              </div>
              <div className="blog-list__item__content-container">
                <h3>How to write a good blog post</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  aliquam ut est a gravida. Fusce dignissim quis...
                </p>
              </div>
            </li>
            <li className="blog-list__item">
              <div className="blog-list__item__thumbnail-container">
                <Image
                  src={thumbnailImage}
                  alt="thumbnail"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="right top"
                  loading="eager"
                />
              </div>
              <div className="blog-list__item__content-container">
                <h3>How to write a good blog post</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  aliquam ut est a gravida. Fusce dignissim quis...
                </p>
              </div>
            </li>
          </ul>
          <div className="news-container">
            <h2>NEWS</h2>
            <hr className="divider" />
            <ul className="news-list">
              <li className="news-list__item">
                <IconContext.Provider
                  value={{ color: 'white', className: 'icon' }}
                >
                  <BsPencil />
                </IconContext.Provider>
                <span className="heading">Bionic: </span>
                <span className="content">New chapter is added</span>
              </li>
              <li className="news-list__item">
                <IconContext.Provider
                  value={{ color: 'white', className: 'icon' }}
                >
                  <BsPencil />
                </IconContext.Provider>
                <span className="heading">Bionic: </span>
                <span className="content">New chapter is added</span>
              </li>
              <li className="news-list__item">
                <IconContext.Provider
                  value={{ color: 'white', className: 'icon' }}
                >
                  <BsPencil />
                </IconContext.Provider>
                <span className="heading">Bionic: </span>
                <span className="content">New chapter is added</span>
              </li>
              <li className="news-list__item">
                <IconContext.Provider
                  value={{ color: 'white', className: 'icon' }}
                >
                  <BsPencil />
                </IconContext.Provider>
                <span className="heading">Bionic: </span>
                <span className="content">New chapter is added</span>
              </li>
            </ul>
            <span className="btn">More</span>
            <hr className="divider" />
          </div>
        </div>
      </main>

      <footer></footer>
    </div>
  );
}
