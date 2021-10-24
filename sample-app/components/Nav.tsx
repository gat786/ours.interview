import React from "react";

import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className="flex sticky z-50 top-0 bg-white items-center justify-between p-4">
      <div className="flex items-center gap-2">
        <Image src={"/logo.png"} height={32} width={32} />
        <p className="uppercase">Ours</p>
      </div>
      <div className="flex items-center gap-4">
        <Link href={""}>
          <a className="text-primary py-3 px-4 rounded-xl">Log in</a>
        </Link>
        <Link href="">
          <a className="bg-primary text-white py-3 px-4 rounded-xl">Sign up</a>
        </Link>
      </div>
    </nav>
  );
}
