import { Container } from "@/components/ui/Container";
import { Divider } from "@/components/ui/Divider";
import { SITE, FOOTER_DATA } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-[#0E0E1A] pb-8 pt-16">
      <Container>
        <Divider className="mb-12" />

        {/* Main row */}
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          {/* Logo + tagline */}
          <div className="flex flex-col gap-3">
            <a href="#top" className="group flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-5 w-[3px] flex-shrink-0 bg-[#7C5CFF]"
              />
              <span className="text-sm font-bold uppercase tracking-[0.12em] text-white transition-opacity group-hover:opacity-80">
                {SITE.name}
              </span>
            </a>
            <p className="max-w-[220px] text-[13px] leading-[1.6] text-[#6B6B7B]">
              {FOOTER_DATA.tagline}
            </p>
          </div>

          {/* Nav links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-6 md:gap-8" role="list">
              {FOOTER_DATA.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[14px] text-[#6B6B7B] transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6B6B7B] transition-colors hover:text-[#7C5CFF]"
              aria-label="Eleware AI on LinkedIn"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
          </div>
        </div>

        <Divider className="my-8" />

        {/* Bottom row */}
        <div className="flex flex-col gap-2 text-[12px] text-[#6B6B7B] md:flex-row md:justify-between">
          <p>{FOOTER_DATA.copyright}</p>
          <p>{FOOTER_DATA.attribution}</p>
        </div>
      </Container>
    </footer>
  );
}
