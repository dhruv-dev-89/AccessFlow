import {
  Children,
  cloneElement,
  useEffect,
  useRef,
  useState,
} from "react";


/* ========================================================= */
/* SCROLL STACK ITEM                                          */
/* ========================================================= */

export const ScrollStackItem = ({
  children,
  itemClassName = "",
}) => {
  return (
    <div className={itemClassName}>
      {children}
    </div>
  );
};


/* ========================================================= */
/* SCROLL STACK                                               */
/* ========================================================= */

export default function ScrollStack({
  children,
  stackPosition = "20%",
  baseScale = 0.88,
  rotationAmount = 0,
  blurAmount = 0,
  useWindowScroll = true,
}) {
  const stackRef = useRef(null);

  const items = Children.toArray(children);

  const [activeIndex, setActiveIndex] = useState(0);
  const [transitionProgress, setTransitionProgress] =
    useState(0);


  /* ======================================================= */
  /* SCROLL HANDLER                                          */
  /* ======================================================= */

  useEffect(() => {
    if (!useWindowScroll) return;

    let frame = null;

    const handleScroll = () => {
      if (frame) return;

      frame = requestAnimationFrame(() => {
        const stack = stackRef.current;

        if (!stack) {
          frame = null;
          return;
        }

        const rect = stack.getBoundingClientRect();

        const viewportHeight = window.innerHeight;

        /*
         * Total scroll distance.
         *
         * Example:
         * 5 cards = 5 viewport heights
         * First card at 0
         * Last card at 4 viewport heights
         */

        const totalScroll =
          (items.length - 1) * viewportHeight;

        if (totalScroll <= 0) {
          frame = null;
          return;
        }

        /*
         * How far the ScrollStack has moved
         * from the top.
         */

        const scrolled =
          -rect.top;

        /*
         * Convert to 0 → 1.
         */

        const overallProgress =
          Math.max(
            0,
            Math.min(
              1,
              scrolled / totalScroll
            )
          );

        /*
         * Convert overall progress into
         * current card.
         *
         * 0   → card 1
         * 1   → card 2
         * 2   → card 3
         * 3   → card 4
         * 4   → card 5
         */

        const cardPosition =
          overallProgress *
          (items.length - 1);

        let index =
          Math.floor(cardPosition);

        /*
         * Prevent index from going outside.
         */

        index = Math.max(
          0,
          Math.min(
            items.length - 1,
            index
          )
        );

        /*
         * Progress between current
         * and next card.
         */

        const localProgress =
          cardPosition - index;

        setActiveIndex(index);

        setTransitionProgress(
          localProgress
        );

        frame = null;
      });
    };


    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true }
    );

    window.addEventListener(
      "resize",
      handleScroll
    );

    handleScroll();


    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );

      window.removeEventListener(
        "resize",
        handleScroll
      );

      if (frame) {
        cancelAnimationFrame(frame);
      }
    };
  }, [
    items.length,
    useWindowScroll,
  ]);


  /* ======================================================= */
  /* CARD STYLE                                               */
  /* ======================================================= */

  const getCardStyle = (index) => {

    const distance =
      index - activeIndex;


    /* ===================================================== */
    /* CURRENT CARD                                          */
    /* ===================================================== */

    if (distance === 0) {

      /*
       * Current card slowly moves out
       * near the end of its scroll section.
       */

      const exitProgress =
        Math.max(
          0,
          (transitionProgress - 0.65) / 0.35
        );

      return {
        opacity:
          1 - exitProgress,

        transform: `
          translateY(${-exitProgress * 25}px)
          scale(${1 - exitProgress * 0.04})
          rotate(${rotationAmount * exitProgress}deg)
        `,

        filter: `
          blur(${blurAmount * exitProgress}px)
        `,

        zIndex: 20,
        pointerEvents: "auto",
      };
    }


    /* ===================================================== */
    /* NEXT CARD                                             */
    /* ===================================================== */

    if (distance === 1) {

      /*
       * Next card starts hidden.
       *
       * It only appears during the last
       * 35% of the current card's section.
       */

      const enterProgress =
        Math.max(
          0,
          Math.min(
            1,
            (transitionProgress - 0.65) / 0.35
          )
        );

      return {
        opacity: enterProgress,

        transform: `
          translateY(${35 - enterProgress * 35}px)
          scale(${0.94 + enterProgress * 0.06})
        `,

        filter: `
          blur(${8 - enterProgress * 8}px)
        `,

        zIndex: 30,

        pointerEvents:
          enterProgress > 0.8
            ? "auto"
            : "none",
      };
    }


    /* ===================================================== */
    /* PREVIOUS CARDS                                        */
    /* ===================================================== */

    if (distance < 0) {
      return {
        opacity: 0,

        transform: `
          translateY(-30px)
          scale(${baseScale})
        `,

        filter: `blur(${blurAmount}px)`,

        zIndex: 1,

        pointerEvents: "none",
      };
    }


    /* ===================================================== */
    /* FUTURE CARDS                                          */
    /* ===================================================== */

    return {
      opacity: 0,

      transform: `
        translateY(35px)
        scale(0.94)
      `,

      filter: "blur(8px)",

      zIndex: 1,

      pointerEvents: "none",
    };
  };


  /* ======================================================= */
  /* RENDER                                                   */
  /* ======================================================= */

  return (
    <div
      ref={stackRef}
      className="relative w-full"
      style={{
        /*
         * Every card gets one viewport of
         * scrolling space.
         *
         * 5 cards = 500vh
         */
        height: `${items.length * 100}vh`,
      }}
    >

      {/* ================================================= */}
      {/* SINGLE STICKY STAGE                               */}
      {/* ================================================= */}

      <div
        className="sticky flex w-full justify-center"
        style={{
          top: stackPosition,
          height: "70vh",
        }}
      >

        {/* =============================================== */}
        {/* ALL CARDS OCCUPY THE SAME POSITION              */}
        {/* =============================================== */}

        <div className="relative w-full max-w-[650px]">

          {items.map((child, index) => {

            const style =
              getCardStyle(index);

            return (
              <div
                key={index}
                className="absolute left-0 top-0 w-full"
                style={{
                  ...style,

                  transition:
                    "opacity 500ms cubic-bezier(0.22,1,0.36,1), transform 600ms cubic-bezier(0.22,1,0.36,1), filter 500ms ease",

                  willChange:
                    "opacity, transform, filter",
                }}
              >

                {cloneElement(child)}

              </div>
            );
          })}

        </div>

      </div>

    </div>
  );
}