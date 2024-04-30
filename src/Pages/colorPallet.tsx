import { Link } from "react-router-dom";

export default function ColorPalette() {
  return (
    <div className="text-lg px-10 md:w-3/4 md:m-auto tracking-wider ">
    <div className="text-lg ">
      <h3 className="font-semibold text-3xl mb-4">
        3. Color Palette Generator: Adobe Color
      </h3>
      <Link
          to={"https://color.adobe.com/create/color-wheel"}
          className="text-blue-700 cursor-pointer text-xl font-semibold hover:underline"
        >
          Try for Free with this link.
        </Link>
        <div>
          <img
            src="/adobe-color.jpg"
            className="py-6 w-1/2"
            alt="LogoAI Logo"
          ></img>
        </div>
      <p className="text-lg mb-6">Best Color Palette Tools</p>
      <div className="bg-gray-100 p-6 rounded-lg mb-6">
        <h4 className="font-semibold text-xl mb-4">
          AdobeColor Palette Generator
        </h4>
        <p className="text-base mb-4">
          <span className="font-semibold">Adobe Color</span> is a bit more on
          the technical side than other tools on this list, but that also means
          it’ll give you a better chance of crafting the perfect color palette.
          This is a true color palette generator, and it’s backed up by{" "}
          <span className="text-blue-500">color science</span>.
        </p>
        <p className="text-base mb-4">
          That means you can choose{" "}
          <span className="text-blue-500">five separate colors</span> from the
          color wheel or select one and see how that can inform a{" "}
          <span className="text-blue-500">monochromatic, analogous, triad</span>{" "}
          or other types of color palette. Copy{" "}
          <span className="text-blue-500">hex codes or RGB balance</span> to add
          your new palette to{" "}
          <span className="font-semibold">My Brand Kit</span>.
          <div>
          <img
            src="/Brand-colors.gif"
            className="py-6 w-1/2"
            alt="LogoAI Logo"
          ></img>
        </div>
        </p>
        <p className="text-base mb-4">
          Once you’ve added the colors to your Brand Kit, simply apply them to
          any of your Venngage designs in one click:
        </p>
        <p className="text-base mb-4">
          Want to learn more about other color palette generators? Check out our
          list of the{" "}
          <span className="text-blue-500">
            13 best color palette generators
          </span>
          .
        </p>
        <img
            src="/Brand-Kit-color-logo1-1.gif"
            className="py-6 w-1/2"
            alt="LogoAI Logo"
          ></img>
      </div>
      </div>


      <div className="text-lg py-16">
      <h1 className="text-3xl font-semibold mb-4">2.Color Palette Generator</h1>
      <Link
          to={"https://www.degraeve.com/color-palette/"}
          className="text-blue-700 cursor-pointer text-xl font-semibold hover:underline"
        >
          Try for Free with this link.
        </Link>
        <div>
          <img
            src="/color-palette-generator.jpg"
            className="py-6 w-1/2"
            alt="LogoAI Logo"
          ></img>
        </div>
      <p className="text-lg font-semibold mb-4">Best Color Palette Tools</p>
      
      <p className="mb-4">
        <span className="text-blue-700">Color Palette Generator</span> is a link-based theme extractor. In addition to being generated solely from URLs, the color palettes offered include two options, one <span className="text-green-500">dull</span> and one <span className="text-blue-500">vibrant</span>. Dull isn’t meant as an insult here, as some organizations require desaturated, calm tones—or in other words, muted colors.
      </p>
      <p className="mb-4">
        We found an optimistic image of a person raising their arms against a sunset, and the palette generated was perfectly reflective of that tone with <span className="text-yellow-500">bright yellows</span> and <span className="text-orange-500">orange</span> contrasting against <span className="text-red-800">dark red</span> and <span className="text-gray-900">black</span>.
      </p>
      <img src="optimistic_image.jpg" alt="Optimistic Image" className="w-full mb-8" />
    </div>
      <div className="text-lg">
      <h2 className="py-4 text-2xl font-semibold">3. Color Hunt</h2>
      <Link
          to={"https://colorhunt.co/"}
          className="text-blue-700 cursor-pointer text-xl font-semibold hover:underline"
        >
          Try for Free with this link.
        </Link>
        <div>
          <img
            src="/colorhunt.jpg"
            className="py-6 w-1/2"
            alt="LogoAI Logo"
          ></img>
        </div>
      <p className="py-4">
        <span className="font-semibold">Best color palette tools:</span>{" "}
        <span className="text-blue-700 underline cursor-pointer hover:text-blue-900">ColorHunt</span>
      </p>
      <p className="py-4">
        <span className="font-semibold">Color Hunt’s</span> simple and friendly interface sets the stage for just how easy the tool is to use. While it’s possible to create your own color palette to share with the world, the big draw of <span className="font-semibold">Color Hunt</span> is that it provides a seemingly limitless supply of ready-made palettes.
      </p>
      <p className="py-4">
        Explore collections like <span className="font-semibold">neon</span>, <span className="font-semibold">vintage</span>, <span className="font-semibold">space</span>, <span className="font-semibold">skin</span> or <span className="font-semibold">wedding</span>, or type in a color or keyword to see what pops up. Even if you don’t find four colors that are exactly what you want, this tool is endlessly inspirational.
      </p>
      <img src="/colorhunt.png" alt="Color Hunt" className="py-4"></img>

      </div>
    </div>
  );
}
