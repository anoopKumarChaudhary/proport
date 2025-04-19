import React from "react";

const CircularProgress = ({
  size = 90,
  strokeWidth = 10,
  percentage = 75,
  color = "#c685e4",
  bgColor = "transparent",
  label = "React",
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div
      style={{
        backgroundColor: "rgb(36, 36, 36)",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "5px",
        padding: "15px 0",
      }}
    >
      <svg width={size} height={size}>
        {/* Background circle */}
        <circle
          stroke={bgColor}
          fill="transparent"
          strokeWidth={strokeWidth}
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
        {/* Progress circle */}
        <circle
          stroke={color}
          fill="transparent"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          r={radius}
          cx={size / 2}
          cy={size / 2}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
        {/* Percentage Text */}
        <text
          x="50%"
          y="48%" // slightly above center
          dominantBaseline="middle"
          textAnchor="middle"
          fill="white"
          fontWeight="800"
          fontSize="18px"
          fontFamily="Inter, sans-serif"
        >
          {percentage}%
        </text>

        {/* Label Text */}
        {/* <text
      x="50%"
      y="60%" // slightly below center
      dominantBaseline="middle"
      textAnchor="middle"
      fontSize="0.8rem"
      fill="white"
      fontWeight="800"
      fontFamily="Inter, sans-serif"
    >
      {label}
    </text> */}
      </svg>
      <p
        style={{
          textAlign: "center",
          color: "white",
          marginTop: "10px",
          borderRadius: "10px",
        }}
      >
        {label}
      </p>
    </div>
  );
};

export default CircularProgress;
