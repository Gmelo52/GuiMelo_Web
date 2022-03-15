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
        Formado em análise de sistemas, atualmente trabalho como programador 
        front-end mobile/web com experiencia em IOT. Apaixonado por tecnología, 
        decidi ingressar na área e logo comecei a me especializar em front-end, 
        hoje desenvolvo em ReactJs/ReactNative com Javascript/Typescript.<br></br>
        <br></br>

        Comecei meu trabalho com suporte a hardware e logo depois comecei a 
        trabalhar como pesquisador focado em desenvolver soluções em algumas 
        pesquisas relacionadas a área acadêmica.<br></br>
        <br></br>


        Fora do horário de trabalho, busco me atualizar e melhorar meu 
        conhecimento na área em que trabalho, sempre procurando novas 
        tecnologias e estudando como elas funcionam. 

        Comecei estudar programação na faculdade, porém me aprofundei 
        quando já estava trabalhando, hoje eu desenvolvo soluções 
        simples e objetivas em sites e apps. Estudo todos os dias para 
        buscar aprimorar as boas práticas, estratégias, e soluções 
        que estejam em alta na área.

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
