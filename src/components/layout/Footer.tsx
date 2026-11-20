import { Link } from 'react-router-dom';
import { NAVIGATION_ITEMS } from '../../data/navigation';
import { PROFILE } from '../../data/profile';
import { SOCIAL_LINKS } from '../../data/socialLinks';
import { Container } from '../common/Container';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border-subtle)] bg-[var(--bg-surface)] py-10">
      <Container className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-[var(--text-primary)]">
            {PROFILE.isPlaceholder ? 'Developer Portfolio (Draft)' : PROFILE.name}
          </p>
          <p className="mt-1 text-xs text-[var(--text-secondary)]">
            {PROFILE.title} &bull; &copy; {currentYear}
          </p>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap gap-4">
          {NAVIGATION_ITEMS.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="text-xs font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {SOCIAL_LINKS.length > 0 && (
          <div className="flex items-center gap-3">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium text-[var(--text-secondary)] hover:text-[var(--accent-primary)]"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </Container>
    </footer>
  );
}
