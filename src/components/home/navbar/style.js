import styled from "styled-components";
//navbar begin
export const Container = styled.div`
  position: fixed;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid black;
  background: #222831;
  padding: 0.5rem 13rem;
`;
export const NavLogo = styled.div`
  cursor: pointer;
`;
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
`;
export const Menu = styled.div`
  display: flex;
  padding: 1.5rem;
  justify-content: space-around;
  font-family: "Gilroy", "Arial", sans-serif;
  font-size: 15px;
  color: #f1f1f1;
  cursor: pointer;
  &:hover {
    color: #ffd369;
    cursor: pointer;
  }
`;
// content begin
export const ContentCon = styled.div`
  padding-top: 60px;
  display: flex;
  background-color: #222831;
  border-bottom: 1px solid red;
`;
export const ContentLeft = styled.div`
  border: 1px solid pink;
  width: 50%;
`;
export const ContentRight = styled.div`
  border: 1px solid yellow;
  width: 50%;
`;
export const Title = styled.div`
  border: 1px solid pink;
  margin: 2rem 2rem 4rem 10rem;
  font-family: Bw Stretch;
  font-weight: bold;
  font-size: 35px;
  line-height: 60px;
  letter-spacing: 0.03em;
  color: #ffffff;
  span {
    color: #ffd369;
    font-family: Bw Stretch;
    font-weight: bold;
    font-size: 50px;
    line-height: 60px;
    letter-spacing: 0.03em;
  }
`;

export const Play = styled.div`
  margin: 2rem 2rem 4rem 10rem;
  margin-top: auto;
  margin-bottom: 93px;
  display: inline-block;
  border: none;
  background: none;
  cursor: pointer;
  button {
    border: none;
    background-color: inherit;
    cursor: pointer;
  }
  &:hover {
    cursor: pointer;
    color: #ffd369;
    opacity: 0.3;
  }
`;
export const TitleBottom = styled.div`
  margin: 2rem 2rem 4rem 10rem;
  h3 {
    color: #ffd369;
  }
  p {
    color: #ffffff;
  }
`;
//About

export const About = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 1px solid red;
  h2 {
  }
`;
export const AboutRight = styled.div`
  border: 1px solid black;

  width: 50%;
  h2 {
    position: relative;
    z-index: 1;
    margin: 0;
    margin-bottom: 10px;
    padding: 0;
    font-family: Bw Stretch;
    font-style: normal;
    font-weight: 800;
    font-size: 36px;
    line-height: 63px;
    text-transform: uppercase;
    color: #222831;
  }
`;
export const AboutLeft = styled.div`
  border: 1px solid black;
  width: 50%;
`;
