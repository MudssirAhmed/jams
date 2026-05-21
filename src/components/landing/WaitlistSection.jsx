import { useState } from "react";
import { waitlistData } from "../../data/waitlistData";
import SectionLabel from "../common/SectionLabel";
import SectionContainer from "../common/SectionContainer";

const WaitlistSection = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <SectionContainer id="waitlist" className="overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-screen-xl">
        <div className="mx-auto max-w-2xl text-center">
          <SectionLabel
            number={waitlistData.sectionNumber}
            label={waitlistData.eyebrow}
          />

          <h2 className="mb-4 text-3xl font-semibold leading-tight text-white md:text-4xl lg:text-5xl">
            {waitlistData.title}
          </h2>

          <p className="mb-10 text-base text-white/60">{waitlistData.description}</p>

          {submitted ? (
            <div className="rounded-2xl border border-violet-500/30 bg-violet-500/10 px-8 py-6">
              <p className="text-lg font-medium text-violet-300">
                🎉 You&apos;re on the list!
              </p>
              <p className="mt-1 text-sm text-white/50">
                We&apos;ll be in touch when early access opens.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={waitlistData.placeholder}
                className="flex-1 rounded-xl border border-white/20 bg-white/5 px-5 py-3.5 text-sm text-white placeholder-white/30 outline-none transition focus:border-violet-500/60 focus:ring-1 focus:ring-violet-500/30"
              />
              <button
                type="submit"
                className="rounded-xl bg-violet-600 px-6 py-3.5 text-sm font-medium text-white transition hover:bg-violet-500 active:scale-95"
              >
                {waitlistData.buttonText}
              </button>
            </form>
          )}

          <p className="mt-4 text-xs text-white/30">{waitlistData.disclaimer}</p>
        </div>
      </div>
    </SectionContainer>
  );
};

export default WaitlistSection;
