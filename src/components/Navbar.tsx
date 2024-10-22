"use client";
import { useAccount } from "wagmi";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { truncateAddress } from "@/lib/utils";
import Link from "next/link";
// import { Logo } from "@/assets";
import { useState } from "react";
import { Button } from "./ui/button";
import { navLinks } from "@/constants";

export default function Navbar() {
  const [active, setActive] = useState("Discover");

  const { isConnected, address } = useAccount();
  const { open } = useWeb3Modal();

  const handleConnect = () => {
    open();
  };

  return (
    <header className="">
      <nav className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all ease-in-out`}>
        <div className="container mx-auto w-full">
          <div className="flex justify-between items-center transition py-[20px]">
            <Link href="/">Logo</Link>

            <div className="flex items-center gap-[36px]">
              {navLinks.map(({ id, title, link }) => (
                <ul key={id}>
                  <Link href={link} onClick={() => setActive(title)}>
                    <span
                      className={`text-[14px] leading-[14px] font-semibold font-laila ${
                        active === title ? "text-primary underline underline-offset-8" : "text-white"
                      }`}
                    >
                      {title}
                    </span>
                  </Link>
                </ul>
              ))}
            </div>

            <Button onClick={handleConnect}>{!isConnected ? "Connect Wallet" : truncateAddress(address)}</Button>
          </div>
        </div>
      </nav>
    </header>
  );
}
