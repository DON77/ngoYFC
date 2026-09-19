export const eventsHero = {
  badge: "Events & Activities",

  title:
    "Join Our Upcoming Events",

  description:
    "Discover opportunities to participate, learn, connect and contribute to meaningful community initiatives.",
};



export const eventCategories = [
  "All",
  "Training",
  "Community",
  "Conference",
  "Volunteer",
];



export const events = [

  {
    id: 1,

    slug:
      "youth-innovation-forum-2026",

    title:
      "Youth Innovation Forum 2026",

    category:
      "Conference",

    image:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1000",

    date:
      "September 14, 2026",

    time:
      "10:00 AM - 17:00 PM",

    location:
      "Yerevan, Armenia",

    description:
      "A full-day event connecting young innovators, entrepreneurs and development partners.",

    overview:
      `
      The Youth Innovation Forum brings together
      young leaders, organizations and experts
      to exchange ideas and create new solutions
      for community challenges.
      `,


    schedule: [
      "Opening Ceremony",
      "Innovation Workshops",
      "Networking Session",
      "Closing Discussion",
    ],


    registration:
      "/contact",


    gallery: [
      "https://images.unsplash.com/photo-1511578314322-379afb476865?w=900",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=900",
    ],
  },



  {
    id: 2,

    slug:
      "volunteer-orientation-day",

    title:
      "Volunteer Orientation Day",

    category:
      "Volunteer",

    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1000",

    date:
      "October 3, 2026",

    time:
      "11:00 AM",

    location:
      "Hybrid",

    description:
      "Meet our team, discover projects and learn how you can contribute.",

    overview:
      `
      A welcoming session for new volunteers
      interested in joining our activities.
      `,


    schedule: [
      "Organization Introduction",
      "Project Presentations",
      "Volunteer Registration",
    ],


    registration:
      "/contact",


    gallery: [],
  },

];