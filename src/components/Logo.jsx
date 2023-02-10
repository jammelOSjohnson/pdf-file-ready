import { Typography } from "@mui/material";
import LogoImage from "../assets/1.png";

function Logo() {
  return (
    <>
      <Typography sx={{ textAlign: "center" }}>
        <img src={LogoImage} alt="Logo here" width="100px" />
      </Typography>
    </>
  );
}

export default Logo;
