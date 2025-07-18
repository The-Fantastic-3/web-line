import * as React from "react";
import { IconSvgProps } from "@/types";

export const Logo: React.FC<IconSvgProps> = ({
  size = 36,
  height,
  ...props
}) => (
  <svg
    fill="none"
    height={size || height}
    viewBox="0 0 32 32"
    width={size || height}
    {...props}
  >
    <path
      clipRule="evenodd"
      d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

export const MaleIcon: React.FC<IconSvgProps> = ({
  size = 36,
  height,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={size || height}
    width={size || height}
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      d="M14 5v1h3.3L13 10.3C12 9.5 10.8 9 9.5 9C6.5 9 4 11.5 4 14.5S6.5 20 9.5 20s5.5-2.5 5.5-5.5c0-1.3-.5-2.5-1.3-3.5L18 6.7V10h1V5zm-4.5 5c1 0 2 .4 2.8 1c.2.2.5.4.7.7c.6.8 1 1.8 1 2.8C14 17 12 19 9.5 19S5 17 5 14.5S7 10 9.5 10"
    />
  </svg>
);

export const FemaleIcon: React.FC<IconSvgProps> = ({
  size = 36,
  height,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={size || height}
    width={size || height}
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      d="M11.5 18.5H10q-.213 0-.356-.144t-.144-.357t.144-.356T10 17.5h1.5v-3.023q-1.917-.215-3.209-1.637Q7 11.417 7 9.489q0-2.083 1.459-3.536Q9.917 4.5 12 4.5t3.541 1.453T17 9.489q0 1.928-1.291 3.35q-1.292 1.423-3.209 1.638V17.5H14q.213 0 .356.144t.144.357t-.144.356T14 18.5h-1.5V20q0 .213-.144.356t-.357.144t-.356-.144T11.5 20zm.503-5q1.659 0 2.828-1.172Q16 11.155 16 9.497t-1.172-2.828T11.997 5.5T9.169 6.672Q8 7.845 8 9.503q0 1.659 1.172 2.828q1.173 1.169 2.831 1.169"
    />
  </svg>
);

export const NonBinaryIcon: React.FC<IconSvgProps> = ({
  size = 36,
  height,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={size || height}
    width={size || height}
    viewBox="0 0 256 256"
  >
    <path
      fill="currentColor"
      d="M132 100.13V55.07l33.94 20.36a4 4 0 1 0 4.12-6.86L135.77 48l34.29-20.57a4 4 0 1 0-4.12-6.86L128 43.34L90.06 20.57a4 4 0 1 0-4.12 6.86L120.23 48L85.94 68.57a4 4 0 0 0 4.12 6.86L124 55.07v45.06a68 68 0 1 0 8 0M128 228a60 60 0 1 1 60-60a60.07 60.07 0 0 1-60 60"
    />
  </svg>
);
