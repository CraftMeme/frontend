/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { timeAgo } from "@/lib/utils";
import { ArrowLeftRight, Sprout } from "lucide-react";
import Image from "next/image";
import { FC } from "react";

interface CardProps {
  tokenName: string;
  tokenTicker: string;
  tokenDescription: string;
  tokenFileUrl: string;
  tokenSupply: number;
  createdBy: string;
  createdAt: string;
  liquidity: number;
  transactions: number;
  volume: number;
}

const Card: FC<CardProps> = ({
  createdAt,
  createdBy,
  liquidity,
  tokenDescription,
  tokenFileUrl,
  tokenName,
  tokenSupply,
  tokenTicker,
  transactions,
  volume,
}) => {
  let rounded = Math.round((liquidity / 70000) * 100);
  return (
    <div className="p-4 rounded-lg flex flex-col gap-2 glass">
      <div className="flex">
        <div className="flex items-center gap-4">
          <Image src={tokenFileUrl} alt="meme image" width={70} height={70} className="rounded-lg" />
          <div className="flex flex-col">
            <h4>{`${tokenName} (${tokenTicker})`}</h4>
            <span className="line-clamp-2">{tokenDescription}</span>
          </div>
        </div>
      </div>
      <div className="w-full border-t border-gray-500" />
      <div className="flex flex-col gap-1">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <span className="text-primary">{`${rounded}%`}</span>
            <span className="">{`$${liquidity / 1000}K`}</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="flex items-center gap-1">
              <Sprout strokeWidth={1.5} />
              <span className="">{timeAgo(createdAt)}</span>
            </div>
            <div className="flex items-center gap-1">
              <ArrowLeftRight strokeWidth={1.5} />
              <span className="">{`${transactions} txns / $${volume / 1000}K vol`}</span>
            </div>
          </div>
        </div>
        <div className="w-full h-[6px] md:h-[8px] rounded-[15px] bg-slate-400">
          <div className="h-full bg-primary rounded-[15px]" style={{ width: `${rounded}%` }} />
        </div>
      </div>
    </div>
  );
};

export default Card;
