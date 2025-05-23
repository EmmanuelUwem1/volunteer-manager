import { Category, VolunteerOpportunity } from "@/types/volunteer";

export const categories: Category[] = [
  "Education",
  "Environment",
  "Health",
  "Animals",
  "Community",
  "Crisis Support",
  "Arts & Culture",
  "Sports & Recreation",
  "Technology",
  "Food & Hunger",
];

export const volunteerOpportunities: VolunteerOpportunity[] = [
  {
    id: "1",
    title: "Tutor Math at Local School",
    organization: "Bright Futures Education",
    location: "San Francisco, CA",
    datePosted: "2025-05-15",
    category: "Education",
    description:
      "Help middle school students improve their math skills. Sessions will be held after school hours twice a week.",
    duration: "3 months, 4 hours/week",
    skillsRequired: ["Teaching", "Mathematics", "Patience"],
    contactEmail: "volunteer@brightfutures.org",
  },
  {
    id: "2",
    title: "Beach Cleanup Volunteer",
    organization: "Ocean Guardians",
    location: "Santa Monica, CA",
    datePosted: "2025-05-10",
    category: "Environment",
    description:
      "Join our monthly beach cleanup to help protect marine wildlife and keep our shorelines clean for everyone to enjoy.",
    duration: "One-time event, 4 hours",
    skillsRequired: ["Physical Ability", "Environmental Awareness"],
    contactEmail: "cleanup@oceanguardians.org",
  },
  {
    id: "3",
    title: "Hospital Support Volunteer",
    organization: "Mercy Medical Center",
    location: "Chicago, IL",
    datePosted: "2025-05-18",
    category: "Health",
    description:
      "Assist hospital staff with non-medical tasks such as patient companionship, wayfinding help for visitors, and administrative support.",
    duration: "Ongoing, 6 hours/week",
    skillsRequired: ["Communication", "Empathy", "Reliability"],
    contactEmail: "volunteers@mercymedical.org",
  },
  {
    id: "4",
    title: "Animal Shelter Assistant",
    organization: "Paws & Whiskers Rescue",
    location: "Austin, TX",
    datePosted: "2025-05-05",
    category: "Animals",
    description:
      "Help care for shelter animals by feeding, cleaning, and providing companionship. Training will be provided.",
    duration: "Flexible schedule, minimum 2 hours/week",
    skillsRequired: ["Animal Handling", "Compassion"],
    contactEmail: "help@pawsrescue.org",
  },
  {
    id: "5",
    title: "Food Bank Volunteer",
    organization: "Community Food Share",
    location: "Denver, CO",
    datePosted: "2025-05-20",
    category: "Food & Hunger",
    description:
      "Help sort and distribute food to those in need. Tasks include packaging food items, organizing donations, and assisting visitors.",
    duration: "Ongoing, 3-4 hours/week",
    skillsRequired: ["Organization", "Customer Service"],
    contactEmail: "volunteer@communityfoodshare.org",
  },
  {
    id: "6",
    title: "Tech Support for Seniors",
    organization: "Digital Bridges",
    location: "Remote",
    datePosted: "2025-05-12",
    category: "Technology",
    description:
      "Provide technical support and training to seniors who are learning to use computers and smartphones. Help bridge the digital divide!",
    duration: "6 months, 2 hours/week",
    skillsRequired: ["Technical Knowledge", "Teaching", "Patience"],
    contactEmail: "help@digitalbridges.org",
  },
  {
    id: "7",
    title: "Community Garden Volunteer",
    organization: "Green Thumb Coalition",
    location: "Portland, OR",
    datePosted: "2025-05-08",
    category: "Environment",
    description:
      "Help maintain our community garden which provides fresh produce to local food banks and creates green space in urban areas.",
    duration: "Seasonal (Spring-Fall), 3 hours/week",
    skillsRequired: ["Gardening", "Physical Ability"],
    contactEmail: "garden@greenthumb.org",
  },
  {
    id: "8",
    title: "Crisis Text Line Responder",
    organization: "Hope Connection",
    location: "Remote",
    datePosted: "2025-05-17",
    category: "Crisis Support",
    description:
      "Provide support via text messages to individuals in crisis. Comprehensive training will be provided to all volunteers.",
    duration: "6-month commitment, 4 hours/week",
    skillsRequired: ["Empathy", "Communication", "Emotional Resilience"],
    contactEmail: "support@hopeconnection.org",
  },
  {
    id: "9",
    title: "STEM Tutor for Girls",
    organization: "Women in Tech Nigeria",
    location: "Lagos, Nigeria",
    datePosted: "2025-05-11",
    category: "Education",
    description:
      "Help young girls develop STEM skills through mentorship and training sessions.",
    duration: "6 months, 3 hours/week",
    skillsRequired: ["Teaching", "Engineering", "Programming"],
    contactEmail: "volunteer@womenintechnigeria.org",
  },
  {
    id: "10",
    title: "Environmental Cleanup Volunteer",
    organization: "Go Green Naija",
    location: "Abuja, Nigeria",
    datePosted: "2025-05-14",
    category: "Environment",
    description:
      "Participate in city-wide cleanup events to promote environmental sustainability.",
    duration: "Monthly event, 5 hours",
    skillsRequired: ["Environmental Awareness", "Teamwork"],
    contactEmail: "contact@gogreennigeria.org",
  },
  {
    id: "11",
    title: "Frontend Engineer for Non-Profit Website",
    organization: "Code4Africa",
    location: "Remote (Africa)",
    datePosted: "2025-05-19",
    category: "Technology",
    description:
      "Help build an interactive platform for non-profit organizations to showcase their work.",
    duration: "3 months, flexible hours",
    skillsRequired: ["React", "Next.js", "Tailwind CSS"],
    contactEmail: "tech@code4africa.org",
  },

  // African Opportunities
  {
    id: "12",
    title: "Medical Outreach Volunteer",
    organization: "Doctors Without Borders - Kenya",
    location: "Nairobi, Kenya",
    datePosted: "2025-05-16",
    category: "Health",
    description:
      "Assist doctors and nurses in providing healthcare to underserved communities.",
    duration: "Ongoing, 6 hours/week",
    skillsRequired: ["Medical Assistance", "First Aid", "Empathy"],
    contactEmail: "outreach@msf-kenya.org",
  },
  {
    id: "13",
    title: "Software Engineer for Social Impact",
    organization: "Tech for Good Ghana",
    location: "Accra, Ghana",
    datePosted: "2025-05-21",
    category: "Technology",
    description:
      "Develop innovative software solutions to tackle social issues in Ghana.",
    duration: "4 months, 10 hours/week",
    skillsRequired: ["Node.js", "Python", "Cloud Computing"],
    contactEmail: "engineers@techforgoodghana.org",
  },

  // International Opportunities
  {
    id: "14",
    title: "AI Research Volunteer",
    organization: "Open AI for Social Change",
    location: "Remote",
    datePosted: "2025-05-18",
    category: "Technology",
    description:
      "Assist in AI research projects aimed at solving humanitarian problems.",
    duration: "Ongoing, flexible hours",
    skillsRequired: ["Machine Learning", "Data Science"],
    contactEmail: "research@openaisocial.org",
  },
  {
    id: "15",
    title: "Legal Aid for Refugees",
    organization: "Global Justice Initiative",
    location: "London, UK",
    datePosted: "2025-05-07",
    category: "Legal Aid",
    description:
      "Provide free legal consultation and representation for refugees seeking asylum.",
    duration: "6 months, 5 hours/week",
    skillsRequired: ["Law", "Human Rights", "Communication"],
    contactEmail: "legal@globaljustice.org",
  },
  {
    id: "16",
    title: "Disaster Relief Coordinator",
    organization: "International Red Cross",
    location: "Jakarta, Indonesia",
    datePosted: "2025-05-09",
    category: "Disaster Relief",
    description:
      "Coordinate relief efforts and logistics for communities affected by natural disasters.",
    duration: "Ongoing, full-time",
    skillsRequired: ["Crisis Management", "Supply Chain"],
    contactEmail: "relief@redcross.org",
  },
  {
    id: "17",
    title: "Graphic Designer for Charity Campaigns",
    organization: "Visual Impact Foundation",
    location: "Remote",
    datePosted: "2025-05-22",
    category: "Arts & Culture",
    description:
      "Create compelling visuals for global charity campaigns promoting social impact.",
    duration: "3 months, flexible hours",
    skillsRequired: ["Graphic Design", "Adobe Photoshop", "Illustration"],
    contactEmail: "design@visualimpact.org",
  },
];
