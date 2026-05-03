import { cn } from "@/lib/utils";

// Aurora Dream Corner Whispers - Purple/Gold/Pink/Blue
export const AuroraCornerBg = ({ className, children }: { className?: string; children?: React.ReactNode }) => {
  return (
    <div className={cn("relative w-full", className)}>
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 85% 65% at 8% 8%, rgba(99, 102, 241, 0.38), transparent 60%),
            radial-gradient(ellipse 75% 60% at 75% 35%, rgba(16, 185, 129, 0.25), transparent 62%),
            radial-gradient(ellipse 70% 60% at 15% 80%, rgba(99, 102, 241, 0.20), transparent 62%),
            radial-gradient(ellipse 70% 60% at 92% 92%, rgba(16, 185, 129, 0.18), transparent 62%)
          `,
        }}
      />
      {children}
    </div>
  );
};

// Aurora Dream Diagonal Flow
export const AuroraDiagonalBg = ({ className, children }: { className?: string; children?: React.ReactNode }) => {
  return (
    <div className={cn("relative w-full", className)}>
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 5% 40%, rgba(99, 102, 241, 0.35), transparent 67%),
            radial-gradient(ellipse 70% 60% at 45% 45%, rgba(16, 185, 129, 0.22), transparent 67%),
            radial-gradient(ellipse 62% 52% at 83% 76%, rgba(99, 102, 241, 0.20), transparent 63%),
            radial-gradient(ellipse 60% 48% at 75% 20%, rgba(16, 185, 129, 0.18), transparent 66%)
          `,
        }}
      />
      {children}
    </div>
  );
};

// Indigo-Emerald Brand Glow (for sections on dark bg)
export const BrandGlowBg = ({ className, children }: { className?: string; children?: React.ReactNode }) => {
  return (
    <div className={cn("relative w-full", className)}>
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 60% 50% at 20% 20%, rgba(99, 102, 241, 0.15), transparent 60%),
            radial-gradient(ellipse 60% 50% at 80% 80%, rgba(16, 185, 129, 0.12), transparent 60%)
          `,
        }}
      />
      {children}
    </div>
  );
};
