import React from "react";

const Footer = ()=> {
    return(
        <footer>
            <p>&copy; Electricat {(new Date()).getFullYear()}</p>
        </footer>
    );
}

export default Footer;