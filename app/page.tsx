"use client";

import { DesktopMenu } from "@/components/DesktopMenu";
import { DesktopHero } from "@/components/DesktopHero";

import lamborghiniHero from "../public/Lamborghini_hero.jpg";
import lamborghiniGarage from "../public/LamborghiniGarage.jpg";
import lamborghiniBack from "../public/Lamborghiniback.jpg";
import { MobileMenu } from "@/components/MobileMenu";
import { Box } from "@/components/DesktopHero/Box";
import { LamborghiniIcon } from "@/components/Icon/lamborghini";
import { BuildIcon } from "@/components/Icon/build";
import { BullIcon } from "@/components/Icon/bull";
import { RocketIcon } from "@/components/Icon/rocket";

export default function Home() {
  return (
    <>
      <DesktopMenu />
      <MobileMenu />
      <div
        style={{
          height: "100vh",
          overflowY: "scroll",
          scrollSnapType: "y mandatory",
        }}
      >
        <DesktopHero
          img={lamborghiniHero}
          rightJSX={
            <>
              <Box
                icon={
                  <LamborghiniIcon
                    height="24px"
                    width="24px"
                    mainColor="#fff"
                  />
                }
                title="300mph"
                description="Top Speed"
              />
              <Box
                icon={
                  <LamborghiniIcon
                    height="24px"
                    width="24px"
                    mainColor="#fff"
                  />
                }
                title="3472lbs"
                description="Weight"
              />
              <Box
                icon={
                  <LamborghiniIcon
                    height="24px"
                    width="24px"
                    mainColor="#fff"
                  />
                }
                title="100L"
                description="Range"
              />
              <Box
                icon={
                  <LamborghiniIcon
                    height="24px"
                    width="24px"
                    mainColor="#fff"
                  />
                }
                title="1.99s"
                description="0-60mph"
              />
            </>
          }
          leftJSX={
            <>
              <div
                style={{
                  padding: "4px 16px",
                  borderRadius: "8px",
                  background: "#000",
                  display: "flex",
                  width: "fit-content",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                No Electric car
              </div>
              <p style={{ fontSize: "64px" }}>Lamborghini</p>
              <p style={{ fontSize: "64px", fontWeight: "bold" }}>Aventador</p>
              <p>Do want to try the fastest car on earth?</p>
              <p>Join us and let`s build this car together</p>
              <p style={{ fontWeight: "300", display: "flex", gap: "8px" }}>
                From <span style={{ fontWeight: "bold" }}>3.5M$</span>
              </p>
              <div
                style={{
                  background: "#FC9303",
                  padding: "8px 16px",
                  display: "flex",
                  width: "fit-content",
                  borderRadius: "8px",
                  gap: "4px",
                  cursor: "pointer",
                }}
              >
                <BuildIcon height="20px" width="20px" mainColor="#fff" />{" "}
                <p style={{ fontSize: "18px", fontWeight: "700" }}>
                  Build your own Lambo
                </p>
              </div>
            </>
          }
        />
        <DesktopHero img={lamborghiniGarage} rightJSX={
            <></>
          }
          leftJSX={
            <>
              <div
                style={{
                  padding: "4px 16px",
                  borderRadius: "8px",
                  background: "#000",
                  display: "flex",
                  width: "fit-content",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Fastest car
              </div>
              <p style={{ fontSize: "64px", fontWeight: 'bold' }}>YOLO</p>
              <p>You can&apos;t drive under 140mph</p>
              <p>Let&apos;s drive together</p>
              <p style={{ fontWeight: "300", display: "flex", gap: "8px" }}>
                From <span style={{ fontWeight: "bold" }}>10.000$/Race</span>
              </p>
              <div
                style={{
                  background: "#A10500",
                  padding: "8px 16px",
                  display: "flex",
                  width: "fit-content",
                  borderRadius: "8px",
                  gap: "8px",
                  cursor: "pointer",
                }}
              >
                <BullIcon height="24px" width="24px" mainColor="#fff" />{" "}
                <p style={{ fontSize: "18px", fontWeight: "700" }}>
                  Unleash the BEAST inside of you
                </p>
              </div>
            </>
          } />
        <DesktopHero img={lamborghiniBack} rightJSX={
            <></>
          }
          leftJSX={
            <>
              <div
                style={{
                  padding: "4px 16px",
                  borderRadius: "8px",
                  background: "#000",
                  display: "flex",
                  width: "fit-content",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Advanced Driving experience
              </div>
              <p style={{ fontSize: "64px",  }}>Professional</p>
              <p style={{ fontSize: "64px", fontWeight: "bold" }}>DRIVER ONLY</p>
              <p>The only way to beat Hamilton</p>
              <p>Buy 1 get 1 Free</p>
              <p style={{ fontWeight: "300", display: "flex", gap: "8px" }}>
                <span style={{ fontWeight: "bold" }}>1.5M$</span> OFF
              </p>
              <div
                style={{
                  background: "#000",
                  padding: "8px 16px",
                  display: "flex",
                  width: "fit-content",
                  borderRadius: "8px",
                  gap: "4px",
                  cursor: "pointer",
                }}
              >
                <RocketIcon height="20px" width="20px" mainColor="#fff" />{" "}
                <p style={{ fontSize: "18px", fontWeight: "700" }}>
                  Drive a ROCKET without a driving licence
                </p>
              </div>
            </>
          } />
        
      </div>
    </>
  );
}
