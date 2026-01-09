import { useEffect, useRef, useState } from "react";
import PlayerCard from "./PlayerCard";
import { motion } from "motion/react";

const playerArr: PlayerCard[] = [
  {
    name: "Lionel Messi",
    imageURL: "/football-cards/Lionel_Messi.jpg",
    goals: 50,
    appearance: 20,
    videoUrl: "/football-cards/Lionel_Messi_Goal.mp4",
    description:
      "Lionel Messi is widely regarded as one of the greatest footballers of all time, known for his extraordinary dribbling, close ball control, vision, and playmaking ability. His low center of gravity allows him to glide past defenders effortlessly, while his intelligence and creativity make him both a prolific goal scorer and a world-class assister. Messi’s consistency at the highest level, combined with his humility and team-first mentality, has defined an era of football and inspired millions around the globe.",
    pos: "RW",
    ovr: 98,
  },
  {
    name: "Cristiano Ronaldo",
    imageURL: "/football-cards/Cristiano_Ronaldo.jpg",
    goals: 40,
    appearance: 28,
    videoUrl: "/football-cards/Cristiano_Ronaldo_Goal.mp4",
    description:
      "Cristiano Ronaldo represents the perfect blend of athleticism, discipline, and relentless ambition. Known for his physical strength, aerial dominance, powerful shooting, and clutch performances, Ronaldo has consistently reinvented himself to stay at the top of world football. His unmatched work ethic, leadership qualities, and hunger for success have made him one of the most complete goal scorers in history and a symbol of determination and excellence.",
    pos: "ST",
    ovr: 95,
  },
  {
    name: "Neymar JR",
    imageURL: "/football-cards/Neymar_JR.jpg",
    goals: 38,
    appearance: 24,
    videoUrl: "/football-cards/Neymar_JR_Goal.mp4",
    description:
      "Neymar Jr. is celebrated for his flair, creativity, and flair-driven style that embodies Brazilian football. With exceptional dribbling skills, quick footwork, and the ability to create moments of magic, Neymar brings unpredictability and entertainment to the game. Beyond his individual brilliance, he is also a capable playmaker who thrives in attacking systems, making him one of the most exciting and skillful players of his generation.",
    pos: "LW",
    ovr: 92,
  },
];

const useOutsideClick = (callback: () => void) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        callback();
      }
    };

    document.addEventListener("click", handleClick);

    return () => document.removeEventListener("click", handleClick);
  }, [callback]);

  return ref;
};

const FootballCard = () => {
  const [current, setCurrent] = useState<null | PlayerCard>(null);

  console.log(current);
  const ref = useOutsideClick(() => setCurrent(null));
  return (
    <div className="flex justify-center gap-15 relative flex-wrap items-center min-h-screen  bg-neutral-100">
      {current && (
        <motion.div className="w-full h-full z-10 fixed inset-0 bg-black/50 backdrop-blur-sm" initial={{opacity: 0}} animate={{opacity: 1}}></motion.div>
      )}

      {current && (
        <motion.div
          layoutId={`card-${current.name}`}
          ref={ref}
          className="fixed inset-0 z-20 border-neutral-500 border rounded-2xl flex flex-col items-center gap-5 pb-6 max-w-175 aspect-video p-4 m-auto bg-neutral-100"
        >
          <video
            autoPlay
            height={360}
            width={640}
          >
            <source src={current.videoUrl} type="video/mp4"/>
          </video>
          <div className="flex flex-col gap-2">
            <motion.h1
              className="text-2xl font-medium"
              layoutId={`name-${current.name}`}
            >
              {current.name}
            </motion.h1>
            <motion.p
              className="text-neutral-600"
              initial={{ filter: "blur(10px)", opacity: 0 }}
              animate={{ filter: "blur(0px)", opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {current.description}
            </motion.p>
          </div>
        </motion.div>
      )}

      {playerArr.map((card, idx) => (
        <PlayerCard
          key={idx}
          card={{
            name: card.name,
            imageURL: card.imageURL,
            goals: card.goals,
            appearance: card.appearance,
            videoUrl: card.videoUrl,
            description: card.description,
            pos: card.pos,
            ovr: card.ovr,
          }}
          setCurrent={setCurrent}
        />
      ))}
    </div>
  );
};

export default FootballCard;
