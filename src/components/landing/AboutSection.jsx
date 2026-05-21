import { aboutData } from "../../data/aboutData";
import SectionLabel from "../common/SectionLabel";
import SectionContainer from "../common/SectionContainer";
import StatCard from "../common/StatCard";
import SecondaryButton from "../common/SecondaryButton";

const AboutSection = () => {
  return (
    <SectionContainer id="about">
      <div className="mx-auto max-w-screen-xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left: Text */}
          <div>
            <SectionLabel
              number={aboutData.sectionNumber}
              label={aboutData.eyebrow}
            />
            <h2 className="mb-6 text-3xl font-semibold leading-tight text-white md:text-4xl lg:text-5xl">
              {aboutData.title}
            </h2>
            <p className="mb-8 text-base leading-7 text-white/60">
              {aboutData.description}
            </p>
            <SecondaryButton>{aboutData.cta}</SecondaryButton>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {aboutData.stats.map((stat) => (
                <StatCard key={stat.label} value={stat.value} label={stat.label} />
              ))}
            </div>
          </div>

          {/* Right: Visual placeholder */}
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-violet-900/30 via-[#0A0F1F] to-fuchsia-900/20">
            <div className="flex h-80 items-center justify-center">
              {/* Gateway / arch visualization */}
              <div className="relative flex items-center justify-center">
                <div className="h-48 w-48 rounded-full border border-violet-500/20" />
                <div className="absolute h-36 w-36 rounded-full border border-violet-500/30" />
                <div className="absolute h-24 w-24 rounded-full border border-violet-500/40" />
                <div className="absolute flex h-16 w-16 items-center justify-center rounded-full bg-violet-600/40">
                  <span className="text-2xl font-bold text-white">Z</span>
                </div>
              </div>
            </div>
            {/* Glow */}
            <div className="pointer-events-none absolute bottom-0 left-1/2 h-32 w-64 -translate-x-1/2 rounded-full bg-violet-500/20 blur-3xl" />
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default AboutSection;
