import {  createBrowserRouter } from "react-router-dom";
import Home from "./Pages/home";
import RootLayout from "./RootLayout";
import Categories from "./Pages/categories";
import Comparison from "./Pages/comparison";
import Features from "./Pages/features";
import ColorPallet from "./Pages/colorPallet";

import LogoAi from "./Pages/looka";
import BenchmarkCriteriaTable from "./Pages/table";
import BrandMarker from "./Pages/hillLogo";
import LogoMarker from "./Pages/Hatchful";
import Adobe from "./Pages/adobe";
import Gemini from "./Pages/gemini";
import CopioletDesigner from "./Pages/copioletDesigner";
import { SetStateAction } from "react";


export const router = createBrowserRouter([
  {
    path: "/",
    handle: { title: "Home page" },
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        handle: { title: "Home" },
      },
      {
        path: "/categories",
        element: <Categories setFunction={function (value: SetStateAction<string | null>): void {
          throw new Error("Function not implemented.");
        } } />,
        handle: { title: "Categories" },
      },
      {
        path: "/features",
        element: <Features />,
        handle: { title: "features" },
      },
      {
        path: "/table",
        element: <BenchmarkCriteriaTable />,
        handle: { title: "table" },
      },
      {
        path: "/comparison",
        element: <Comparison />,
        handle: { title: "comparison" },
      },
      {
        path: "/logomarker",
        element: <LogoMarker />,
        handle: { title: "logomarker" },
      },
      {
        path: "/brandmarker",
        element: <BrandMarker />,
        handle: { title: "brandmarker" },
      },
      {
        path: "/adobe",
        element: <BrandMarker />,
        handle: { title: "adobe" },
      },
      {
        path: "/gemini",
        element: <BrandMarker />,
        handle: { title: "gemini" },
      },
      {
        path: "/copiolet-designer",
        element: <BrandMarker />,
        handle: { title: "copiolet-designer" },
      },
      {
        path: "/colorPallet",
        element: <ColorPallet />,
        handle: { title: "colorPallet" },
      },
      
      {
        path: "/logoai",
        element: <LogoAi />,
        handle: { title: "logoCreation" },
      },
    ],
  },
]);
