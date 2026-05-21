import { ecosystemData } from "../../data/ecosystemData";
import SectionLabel from "../common/SectionLabel";
import SectionContainer from "../common/SectionContainer";
import SecondaryButton from "../common/SecondaryButton";

const EcosystemSection = () => {
  return (
    <SectionContainer id="ecosystem">
      <div className="mx-auto max-w-screen-xl">
        {/* Header */}
        <div className="mb-12">
          <SectionLabel
            number={ecosystemData.sectionNumber}
            label={ecosystemData.eyebrow}
          />
          <h2 className="max-w-2xl text-3xl font-semibold leading-tight text-white md:text-4xl lg:text-5xl">
            {ecosystemData.title}
          </h2>
        </div>

        {/* Cards grid */}
        <div className="mb-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ecosystemData.items.map((item) => (
            <div
              key={item.name}
              className={`group relative overflow-hidden rounded-2xl border ${item.border} bg-gradient-to-br ${item.accent} p-6 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-violet-500/10`}
            >
              {/* Card header */}
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-xl font-semibold text-white">{item.name}</h3>
                <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60">
                  {item.tagline}
                </span>
              </div>

              <p className="mb-5 text-sm leading-6 text-white/60">
                {item.description}
              </p>

              <button className="text-sm font-medium text-violet-400 transition hover:text-violet-300">
                {item.cta} →
              </button>

              {/* Decorative corner glow */}
              <div className="pointer-events-none absolute -right-4 -top-4 h-20 w-20 rounded-full bg-violet-500/10 blur-xl" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="flex justify-center">
          <SecondaryButton>{ecosystemData.bottomCta}</SecondaryButton>
        </div>
      </div>
    </SectionContainer>
  );
};

export default EcosystemSection;
