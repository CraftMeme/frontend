import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";



export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const truncateAddress = (address: string) => {
  if (!address) return "";
  return `${address.substring(0, 6)}...${address.substring(
    address.length - 4
  )}`;
};



export const timeAgo = (dateString: string) => {
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return "";
  const now = new Date();
  const secondsAgo = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (secondsAgo < 60) return `${secondsAgo} sec ago`;
  const minutesAgo = Math.floor(secondsAgo / 60);
  if (minutesAgo < 60) return `${minutesAgo} min${minutesAgo === 1 ? '' : 's'} ago`;
  const hoursAgo = Math.floor(minutesAgo / 60);
  if (hoursAgo < 24) return `${hoursAgo} hr${hoursAgo === 1 ? '' : 's'} ago`;
  const daysAgo = Math.floor(hoursAgo / 24);
  if (daysAgo < 7) return `${daysAgo} day${daysAgo === 1 ? '' : 's'} ago`;
  const weeksAgo = Math.floor(daysAgo / 7);
  if (weeksAgo < 4) return `${weeksAgo} wk${weeksAgo === 1 ? '' : 's'} ago`;
  const monthsAgo = Math.floor(daysAgo / 30);
  if (monthsAgo < 12) return `${monthsAgo} mth${monthsAgo === 1 ? '' : 's'} ago`;

  const yearsAgo = Math.floor(daysAgo / 365);
  return `${yearsAgo} year${yearsAgo === 1 ? '' : 's'} ago`;
}

