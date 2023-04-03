import MoneyImage from "../easybank/images/image-currency.jpg";
import RestuarantImage from "../easybank/images/image-restaurant.jpg";
import PlaneImage from "../easybank/images/image-plane.jpg";
import ConfettiImage from "../easybank/images/image-confetti.jpg";

const articles = [
  {
    author: "Claire Robinson",
    title: "Receive money in any currency with no fees",
    src: MoneyImage,
    alt: "image-currency.jpg",
    content: `
  The world is getting smaller and we’re becoming more mobile. So why should you be 
  forced to only receive money in a single …`,
  },
  {
    author: " Wilson Hutton",
    title: "Treat yourself without worrying about money",
    src: RestuarantImage,
    alt: `image-restaurant.jpg`,
    content: `
  Our simple budgeting feature allows you to separate out your spending and set 
  realistic limits each month. That means you …`,
  },
  {
    author: "Wilson Hutton",
    title: "Take your Easybank card wherever you go",
    src: PlaneImage,
    alt: "image-plane.jpg",
    content: `
  We want you to enjoy your travels. This is why we don’t charge any fees on purchases 
  while you’re abroad. We’ll even show you …`,
  },
  {
    author: " Claire Robinson",
    title: "Our invite-only Beta accounts are now live!",
    src: ConfettiImage,
    alt: "image-confetti.jpg",
    content: `
  After a lot of hard work by the whole team, we’re excited to launch our closed beta. 
  It’s easy to request an invite through the site ...`,
  },
];

export default articles;
