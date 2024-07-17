import Image from "next/image";
import disneyLogo from "/public/disney.png";
import img1 from "/public/img1.jpg";
import img2 from "/public/img2.jpeg";
import img3 from "/public/img3.jpg";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef } from "react";

const qualities = {
  D: "Diligent",
  I: "Innovative",
  S: "Strategic",
  N: "Nimble",
  E: "Empathetic",
  Y: "Youthful",
};

const sections = [
  {
    id: "company-culture",
    title: "What is Disney?",
    content:
      "To me, Disney represents a boundless landscape of imagination and innovation where storytelling transcends the screen and becomes part of the very fabric of our lives. It's a realm where stories aren't just told—they are experienced. Disney weaves magic into the mundane, transforming everyday moments into adventures that thrill the spirit and challenge the mind. From the nostalgic chords of a classic Disney tune to the thrilling visuals of a Marvel superhero saga, Disney has mastered the art of creating universes that appeal to the child in all of us. Its magic lies not just in its ability to entertain, but in its power to inspire and educate through diverse narratives that speak to a global audience, fostering a connection that bridges continents and cultures. As a professional deeply entrenched in the world of data and technology, I see Disney not only as an entertainment titan but as a pioneer in leveraging cutting-edge technology to enhance storytelling. Whether it's through AI-driven personalization in Disney+ or the integration of virtual reality in theme parks, Disney is at the forefront of technological innovation, using it to make its magical experiences even more immersive and accessible. For someone like me, who believes in the power of data to enhance narratives and drive decisions, Disney's approach to storytelling through technology offers a compelling canvas. It's a place where my analytical skills and creative instincts can come together to contribute to Disney's legacy—helping to shape the next generation of stories that will continue to enchant and inspire the world. Here, in the heart of Disney, I find not just a company, but a cultural touchstone that continues to define the contours of imaginative possibility.",
    imageUrl: img1,
    imagePosition: "left",
  },
  {
    id: "personal-fit",
    title: "Why Disney?",
    content: (
      <>
        Joining Disney? It&apos;s practically a no-brainer! Where else can you
        combine the magic of storytelling with the thrill of technology? At
        Disney, every pixel on the screen and every byte of data tells a story,
        and I&apos;m excited to be part of that narrative. Plus, I&apos;ve
        always imagined what it would be like to have Mickey Mouse as a
        colleague—after all, he&apos;s the kind of teammate who always sees the
        &apos;mouse half full.&apos; I grew up mesmerized by Disney’s creativity
        and have been impressed by how Disney has embraced technology to enhance
        those magical experiences. From animated classics to pioneering
        streaming technology, Disney has consistently been at the forefront of
        innovation. Being part of a team that helps deliver content to millions
        worldwide isn&apos;t just appealing—it feels like a continuation of the
        storytelling tradition I&apos;ve admired my whole life. So, why Disney?
        Because it’s the only place where I can apply my technical skills to
        sprinkle a little pixie dust on data and contribute to the magic that
        has enchanted generations. And let’s be honest, contributing to the next
        incredible Disney+ binge is definitely a perk!
      </>
    ),
    imageUrl: img2,
    imagePosition: "right",
  },
  {
    id: "vision-for-future",
    title: "The Disney Culture Code",
    content: (
      <>
        Stepping into the vibrant world of Disney, I see a perfect alignment
        between my own professional ethos and the{" "}
        <a
          href="https://impact.disney.com/diversity-equity-inclusion/culture/#:~:text=We%20work%20to%20create%20a,regardless%20of%20identity%20or%20background."
          className="text-sky-500"
          target="_blank"
          rel="noopener noreferrer"
        >
          Disney Culture Code!{" "}
        </a>
        My career has been driven by a passion for innovation and a commitment
        to inclusivity, mirroring Disney&apos;s own pursuit of creating
        enchanting, universally accessible experiences. At Disney, where every
        narrative thread is valued, I am eager to weave my unique
        strand—infusing data with creativity to tell stories that resonate
        across diverse audiences. <br />I thrive in environments that celebrate
        diversity and champion individual contributions as part of a greater
        symphony. My technical skills, coupled with a keen ability to
        communicate across cultural and functional boundaries, enable me to
        contribute meaningfully to teams that are as varied as Disney&apos;s
        audience. My background in data engineering, particularly in
        environments that require collaboration and adaptability, prepares me to
        thrive in Disney&apos;s inclusive culture. I look forward to
        contributing to a workplace where everyone&apos;s voice is not only
        heard but also integral to the narrative we build together.
        <br /> At Disney, I see a world of possibility—a place where my
        technical acumen can support magical experiences and where my commitment
        to fostering an inclusive team dynamic can flourish. Here, in the midst
        of Disney&apos;s storytelling prowess, I am excited to be part of
        creating magic that touches hearts and sparks imagination across the
        globe, ensuring every project I touch has a bit of that Disney magic.
      </>
    ),
    imageUrl: img3,
    imagePosition: "left",
  },
];

const Portfolio = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div className="text-black-200">
      <div className="container mx-auto px-4 py-4">
        {sections.map((section) => (
          <section key={section.id} className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
              {section.imagePosition === "left" && (
                <div className="md:col-span-2">
                  <div className="image-container">
                    <Image
                      src={section.imageUrl}
                      alt="Section Image"
                      width={75}
                      height={75}
                      layout="responsive"
                      className="image-3d-effect"
                    />
                  </div>
                </div>
              )}
              <div className="md:col-span-3">
                <h2 className="text-2xl font-bold font-serif text-accent-color mb-1">
                  {section.title}
                </h2>
                <p className="text-lg text-justify font-serif leading-relaxed text-gray-700">
                  {section.content}
                </p>
              </div>
              {section.imagePosition === "right" && (
                <div className="md:col-span-2">
                  <div className="image-container">
                    <Image
                      src={section.imageUrl}
                      alt="Section Image"
                      width={75}
                      height={75}
                      layout="responsive"
                      className="image-3d-effect"
                    />
                  </div>
                </div>
              )}
            </div>
          </section>
        ))}

        <section className="mb-12">
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-2"
            ref={ref}
          >
            {Object.entries(qualities).map(([letter, quality]) => (
              <div
                key={letter}
                className={`flex flex-col items-center justify-center p-4 w-30 h-30 m-2 border rounded-lg shadow hover:bg-accent-color text-sky-800 hover:text-black ${
                  inView ? "scale-110" : "scale-100"
                } transition-transform duration-500`}
              >
                <h3 className="text-xl font-semibold font-serif">{letter}</h3>
                <p className="text-md">{quality}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="flex items-center justify-around mb-12 space-x-4">
          <Image
            src={disneyLogo}
            className="image-3d-effect"
            alt="Disney Logo"
            width={200}
            height={60}
          />
          <h2 className="text-xl font-semibold font-serif italic text-gray-700">
            Why hire me? Because with Disney, I&apos;ll bring the
            &apos;Magic&apos; to your &apos;Kingdom&apos; of data!
          </h2>
        </section>
      </div>
    </div>
  );
};

export default Portfolio;
