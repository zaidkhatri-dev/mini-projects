import { motion } from "motion/react";

interface PlayerCard {
  name: string;
  imageURL: string;
  goals: number;
  appearance: number;
  videoUrl: string;
  description: string;
  ovr: number;
  pos: string;
}

interface PlayerCardProp {
  card: PlayerCard;
  setCurrent: React.Dispatch<React.SetStateAction<PlayerCard | null>>;
}

const PlayerCard = ({ card, setCurrent }: PlayerCardProp) => {
  return (
    <motion.div
      layoutId={`card-${card.name}`}
      onClick={(e) => {
        e.stopPropagation();
        setCurrent(card);
      }}
      className="h-90 bg-cover cursor-pointer border border-neutral-500 flex flex-col text-white justify-between aspect-2/3 bg-center overflow-clip bg-no-repeat rounded-lg"
      style={{ backgroundImage: `url(${card.imageURL})` }}
    >
      <div className="flex flex-col gap-1 my-2 mx-2">
        <h2 className="text-2xl font-semibold">{card.ovr}</h2>
        <h3 className="text-lg">{card.pos}</h3>
      </div>

      <div className="py-4 px-3 w-full bg-black/30 backdrop-blur-sm flex flex-col gap-2">
        <motion.h1 className="text-2xl font-semibold" layoutId={`name-${card.name}`}>{card.name}</motion.h1>
        <div className="">
          <h3>Goals - {card.goals}</h3>
          <h3>Appearance - {card.appearance}</h3>
        </div>
      </div>
    </motion.div>
  );
};

export default PlayerCard;
