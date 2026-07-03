import Image from "next/image";
import logo from "../../assets/images/logo.svg";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const LoadingPage = () => (
  <div className="loading-page">
    <Image src={logo} alt="Mood tracker" className="loading-page-logo" />
    <div className="loading-page-content">
      <LoadingSpinner />
      <p className="loading-page-text text-preset-5">Pobieranie danych...</p>
    </div>
  </div>
);

export default LoadingPage;
