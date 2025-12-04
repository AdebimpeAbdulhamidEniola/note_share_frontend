const BackgroundWave = () => {
  return (
    <div className="pointer-events-none fixed left-0 right-0 bottom-0 -z-10">
      <svg
        viewBox="0 0 1440 360"
        className="w-full h-[120px] md:h-[160px] lg:h-[210px] block"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="noteGrad" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="1" />
            <stop offset="100%" stopColor="#7c3aed" stopOpacity="1" />
          </linearGradient>
        </defs>

        {/* Purple background with inward curved top edges */}
        <path
          fill="url(#noteGrad)"
          d="M0,0 Q360,100 720,100 Q1080,100 1440,0 L1440,360 L0,360 Z"
        />
      </svg>
    </div>
  )
}

export default BackgroundWave