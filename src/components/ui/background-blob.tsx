export function BackgroundBlob() {
  return (
    <svg
      viewBox="0 0 800 800"
      width="800"
      height="800"
      className="opacity-30"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id="blob-gradient"
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A7C4BC" offset="0%" />
          <stop stopColor="#739F92" offset="100%" />
        </linearGradient>
      </defs>
      <g transform="translate(400,400)">
        <path
          d="M182.7,-136.2C228.9,-74.1,254.3,6.6,237.9,81.5C221.5,156.4,163.2,225.5,91.2,245.9C19.1,266.3,-66.7,238,-128.6,187.4C-190.5,136.8,-228.5,63.9,-225.2,-6.8C-221.9,-77.5,-177.3,-146,-117.3,-206C-57.3,-266,18.1,-317.5,81.1,-290.4C144.1,-263.3,136.5,-198.3,182.7,-136.2Z"
          fill="url(#blob-gradient)"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 0 0"
            to="360 0 0"
            dur="60s"
            repeatCount="indefinite"
          />
        </path>
      </g>
    </svg>
  )
} 