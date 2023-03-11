type EngineIconProps = {
    height: string;
    width: string;
    mainColor: string;
}

export function EngineIcon({height, width, mainColor}:EngineIconProps): JSX.Element {
  return (
    <svg
      fill={mainColor}
      height={height}
      width={width}
      viewBox="0 -14.14 122.88 122.88"
      version="1.1"
      id="Layer_1"
      xmlSpace="preserve"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth={0} />
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g id="SVGRepo_iconCarrier">
        {" "}
        <style
          type="text/css"
          dangerouslySetInnerHTML={{
            __html: ".st0{fill-rule:evenodd;clip-rule:evenodd;}",
          }}
        />{" "}
        <g>
          {" "}
          <path
            className="st0"
            d="M43.58,92.2L31.9,80.53h-8.04c-2.81,0-5.11-2.3-5.11-5.11v-8.7h-4.87V76.9c0,2.17-1.78,3.95-3.95,3.95H3.95 C1.78,80.85,0,79.07,0,76.9V42.4c0-2.17,1.78-3.95,3.95-3.95h5.98c2.17,0,3.95,1.78,3.95,3.95v10.18h4.87v-9.36 c0-2.81,2.3-5.11,5.11-5.11h8.54l12.07-12.83c1.4-1.22,3.26-1.65,5.43-1.56h49.73c1.72,0.19,3.03,0.85,3.83,2.09 c0.8,1.22,0.67,1.91,0.67,3.28v23.49H109V42.4c0-2.17,1.78-3.95,3.95-3.95h5.98c2.17,0,3.95,1.78,3.95,3.95v34.5 c0,2.17-1.78,3.95-3.95,3.95h-5.98c-2.17,0-3.95-1.78-3.95-3.95V66.72h-4.87v0.92c0,2.73,0.08,4.38-1.66,6.64 c-0.33,0.43-0.7,0.84-1.11,1.22L83.53,92.96c-0.89,0.99-2.24,1.53-4.02,1.63h-30.4C46.84,94.49,44.99,93.71,43.58,92.2L43.58,92.2z M63.71,61.78l-12.64-1.19l10.48-22.96h14.33l-8.13,13.17l14.62,1.62L55.53,84.64L63.71,61.78L63.71,61.78z M51.98,0h34.5 c2.17,0,3.95,1.78,3.95,3.95v5.98c0,2.17-1.78,3.95-3.95,3.95H76.3v5.03H62.16v-5.03H51.98c-2.17,0-3.95-1.78-3.95-3.95V3.95 C48.03,1.78,49.81,0,51.98,0L51.98,0z"
          />{" "}
        </g>{" "}
      </g>
    </svg>
  );
}