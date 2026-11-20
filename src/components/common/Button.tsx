import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { Link, type LinkProps } from 'react-router-dom';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'sm' | 'md';

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary:
    'bg-[var(--accent-primary)] text-white hover:bg-[var(--accent-hover)] border border-transparent',
  secondary:
    'bg-[var(--bg-surface)] text-[var(--text-primary)] border border-[var(--border-subtle)] hover:border-[var(--accent-primary)]',
  ghost:
    'bg-transparent text-[var(--text-secondary)] border border-transparent hover:bg-[var(--bg-elevated)] hover:text-[var(--text-primary)]',
};

const SIZE_CLASSES: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-xs',
  md: 'px-4 py-2 text-sm',
};

const BASE_CLASSES =
  'inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors disabled:pointer-events-none disabled:opacity-50';

interface SharedButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
}

type NativeButtonProps = SharedButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    to?: never;
    href?: never;
  };

type RouterLinkButtonProps = SharedButtonProps &
  Omit<LinkProps, 'className' | 'children'> & {
    to: string;
    href?: never;
  };

type AnchorButtonProps = SharedButtonProps & {
  href: string;
  to?: never;
  target?: string;
  rel?: string;
};

export type ButtonProps =
  | NativeButtonProps
  | RouterLinkButtonProps
  | AnchorButtonProps;

export function Button(props: ButtonProps) {
  const { variant = 'primary', size = 'md', className = '', children } = props;
  const classes = `${BASE_CLASSES} ${VARIANT_CLASSES[variant]} ${SIZE_CLASSES[size]} ${className}`;

  if ('to' in props && props.to !== undefined) {
    const { to, variant: _v, size: _s, className: _c, children: _ch, ...rest } = props;
    void _v;
    void _s;
    void _c;
    void _ch;
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  if ('href' in props && props.href !== undefined) {
    const { href, target, rel, variant: _v, size: _s, className: _c, children: _ch } = props;
    void _v;
    void _s;
    void _c;
    void _ch;
    const safeRel = target === '_blank' ? (rel ?? 'noopener noreferrer') : rel;
    return (
      <a href={href} target={target} rel={safeRel} className={classes}>
        {children}
      </a>
    );
  }

  const { variant: _v, size: _s, className: _c, children: _ch, type = 'button', ...rest } = props;
  void _v;
  void _s;
  void _c;
  void _ch;
  return (
    <button type={type} className={classes} {...rest}>
      {children}
    </button>
  );
}
