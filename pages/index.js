import Image from "next/image";
import { useState, useCallback, useEffect } from "react";
import styles from "../styles/Home.module.css";
import MobileSlideshow from "../components/MobileSlideshow";
import ItemActions from "../components/ItemActions";
import { GallerySlideshow } from "../components/GallerySlideshow";

const useMediaQuery = (width) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(min-width: ${width}px)`);
    media.addEventListener("change", updateTarget);

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeEventListener("change", updateTarget);
  }, []);

  return targetReached;
};

export default function Home() {
  let isBreakPoint = useMediaQuery(768);
  return (
    <>
      <div className={styles.container}>
        {!isBreakPoint ? (
          <>
            <MobileSlideshow />
            <ItemActions />
          </>
        ) : (
          <>
            <GallerySlideshow />
            <ItemActions />
          </>
        )}
      </div>
      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </>
  );
}

// <main className={styles.main}>
{
  /* <h1 className={styles.title}>
Welcome to <a href="https://nextjs.org">Next.js!</a>
</h1>

<p className={styles.description}>
Get started by editing{" "}
<code className={styles.code}>pages/index.js</code>
</p>

<div className={styles.grid}>
<a href="https://nextjs.org/docs" className={styles.card}>
  <h2>Documentation &rarr;</h2>
  <p>Find in-depth information about Next.js features and API.</p>
</a>

<a href="https://nextjs.org/learn" className={styles.card}>
  <h2>Learn &rarr;</h2>
  <p>Learn about Next.js in an interactive course with quizzes!</p>
</a>

<a
  href="https://github.com/vercel/next.js/tree/canary/examples"
  className={styles.card}
>
  <h2>Examples &rarr;</h2>
  <p>Discover and deploy boilerplate example Next.js projects.</p>
</a>

<a
  href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
  className={styles.card}
>
  <h2>Deploy &rarr;</h2>
  <p>
    Instantly deploy your Next.js site to a public URL with Vercel.
  </p>
</a>
</div>
</main> */
}
