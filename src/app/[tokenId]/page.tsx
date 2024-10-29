"use client";

import TokenDetails from "@/components/token/TokenDetails";
import { useParams } from "next/navigation";

export default function TokenDetailsPage() {
  const { tokenId } = useParams();

  return (
    <main>
      <TokenDetails id={tokenId as string} />
    </main>
  );
}
