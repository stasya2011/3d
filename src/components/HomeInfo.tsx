import Infobox from "./Infobox";

interface IRenderedContent {
  [key: number]: JSX.Element;
}

const renderedContent: IRenderedContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, I'm <span className="font-semibold">Stasya</span>!
      <br />A Frontend Developer
    </h1>
  ),
  2: (
    <Infobox
      text={
        "Work as a Frontend developer for over two years and picked up many skills along the way."
      }
      link={"/about"}
      btnText="Learn more"
    />
  ),
  3: (
    <Infobox
      text={
        "I am eager to learn and try to implement different pet projects to increase my knowledge and deepen my understanding of technologies."
      }
      link={"/projects"}
      btnText="Visit my portfolio"
    />
  ),
  4: (
    <Infobox
      text={
        "If you are looking for a dev, I'm just a few keystrokes away from you. Thanks for your attention."
      }
      link={"/contact"}
      btnText="Let's talk"
    />
  ),
};

const HomeInfo = ({
  currentStage,
}: {
  currentStage: number;
}): JSX.Element | null => {
  return renderedContent[currentStage] || null;
};

export default HomeInfo;
