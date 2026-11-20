import { ExternalLink, Github, Linkedin } from 'lucide-react';
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
      <p className="text-xs text-[var(--text-secondary)]">
        Verified GitHub and LinkedIn links will appear here once confirmed.
      </p>
    );
  }

  return (
    <ul className={`flex flex-wrap items-center gap-3 ${className}`}>
      {SOCIAL_LINKS.map((link) => (
        <li key={link.platform}>
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-3 py-1.5 text-sm font-medium text-[var(--text-secondary)] transition-colors hover:border-[var(--accent-primary)] hover:text-[var(--text-primary)]"
          >
            {getPlatformIcon(link.platform)}
            <span>{link.label}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
