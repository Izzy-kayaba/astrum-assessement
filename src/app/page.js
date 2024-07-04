import MainHeader from "./components/header/header";
import IntroContent from "./components/intro-content/introcontent";
import TextBlock from "./components/text-block/textblock";

export default function Home() {
  return (
    <>
      <MainHeader
        Children={
          <>
            <IntroContent />
            <TextBlock />
          </>
        } />
    </>
  );
}
