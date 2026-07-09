export const faqData = {
  all: [],

  gettingStarted: [
    {
      question: "What is Learnify AI?",
      answer: "Learnify AI is an AI-powered learning platform that provides personalized course recommendations, learning roadmaps, and study resources based on your goals, interests, and current skill level."
    },
    {
      question: "How do I get started with Learnify AI?",
      answer: "Simply create an account, complete your profile, select your learning goals, and our AI will generate a personalized learning roadmap for you."
    },
    {
      question: "Is Learnify AI free to use?",
      answer: "Yes. Learnify AI offers a free plan with core features, along with Pro and Premium plans for advanced functionality."
    },
    {
      question: "Do I need any prior technical knowledge?",
      answer: "No. Learnify AI is designed for learners of all experience levels, from complete beginners to experienced professionals."
    },
    {
      question: "Can I use Learnify AI on mobile devices?",
      answer: "Yes. Learnify AI is fully responsive and works seamlessly on desktops, tablets, and mobile devices."
    },
    {
      question: "How long does the onboarding process take?",
      answer: "Most users complete onboarding and receive personalized recommendations within 5 minutes."
    }
  ],

  accountProfile: [
    {
      question: "How do I edit my profile information?",
      answer: "You can update your personal information, interests, and learning preferences from the Profile Settings page."
    },
    {
      question: "Can I change my learning goals later?",
      answer: "Yes. You can update your learning goals anytime and your recommendations will automatically adapt."
    },
    {
      question: "How do I reset my password?",
      answer: "Click on 'Forgot Password' on the login page and follow the instructions sent to your registered email address."
    },
    {
      question: "Can I delete my account permanently?",
      answer: "Yes. Account deletion options are available under Account Settings."
    },
    {
      question: "Can I change my registered email address?",
      answer: "Yes. You can update your email address from your account settings."
    },
    {
      question: "How can I manage notifications?",
      answer: "Notification preferences can be customized from the Notifications section in Settings."
    }
  ],

  coursesLearning: [
    {
      question: "How does Learnify AI recommend courses?",
      answer: "Our AI analyzes your skills, goals, learning history, and interests to recommend the most relevant courses and resources."
    },
    {
      question: "Can I follow multiple learning paths simultaneously?",
      answer: "Yes. You can create and manage multiple learning roadmaps for different career goals or skills."
    },
    {
      question: "How often are recommendations updated?",
      answer: "Recommendations update automatically as you complete courses, gain new skills, or change your goals."
    },
    {
      question: "Can I track my learning progress?",
      answer: "Yes. Learnify AI provides detailed analytics, progress tracking, learning streaks, and milestones."
    },
    {
      question: "Can I add external courses to my roadmap?",
      answer: "Yes. You can manually add courses from platforms such as Coursera, Udemy, and YouTube."
    },
    {
      question: "Does Learnify AI provide certificates?",
      answer: "Premium users receive certificates for completed learning paths and assessments."
    },
    {
      question: "Does Learnify AI help with interview preparation?",
      answer: "Yes. Premium plans include interview preparation materials, mock interviews, and coding practice."
    }
  ],

  subscriptionsBilling: [
    {
      question: "What subscription plans are available?",
      answer: "Learnify AI currently offers Free, Pro, and Premium plans designed for different learning needs."
    },
    {
      question: "Can I upgrade my subscription later?",
      answer: "Yes. You can upgrade or downgrade your plan at any time from the Billing section."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes. Subscriptions can be cancelled at any time without any cancellation fees."
    },
    {
      question: "Do you offer refunds?",
      answer: "Yes. Paid plans come with a 14-day money-back guarantee."
    },
    {
      question: "Will my subscription renew automatically?",
      answer: "Yes. Subscriptions renew automatically unless auto-renewal is disabled in your billing settings."
    }
  ],

  payments: [
    {
      question: "What payment methods do you accept?",
      answer: "We accept credit cards, debit cards, UPI, net banking, and selected digital wallets."
    },
    {
      question: "Are my payment details secure?",
      answer: "Yes. All payments are processed using secure payment gateways with industry-standard encryption."
    },
    {
      question: "Can I receive invoices for my payments?",
      answer: "Yes. Invoices are automatically generated and available in your billing history."
    },
    {
      question: "Can I change my payment method?",
      answer: "Yes. You can update your payment method anytime from Billing Settings."
    }
  ],

  technicalSupport: [
    {
      question: "Why am I not receiving recommendations?",
      answer: "Please ensure your profile is complete and your learning goals have been selected."
    },
    {
      question: "The website is loading slowly. What should I do?",
      answer: "Try refreshing the page, clearing your browser cache, or checking your internet connection."
    },
    {
      question: "How do I report a bug or issue?",
      answer: "You can report bugs directly from the Help Center or by contacting support."
    },
    {
      question: "Does Learnify AI work offline?",
      answer: "Offline support is currently under development and will be available in a future update."
    }
  ]
};

faqData.all = [
  ...faqData.gettingStarted,
  ...faqData.accountProfile,
  ...faqData.coursesLearning,
  ...faqData.subscriptionsBilling,
  ...faqData.payments,
  ...faqData.technicalSupport
];
