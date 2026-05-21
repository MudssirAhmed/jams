import { technologyData } from "../../data/technologyData";
import SectionLabel from "../common/SectionLabel";
import SectionContainer from "../common/SectionContainer";
import SecondaryButton from "../common/SecondaryButton";

const TechnologySection = () => {
  return (
    <SectionContainer id="technology">
      <div className="mx-auto max-w-screen-xl">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left: Text */}
          <div>
            <SectionLabel
              number={technologyData.sectionNumber}
              label={technologyData.eyebrow}
            />
            <h2 className="mb-6 text-3xl font-semibold leading-tight text-white md:text-4xl lg:text-5xl">
              {technologyData.title}
            </h2>
            <p className="mb-8 text-base leading-7 text-white/60">
              {technologyData.description}
            </p>
            <SecondaryButton>{technologyData.cta}</SecondaryButton>
          </div>

          {/* Right: Technology cards */}
          <div className="flex flex-col gap-4">
            {technologyData.items.map((item, index) => (
              <div
                key={item.title}
                className="group flex items-start gap-5 rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-violet-500/30 hover:bg-violet-500/5"
              >
                {/* Icon */}
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-[#050816] text-xl">
                  {item.icon}
                </div>

                {/* Text */}
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-6 text-white/50">
                    {item.description}
                  </p>
                </div>

                {/* Index */}
                <span className="ml-auto shrink-0 text-xs text-white/20">
                  0{index + 1}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default TechnologySection;
