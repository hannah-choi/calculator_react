import React from "react";
import { ReactComponent as Github } from "../svg/github.svg";

function Footer() {
    return (
        <footer>
            <p className="secondary">© 2020 Hannah Choi</p>
            <a
                className="git_link"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/hannah-developer/calculator_react"
            >
                <Github
                    className="github"
                    style={{ width: `15px`, height: `15px` }}
                />{" "}
                GITHUB REPO
            </a>
        </footer>
    );
}

export default Footer;
