import { ArrowUpRight, ExternalLink, Github, Linkedin } from 'lucide-react';
import { SOCIAL_LINKS } from '../../data/socialLinks';

interface SocialLinksProps {
  className?: string;
  showEmptyNote?: boolean;
}

function getPlatformIcon(platform: string) {
  const normalized = platform.toLowerCase();
  if (normalized.includes('github')) {
    return <Github className="h-4 w-4" aria-hidden="true" />;
  }
  if (normalized.includes('linkedin')) {
    return <Linkedin className="h-4 w-4" aria-hidden="true" />;
  }
  return <ExternalLink className="h-4 w-4" aria-hidden="true" />;
}

export function SocialLinks({
  className = '',
  showEmptyNote = false,
}: SocialLinksProps) {
  if (SOCIAL_LINKS.length === 0) {
    if (!showEmptyNote) return null;
    return (
      <p className="font-mono text-xs text-[var(--ink-faint)]">
        Verified GitHub and LinkedIn links will appear here once confirmed.
      </p>
    );
  }

  return (
    <ul className={`flex flex-wrap items-center gap-2.5 ${className}`}>
      {SOCIAL_LINKS.map((link) => (
        <li key={link.platform}>
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="nudge inline-flex items-center gap-2 rounded-full border border-[var(--line-strong)] bg-[var(--surface)] px-3.5 py-1.5 font-mono text-xs font-medium text-[var(--ink-muted)] transition-[transform,color,border-color] duration-200 hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            {getPlatformIcon(link.platform)}
            <span>{link.label}</span>
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </li>
      ))}
    </ul>
  );
}
