import OpenAPIIcon from "../easybank/images/icon-api.svg";
import BankingIcon from "../easybank/images/icon-online.svg";
import BudgetingIcon from "../easybank/images/icon-budgeting.svg";
import OnboardingIcon from "../easybank/images/icon-onboarding.svg";

const services = [
  {
    title: " Online Banking",
    alt: "icon-online.svg",
    src: BankingIcon,
    content: ` Our modern web and mobile applications allow you to keep track of your finances 
  wherever you are in the world.`,
  },
  {
    title: "  Simple Budgeting",
    alt: "icon-budgeting.svg",
    src: BudgetingIcon,
    content: `See exactly where your money goes each month. Receive notifications when you’re 
  close to hitting your limits.`,
  },
  {
    title: " Fast Onboarding",
    alt: "icon-onboarding.svg",
    src: OnboardingIcon,
    content: `We don’t do branches. Open your account in minutes online and start taking control 
  of your finances right away.`,
  },
  {
    title: " Open API",
    alt: "icon-api.svg",
    src: OpenAPIIcon,
    content: ` Manage your savings, investments, pension, and much more from one account. Tracking 
  your money has never been easier.`,
  },
];

export default services;
