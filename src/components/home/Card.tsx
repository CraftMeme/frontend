import { ArrowLeftRight, Sprout } from "lucide-react";
import Image from "next/image";
import { FC } from "react";

interface CardProps {}

const Card: FC<CardProps> = ({}) => {
  return (
    <div className="p-4 rounded-lg flex flex-col gap-2 glass">
      <div className="flex">
        <div className="flex items-center gap-4">
          <Image src={"https://picsum.photos/234"} alt="meme image" width={70} height={70} />
          <div className="flex flex-col">
            <h4>PIZZA</h4>
            <span className="line-clamp-2">
              buy a slice today To resolve the error regarding the standard property, you can add the standard line-clamp property
              alongside the existing
              buy a slice today To resolve the error regarding the standard property, you can add the standard line-clamp property
              alongside the existing
            </span>
          </div>
        </div>
      </div>
      <div className="w-full border-t border-gray-500" />
      <div className="flex flex-col gap-1">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <span className="text-primary">{`${40}%`}</span>
            <span className="">{`$${20}K`}</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="flex items-center gap-1">
              <Sprout strokeWidth={1.5} />
              <span className="">{`${4}h`}</span>
            </div>
            <div className="flex items-center gap-1">
              <ArrowLeftRight strokeWidth={1.5} />
              <span className="">{`${40} txns / $${35}K vol`}</span>
            </div>
          </div>
        </div>
        <div className="w-full h-[6px] md:h-[8px] rounded-[15px] bg-slate-400">
          <div className="h-full bg-green-400 rounded-[15px]" style={{ width: `${40}%` }} />
        </div>
      </div>
    </div>
  );
};

export default Card;
