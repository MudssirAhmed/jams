import { heroData } from "../../data/heroData";
import SectionLabel from "../common/SectionLabel";
import PrimaryButton from "../common/PrimaryButton";
import SecondaryButton from "../common/SecondaryButton";
import SectionContainer from "../common/SectionContainer";

const HeroSection = () => {
  return (
    <SectionContainer id="vision" className="overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-violet-600/20 blur-3xl" />
        <div className="absolute right-1/4 top-1/3 h-64 w-64 rounded-full bg-fuchsia-600/15 blur-3xl" />
      </div>

      <div className="mx-auto max-w-screen-xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left: Text */}
          <div className="max-w-xl">
            <SectionLabel number={heroData.sectionNumber} label={heroData.eyebrow} />

            <h1 className="mb-6 text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
              {heroData.title}
            </h1>

            <p className="mb-8 text-base leading-7 text-white/60">
              {heroData.description}
            </p>

            <div className="flex flex-wrap gap-4">
              <PrimaryButton>{heroData.primaryButton}</PrimaryButton>
              <SecondaryButton>{heroData.secondaryButton}</SecondaryButton>
            </div>
          </div>

          {/* Right: Visual placeholder */}
          <div className="relative flex items-center justify-center">
            <div className="relative h-80 w-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-violet-900/40 via-[#0A0F1F] to-fuchsia-900/20">
              {/* Decorative grid */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(139,92,246,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.3) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />
              {/* Center Z logo placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-9xl font-bold text-violet-500/30 select-none">
                  Z
                </span>
              </div>
              {/* Glow orb */}
              <div className="absolute bottom-8 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full bg-violet-500/30 blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default HeroSection;
