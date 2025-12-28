"use client";

import { motion } from "motion/react";
import { Button } from "../ui/button";
import { SponsorButton } from "../ui/sponsor-button";
import { VercelIcon } from "../icons";
import { ArrowRight } from "lucide-react";

import Image from "next/image";
import { Handlebars } from "./handlebars";
import Link from "next/link";

export function Hero() {
  return (
    <div className="min-h-[calc(100svh-4.5rem)] relative flex flex-col justify-between items-center text-center px-4 overflow-hidden">
      {/* Mesh Gradient Background */}
      <div className="absolute inset-0 -z-50 bg-background overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-primary/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-500/10 rounded-full blur-[120px]"
        />
        <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-[0.03] mix-blend-overlay pointer-events-none" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl mx-auto w-full flex-1 flex flex-col justify-center relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-8 flex justify-center"
        >
          <SponsorButton
            href="https://vercel.com/home?utm_source=opencut"
            logo={VercelIcon}
            companyName="Vercel"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="inline-block font-bold tracking-tighter text-5xl md:text-[5rem] leading-[1.1]"
        >
          <h1 className="bg-clip-text text-transparent bg-gradient-to-b from-foreground via-foreground to-foreground/50 pb-2">
            The Open Source
          </h1>
          <Handlebars>
            <span className="text-primary drop-shadow-[0_0_25px_rgba(var(--primary),0.4)]">Video Editor</span>
          </Handlebars>
        </motion.div>

        <motion.p
          className="mt-8 text-lg sm:text-2xl text-muted-foreground font-light tracking-wide max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          AI Profit Lab is a simple but powerful video editor that gets the job done.
          Professional tools, built for everyone, anywhere.
        </motion.p>

        <motion.div
          className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <Link href="/projects">
            <Button
              size="lg"
              className="px-8 h-12 text-lg bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_20px_rgba(var(--primary),0.3)] transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Try early beta
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
