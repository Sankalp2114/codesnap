"use client";

import Link from "next/link";
import React from "react";
import { ExternalLink } from "lucide-react";

function Footer() {
  return (
    <div className="flex items-center gap-10 py-16">
      <Link
        className="text-sm font-medium flex gap-2 items-center   hover:text-slate-200 ease-in-out transition-all duration-150"
        href="https://twitter.com/Sankalp2114"
      >
        Twitter <ExternalLink />
      </Link>
      <p className="text-sm font-medium flex gap-2 items-center">
        Made by Sankalp
      </p>
      <Link
        className="text-sm font-medium flex gap-2 items-center   hover:text-slate-200 ease-in-out transition-all duration-150"
        href="https://github.com/Sankalp2114/codesnap"
      >
        Source code <ExternalLink />
      </Link>
    </div>
  );
}

export default Footer;
