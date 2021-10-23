import { FAQModel } from "components/FaqComponent";
import { PropertyProps } from "components/PropertyCard";
import { SadhanaCardProps } from "components/SadhanaCard";

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

const Benefits: PropertyProps[] = [
  {
    title: "Physical Wellbeing",
    icon: "/ui/yoga-sutra.png",
    subtitle: "Increased flexibility, stamina and physical strength",
  },
  {
    title: "Mental Wellbeing",
    icon: "/ui/compassion.png",
    subtitle: "Improved emotional stability and clarity of thought",
  },
  {
    title: "Spiritual Wellbeing",
    icon: "/ui/atom.png",
    subtitle: "Enhanced sense of positivity, intuition and gratitude",
  },
];

const FAQs: FAQModel[] = [
  {
    question: "How long is the programme?",
    answer: "It is a daily programme for a period of 90 days (12 weeks).",
  },
  {
    question: "Do I need any prior experience to start the OURS programme?",
    answer:
      "No prior experience with Yoga is required to start the programme. We've designed this program for someone that wishes to learn yoga right from step 1 (the basics) However, the programme is also apt for people that do have experience with Yoga, and who wish to deepen their practice through a traditional perspective.",
  },
  {
    question: "Do I have to do all the daily practices?",
    answer:
      "In order to experience the benefits, the entire practice needs to be done sincerely. Hence, we have provided recommended times for each of the practices. If you’re unable to make it at that time, you should try making up for it when free.",
  },
  {
    question: "How much time do I have to commit each day?",
    answer:
      "The daily practice takes a total of 1 hour, broken up in to 4 different practices through the day, from morning to night.",
  },
  {
    question: "When will I start seeing the benefits?",
    answer:
      "Like any other practice, it takes dedication to see results. When it comes to Yoga, these benefits tend to be more subtle and inward. You will start seeing a change in your being within the first month of practice. However, you should be disciplined and sincere, if you wish to see any results.",
  },
  {
    question: "How long can I access the programme for?",
    answer:
      "You will have access to OURS for 6 months from the day you sign up. We are working on additions to the programme as well as adding new functionality. You will be updated as we progress.",
  },
  {
    question: "Will I need any equipment?",
    answer:
      "No equipment is needed. All you need is a Yoga Mat for the practices as well as loose, comfortable clothing.",
  },
  {
    question: "I can’t afford the programme. What should I do?",
    answer:
      "Our vision is to make this affordable and accessible to all. Hence, if you are facing a financial hardship and still wish to subscribe, you can reach out to us on info@ours.community, and we can figure an optimal solution.",
  },
];

export default { PropertiesOfYoga, Sadhanas, Benefits, FAQs };
