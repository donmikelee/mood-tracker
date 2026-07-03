const LoadingSpinner = () => (
  <svg className="loading-spinner" viewBox="0 0 50 50" role="status" aria-label="Loading">
    <circle className="loading-spinner-track" cx="25" cy="25" r="20" fill="none" strokeWidth="5" />
    <circle className="loading-spinner-arc" cx="25" cy="25" r="20" fill="none" strokeWidth="5" />
  </svg>
);

export default LoadingSpinner;
