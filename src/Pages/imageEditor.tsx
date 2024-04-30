import { Fragment } from "react";
import { Link } from "react-router-dom";

export default function ImageEditor() {
  return (
    <div className="text-lg px-10 md:w-3/4 md:m-auto tracking-wider ">
    <div className="text-lg">
        <h1 className="font-semibold text-3xl mb-4">
          Adobe Photoshop (Windows, macOS, iPad, Web)
        </h1>
        <Link
          to={"https://www.adobe.com/products/photoshop.html"}
          className="text-blue-700 cursor-pointer text-xl font-semibold hover:underline"
        >
          Try for Free with this link.
        </Link>

        <div>
          <img
            src="/best.avif"
            className="py-6 w-1/2"
            alt="Brandmark.io Logo"
          ></img>
        </div>
        <p className="mb-4">
          <span className="font-semibold">Adobe Photoshop</span>, our pick for
          the best full-featured AI photo editor and design app.
        </p>
        <h2 className="font-semibold text-xl mb-2">Adobe Photoshop pros:</h2>
        <ul className="list-disc pl-4 mb-4">
          <li>Some of the best AI-powered tools you can find in any app</li>
          <li>
            It's still Photoshop, with all the power and control that gives you
          </li>
        </ul>
        <h2 className="font-semibold text-xl mb-2">Adobe Photoshop cons:</h2>
        <p className="mb-4">
          No one has ever said learning how to use Photoshop is easy
        </p>
        <p className="mb-4">
          <span className="font-semibold">Adobe Photoshop</span> has been the
          industry standard image editing app for more than three decades now,
          but instead of showing its age like a lot of other
          30-something-year-old software, it still feels fresh and cutting edge.
          Its <span className="text-blue-600 px-1">AI features</span> even made
          Time's Best Innovations of 2023 list.
        </p>
        <p className="mb-4">
          I was going to make the joke that it's easier to list the photo
          editing tasks that <span className="font-semibold">Photoshop</span>{" "}
          can't do than the ones it can—until I realized I legitimately could
          not come up with a list of things it can't do. In short,{" "}
          <span className="font-semibold">Photoshop</span> is the best
          full-featured image editor around.
        </p>
        <p className="mb-4">
          And that extends to{" "}
          <span className="text-blue-600 px-1">AI features</span>. Take the{" "}
          <span className="text-blue-600 px-1">Remove Tool</span> that got
          introduced last year. While{" "}
          <span className="font-semibold">Photoshop</span>
          has always made it possible to remove unwanted objects, people, and
          artifacts from your images—and features like the Patch Tool and Spot
          Removal Tool have done their best to blend in with your image—the{" "}
          <span className="text-blue-600 px-1">Remove Tool</span> takes it to
          another level. Of all the apps I tested, this one was by far the best
          at removing something from an image and replacing it with generated
          content that blended in. There's also a text-to-image generator called{" "}
          <span className="text-blue-600 px-1">Generative Fill</span> that
          allows you to add or replace specific elements using Adobe's Firefly
          AI model. While it's not quite good enough to add foreground elements,
          I've found it's really good at replacing backgrounds.
        </p>

        <p className="mb-4">
          You can see both of these things in action in the screenshot above.
          The original image is in the center. I was able to replace Gunther
          with grass that matches the rest of the image—including the depth of
          field blur—just by painting over him once. I was also able to replace
          the background with a different forest—again, matching the depth of
          field—just by selecting it and typing "a dark forest." I even got
          three variations to choose from.
        </p>
        <p className="mb-4">
          <span className="font-semibold">Photoshop</span> has plenty of other{" "}
          <span className="text-blue-600 px-1">AI-powered tools</span>, too.
          <span className="text-blue-600 px-1">Generative Expand</span> uses
          Firefly to extend your images with AI-generated content. There are
          also <span className="text-blue-600 px-1">Neural Filters</span> that
          can do things like intelligently adjust your subject's facial
          expression, transfer the color palette from one image to another, and
          remove compression artifacts. The automatic subject and background
          selection is excellent, and the automatic tone, color, and contrast
          adjustment all work as you'd expect.
        </p>
        <p className="mb-4">
          Best of all, <span className="font-semibold">Photoshop</span> is still
          the fully-featured app it's always been. For most{" "}
          <span className="text-blue-600 px-1">AI features</span>, you get
          plenty of control, and you can always manually edit them and integrate
          them into your image. If the AI messes up, you have all the tools you
          need to fix it—even if it takes you a bit longer.
        </p>
        <p className="mb-4">
          <span className="font-semibold">Adobe</span> recently started
          introducing a credit system for generative features like{" "}
          <span className="text-blue-600 px-1">Generative Expand</span> and{" "}
          <span className="text-blue-600 px-1">Generative Fill</span>. If you
          hit the limit, it seems the features will still work—just at slower
          speeds.
        </p>
        <p className="mb-4">
          <span className="font-semibold">Adobe Photoshop pricing:</span> From
          $19.99/month as part of the Photography Plan including Adobe Photoshop
          Lightroom and 500 generative credits. (Lightroom is another great
          image editor in its own right, but it just doesn't have the same deep
          AI feature set as Photoshop. Still definitely worth checking out if
          you just want to edit photos.)
        </p>
      </div>

      <div className="text-lg py-16">
        <h1 className="text-3xl font-semibold mb-4">
          Luminar Neo (Windows, macOS)
        </h1>
        <Link
          to={"https://skylum.com/luminar"}
          className="text-blue-700 cursor-pointer text-xl font-semibold hover:underline"
        >
          Try for Free with this link.
        </Link>

        <div>
          <img
            src="/luminor.avif"
            className="py-6 w-1/2"
            alt="Brandmark.io Logo"
          ></img>
        </div>
        <p className="mb-4">
          <span className="font-semibold">Luminar Neo</span>, our pick for the
          best AI photo editor for being truly AI-powered
        </p>
        <h2 className="text-xl font-semibold mb-2">Luminar Neo pros:</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>
            <span className="font-semibold">AI is legitimately integral</span>{" "}
            to the whole app
          </li>
          <li>
            Designed for photographers, so you get a lot of{" "}
            <span className="font-semibold">control</span> over how strongly any
            effects are applied
          </li>
        </ul>
        <h2 className="text-xl font-semibold mb-2">Luminar Neo cons:</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>Very expensive for a standalone photo-focused app</li>
        </ul>
        <p className="mb-4">
          Luminar Neo was one of the first photo-editing apps to go all in on
          AI. And of all the apps on this list, it has the deepest AI
          integration across the whole app. Of course there are the headline
          features, like the{" "}
          <span className="font-semibold">AI-powered enhance</span> (which
          automatically adjusts tone, contrast, and color), the{" "}
          <span className="font-semibold">AI sky replacement</span> (which
          really works, especially with blown-out or boring gray skies),{" "}
          <span className="font-semibold">GenErase</span> (which intelligently
          removes objects and distractions from your images), and{" "}
          <span className="font-semibold">GenExpand</span> (which allows you
          extend your image as you crop it).
        </p>
        <p className="mb-4">
          But then there are all the smaller touches. Luminar Neo automatically
          detects the subject of your image and suggests appropriate presets as
          a starting point. The AI crop generally does a good job of cutting out
          extraneous elements without going too close to your subject. And
          features like the AI face and skin adjustments focus in on the
          relevant areas of the image, and quickly allow you to do things like{" "}
          <span className="font-semibold">brighten your subject's eyes</span> to
          draw more attention to them or{" "}
          <span className="font-semibold">tone down shiny skin</span>.
        </p>
        <p className="mb-4">
          Luminar Neo is almost exclusively an app for photographers, or people
          who really, really care about taking high-quality selfies. As a
          result, you get a huge amount of control over how the various effects
          are applied. There isn't really any one-click magic here: for every
          tool, you get a slider, so you can control how strongly any edits are
          made to be sure your photos look how you want. It makes for a great,
          balanced workflow: the AI lets you work quickly, without pushing
          things too far.
        </p>
        <p className="mb-4">
          Strangely, Luminar Neo is the only app on this list that couldn't
          exist without its AI features. They're so integral to the whole
          experience. While you can make simple edits, and often will to make
          final tweaks, it's almost impossible to edit a photo without heavily
          relying on the AI at some point.
        </p>
        <p className="font-semibold mb-4">Luminar Neo pricing:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>
            From $9.95/month; Luminar Neo is also available through Setapp from
            $9.99/month, but it doesn't have all the same features, including
            GenErase.
          </li>
        </ul>
      </div>

      <div className="text-lg  ">
        <h1 className="text-3xl font-semibold mb-4">
          Canva (Web, iOS, Android)
        </h1>
        <Link
          to={"https://www.canva.com/"}
          className="text-blue-700 cursor-pointer text-xl font-semibold hover:underline"
        >
          Try for Free with this link.
        </Link>

        <div>
          <img
            src="/canva.avif"
            className="py-6 w-1/2"
            alt="Brandmark.io Logo"
          ></img>
        </div>
        <p className="mb-4">
          <span className="font-semibold">Canva</span>, our pick for the best
          design app with an AI photo editor.
        </p>
        <h2 className="font-semibold mb-2">Canva pros:</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>
            <span className="font-semibold">
              Super powerful template-based design with nice AI extras
            </span>
          </li>
          <li>
            <span className="font-semibold">
              By far the easiest tool to use to create real-world designs like
              social media posts, CVs, and invitations
            </span>
          </li>
        </ul>
        <h2 className="font-semibold mb-2">Canva cons:</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>
            <span className="font-semibold">
              Image editing tools aren't as good as dedicated apps
            </span>
          </li>
        </ul>
        <p className="mb-4">
          Over the past two years, Canva has introduced a heap of new AI-powered
          features, making what was already an excellent template-based design
          app even better. It's always been perfect for quickly creating
          everything from invitations to Instagram posts, and the AI features
          make things even easier.
        </p>
        <p className="mb-4">
          Here's a full rundown of Canva's major AI features, but I'll give you
          a few of the highlights from my testing:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>
            <span className="font-semibold">Magic Design</span> allows you to
            enter a written prompt to create a template. I used "a birthday
            party invite for my dog" to create the invitation above.
          </li>
          <li>
            <span className="font-semibold">Magic Media</span> is a
            text-to-image and text-to-video generative AI that you can use to
            add whatever you want (like the dog holding a balloon above) to your
            designs.
          </li>
          <li>
            <span className="font-semibold">Magic Eraser</span> instantly
            removes unwanted objects from your images. It's not quite as
            reliable as Photoshop's implementation, but it's good enough for
            simple clean-up jobs.
          </li>
          <li>
            <span className="font-semibold">Magic Edit</span> uses a generative
            AI to allow you to replace elements of any image. Want to change a
            regular cake to a way better chocolate cake? Be my guest.
          </li>
          <li>
            <span className="font-semibold">Magic Write</span> is an AI text
            generator that's available pretty much everywhere throughout the
            app.
          </li>
        </ul>
        <p className="mb-4">
          And there are loads of other AI features built into the various parts
          of the app, or grouped together in the Magic Studio. Surprisingly,
          none of Canva's AI features ever feel shoehorned in—and it's still an
          incredible design app whether you use them or not. But if you want to
          experiment with AI-powered layout options and generating design
          elements with written prompts, you can do that too.
        </p>
        <p className="mb-4">
          <span className="font-semibold">Canva pricing:</span> Free with
          limited access to AI tools; from $14.99/month for Pro with more AI
          tools and higher usage limits.
        </p>
      </div>
    </div>
  );
}
