import { footerData } from "../../data/footerData";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#050816] px-6 py-16 lg:px-16">
      <div className="mx-auto max-w-screen-xl">
        {/* Top row */}
        <div className="grid gap-10 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-1">
            <p className="mb-3 text-xl font-semibold tracking-widest text-white">
              {footerData.logo}
            </p>
            <p className="text-sm leading-6 text-white/50">
              {footerData.description}
            </p>

            {/* Social */}
            <div className="mt-6 flex gap-3">
              {footerData.social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-xs text-white/60 transition hover:border-violet-500/50 hover:text-violet-400"
                >
                  {s.label[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerData.columns.map((col) => (
            <div key={col.title}>
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/40">
                {col.title}
              </p>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/60 transition hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/30 sm:flex-row">
          <p>{footerData.copyright}</p>
          <p>Made with ❤️ for the future</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
