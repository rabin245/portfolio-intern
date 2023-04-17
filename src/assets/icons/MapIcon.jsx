const MapIcon = ({ size }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-map-pin"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    strokeWidth="1.75"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
    <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
  </svg>
);

export default MapIcon;
