import { problemData } from "../../data/problemData";
import SectionLabel from "../common/SectionLabel";
import SectionContainer from "../common/SectionContainer";
import SecondaryButton from "../common/SecondaryButton";

const ProblemSection = () => {
  return (
    <SectionContainer id="problem">
      <div className="mx-auto max-w-screen-xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left: Text */}
          <div className="max-w-xl">
            <SectionLabel number={problemData.sectionNumber} label={problemData.eyebrow} />

            <h2 className="mb-6 text-3xl font-semibold leading-tight text-white md:text-4xl lg:text-5xl">
              {problemData.title}
            </h2>

            <p className="mb-8 text-base leading-7 text-white/60">
              {problemData.description}
            </p>

            <SecondaryButton>Learn More</SecondaryButton>
          </div>

          {/* Right: Scattered app icons grid */}
          <div className="relative flex items-center justify-center">
            <div className="relative h-80 w-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#0A0F1F] to-[#050816] p-6">
              {/* Scatter grid of app icons */}
              <div className="grid grid-cols-5 gap-3">
                {problemData.icons.map((item, index) => (
                  <div
                    key={index}
                    className="flex h-12 w-12 flex-col items-center justify-center rounded-xl border border-white/10 bg-white/5 text-xl transition hover:border-violet-500/40 hover:bg-violet-500/10"
                    title={item.label}
                  >
                    {item.icon}
                  </div>
                ))}
              </div>

              {/* Network lines overlay */}
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <div className="h-48 w-48 rounded-full border border-red-500/10" />
                <div className="absolute h-64 w-64 rounded-full border border-red-500/5" />
              </div>

              {/* Center warning */}
              <div className="pointer-events-none absolute inset-0 flex items-end justify-center pb-6">
                <p className="rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-2 text-xs text-red-400">
                  No unified layer of intelligence
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default ProblemSection;
