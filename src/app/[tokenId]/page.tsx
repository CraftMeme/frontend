"use client";

import { useParams } from "next/navigation";

export default function TokenDetailsPage() {
  const { tokenId } = useParams();

  return (
    <div>
      <h1>Token ID: {tokenId}</h1>
    </div>
  );
}
