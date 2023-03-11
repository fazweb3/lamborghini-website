"use client";

import Image, { StaticImageData } from "next/image";
import styled from "styled-components";
import { LamborghiniIcon } from "../Icon/lamborghini";
import { Box } from "./Box";

import { Dosis } from "next/font/google";
import { BuildIcon } from "../Icon/build";

const ubuntu = Dosis({
  weight: "400",
  subsets: ["latin"],
});

const Container = styled.div`
  display: flex;
  position: relative;
  min-height: 100%;
  scroll-snap-align: center;
`;

const GridBoxes = styled.div`
  z-index: 100;
  position: absolute;
  bottom: 64px;
  right: 64px;
  display: grid;
  grid-template-columns: 120px 120px;
  column-gap: 16px;
  row-gap: 16px;

  @media only screen and (max-width: 780px) {
    display: none;
  }
`;

const LeftSection = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 8px;
  bottom: 64px;
  left: 64px;
  z-index: 100;
  color: #fff;

  @media only screen and (max-width: 780px) {
    align-items: center;
    width: 100%;
    left: 0px;
    bottom: 120px;
  }
`;


type DesktopHeroProps = {
  img: StaticImageData;
  leftJSX: JSX.Element;
  rightJSX: JSX.Element;
};

export function DesktopHero({ img, leftJSX, rightJSX }: DesktopHeroProps): JSX.Element {
  return (
    <Container className={ubuntu.className}>
      <Image
        src={img}
        alt="lamborghini hero"
        fill
        style={{ objectFit: "cover", display: "flex" }}
        priority
      />
      <GridBoxes>
        {rightJSX}
      </GridBoxes>
      <LeftSection>
        {leftJSX}
      </LeftSection>
      
    </Container>
  );
}
