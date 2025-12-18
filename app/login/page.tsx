import { AuthCard } from "@/components/auth-card";
import { HexagramBackground } from "@/components/hexagram-background";

export default function App() {
  return (
      <div className="min-h-screen bg-background text-foreground relative">
      <HexagramBackground />

      {/* Main Layout */}
      <div className="relative z-10 min-h-screen">
        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 min-h-screen">
          {/* Left Brand Area */}
          <div className="flex flex-col justify-center px-12 xl:px-16">
            <div className="max-w-md">
              {/* Logo and Brand */}
              <div className="flex items-center gap-3 mb-6">
                {/* Hexagram Symbol */}
                <div className="flex flex-col gap-1">
                  <div className="flex gap-1">
                    <div className="w-4 h-0.5 bg-foreground"></div>
                    <div className="w-4 h-0.5 bg-foreground"></div>
                  </div>
                  <div className="flex gap-1">
                    <div className="w-1.5 h-0.5 bg-foreground"></div>
                    <div className="w-1 h-0.5"></div>
                    <div className="w-1.5 h-0.5 bg-foreground"></div>
                    <div className="w-1 h-0.5"></div>
                    <div className="w-1.5 h-0.5 bg-foreground"></div>
                  </div>
                  <div className="flex gap-1">
                    <div className="w-4 h-0.5 bg-foreground"></div>
                    <div className="w-4 h-0.5 bg-foreground"></div>
                  </div>
                  <div className="flex gap-1">
                    <div className="w-1.5 h-0.5 bg-foreground"></div>
                    <div className="w-1 h-0.5"></div>
                    <div className="w-1.5 h-0.5 bg-foreground"></div>
                    <div className="w-1 h-0.5"></div>
                    <div className="w-1.5 h-0.5 bg-foreground"></div>
                  </div>
                  <div className="flex gap-1">
                    <div className="w-4 h-0.5 bg-foreground"></div>
                    <div className="w-4 h-0.5 bg-foreground"></div>
                  </div>
                  <div className="flex gap-1">
                    <div className="w-1.5 h-0.5 bg-foreground"></div>
                    <div className="w-1 h-0.5"></div>
                    <div className="w-1.5 h-0.5 bg-foreground"></div>
                    <div className="w-1 h-0.5"></div>
                    <div className="w-1.5 h-0.5 bg-foreground"></div>
                  </div>
                </div>

                {/* Brand Name */}
                <h1 className="text-3xl font-light tracking-wide">
                  Prompthesy
                </h1>
              </div>

              {/* Tagline */}
              <p className="text-lg text-muted-foreground leading-relaxed">
                Converse with the I Ching.
              </p>

              {/* Subtle decorative element */}
              <div className="mt-8 w-16 h-px bg-gradient-to-r from-gold to-transparent"></div>
            </div>
          </div>

          {/* Right Auth Area */}
          <div className="flex items-center justify-center px-8 py-12">
            <AuthCard />
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden min-h-screen flex flex-col">
          {/* Mobile Brand Header */}
          <div className="flex-shrink-0 px-6 pt-8 pb-6 text-center">
            {/* Logo and Brand */}
            <div className="flex items-center justify-center gap-3 mb-4">
              {/* Compact Hexagram Symbol */}
              <div className="flex flex-col gap-0.5">
                <div className="flex gap-0.5">
                  <div className="w-3 h-0.5 bg-foreground"></div>
                  <div className="w-3 h-0.5 bg-foreground"></div>
                </div>
                <div className="flex gap-0.5">
                  <div className="w-1 h-0.5 bg-foreground"></div>
                  <div className="w-0.5 h-0.5"></div>
                  <div className="w-1 h-0.5 bg-foreground"></div>
                  <div className="w-0.5 h-0.5"></div>
                  <div className="w-1 h-0.5 bg-foreground"></div>
                </div>
                <div className="flex gap-0.5">
                  <div className="w-3 h-0.5 bg-foreground"></div>
                  <div className="w-3 h-0.5 bg-foreground"></div>
                </div>
                <div className="flex gap-0.5">
                  <div className="w-1 h-0.5 bg-foreground"></div>
                  <div className="w-0.5 h-0.5"></div>
                  <div className="w-1 h-0.5 bg-foreground"></div>
                  <div className="w-0.5 h-0.5"></div>
                  <div className="w-1 h-0.5 bg-foreground"></div>
                </div>
                <div className="flex gap-0.5">
                  <div className="w-3 h-0.5 bg-foreground"></div>
                  <div className="w-3 h-0.5 bg-foreground"></div>
                </div>
                <div className="flex gap-0.5">
                  <div className="w-1 h-0.5 bg-foreground"></div>
                  <div className="w-0.5 h-0.5"></div>
                  <div className="w-1 h-0.5 bg-foreground"></div>
                  <div className="w-0.5 h-0.5"></div>
                  <div className="w-1 h-0.5 bg-foreground"></div>
                </div>
              </div>

              {/* Brand Name */}
              <h1 className="text-2xl font-light tracking-wide">
                Prompthesy
              </h1>
            </div>

            {/* Tagline */}
            <p className="text-muted-foreground">
              Converse with the I Ching.
            </p>
          </div>

          {/* Mobile Auth Card */}
          <div className="flex-1 flex items-center justify-center px-6 pb-8">
            <AuthCard />
          </div>
        </div>
      </div>
    </div>
  );
}