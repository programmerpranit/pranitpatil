export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  start: string;
  end: string;
  impact: string;
  bullets: string[];
}

export const experience: ExperienceItem[] = [
  {
    role: "Software Developer 1",
    company: "Pure Billion Technologies",
    location: "Mumbai, India",
    start: "Jun 2024",
    end: "Present",
    impact: "Building features for a traffic analysis platform used by 200,000+ people.",
    bullets: [
      "Build features for a traffic analysis platform used by 200,000+ people.",
      "Work with cross-functional remote teams to ship critical features on schedule.",
      "Render 2 lakh+ data points on the frontend without dropping performance.",
      "Raised the app's accessibility score by 60%.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "WebX Studio Digital",
    location: "Remote",
    start: "Nov 2022",
    end: "Jul 2023",
    impact: "Improved app efficiency by 70% and cut server costs 3x through backend optimization.",
    bullets: [
      "Improved app efficiency by 70% by refining core algorithms.",
      "Built an access-based admin panel with clients and designers.",
      "Cut server costs 3x and response times by 50% through backend optimization.",
      "Managed a team of 4 interns and their feature deliveries.",
    ],
  },
];
