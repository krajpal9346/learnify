import {
  CircleHelp,
  User,
  BookOpen,
  CreditCard,
  Wallet,
  Headphones,
} from "lucide-react";

export const faqCategories = (faqData) => [
  {
    key: "all",
    title: "All Questions",
    icon: CircleHelp,
    count: faqData.all.length,
  },
  {
    key: "gettingStarted",
    title: "Getting Started",
    icon: CircleHelp,
    count: faqData.gettingStarted.length,
  },
  {
    key: "accountProfile",
    title: "Account & Profile",
    icon: User,
    count: faqData.accountProfile.length,
  },
  {
    key: "coursesLearning",
    title: "Courses & Learning",
    icon: BookOpen,
    count: faqData.coursesLearning.length,
  },
  {
    key: "subscriptionsBilling",
    title: "Subscriptions & Billing",
    icon: CreditCard,
    count: faqData.subscriptionsBilling.length,
  },
  {
    key: "payments",
    title: "Payments",
    icon: Wallet,
    count: faqData.payments.length,
  },
  {
    key: "technicalSupport",
    title: "Technical Support",
    icon: Headphones,
    count: faqData.technicalSupport.length,
  },
];
