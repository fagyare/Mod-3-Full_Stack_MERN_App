import { Link } from "react-router-dom";
import { useState } from "react";


function Footer({ setUser }) {

    const year = new Date().getFullYear();


    return (
        <div className="footer">
            <br/>
            <br/>
            <br/>
            <footer>{`Copyright © Franklin Agyare ${year}`}</footer>;
        </div>

    )

}

export default Footer;

