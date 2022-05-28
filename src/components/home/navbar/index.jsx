import React, { useState } from "react";
import { Modal } from "antd";
import "antd/dist/antd.css";
import {
  TitleBottom,
  Play,
  Container,
  NavLogo,
  NavMenu,
  Menu,
  ContentLeft,
  ContentRight,
  Title,
  ContentCon,
} from "./style";
import Logo from "../../assets/img/logo.png";
import PlayP from "../../assets/img/play_icon.png";
const Navbar = () => {
  const [modal2Visible, setModal2Visible] = useState(false);
  return (
    <>
      <Container>
        <NavLogo>
          <img src={Logo} alt="Logo" />
        </NavLogo>
        <NavMenu>
          <Menu>Biz haqimizda</Menu>
          <Menu>Jamoa</Menu>
          <Menu>Ko'rsatuv sonlari</Menu>
          <Menu>Merch</Menu>
          <Menu>Hamkorlik</Menu>
        </NavMenu>
      </Container>
      <ContentCon>
        <ContentLeft>
          <Title>
            Universitetlar<span>"QVZ"da </span>emas, <span>ilmda</span>
            <br />
            <span>raqobat </span>qilishlari kerak
          </Title>
          <Play>
            <button onClick={() => setModal2Visible(!modal2Visible)}>
              <img src={PlayP} alt="play" />
            </button>
            <Modal
              centered
              visible={modal2Visible}
              onOk={() => setModal2Visible(false)}
              onCancel={() => setModal2Visible(false)}
              footer={null}
              header={null}
            >
              <div>
                <iframe
                  width="500"
                  height="315"
                  src="https://www.youtube.com/embed/kG0MA_NY_sc"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </Modal>
          </Play>
          <TitleBottom>
            <h3>Hurshid Maroziqov</h3>
            <p>Tadbirkor</p>
          </TitleBottom>
        </ContentLeft>
        <ContentRight>
          <img
            src="https://api.osmondagibolalar.uz/images/016015fd-1d14-477c-8f16-75a14a486507.png"
            width="504"
            height="509"
            alt="spiker-img"
          ></img>
        </ContentRight>
      </ContentCon>
    </>
  );
};

export default Navbar;
