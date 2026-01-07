import { motion } from "motion/react";
import { useEffect, useState } from "react";

const MoveMe = () => {
  const [posX, setPosX] = useState(0);
  const [isJumping, setIsJumping] = useState(false);

  const isPosXValid = (posX: number): boolean => {
    const bgSize = window.innerWidth * 0.75;

    if (posX < 0) {
      console.log("Hello");
      return false;
    } else if (posX > bgSize - bgSize * 0.3 * 0.7) {
      return false;
    }
    return true;
  };

  useEffect(() => {
    const handleKeyEvent = (e: KeyboardEvent) => {
      console.log(e.key);
      if (e.key === "ArrowRight") {
        setPosX((prev) => {
          const next = prev + 10;
          return isPosXValid(next) ? next : prev;
        });
      } else if (e.key === "ArrowLeft") {
        setPosX((prev) => {
          const next = prev - 10;
          return isPosXValid(next) ? next : prev;
        });
      } else if (e.key === " ") {
        setIsJumping((prev) => (prev ? prev : true));
      }
    };

    document.addEventListener("keydown", handleKeyEvent);

    return () => document.removeEventListener("keydown", handleKeyEvent);
  }, []);

  return (
    <div className="h-screen flex-col gap-8 flex justify-center items-center">
      <div className=" bg-[url(/move-me/background.jpg)] w-3/4 h-105 relative">
        <h1 className="text-2xl ml-2 mt-1 text-white font-semibold">
          X - {posX}
        </h1>
        <motion.img
          id="character"
          src="/move-me/character.png"
          alt="character"
          className="w-3/10 absolute -left-12 bottom-13"
          animate={{ x: posX, y: isJumping ? [0, -40, 0] : 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ opacity: 0.6 }}
          transition={{
            x: {
              type: "spring",
              stiffness: 300,
              damping: 25,
            },
            y: {
              duration: 0.8,
              ease: "easeOut",
            },
          }}
          onAnimationComplete={() => {
            setIsJumping(false);
          }}
        />
      </div>
    </div>
  );
};

export default MoveMe;
