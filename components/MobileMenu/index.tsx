"use client";

import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";
import logo from "../../public/Lamborghini-Logo.png";
import { BuildIcon } from "../Icon/build";
import { DollarIcon } from "../Icon/dollar";
import { EngineIcon } from "../Icon/engine";
import { HatIcon } from "../Icon/hat";

const Container = styled.div`
  @media only screen and (max-width: 650px) {
    position: absolute;
    bottom: 40px;
    left: 0px;
    right: 0px;
    z-index: 120;
    display: flex;
    justify-content: center;
    gap: 16px;
  }

  display: none;
`;

const PastilleLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 54px;
  width: 54px;
  border-radius: 100%;
  //background-color: #000;
  //padding: 7px 0px;
  // border: 4px solid #fff;

  :active {
    scale: 0.95;
  }
`;

const LeftElement = styled.div`
  display: flex;
  width: 0vw;
  overflow: hidden;
  //background-color: black;
  color: #fff;
  &[data-value="true"] {
    width: 30vw;
    transition: width 2s;
  }
  &[data-value="false"] {
    width: 0vw;
    transition: width 2s;
  }

  &[data-position="right"] {
    justify-content: flex-start;
  }
  &[data-position="left"] {
    justify-content: flex-end;
  }
`;

export function MobileMenu(): JSX.Element {
  const [clicked, setClicked] = useState(false);
  return (
    <Container>
      <LeftElement data-value={clicked} data-position="left">
        <div style={{ display: "flex", gap: "32px", alignItems: "center" }}>
          <div>
            <BuildIcon height="24px" width="24px" mainColor="#fff" />
          </div>
          <div>
            <DollarIcon height="24px" width="24px" mainColor="#fff" />
          </div>
        </div>
      </LeftElement>
      <PastilleLogo
        onClick={() => {
          setClicked(!clicked);
        }}
      >
        <Image src={logo} alt="Logo Lamborghini" height={36} width={36} />
      </PastilleLogo>
      <LeftElement data-value={clicked} data-position="right">
        <div style={{ display: "flex", gap: "32px", alignItems: "center" }}>
          <div>
            <HatIcon height="24px" width="24px" mainColor="#fff" />
          </div>
          <div>
            <EngineIcon height="24px" width="24px" mainColor="#fff" />
          </div>
        </div>
      </LeftElement>
    </Container>
  );
}
