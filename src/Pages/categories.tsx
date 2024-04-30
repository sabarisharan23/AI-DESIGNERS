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
        title: "Logo AI",
        copy: "LogoAI is an AI-powered logo design platform that offers businesses and individuals an easy and efficient way to create professional logos.",
        button: "Read more",
        imageId: "/logoAI.png",
        navigate: "/logoai",
      },
      {
        title: "Logomakerr.ai",
        copy: "Logomakerr.ai is a streamlined AI-based logo creation tool designed for businesses and individuals who want a fast, hassle-free approach to logo design",
        button: "Read more",
        imageId: "images.png",
        navigate: "/logomarker",
      },
      {
        title: "Brandmark.io",
        copy: "Brandmark.io is an innovative logo creation tool that leverages advanced AI algorithms to help users design unique and memorable logos",
        button: "Read more",
        imageId: "pasted-image-0-150x150.png",
        navigate: "/brandmarker",
      },
    ],
  },
  {
    mainTitle: "Color Pallets",
    cards: [
      {
        title: "Color Palette Generator",
        copy: "Description of trip 1 to Mountain View",
        button: "Read more",
        imageId: "download.jpg",
        navigate: "/colorPallet",
      },
      {
        title: "Color Hunt",
        copy: "Description of trip 2 to Mountain View",
        button: "Read more",
        imageId: "download.jpg",
        navigate: "/colorPallet",
      },
      {
        title: "Adobe Color",
        copy: "Description of trip 3 to Mountain View",
        button: "Read more",
        imageId: "download.jpg",
        navigate: "/colorPallet",
      },
    ],
  },
  {
    mainTitle: "Icons and Illustration",
    cards: [
      {
        title: "Trip 1",
        copy: "Description of trip 1 to Mountain View",
        button: "Read more",
        imageId: "download.jpg",
        navigate: "/iconsAndillustration",
      },
      {
        title: "Trip 2",
        copy: "Description of trip 2 to Mountain View",
        button: "Read more",
        imageId: "download.jpg",
        navigate: "/iconsAndillustration",
      },
      {
        title: "Trip 3",
        copy: "Description of trip 3 to Mountain View",
        button: "Read more",
        imageId: "download.jpg",
        navigate: "/iconsAndillustration",
      },
    ],
  },
  {
    mainTitle: "Image Editing ",
    cards: [
      {
        title: "Adobe Photoshop ",
        copy: "Description of trip 1 to Mountain View",
        button: "View Trips",
        imageId: "download.jpg",
        navigate: "/imageEditor",
      },
      {
        title: "Luminar Neo",
        copy: "Description of trip 2 to Mountain View",
        button: "View Trips",
        imageId: "download.jpg",
        navigate: "/imageEditor",
      },
      {
        title: "Canva",
        copy: "Description of trip 3 to Mountain View",
        button: "View Trips",
        imageId: "download.jpg",
        navigate: "/imageEditor",
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
    <div className="flex flex-col items-center justify-center p-10">
      <div
        className="flex text-center text-3xl p-10 font-bold "
        id="categories"
      >
        Design Capabilities
      </div>
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
