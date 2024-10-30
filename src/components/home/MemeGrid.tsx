/* eslint-disable @typescript-eslint/no-empty-object-type */
"use client";

import { memes } from "@/constants";
import { FC, useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import Card from "./Card";

interface MemeGridProps {}

const MemeGrid: FC<MemeGridProps> = ({}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;
  const totalPages = Math.ceil(memes.length / itemsPerPage);

  const getCurrentItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return memes.slice(startIndex, endIndex);
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  return (
    <section className="">
      <div className="container mx-auto w-full relative">
        <h2 className="text-4xl font-bold text-foreground">Trade Now</h2>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {getCurrentItems().map(
            ({
              id,
              tokenDescription,
              tokenFileUrl,
              tokenName,
              tokenSupply,
              tokenTicker,
              createdAt,
              createdBy,
              liquidity,
              transactions,
              volume,
            }) => (
              <Link key={id} href={`/${id}`}>
                <Card
                  createdAt={createdAt}
                  createdBy={createdBy}
                  liquidity={liquidity}
                  tokenDescription={tokenDescription}
                  tokenName={tokenName}
                  tokenSupply={tokenSupply}
                  tokenFileUrl={tokenFileUrl}
                  tokenTicker={tokenTicker}
                  transactions={transactions}
                  volume={volume}
                />
              </Link>
            )
          )}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-4 pt-8">
          <Button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            variant="outline"
            className="bg-primary-foreground hover:bg-secondary"
          >
            Previous
          </Button>

          <span className="text-muted-foreground">
            Page {currentPage} of {totalPages}
          </span>

          <Button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            variant="outline"
            className="bg-primary-foreground hover:bg-secondary"
          >
            Next
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MemeGrid;
