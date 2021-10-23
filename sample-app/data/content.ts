import { PropertyProps } from "components/PropertyCard";
import { SadhanaCardProps } from "pages";

const PropertiesOfYoga: PropertyProps[] = [
  {
    icon: "/ui/bhagvadgita.png",
    title: "Traditional",
    subtitle: "Designed by alumni of the oldest Yoga institutes in India.",
  },
  {
    icon: "/ui/non-duality.png",
    title: "Holistic",
    subtitle: "A set of daily practices for your mind, body and spirit.",
  },
  {
    icon: "/ui/compassion.png",
    title: "For Beginners",
    subtitle: "Master the basics, and unlock new techniques as you progress.",
  },
];

const Sadhanas: SadhanaCardProps[] = [
  {
    title: "Haṭha Yoga",
    description:
      "Start your day with a combination of Postures (Āsana) and Breathwork (Prāṇāyāma) to balance the energy in your body and enhance meditation.",
    leadBy: "Harshvardhan Jhaveri",
    alumniOf: "Kaivalyadham Yoga Institute",
    icon: "/ui/vrikshasan.png",
    startTime: "7:00 AM",
    minutes: 30,
    cardBg: "#F4DFB0",
  },
  {
    title: "Meditation",
    description:
      "A morning Meditation (Dhyāna) to calm the mind and detach from the senses. An ancient tecnique to help relieve stress and stay more present.",
    leadBy: "Gunjan Sugandhi",
    alumniOf: "The Yoga Institute",
    icon: "/ui/padmasan.png",
    startTime: "7:30 AM",
    minutes: 10,
    cardBg: "#ACD9EA",
  },
  {
    title: "Mantra Chanting",
    description:
      "Concentration (Dhāraṇā) through the repetitive chanting of sacred words in Sanskrit helps release positive energy, which leads to lasting inner peace.",
    artists: ["Anurag Dhoundeyal", "Nrtya", "Jahaan Shah", "Srishti Biyani"],
    icon: "/ui/aum.png",
    startTime: "6:00 PM",
    minutes: 10,
    cardBg: "#DD7C3A",
  },
  {
    title: "Yoga Nidra",
    description:
      "End the day with Yoga Nidra, an ancient relaxation tool for achieving Withdrawal (Pratyāhāra). It is a state of consciousness between the waking and dreaming.",
    leadBy: "Gunjan Sugandhi",
    alumniOf: "The Yoga Institute",
    icon: "/ui/shavasan.png",
    startTime: "10:00 PM",
    minutes: 10,
    cardBg: "#364263",
  },
];

export default { PropertiesOfYoga, Sadhanas };
