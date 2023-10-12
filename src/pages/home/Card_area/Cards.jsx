/* eslint-disable no-unused-vars */
import React from "react";
import Card from "./Card";

const cardData = [
  {
    card1: {
      title: "একাডেমিক কার্যক্রম",
      img: "./src/assets/Cards_images/card1.png",
      links: [
        "ক্লাশ রুটিন",
        "পরীক্ষার রুটিন",
        "সেমিস্টার প্ল্যান",
        "পরীক্ষার ফলাফল",
      ],
    },
    card2: {
      title: "প্রতিষ্ঠান সম্পর্কিত",
      img: "./src/assets/Cards_images/card2.jpg",
      links: [
        "প্রতিষ্ঠানের সংক্ষিপ্ত ইতিহাস",
        "লক্ষ্য ও উদ্দেশ্য",
        "প্রতিষ্ঠান কাঠামো ও অবকাঠামো",
        "ফোকাল পয়েন্টের তালিকা",
      ],
    },
  },
  {
    card1: {
      title: "বার্ষিক কর্মসম্পাদন চুক্তি",
      img: "./src/assets/Cards_images/card3.png",
      links: [
        "নীতিমালা [Policy]",
        "প্রজ্ঞাপন/পরিপত্র [Notification]",
        "প্রতিষ্ঠানের চুক্তি",
        "অগ্রগতি প্রতিবেদন",
        "এপিএএমএস সফটওয়্যার লিংক",
      ],
    },
    card2: {
      title: "সুশাসন ও সংস্কারমূলক কর্মসম্পাদন",
      img: "./src/assets/Cards_images/card4.jpg",
      links: [
        "জাতীয় শুদ্ধাচার কৌশল",
        "শুদ্ধাচার কর্মপরিকল্পনা",
        "ই-গভর্ন্যান্স/উদ্ভাবন কর্মপরিকল্পনা",
        "সেবা প্রদান প্রতিশ্রুতি কর্মপরিকল্পনা",
      ],
    },
  },
  {
    card1: {
      title: "জব প্লেসমেন্ট সেল",
      img: "./src/assets/Cards_images/card5.png",
      links: [
        "জব নোটিশ",
        "প্রাক্তন শিক্ষার্থী নিবন্ধকরণ",
        "প্রাক্তন শিক্ষার্থী তালিকা",
      ],
    },
    card2: {
      title: "ডাউনলোড",
      img: "./src/assets/Cards_images/card6.jfif",
      links: [
        "একাডেমিক ক্যালেন্ডার",
        "প্রবিধান-২016",
        "প্রবিধান-২0২২",
        "কোর্স স্ট্রাকচার",
      ],
    },
  },
  {
    card1: {
      title: "নীতিমালা",
      img: "./src/assets/Cards_images/card7.jpg",
      links: [
        "জাতীয় শিক্ষানীতি-2010",
        "আইসিটি নীতিমালা-2015",
        "জাতীয় দক্ষতা উন্নয়ন নীতি-2011",
      ],
    },
    card2: {
      title: "ই-টেন্ডার",
      img: "./src/assets/Cards_images/card8.gif",
      links: [
        "দরপত্র বিজ্ঞপ্তি/নোটিশ",
        "বার্ষিক ক্রয় পরিকল্পনা",
        "ই-জিপি পোর্টাল",
      ],
    },
  },
  {
    card1: {
      title: "ফরম ও প্রকাশনা",
      img: "./src/assets/Cards_images/card9.jpg",
      links: [
        "জিপিএফ এর আবেদন ফরম",
        "বিদেশ ভ্রমনের জন্য আবেদন",
        "পারিবারিক পেনশন ফরম",
        "পারিবারিক পেনশন ফরম",
      ],
    },
    card2: {
      title: "তথ্য অধিকার",
      img: "./src/assets/Cards_images/card10.png",
      links: [
        "তথ্য প্রদানকারী কর্মকর্তা",
        "তথ্য প্রাপ্তির ফরম",
        "স্বপ্রণোদিত তথ্য প্রকাশ নির্দেশিকা ও তথ্যের ক্যাটাগরি",
      ],
    },
  },
  {
    card1: {
      title: "“ঘরে বসে কারিগরি শিক্ষা”",
      img: "./src/assets/Cards_images/card11.png",
      links: ["ইউবটিউব চ্যানেল", "ফেসবুক পেজ", "ক্লাশ রুটিন", "onlinetvet.com"],
    },
    card2: {
      title: "রিচার্স এন্ড নলেজ ম্যানেজমেন্ট",
      img: "./src/assets/Cards_images/card12.png",
      links: [
        "নোটশ/অফিস আদেশ",
        "প্রজ্ঞাপন",
        "গবেষণা নীতিমালা [Policy]",
        "গবেষণা কার্যক্রম",
      ],
    },
  },
];

const Cards = () => {
  return (
    <>
      <div className="card">
        <Card cardsData={cardData} />
      </div>
    </>
  );
};

export default Cards;
