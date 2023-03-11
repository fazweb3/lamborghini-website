'use client';

import Image from "next/image";
import styled from "styled-components";
import logo from '../../public/Lamborghini-Logo.png';

import { Dosis } from 'next/font/google'
import { LamborghiniIcon } from "../Icon/lamborghini";

const ubuntu = Dosis({
  weight: '700',
  subsets: ['latin'],
})

const Container = styled.div`
  display: flex;
  height: 56px;
  width: 90%;
  padding: 16px 40px;
  justify-content: space-between;
  overflow: hidden;
  margin: 0 auto;
  backdrop-filter: blur(10px);
 // background-color: #fff;
  border-radius: 0 0 8px 8px;
  position: absolute;
  top: 0px;
  left: 64px;
  right: 64px;
  z-index: 120;
  color: #fff;

  @media only screen and (max-width: 650px){
    display: none;
  }
`;

const LeftMenu = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

const CenterLogo = styled.div`
display: flex;
height: 100%;
position: relative;
align-items: center;
justify-content: center;
`;

const RightMenu = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

const PastilleAccount = styled.div`
    height: 30px;
    width: 30px;
    border-radius: 100%;
    background-color: black;
    border: 2px solid #dadada;
`;

export function DesktopMenu(): JSX.Element {
  return (
    <Container className={ubuntu.className}>
      <LeftMenu><p>Rent</p><p>Buy</p><p>Sell</p><p>Contact</p></LeftMenu>
      <CenterLogo><Image src={logo} alt='Logo Lamborghini'  height={40} width={40}  /></CenterLogo>
      <RightMenu><p>Build</p><p>Custom Car</p><LamborghiniIcon height='40px' width='40px' mainColor="#000" /><PastilleAccount /></RightMenu>
    </Container>
  );
}
