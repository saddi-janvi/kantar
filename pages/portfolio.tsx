import Image from "next/image";
import disneyLogo from "/public/disney.png";
import img1 from "/public/img1.jpg";
import img2 from "/public/img2.jpeg";
import img3 from "/public/img3.webp";
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
      "Disney is more than just an entertainment company—it's a vast universe where magic is real and dreams come true. At its heart, Disney is about storytelling, creating a tapestry of tales that span from enchanting animated features and breathtaking theme parks to cutting-edge television networks and pioneering streaming services like Disney+. Whether it's the classic allure of Mickey Mouse and Cinderella or the action-packed adventures of Marvel superheroes and Star Wars, Disney has something to captivate everyone. Disney’s impact goes beyond the screen, influencing generations and crafting some of the most cherished memories of childhood and beyond. It’s a place where creativity and innovation blend seamlessly, pushing the boundaries of what entertainment can be. Visiting a Disney park, one can't help but feel the joy and excitement in the air, the meticulous attention to detail, and the overarching sense of wonder. For many, Disney is a part of who they are—shaping values through narratives of heroism, friendship, and perseverance. It's a beacon of joy and a repository of our collective childhoods. In essence, Disney isn't just a company; it's a cultural phenomenon that continues to enchant and inspire the world with each magical story it tells.",
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
        &quot;Ah, the{" "}
        <a
          href="https://impact.disney.com/diversity-equity-inclusion/culture/#:~:text=We%20work%20to%20create%20a,regardless%20of%20identity%20or%20background."
          className="text-sky-500"
          target="_blank"
          rel="noopener noreferrer"
        >
          Disney Culture Code!{" "}
        </a>
        It’s not just about wearing mouse ears to the office (though that would
        be fun). Disney has crafted a culture that&apos;s as focused on
        inclusion as it is on innovation. At its core, the Disney culture is
        about creating an environment where everyone, and I mean everyone, feels
        like they belong. Whether you&apos;re a princess in a tower, a lost boy
        in Neverland, or just someone who appreciates a good, old-fashioned
        lightsaber duel, Disney’s ethos ensures that your voice is heard and
        your talents celebrated. Disney understands that the best stories are
        those that reflect the vast tapestry of human experience, and they
        strive to weave these diverse threads into the narratives they create
        and the teams they assemble. It&apos;s like a potluck where everyone’s
        unique dishes are not only welcomed but are essential to the feast. This
        commitment to diversity and equity is what makes the magic happen—both
        on screen and behind the scenes. So, the Disney Culture Code? It’s about
        more than just creating entertainment; it’s about building a kingdom
        where everyone has the chance to star in their own fairy tale. Whether
        you’re animator or analyst, marketer or magician, at Disney, you’re part
        of a story that values every character’s happy ending.&quot;
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
                <h2 className="text-2xl font-bold font-serif text-accent-color mb-4">
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
