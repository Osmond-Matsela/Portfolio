export function Logo() {
  return (
    <svg width="280" height="50" viewBox="0 0 380 80">
      <text
        x="-20"
        y="52"
        fontFamily="monospace"
        fontSize="38"
        fontWeight="bold"
        fill="currentColor"
      >
        osmond@fedora:~$
      </text>
      <rect x="360" y="18" width="8" height="40" fill="currentColor" rx="2">
        <animate
          attributeName="opacity"
          values="1;0;1"
          dur="1s"
          repeatCount="indefinite"
        />
      </rect>
    </svg>
  );
}

// bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent
