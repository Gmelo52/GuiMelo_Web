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
import meImg from '../../assets/me.png';
import IconTech from "../IconTech";

export default function Content() {
  return (
    <Container>
      <TextView>
        <Title>Guilherme Melo</Title>
        <SubTitle>Sou desenvolvedor Front-End.</SubTitle>
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
          <MediaBtn>
            <MediaIcon src={gitIcon} />
          </MediaBtn>
          <MediaBtn>
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
