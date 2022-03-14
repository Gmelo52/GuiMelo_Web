import {
  Comment,
  Container,
  IconsView,
  ImgView,
  MediaBtn,
  MediaIcon,
  MediaView,
  MeImg,
  SubTitle,
  TextView,
  Title,
} from "./styles";
import htmlIcon from "../../assets/html.png";
import cssIcon from "../../assets/css.png";
import jsIcon from "../../assets/js.png";
import tsIcon from "../../assets/ts.png";
import reactIcon from "../../assets/react.png";
import gitIcon from "../../assets/github.png";
import linkedinIcon from "../../assets/linkedin.png";
import meImg from "../../assets/me.png";
import IconTech from "../IconTech";

import Typewriter from "typewriter-effect";

export default function Content() {
  return (
    <Container>
      <TextView>
        <Title>Guilherme Melo</Title>
        <SubTitle>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .changeDelay(50)
                .changeDeleteSpeed(50)
                .typeString("Sou desenvolvedor ReactJs")
                .pauseFor(2000)
                .deleteChars(7)
              typewriter
                .typeString("ReactNative")
                .pauseFor(2000)
                .deleteChars(25)
              typewriter
                .typeString("UI/UX Designer")
                .pauseFor(2000)
                .deleteChars(14)
              typewriter
                .typeString("desenvolvedor Front-End")
                .pauseFor(2000)
                .start();
            }}
          />
        </SubTitle>
        <IconsView>
          <IconTech src={htmlIcon} />
          <IconTech src={cssIcon} />
          <IconTech src={jsIcon} />
          <IconTech src={tsIcon} />
          <IconTech src={reactIcon} />
        </IconsView>
        <Comment>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </Comment>
        <MediaView>
          <MediaBtn
            onClick={() => {
              javascript: window.open("https://github.com/Gmelo52", "_blank");
            }}
          >
            <MediaIcon src={gitIcon} />
          </MediaBtn>
          <MediaBtn
            onClick={() => {
              javascript: window.open(
                "https://www.linkedin.com/in/gmelo52/",
                "_blank"
              );
            }}
          >
            <MediaIcon src={linkedinIcon} />
          </MediaBtn>
        </MediaView>
      </TextView>
      <ImgView>
        <MeImg src={meImg} />
      </ImgView>
    </Container>
  );
}
