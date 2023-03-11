type RocketIconProps = {
  height: string;
  width: string;
  mainColor: string;
};

export function RocketIcon({
  height,
  width,
  mainColor,
}: RocketIconProps): JSX.Element {
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
          dangerouslySetInnerHTML={{ __html: `  .st0{fill:${mainColor};}  ` }}
        />{" "}
        <g>
          {" "}
          <polygon
            className="st0"
            points="219.363,109.356 113.285,237.075 0.003,250.793 85.082,139.59 "
          />{" "}
          <polygon
            className="st0"
            points="402.644,292.637 274.925,398.715 261.207,511.996 372.41,426.934 "
          />{" "}
          <path
            className="st0"
            d="M500.785,133.325c18.172-51.828,12.641-99.359-5.047-117.063c-17.703-17.688-65.234-23.219-117.047-5.047 L500.785,133.325z"
          />{" "}
          <path
            className="st0"
            d="M491.113,156.528L355.472,20.887c-23.219,11.266-46.531,27.469-67.719,49.672 C227.035,134.153,132.05,258.731,132.05,258.731l110.406,110.391l10.813,10.828c0,0,124.594-94.969,188.172-155.703 C463.645,203.059,479.848,179.747,491.113,156.528z M287.738,224.262c-21.219-21.219-21.219-55.609,0-76.844 c21.219-21.219,55.625-21.219,76.844,0c21.219,21.234,21.219,55.625-0.016,76.844C343.363,245.481,308.957,245.481,287.738,224.262 z"
          />{" "}
          <path
            className="st0"
            d="M190.925,391.2L178.8,379.075c-13.844,51.828-81.734,69.796-81.734,69.796s25.969-31.734,27.422-53.39 c1.844-27.516-8.656-17.313-21.641-11.547c-14.219,6.313-36.813,6.5-36.813,6.5s10.828-9.375,22.359-32.469 c7.906-15.813,26.156-24.188,41.844-27.453l-9.438-9.438c-18.406-13.797-47.547,0.078-61.609,24.969 c-11.328,20.016-31.5,68.156-53.359,69.296c13.813,11.5,33.344,17.234,57.484,6.906c24.141-10.359,29.906,0,10.344,19.531 c-12.688,12.703-58.625,28.734-59.766,52.875c26.438-5.734,80.078,3.219,118.406-14.938 C175.972,459.027,197.816,418.793,190.925,391.2z"
          />{" "}
        </g>{" "}
      </g>
    </svg>
  );
}