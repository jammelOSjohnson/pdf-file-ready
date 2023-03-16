import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import "./Footer.css";

function Footer() {
  let year = new Date().getFullYear();
  return (
    <>
      <Container>
        <Typography sx={{ textAlign: "center" }} className="footer">
          © {year} JAMAICA
        </Typography>
      </Container>
    </>
  );
}

export default Footer;
