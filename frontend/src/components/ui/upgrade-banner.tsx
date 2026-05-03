"use client";

import * as React from "react";
import { X, Smartphone } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface UpgradeBannerProps {
  buttonText?: string;
  description?: string;
  onClose?: () => void;
  onClick?: () => void;
  className?: string;
}

export function UpgradeBanner({
  buttonText = "App Coming Soon",
  description = "Mobile app launching soon for iOS & Android",
  onClose,
  onClick,
  className,
}: UpgradeBannerProps) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div className={cn("flex items-center justify-center gap-2 px-4 py-2 bg-indigo-950/80 border-b border-indigo-500/20 backdrop-blur-sm", className)}>
      <AnimatePresence>
        <motion.div
          className="flex items-center gap-2"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <Smartphone className="w-3.5 h-3.5 text-indigo-300" />
          </span>

          <button
            className="text-xs font-bold text-indigo-200 hover:text-white transition-colors underline decoration-indigo-500/40 underline-offset-2"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={onClick}
          >
            {buttonText}
          </button>

          <span className="text-xs text-indigo-400 hidden sm:inline">
            — {description}
          </span>
        </motion.div>
      </AnimatePresence>

      {onClose && (
        <button
          onClick={onClose}
          className="ml-auto p-0.5 rounded text-indigo-400 hover:text-white transition-colors"
          aria-label="Close announcement"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      )}
    </div>
  );
}
