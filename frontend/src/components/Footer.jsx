import Box from "@mui/material/Box";
import CopyrightAndTerms from "./CopyrightAndTerms"
import footerStyles from "../js/footerStyles.js"
import Container from "@mui/material/Container"

function Footer(props) {
    return (
        <Box style={footerStyles.general}>
          <Container maxWidth="xl">
             <CopyrightAndTerms/> 
          </Container>
        </Box>
    );
}

export default Footer;