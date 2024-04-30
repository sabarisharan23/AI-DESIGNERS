import React, { useState } from "react";
import Dropdown from "../Components/dropdown";
import Card from "../Components/card";
import { Link } from "react-router-dom";
interface DropdownItem {
  text: string;
  link: string;
}

interface CardData {
  title: string;
  copy: string;
  button: string;
  imageId: string;
  navigate: string; // Custom navigation property
}

const cardsData: { mainTitle: string; cards: CardData[] }[] = [
  {
    mainTitle: "Logo Creation",
    cards: [
      {
        title: "Looka",
        copy: "Forget looking generic! Looka’s software is powered by AI to create a logo that matches your vision — no design skills required. Generate endless options, and tweak designs to get exactly what you want.Looka’s Brand Kit uses your logo, colors, and fonts to instantly create hundreds of branded marketing materials—all in one spot.",
        button: "Read more",
        imageId: "/new1.png",
        navigate: "/logoai",
      },
      {
        title: "Hatchful by Shopify",
        copy: "Hatchful is a logo maker built for entrepreneurs on the go. No design experience is required to create your own logo from scratch.Customize your free logo using hundreds of templates, icons, fonts, and color combinations in our design studio. ",
        button: "Read more",
        imageId: "new2.png",
        navigate: "/logomarker",
      },
      {
        title: "Design Hill Logo Maker",
        copy: "Browse our in-built logo template library for more ideas and inspiration. Our AI tool features creative logo templates to help you out. You can check out these logo examples or customize them with desired icon, color, or element for strong brand identity.",
        button: "Read more",
        imageId: "new3.jpg",
        navigate: "/brandmarker",
      },
    ],
  },
  {
    mainTitle: "Image Generation",
    cards: [
      {
        title: "Adobe firefly",
        copy: "Description of trip 1 to Mountain View",
        button: "Read more",
        imageId: "download.jpg",
        navigate: "/adobe",
      },
      {
        title: "Gemini",
        copy: "Description of trip 2 to Mountain View",
        button: "Read more",
        imageId: "download.jpg",
        navigate: "/gemini",
      },
      {
        title: "Microsoft copilot designer",
        copy: "Description of trip 3 to Mountain View",
        button: "Read more",
        imageId: "download.jpg",
        navigate: "/copiolet-designer",
      },
    ],
  },
  {
    mainTitle: "Image Editing",
    cards: [
      {
        title: "Fotor",
        copy: "You don't have to manually adjust various settings and parameters in complex software to edit photos. Our AI-powered automatic photo editor streamlines the whole editing process. ",
        button: "Read more",
        imageId: "fotor1.jpg",
        navigate: "/fotor",
      },
      {
        title: "Phot.AI",
        copy: "Transform your photos with Photo AI's Advanced AI Background Editor. Experience the seamless removal of backgrounds with precision. You can add in a solid color backgrounds for your product shots or create stunniung landscapes with custom AI Backgrounds. ",
        button: "Read more",
        imageId: "phot.ai3.jpg",
        navigate: "/photAI",
      },
      {
        title: "Light X Editor",
        copy: "Embark on a journey of limitless creativity with LightX's groundbreaking AI tools. LightX’s Image to Image AI model seamlessly enhances every detail of your photos, transforming ordinary photos into extraordinary masterpieces.",
        button: "Read more",
        imageId: "4.jpg",
        navigate: "/lightXeditor",
      },
    ],
  },
  
  // Add more main titles with associated cards
];
interface RenderProp {
  title: string | null;
}
export function RenderCards({ title }: RenderProp) {
  if (!title) return null;

  const selectedMainTitleData = cardsData.find(
    (item) => item.mainTitle === title
  );

  if (!selectedMainTitleData) return null;

  const handleCardButtonClick = (navigate: string) => {
    window.location.href = navigate;
  };

  return selectedMainTitleData.cards.map((card, index) => {
    console.log(index);
    return (
      <Card
        ind={index}
        title={card.title}
        copy={card.copy}
        button={card.button}
        imageId={card.imageId}
        onClick={() => handleCardButtonClick(card.navigate)}
      />
    );
  });
}
interface Prop {
  setFunction: React.Dispatch<React.SetStateAction<string | null>>;
}

export default function Categories({ setFunction }: Prop) {
  const dropdownItems: DropdownItem[] = cardsData.map((item) => ({
    text: item.mainTitle,
    link: item.mainTitle,
  }));

  const handleDropdownItemClick = (mainTitle: string) => {
    setFunction(mainTitle);
    window.location.href = "#feature";
  };

  return (
    <div className="flex flex-col items-center justify-center py-5">
    
      <div className="text-center justify-center items-center p-4">
        <Dropdown
          buttonText="AI Tools Available"
          items={dropdownItems}
          buttonClassName="my-custom-button-class w-full backdrop-blur-lg shadow-lg border-2 border-gray-400 shadow-slate-500  hover:bg-gray-100/50"
          dropdownClassName="my-custom-dropdown-class backdrop-blur-lg shadow-lg border-2 border-gray-400 shadow-slate-500 text-white "
          onItemClick={handleDropdownItemClick}
        />
      </div>
      
    </div>
  );
}
