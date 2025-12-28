"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { HeaderBase } from "./header-base";
import Image from "next/image";
import { ThemeToggle } from "./theme-toggle";

export function Header() {
  const leftContent = (
    <Link href="/" className="flex items-center gap-3">
      <Image
        src="/logo.svg"
        alt="JarvisOpenCut Logo"
        className="invert dark:invert-0"
        width={32}
        height={32}
      />
      <span className="text-xl font-medium hidden md:block">AI Profit Lab</span>
    </Link>
  );

  const rightContent = (
    <nav className="flex items-center gap-2">
      <div className="flex items-center gap-4">
        <Link href="/blog">
          <Button variant="text" className="text-sm p-0 hover:text-primary transition-colors duration-200">
            Blog
          </Button>
        </Link>
        <Link href="/contributors">
          <Button variant="text" className="text-sm p-0 hover:text-primary transition-colors duration-200">
            Contributors
          </Button>
        </Link>
      </div>
      <Link href="/projects">
        <Button size="sm" className="text-sm ml-2 bg-primary hover:bg-primary/90 transition-all duration-300 shadow-[0_0_15px_rgba(var(--primary),0.3)]">
          Projects
          <ArrowRight className="h-4 w-4 ml-1" />
        </Button>
      </Link>
      <ThemeToggle className="mr-2" />
    </nav>
  );

  return (
    <div className="sticky top-4 z-50 mx-4 md:mx-0">
      <HeaderBase
        className="bg-background/60 backdrop-blur-xl border border-white/10 dark:border-white/5 rounded-2xl max-w-3xl mx-auto mt-4 pl-4 pr-[11px] shadow-[0_8px_32px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
        leftContent={leftContent}
        rightContent={rightContent}
      />
    </div>
  );
}
