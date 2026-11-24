import { Marquee } from '../../../components/motion/Marquee';

const MARQUEE_ITEMS = [
  'React',
  'TypeScript',
  'C#',
  'ASP.NET Core',
  'ASP.NET MVC',
  'Entity Framework Core',
  'SQL Server',
  'RESTful Web APIs',
  'Swagger / OpenAPI',
  'Postman Verification',
  'Git & GitHub',
];

export function MarqueeSection() {
  return (
    <div className="w-full overflow-hidden border-y border-[var(--line)] bg-[var(--surface)]/40 py-5 sm:py-7">
      <Marquee items={MARQUEE_ITEMS} speed={38} />
    </div>
  );
}
