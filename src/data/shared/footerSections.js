import { ROUTES } from "../routes";

export const footerSections = [
    {
        title: "Product",

        links: [
            {
                label: "Features",
                path: ROUTES.FEATURES,
            },

            {
                label: "How It Works",
                path: ROUTES.HOW_IT_WORKS,
            },

            {
                label: "Pricing",
                path: ROUTES.PRICING,
            },

            {
                label: "Roadmap",
                path: ROUTES.ROADMAP,
            },

            {
                label: "Updates",
                path: ROUTES.UPDATES,
            },
        ],
    },

    {
        title: "Resources",

        links: [
            {
                label: "Blogs",
                path: ROUTES.BLOGS,
            },
            {
                label: "Community",
                path: ROUTES.COMMUNITY,
            }
        ],
    },

    {
        title: "Company",

        links: [
            {
                label: "About Us",
                path: ROUTES.ABOUT_US,
            },

            {
                label: "Contact Us",
                path: ROUTES.CONTACT_US,
            },

            {
                label: "Privacy Policy",
                path: ROUTES.PRIVACY_POLICY,
            },

            {
                label: "Terms of Service",
                path: ROUTES.TERMS_OF_SERVICE,
            },
        ],
    },

    {
        title: "Support",

        links: [
            {
                label: "FAQs",
                path: ROUTES.FAQS,
            },

            {
                label: "Help Center",
                path: ROUTES.HELP_CENTER,
            },

            {
                label: "Feedback",
                path: ROUTES.FEEDBACK,
            },
        ],
    },
];