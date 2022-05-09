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
    </>
  );
}
