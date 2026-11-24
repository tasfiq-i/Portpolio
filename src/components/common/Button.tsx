import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { Link, type LinkProps } from 'react-router-dom';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'sm' | 'md';

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary:
    'border border-transparent bg-[var(--ink)] text-[var(--bg)] hover:-translate-y-0.5 hover:bg-[var(--accent)] hover:text-white hover:shadow-[0_10px_40px_var(--accent-glow)]',
  secondary:
    'border border-[var(--line-strong)] bg-[var(--surface)] text-[var(--ink)] hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-[var(--accent)]',
  ghost:
    'border border-transparent bg-transparent text-[var(--ink-muted)] hover:bg-[var(--surface-2)] hover:text-[var(--ink)]',
};

const SIZE_CLASSES: Record<ButtonSize, string> = {
  sm: 'h-9 px-4 text-sm',
  md: 'h-12 px-6 text-[0.95rem]',
};

const BASE_CLASSES =
  'btn inline-flex items-center justify-center gap-2 rounded-[var(--r-sm)] font-display font-semibold tracking-[-0.01em] transition-[transform,background-color,color,border-color,box-shadow] duration-200 ease-[var(--ease-out-expo)] active:scale-[0.97] disabled:pointer-events-none disabled:opacity-50';

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
