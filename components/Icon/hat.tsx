type HatIconProps = {
    height: string;
    width: string;
    mainColor: string;
}

export function HatIcon({height, width, mainColor}:HatIconProps): JSX.Element {
  return (
    <svg
    height={height}
    width={width}
      version="1.1"
      id="_x32_"
      viewBox="0 0 512 512"
      xmlSpace="preserve"
      fill={mainColor}
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
          dangerouslySetInnerHTML={{ __html: `  .st0{fill:${mainColor};}`   }}
        />{" "}
        <g>
          {" "}
          <path
            className="st0"
            d="M511.883,298.395c-2.781-27.281-54.391-46.141-129.406-51.844c-7.172-42.047-15.469-90.563-17.891-103.75 c-5.563-30.203-45.344-47.094-74.891-25.313c-15.5,11.422-29.359,12.234-36.703,12.234s-15.5,1.625-36.703-12.234 c-30.719-20.094-69.328-4.891-74.875,25.313c-2.969,16.109-14.688,84.844-22.391,130.203 C45.211,293.817-2.711,323.114,0.117,350.723c4.25,41.625,122.266,63.671,263.578,49.218 C405.039,385.488,516.148,340.036,511.883,298.395z M132.289,308.348l8.156-42.406c0,0,145.188,22.828,226.75-19.578l8.156,35.891 C375.352,282.254,287.258,337.708,132.289,308.348z"
          />{" "}
        </g>{" "}
      </g>
    </svg>
  );
}
