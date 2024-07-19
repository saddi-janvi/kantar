import Image from "next/image";
import kantarLogo from "/public/kantar.jpg";
import img1 from "/public/img1.jpg";
import img2 from "/public/img2.jpg";
import img3 from "/public/img3.jpg";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef } from "react";

const qualities = {
  K: "Knowledge",
  A1: "Analytics",
  N: "Network",
  T: "Technology",
  A2: "Advanced",
  R: "Research",
};

const keyDisplayMap: { [key: string]: string } = {
  A1: "A",
  A2: "A",
};

const sections = [
  {
    id: "company-culture",
    title: "What is Kantar?",
    content:
      "To me, Kantar represents the pinnacle of data-driven understanding and innovative market research. It's a landscape where data isn't just collected—it's transformed into insights that shape the strategies of the world's leading brands. Kantar doesn't just tell you what happened; it delves into the why and how, helping companies not only understand the past but also anticipate and shape the future. Having been an ex-employee, I know firsthand that Kantar weaves intelligence and creativity into every analysis, turning raw numbers into compelling stories that drive impactful decisions. From the nuanced insights into consumer behavior to the sophisticated analytics that forecast market trends, Kantar has mastered the art of turning data into a narrative that businesses can act upon. Its brilliance lies not just in its ability to analyze but in its power to inspire and guide through precise and actionable insights. As someone deeply entrenched in the world of data and analytics, I see Kantar not just as a market research titan but as a pioneer in leveraging advanced technologies to decode human behavior. Whether it's through AI-driven predictive modeling or the integration of real-time analytics into business strategies, Kantar is at the forefront of technological innovation, using it to make its insights even more profound and accessible. For someone like me, who believes in the transformative power of data, Kantar offers a compelling canvas. It's a place where my analytical skills and strategic mindset can converge to contribute to Kantar's mission—helping to shape the future of market research and drive success for global brands. Here, in the heart of Kantar, I find not just a company but a partner in the quest to understand and influence the world.",
    imageUrl: img1,
    imagePosition: "left",
  },
  {
    id: "personal-fit",
    title: "Why Kantar?",
    content:
      "Joining Kantar? It's practically a no-brainer! Where else can you combine the science of data with the art of understanding human behavior? At Kantar, every dataset and every insight tells a story, and I'm excited to be part of that narrative. Having been an ex-employee, I know firsthand the innovation and passion that drives Kantar. I've always been impressed by how Kantar blends creativity with cutting-edge analytics to shape the future of brands worldwide. From unveiling the nuances of consumer behavior to pioneering new market research methodologies, Kantar has consistently been at the forefront of the industry. Being part of a team that helps global giants make informed decisions isn't just appealing—it feels like a continuation of the mission I've admired throughout my career. So, why Kantar? Because it's the only place where I can apply my analytical skills to transform data into actionable insights and contribute to the strategies that define market success. And let's be honest, solving complex problems and making an impact on a global scale is definitely a perk!",
    imageUrl: img2,
    imagePosition: "right",
  },
  {
    id: "vision-for-future",
    title: "The Kantar Culture Code",
    content:
      "Rejoining Kantar feels like coming home to a place where my values and passions perfectly align with the company’s vibrant culture. My career has always revolved around innovation, teamwork, and excellence, and Kantar embodies these principles in its approach to market research and analytics. The focus on Automation, Speed, and Transformation at Kantar is exactly what excites me. I thrive on using technology to streamline processes and deliver quick, actionable insights. Having worked at Kantar before, I know firsthand how the company’s dedication to rapid adaptation and continuous improvement drives success. It's a culture where change is embraced, and I’m eager to dive back in and contribute to these transformative efforts. Kantar’s emphasis on Collaboration and Integrity speaks to my heart. I value working in environments where open communication and ethical practices are the norm. My previous experience with Kantar has shown me how important it is to work with a team that truly values diverse perspectives and individual contributions. I'm looking forward to being part of a team where everyone’s voice matters, and where our collective efforts drive impactful results. At Kantar, I see an exciting opportunity to merge my skills with a culture that values both innovation and client success. I'm enthusiastic about contributing to a team that’s passionate about shaping the future of market research and analytics. Here, I’m eager to blend creativity with data-driven insights and help craft solutions that make a real difference.",
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
                <h3 className="text-xl font-semibold font-serif">
                  {keyDisplayMap[letter] || letter}
                </h3>
                <p className="text-md">{quality}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="flex items-center justify-around mb-12 space-x-4">
          <Image
            src={kantarLogo}
            className="image-3d-effect"
            alt="Kantar Logo"
            width={150}
            height={60}
          />
          <h2 className="text-xl font-semibold font-serif italic text-gray-700">
            Why Hire Me? Because I turn Kantar&apos;s raw data into actionable
            magic!
          </h2>
        </section>
      </div>
    </div>
  );
};

export default Portfolio;
