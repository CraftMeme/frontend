"use client";

import { memes } from "@/constants";
import { FC, useState } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
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
          {getCurrentItems().map(({ id, tokenDescription, tokenFileUrl, tokenName, tokenSupply, tokenTicker }) => (
            // <Link key={id} href={`/${id}`} className="p-6 border border-red-300 w-full flex gap-2">
            //   <Image src={tokenFileUrl} width={100} height={100} alt="token image" />

            //   <div className="flex flex-col gep-2">
            //     <span>{tokenName}</span>
            //     <span>{tokenTicker}</span>
            //     <span>{tokenSupply}</span>
            //     <p className="text-lg font-medium">{tokenDescription}</p>
            //   </div>
            // </Link>

            <div key={id}>
              <Card />
            </div>
          ))}
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
