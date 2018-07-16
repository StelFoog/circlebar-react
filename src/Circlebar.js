import React from "react";

const Circlebar = ({
  progress,
  size = "100%",
  progressbarWidth = 10,
  progressbarColor = "#5BF35B",
  trailColor = "#256325",
  outerBorderWidth = 0,
  outerBorderColor = "#000",
  innerBorderWidth = 0,
  innerBorderColor = "#000",
  insideBackgroundColor = "none",
  guideLinesAmount = 0,
  guideLinesColor = "#000",
  guideLinesWidth = 1.5
}) => {
  const outerBorderRadius = 50 - outerBorderWidth / 2;
  const progressbarRadius =
    outerBorderRadius - (outerBorderWidth + progressbarWidth) / 2;
  const innerBorderRadius =
    progressbarRadius - (progressbarWidth + innerBorderWidth) / 2;
  const insideBackgroundRadius = innerBorderRadius - innerBorderWidth / 2;

  const progressbarCircumferance = progressbarRadius * 2 * Math.PI;
  const progressOffset = progressbarCircumferance * (1 - progress / 100);

  return (
    <svg width={size} height={size} viewBox={"0 0 100 100"}>
      <circle
        cx={50}
        cy={50}
        r={insideBackgroundRadius}
        fill={insideBackgroundColor}
      />
      <circle
        cx={50}
        cy={50}
        r={outerBorderRadius}
        fill={"none"}
        stroke={outerBorderColor}
        strokeWidth={outerBorderWidth}
      />
      <circle
        cx={50}
        cy={50}
        r={innerBorderRadius}
        fill={"none"}
        stroke={innerBorderColor}
        strokeWidth={innerBorderWidth}
      />
      <circle
        cx={50}
        cy={50}
        r={progressbarRadius}
        fill={"none"}
        stroke={trailColor}
        strokeWidth={progressbarWidth}
      />
      <circle
        cx={50}
        cy={50}
        r={progressbarRadius}
        fill={"none"}
        stroke={progressbarColor}
        strokeWidth={progressbarWidth}
        strokeDasharray={progressbarCircumferance}
        strokeDashoffset={progressOffset}
        transform={"rotate(-90, 50, 50)"}
      />
      <LineMarkings
        amount={guideLinesAmount}
        y1={outerBorderWidth}
        y2={outerBorderWidth + progressbarWidth}
        color={guideLinesColor}
        width={guideLinesWidth}
      />
    </svg>
  );
};

const Line = ({ degree, y1, y2, color, width }) => (
  <line
    x1={50}
    x2={50}
    y1={y1}
    y2={y2}
    stroke={color}
    strokeWidth={width}
    transform={"rotate(" + degree + ", 50, 50)"}
  />
);

const LineMarkings = ({ amount, y1, y2, color, width }) => {
  const deg = 360 / amount;
  var arr = [];
  for (var i = 0; i < 360; i += deg) {
    arr.push(<Line degree={i} y1={y1} y2={y2} />);
  }
  return arr;
};

export default Circlebar;
