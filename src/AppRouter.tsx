import {  createBrowserRouter } from "react-router-dom";
import Home from "./Pages/home";
import RootLayout from "./RootLayout";
import Categories from "./Pages/categories";
import Comparison from "./Pages/comparison";
import Features from "./Pages/features";
import ColorPallet from "./Pages/colorPallet";
import IconsAndIllustrations from "./Pages/iconsAndillustration";
import ImageEditor from "./Pages/imageEditor";
import LogoAi from "./Pages/logoCreation";
import BenchmarkCriteriaTable from "./Pages/table";
import BrandMarker from "./Pages/brandmarker";
import LogoMarker from "./Pages/logomaker";


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
        element: <Categories />,
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
        handle: { title: "comparison" },
      },
      {
        path: "/colorPallet",
        element: <ColorPallet />,
        handle: { title: "colorPallet" },
      },
      {
        path: "/iconsAndillustration",
        element: <IconsAndIllustrations />,
        handle: { title: "iconsAndillustration" },
      },
      {
        path: "/imageEditor",
        element: <ImageEditor />,
        handle: { title: "imageEditor" },
      },
      {
        path: "/logoai",
        element: <LogoAi />,
        handle: { title: "logoCreation" },
      },
    ],
  },
]);
