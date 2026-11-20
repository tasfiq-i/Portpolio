import type { Education } from '../types';

export const EDUCATION_ITEMS: Education[] = [
  {
    id: 'iau-honours',
    institution: 'Islamic Arabic University, Dhaka',
    degree: 'Honours',
    subject: 'Arabic Language & Literature',
    type: 'academic',
    result: 'CGPA: 3.70/4.00',
    passingYear: '2024',
    status: 'completed',
  },
  {
    id: 'masters-pending',
    institution: '[Institution Pending Verification]',
    degree: "Master's (Ongoing — Verification Pending)",
    subject: '[Subject Pending Verification]',
    type: 'academic',
    status: 'in-progress',
  },
  {
    id: 'training-placeholder',
    institution: '[Training Program / Provider Pending]',
    degree: 'Full Stack Web Development (.NET & React)',
    subject: 'C#, ASP.NET MVC / Core, Web API, SQL Server, React, TypeScript',
    type: 'training',
    passingYear: '[Dates Pending]',
    status: 'in-progress',
  },
];
