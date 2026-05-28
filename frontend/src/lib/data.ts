export const biodata = {
  name: "Vivek Satishbhai Rupani",
  firstName: "Vivek",
  dob: "29/12/2001",
  age: "23",
  caste: "Leuva Patel",
  religion: "Hindu",
  height: "5'10\"",
  weight: "67 Kg",
  qualification: "B.Com",
  occupation: "Gujarat Police",
  hobbies: ["Playing Flute", "Piano", "Traveling"],
  address: "Surat, Gujarat",
  nativePlace: "Chakmapar, Botad",
  tagline: "ગુજરાતી સંસ્કાર સાથે આધુનિક વિચાર",
  taglineEnglish: "Gujarati Values with Modern Vision",

  about: {
    quote: "A man of tradition with a heart full of music, a soul anchored in family values, and eyes set on the horizon.",
    description:
      "Vivek is a calm and grounded individual who carries forward the beautiful traditions of his Gujarati roots while embracing the modern world. Working with the Gujarat Police, he understands discipline, dedication, and service. Beyond his professional life, he finds solace in music — the melodious notes of his flute and piano fill the home with warmth. An avid traveler, he believes in experiencing life beyond boundaries while staying true to his roots.",
    traits: [
      { label: "Calm & Composed", icon: "heart", description: "A peaceful personality with a grounded temperament" },
      { label: "Family-Oriented", icon: "home", description: "Deeply values family bonds and traditions" },
      { label: "Music Lover", icon: "music", description: "Plays flute and piano with passion" },
      { label: "Loves Traveling", icon: "compass", description: "Explores new places while staying rooted" },
      { label: "Respectful", icon: "handshake", description: "Treats everyone with kindness and respect" },
      { label: "Traditional & Modern", icon: "sparkles", description: "Blends cultural values with contemporary thinking" },
    ],
  },

  family: {
    father: {
      name: "Satishbhai Parshottambhai Rupani",
      relation: "Father",
    },
    mother: {
      name: "Nayanben Satishbhai Rupani",
      relation: "Mother",
    },
    brother: {
      name: "Mahendrabhai Satishbhai Rupani",
      relation: "Brother",
    },
    nativePlace: "Chakmapar, Botad",
  },

  maternal: {
    uncle: {
      name: "Rajeshbhai Savjibhai Dungarani",
      relation: "Maternal Uncle (મામા)",
    },
    place: "Mandavdhar, Gadhda (Swamina)",
  },

  contact: {
    phone: "+91 8141700378",
    whatsapp: "+91 8141700378",
    email: "[EMAIL_ADDRESS]",
  },

  gallery: [
    {
      src: "/images/hero-portrait.jpg",
      alt: "Traditional Portrait",
      caption: "Traditional Look",
    },
    {
      src: "/images/gallery-traditional.jpg",
      alt: "Traditional Attire",
      caption: "Ethnic Wear",
    },
    {
      src: "/images/gallery-casual.jpg",
      alt: "Casual Portrait",
      caption: "Casual Style",
    },
    {
      src: "/images/gallery-formal.jpg",
      alt: "Formal Portrait",
      caption: "Formal Look",
    },
  ],
} as const;

export type Biodata = typeof biodata;
