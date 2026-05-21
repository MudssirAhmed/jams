import { arthData } from "../../data/arthData";
import SectionLabel from "../common/SectionLabel";
import SectionContainer from "../common/SectionContainer";
import PrimaryButton from "../common/PrimaryButton";

const ArthSection = () => {
  return (
    <SectionContainer id="arth-os" className="overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-violet-700/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-fuchsia-700/15 blur-3xl" />
      </div>

      <div className="mx-auto max-w-screen-xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <SectionLabel number={arthData.sectionNumber} label={arthData.eyebrow} />
          <h2 className="mb-2 text-4xl font-semibold text-white md:text-5xl lg:text-6xl">
            {arthData.title}
          </h2>
          <p className="text-lg text-violet-400">{arthData.subtitle}</p>
        </div>

        {/* Main content */}
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left: Dashboard mockup */}
          <div className="relative overflow-hidden rounded-3xl border border-violet-500/20 bg-gradient-to-br from-violet-900/30 via-[#0A0F1F] to-fuchsia-900/20 p-6">
            {/* Window chrome */}
            <div className="mb-4 flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-red-500/60" />
              <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
              <div className="h-3 w-3 rounded-full bg-green-500/60" />
              <span className="ml-2 text-xs text-white/30">Arth OS — Dashboard</span>
            </div>

            {/* Mock UI */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3">
                <div className="h-8 w-8 rounded-lg bg-violet-500/40" />
                <div>
                  <div className="mb-1 h-2 w-24 rounded bg-white/30" />
                  <div className="h-2 w-16 rounded bg-white/15" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-white/10 bg-white/5 p-3"
                  >
                    <div className="mb-2 h-2 w-12 rounded bg-violet-400/40" />
                    <div className="h-2 w-16 rounded bg-white/20" />
                  </div>
                ))}
              </div>
              <div className="rounded-xl border border-violet-500/20 bg-violet-500/10 p-3">
                <div className="mb-2 h-2 w-20 rounded bg-violet-300/50" />
                <div className="h-2 w-28 rounded bg-violet-300/30" />
              </div>
            </div>

            {/* Glow effect */}
            <div className="pointer-events-none absolute bottom-0 left-1/2 h-24 w-48 -translate-x-1/2 rounded-full bg-violet-500/20 blur-2xl" />
          </div>

          {/* Right: Text + Features */}
          <div>
            <p className="mb-6 text-base leading-7 text-white/60">
              {arthData.description}
            </p>

            <ul className="mb-8 space-y-4">
              {arthData.features.map((feature) => (
                <li
                  key={feature.label}
                  className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-4"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-violet-500/20 text-xs text-violet-400">
                    ✓
                  </span>
                  <div>
                    <p className="mb-0.5 text-sm font-medium text-white">
                      {feature.label}
                    </p>
                    <p className="text-sm text-white/50">{feature.description}</p>
                  </div>
                </li>
              ))}
            </ul>

            <PrimaryButton>{arthData.cta}</PrimaryButton>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default ArthSection;
