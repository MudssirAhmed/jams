import { paradigmData } from "../../data/paradigmData";
import SectionLabel from "../common/SectionLabel";
import SectionContainer from "../common/SectionContainer";
import SecondaryButton from "../common/SecondaryButton";

const ParadigmSection = () => {
  return (
    <SectionContainer id="paradigm" className="overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-violet-600/15 blur-3xl" />
      </div>

      <div className="mx-auto max-w-screen-xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left: Orbit visual */}
          <div className="order-2 flex items-center justify-center lg:order-1">
            <div className="relative flex h-80 w-80 items-center justify-center">
              {/* Orbit rings */}
              <div className="absolute h-72 w-72 rounded-full border border-violet-500/20" />
              <div className="absolute h-52 w-52 rounded-full border border-violet-500/30" />
              <div className="absolute h-32 w-32 rounded-full border border-violet-500/40" />

              {/* Center */}
              <div className="z-10 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-violet-600/60 to-fuchsia-600/40 text-center">
                <span className="text-xs font-medium leading-tight text-white">
                  {paradigmData.centerText}
                </span>
              </div>

              {/* Orbit items */}
              {paradigmData.orbitItems.map((item, index) => {
                const angle = (index / paradigmData.orbitItems.length) * 360;
                const radian = (angle * Math.PI) / 180;
                const radius = 126;
                const x = Math.cos(radian) * radius;
                const y = Math.sin(radian) * radius;

                return (
                  <div
                    key={item}
                    className="absolute flex h-10 w-16 items-center justify-center rounded-lg border border-violet-500/30 bg-[#0A0F1F] text-xs text-violet-300"
                    style={{
                      transform: `translate(${x}px, ${y}px)`,
                    }}
                  >
                    {item}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Text */}
          <div className="order-1 max-w-xl lg:order-2">
            <SectionLabel number={paradigmData.sectionNumber} label={paradigmData.eyebrow} />

            <h2 className="mb-6 text-3xl font-semibold leading-tight text-white md:text-4xl lg:text-5xl">
              {paradigmData.title}
            </h2>

            <p className="mb-8 text-base leading-7 text-white/60">
              {paradigmData.description}
            </p>

            <SecondaryButton>{paradigmData.cta}</SecondaryButton>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default ParadigmSection;
