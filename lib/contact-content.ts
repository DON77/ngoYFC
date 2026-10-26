import { organization } from "./organization";

export const contactHero = {
  badge: "Contact Us",

  title:
    "Let's Start A Conversation",

  description:
    "Whether you want to collaborate, volunteer, support our mission or learn more about our work, we would love to hear from you.",
};



export const contactInfo = [
  {
    title: "Office",

    value:
      organization.address,

    description:
      "Our main coordination office.",
  },


  {
    title: "Email",

    value:
      organization.email,

    description:
      "Send us your questions and proposals.",
  },


];



export const socialLinks = organization.socials;