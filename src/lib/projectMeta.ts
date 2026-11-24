import {
  CheckCircle2,
  Clock,
  FileText,
  FlaskConical,
  type LucideIcon,
} from 'lucide-react';
import type { BadgeVariant } from '../components/common/Badge';
import type { ProjectCategory, ProjectStatus } from '../types';

export const STATUS_META: Record<
  ProjectStatus,
  { label: string; variant: BadgeVariant; icon: LucideIcon }
> = {
  completed: { label: 'Completed', variant: 'success', icon: CheckCircle2 },
  'in-progress': { label: 'In Development', variant: 'warning', icon: Clock },
  prototype: { label: 'Prototype', variant: 'accent', icon: FlaskConical },
  'case-study': { label: 'Case Study', variant: 'neutral', icon: FileText },
};

/** Visual accent per category — derived, never stored in project data. */
export const CATEGORY_META: Record<
  ProjectCategory,
  { label: string; accent: string }
> = {
  'full-stack': { label: 'Full Stack', accent: 'var(--accent)' },
  backend: { label: 'Backend / API', accent: 'var(--accent-2)' },
  frontend: { label: 'Frontend', accent: 'var(--highlight)' },
  architecture: { label: 'Architecture', accent: 'var(--violet)' },
};

export function formatIndex(value: number): string {
  return String(value).padStart(2, '0');
}
