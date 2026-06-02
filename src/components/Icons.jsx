const createIcon = (path, viewBox = '0 0 24 24', fill = 'none') =>
  function Icon({ className = '' }) {
    return (
      <svg
        aria-hidden="true"
        className={className}
        fill={fill}
        viewBox={viewBox}
        xmlns="http://www.w3.org/2000/svg"
      >
        {path}
      </svg>
    )
  }

export const MenuIcon = createIcon(
  <>
    <path d="M4 7h16" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
    <path d="M4 12h16" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
    <path d="M4 17h16" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
  </>,
)

export const CloseIcon = createIcon(
  <>
    <path d="M6 6l12 12" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
    <path d="M18 6L6 18" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
  </>,
)

export const ArrowRightIcon = createIcon(
  <>
    <path d="M5 12h14" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
    <path d="M13 6l6 6-6 6" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
  </>,
)

export const CodeWindowIcon = createIcon(
  <>
    <rect x="3.5" y="4.5" width="17" height="15" rx="3" stroke="currentColor" strokeWidth="1.6" />
    <path d="M8.5 10.25L6.25 12l2.25 1.75" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
    <path d="M15.5 10.25L17.75 12l-2.25 1.75" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
    <path d="M12.75 9l-1.5 6" stroke="currentColor" strokeLinecap="round" strokeWidth="1.6" />
  </>,
)

export const PaletteIcon = createIcon(
  <>
    <path
      d="M12 4.25c-4.83 0-8.75 3.55-8.75 7.93 0 2.87 2.22 5.25 4.95 5.25h1.67a1.5 1.5 0 011.5 1.5c0 .96.78 1.74 1.74 1.74 4.25 0 7.64-3.16 7.64-7.25C20.75 8.05 16.83 4.25 12 4.25z"
      stroke="currentColor"
      strokeWidth="1.6"
    />
    <circle cx="7.7" cy="11.2" r="1" fill="currentColor" />
    <circle cx="10.9" cy="8.8" r="1" fill="currentColor" />
    <circle cx="14.3" cy="9.2" r="1" fill="currentColor" />
    <circle cx="15.9" cy="12.3" r="1" fill="currentColor" />
  </>,
)

export const MegaphoneIcon = createIcon(
  <>
    <path d="M4.5 13.5V10.5L15.5 6v12l-11-4.5z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.6" />
    <path d="M8 14.5l1.6 4.25" stroke="currentColor" strokeLinecap="round" strokeWidth="1.6" />
    <path d="M18 9.25c1.2.95 1.95 2.32 1.95 3.75s-.75 2.8-1.95 3.75" stroke="currentColor" strokeLinecap="round" strokeWidth="1.6" />
  </>,
)

export const WorkflowIcon = createIcon(
  <>
    <rect x="3.5" y="4.5" width="5" height="5" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
    <rect x="15.5" y="4.5" width="5" height="5" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
    <rect x="9.5" y="14.5" width="5" height="5" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
    <path d="M8.5 7h7" stroke="currentColor" strokeLinecap="round" strokeWidth="1.6" />
    <path d="M12 9.5v5" stroke="currentColor" strokeLinecap="round" strokeWidth="1.6" />
  </>,
)

export const CheckCircleIcon = createIcon(
  <>
    <circle cx="12" cy="12" r="8.75" stroke="currentColor" strokeWidth="1.6" />
    <path d="M8.4 12.1l2.2 2.2 5-5.1" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
  </>,
)

export const StarIcon = createIcon(
  <path
    d="M12 3.85l2.4 4.86 5.36.78-3.88 3.78.92 5.34L12 16.08l-4.8 2.53.92-5.34-3.88-3.78 5.36-.78L12 3.85z"
    fill="currentColor"
  />,
  '0 0 24 24',
  'currentColor',
)

export const ChartIcon = createIcon(
  <>
    <path d="M4.5 18.5h15" stroke="currentColor" strokeLinecap="round" strokeWidth="1.6" />
    <path d="M7.25 15.25l3.1-3.15 2.8 2.2 4.1-5.05" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
  </>,
)

export const BoltIcon = createIcon(
  <path
    d="M13.35 2.95L6.9 12.05h4.05L10.65 21.05 17.1 11.95h-4.05l.3-9z"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="1.6"
  />,
)

export const OrbitIcon = createIcon(
  <>
    <circle cx="12" cy="12" r="2.4" fill="currentColor" />
    <path d="M12 3.5c4.2 0 7.6 3.8 7.6 8.5s-3.4 8.5-7.6 8.5-7.6-3.8-7.6-8.5S7.8 3.5 12 3.5z" stroke="currentColor" strokeWidth="1.6" />
    <path d="M5.75 7.25l12.5 9.5" stroke="currentColor" strokeLinecap="round" strokeWidth="1.6" />
    <path d="M18.25 7.25l-12.5 9.5" stroke="currentColor" strokeLinecap="round" strokeWidth="1.6" />
  </>,
)

export const LinkedInIcon = createIcon(
  <>
    <rect x="4.25" y="4.25" width="15.5" height="15.5" rx="3" stroke="currentColor" strokeWidth="1.6" />
    <path d="M8.2 10.25v5.55" stroke="currentColor" strokeLinecap="round" strokeWidth="1.7" />
    <path d="M8.2 8.1h.01" stroke="currentColor" strokeLinecap="round" strokeWidth="2.2" />
    <path d="M11.55 15.8v-3.1c0-1.3.95-2.45 2.3-2.45 1.32 0 2.1.86 2.1 2.45v3.1" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
    <path d="M11.55 10.25v5.55" stroke="currentColor" strokeLinecap="round" strokeWidth="1.7" />
  </>,
)

export const XSocialIcon = createIcon(
  <>
    <path d="M5 5l14 14" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
    <path d="M18.5 5L12.6 11.6" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
    <path d="M11.4 12.4L5.5 19" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
  </>,
)

export const InstagramIcon = createIcon(
  <>
    <rect x="4.25" y="4.25" width="15.5" height="15.5" rx="4" stroke="currentColor" strokeWidth="1.6" />
    <circle cx="12" cy="12" r="3.4" stroke="currentColor" strokeWidth="1.6" />
    <circle cx="16.55" cy="7.45" r="1" fill="currentColor" />
  </>,
)
