import { Link } from "react-router-dom";

export default function LogoAi() {
  return (
  
    <div className="text-lg px-40  ">
      {" "}
      {/* Center text within this div */}
      <h1 className="py-5 font-bold text-4xl">LogoAI.com</h1>
      <Link
        to={"https://www.logoai.com/?coupon=codingem"}
        className="text-blue-700 cursor-pointer text-xl font-semibold hover:underline"
      >
        Click this link to access the site.
      </Link>
      <div>
        <img
          src="/1707808943586.jpg"
          className="py-6 w-{300px} "
          alt="LogoAI Logo"
        ></img>
      </div>
      <p className="space-y-10">
        <span className="font-semibold">LogoAI</span> is an AI-powered logo
        design platform that offers businesses and individuals an easy and
        efficient way to create professional logos. By using the latest
        advancements in artificial intelligence, LogoAI analyzes your business
        name, industry, and preferences to suggest logo designs that align
        with your brand identity.
      </p>
      <p className="py-5"></p>
      <p className="font-semibold text-2xl">Key Features</p>
      <p className="py-4">
        {/* Before I show you how to create a logo and how I found success with
        this tool, let's take a sneak peek at the highlight features of this
        tool: */}
      </p>
      <ul className="text-left list-disc pl-4 leading-relaxed">
        {" "}
        {/* Add bullets with list-disc class */}
        <li>
          <span className="font-semibold">AI-driven Design:</span> Utilizes AI
          to generate logo designs based on user input. This happens in mere
          seconds!
        </li>
        <li>
          <span className="font-semibold">Customization Options:</span> Allows
          users to customize their chosen logo with different fonts, colors,
          and layouts.
        </li>
        <li>
          <span className="font-semibold">Variety of Templates:</span> Offers
          a wide range of templates to suit different industries and styles.
        </li>
        <li>
          <span className="font-semibold">Brand Kit:</span> Provides a full
          brand kit along with the logo, including business cards,
          letterheads, and social media assets.
        </li>
        <li>
          <span className="font-semibold">Instant Download:</span> Users can
          download their design immediately after creation.
        </li>
      </ul>
      <p className="font-semibold py-5 text-2xl">LogoAI Example:</p>
      <ul className="text-left list-disc pl-4 leading-relaxed">
        {" "}
        {/* Add bullets with list-disc class */}
        <li>
          <span className="font-semibold">Company Name: </span> AI for Designers
        </li>
        <li>
          <span className="font-semibold">Industry</span> Graphics Design
        </li>
        <li>
          <span className="font-semibold">Design Brief:</span>AI for Designers seeks a logo reflecting the fusion of graphic design and AI, marrying modern aesthetics with symbolic elements of technology, inviting creativity and trust in a vibrant, versatile visual identity.
        </li>
      
      </ul>
      <p className="font-semibold py-4 text-2xl">Design Process</p>
      <p>
        To get started, just enter your business name and a slogan (if you
        want):
      </p>
      <div>
        <img
          src="/logoai1.png"
          className="py-6 w-{300px}"
          alt="LogoAI Logo"
        ></img>
      </div>
      {/* <p className="py-4">
        (I'm going to use the "best blog" and "learn blogging the right way"
        throughout this post to get coherent results.)
      </p> */}
      <p>Then choose an industry. For myself, I selected education:</p>
      <div>
        <img
          src="/logoai2.png"
          className="py-6 w-{300px}"
          alt="LogoAI Logo"
        ></img>
      </div>
      <p>
        Then it's time to choose the color for your logos. These are pre-built
        color schemes that LogoAI offers for your convenience.
      </p>
      <div>
        <img
          src="/logoai3.png"
          className="py-6 w-{300px}"
          alt="LogoAI Logo"
        ></img>
      </div>
      <p>
        Lastly, it's time to select some styles of fonts and example logos you
        like so that the AI knows you full well. :
      </p>
      <div>
        <img
          src="/logoai4.png"
          className="py-6 w-{300px}"
          alt="LogoAI Logo"
        ></img>
      </div>
      <p>
        Then it will generate some logos based on the provided information.
      </p>
      <div>
        <img
          src="/logoai5.png"
          className="py-6 w-{300px}"
          alt="LogoAI Logo"
        ></img>
      </div>
      <p>
        Then it's time to hit "Create" to generate awesome logos with AI.{" "}
        <span className="font-semibold">
          Here are the results that the tool gave me.
        </span>
      </p>
      <div>
        <img
          src="/logoai6.png"
          className="py-6 w-{300px}"
          alt="LogoAI Logo"
        ></img>
      </div>
      <p>
        The provided logos are customizable. There will be plenty to choose from.
      </p>
      <p className="py-4 font-semibold">Pros</p>
      <ul className="text-left list-disc pl-4 leading-relaxed">
        {" "}
        {/* Add bullets with list-disc class */}
        <li>
          <span className="font-semibold">User-Friendly Interface : </span>
          Easy for beginners, no design skills required.
        </li>
        <li>
          <span className="font-semibold">Speed and Efficiency:</span> Quickly
          generates a variety of logo options and it's very quick!
        </li>
        <li>
          <span className="font-semibold">High-Quality Designs:</span>{" "}
          Produces professional-looking logos.
        </li>
        <li>
          <span className="font-semibold">Affordable:</span> Cost-effective
          compared to hiring a designer.
        </li>
      </ul>
      <p className="py-4 font-semibold">Cons</p>
      <ul className="text-left list-disc pl-4 leading-relaxed">
        {" "}
        {/* Add bullets with list-disc class */}
        <li>
          <span className="font-semibold">Limited Originality: </span>Since
          it's AI-generated, designs might lack the unique touch of a human
          designer.
        </li>
        <li>
          <span className="font-semibold">Similar Designs:</span> There's a
          possibility of encountering similar logos used by other businesses.
        </li>
        <li>
          <span className="font-semibold">Customization Limitations:</span>{" "}
          While there are customization options, they might not be as
          extensive as working with a human designer.
        </li>
        <li>
          <span className="font-semibold">Price:</span> Even though you can
          save designer costs, you'll still need to pay for your designs.
        </li>
      </ul>
      <p className="py-4 font-semibold">Pricing</p>
      <div>
        <img
          src="/1707808943541.jpg"
          className="py-6 w-1/2"
          alt="LogoAI Logo"
        ></img>
      </div>
      <p>LogoAI offers different pricing tiers, including:</p>
      <ul className="text-left list-disc pl-4">
        <li>
          <span className="font-semibold">Basic:</span> $29
        </li>
        <li>
          <span className="font-semibold">Pro Package:</span> $59
        </li>
        <li>
          <span className="font-semibold">Brand Package:</span> $99
        </li>
      </ul>
    </div>

  );
}
