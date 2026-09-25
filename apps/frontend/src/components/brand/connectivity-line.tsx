export function ConnectivityLine() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 224 58"
      width="224"
      height="58"
    >
      <path
        className="brand-signal__path"
        d="M3 42C28 42 31 16 58 16c25 0 24 27 51 27h44c26 0 27-19 54-19h14"
        fill="none"
        stroke="currentColor"
        strokeDasharray="2 7"
        strokeLinecap="round"
        strokeWidth="1.25"
      />
      <circle cx="58" cy="16" r="2.5" fill="currentColor" opacity="0.55" />
      <circle cx="109" cy="43" r="2" fill="currentColor" opacity="0.4" />
      <circle cx="207" cy="24" r="2.5" fill="currentColor" opacity="0.55" />
    </svg>
  );
}
