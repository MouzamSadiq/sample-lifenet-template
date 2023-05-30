import lnh from "../../assets/logo.png";

interface LogoProps {
  // Define the props for Logo component
}

export function Logo(props: LogoProps) {
  return (
    <img src={lnh} alt="logo" style={{ height: "50px", width: "180px" }} />
  );
}
