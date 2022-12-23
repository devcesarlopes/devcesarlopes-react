import { useState } from "react";
import styled from "styled-components";
import LogoDark from "../../assets/imgs/logo-no-background-white.svg";
import LogoLight from "../../assets/imgs/logo-no-background.svg";
import "./Navbar.scss";

export const Navbar = ({
    theme,
    lang,
    setShowWindow,
}: {
    setShowWindow: React.Dispatch<React.SetStateAction<boolean>>;
    theme: string;
    lang: string;
}) => {
    const [menuToggle, setMenuToggle] = useState(false);

    return (
        <NavbarComponent theme={theme}>
            <NavbarContainer>
                <ImgLogo src={theme === "dark" ? LogoDark : LogoLight} />
                <NavbarLinks theme={theme} lang={lang}>
                    <Li
                        href="#home"
                        HTMLtext="Home"
                        style={{ color: "white" }}
                    />
                    <Li
                        href="#portfolio"
                        HTMLtext={lang === "en" ? "Portfolio" : "Portifólio"}
                    />
                    <Li
                        href="#services"
                        HTMLtext={lang === "en" ? "Services" : "Serviços"}
                    />
                    <Li
                        href="#about"
                        HTMLtext={lang === "en" ? "About" : "Sobre"}
                    />
                    <Li
                        href="#resume"
                        HTMLtext={lang === "en" ? "Resume" : "Carreira"}
                    />
                </NavbarLinks>
                <IconsContainer>
                    <MaterialIcons
                        hide={true}
                        className={`material-symbols-outlined ${menuToggle}`}
                        onClick={() => setMenuToggle(!menuToggle)}
                        theme={theme}
                    >
                        {!menuToggle ? "menu" : "close"}
                    </MaterialIcons>
                    <MaterialIcons
                        hide={false}
                        className={`material-symbols-outlined ${menuToggle}`}
                        onClick={() => setShowWindow(true)}
                        theme={theme}
                    >
                        settings
                    </MaterialIcons>
                </IconsContainer>
            </NavbarContainer>
        </NavbarComponent>
    );
};

const NavbarComponent = styled.nav.attrs({
    className: "",
})<{ theme: string }>`
    position: fixed;
    width: 100%;
    max-width: inherit;
    background: ${(p) => (p.theme === "dark" ? "#1f2233" : "white")};
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.12);
    border: none;
    margin-bottom: 0;
    z-index: 3;
`;

const NavbarContainer = styled.div.attrs({
    className: "",
})`
    @media screen and (max-width: 980px) {
        justify-content: space-between !important;
    }

    padding: 15px 16px;
    display: flex;
    flex-wrap: wrap;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-around;
`;

const ImgLogo = styled.img`
    height: 6.5vh;
    padding: 10px 0px;
    width: auto;
`;
const Ul = styled.ul.attrs({
    className: "",
})<{ theme: string }>`
    margin: 0 !important;
    display: flex;
    flex-wrap: wrap;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    a {
        color: ${(p) => (p.theme === "dark" ? "#889BAE" : "#113f67")};
    }
`;

const NavbarCollapse = styled.div.attrs({
    className: "",
})`
    @media screen and (max-width: 980px) {
        display: none !important;
    }

    display: flex;
    flex-wrap: wrap;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    transition: all 0.4s ease-in-out;
`;
const NavbarLinks = ({
    theme,
    lang,
    children,
}: {
    theme: string;
    lang: string;
    children: JSX.Element | JSX.Element[];
}) => {
    return (
        <NavbarCollapse>
            <Ul theme={theme}>{children}</Ul>
            <ContactMe theme={theme} href="#contact">
                {lang === "en" ? "Contact Me" : "Contato"}
            </ContactMe>
        </NavbarCollapse>
    );
};

const NavLink = styled.a.attrs({
    className: "",
})`
    // color: #eaeeff;
    font-size: 17px;
    font-weight: bold;
    letter-spacing: 0.5px;
    text-transform: capitalize;
    text-decoration: none;
    font-family: "Montserrat", sans-serif;
    transition: all 0.4s ease-in-out;
    padding: 10px 12px;
`;
const Li = ({
    href,
    HTMLtext,
    style,
}: {
    style?: React.CSSProperties;
    href: string;
    HTMLtext: string;
}) => {
    return (
        <NavLink href={href} style={style}>
            {HTMLtext}
        </NavLink>
    );
};

const ContactMe = styled.a.attrs({
    className: "",
})<{ theme: string }>`
    color: ${(p) => (p.theme === "dark" ? "#fbf4e0" : "black")};
    font-size: 15px;
    font-weight: 600;
    letter-spacing: 0.5px;
    text-transform: capitalize;
    text-decoration: none;
    padding: 10px 18px;
    border: 1px solid ${(p) => (p.theme === "dark" ? "#889BAE" : "#113f67")};
    border-radius: 4px;
    margin-left: 10px;
    font-family: "Montserrat", sans-serif;
    transition: all 0.4s ease-in-out;

    &:hover {
        background: ${(p) => (p.theme === "dark" ? "#889BAE" : "#113f67")};
        color: ${(p) => (p.theme === "dark" ? "#1f2233" : "white")};
    }
`;

const IconsContainer = styled.div`
    display: flex;
`;

const MaterialIcons = styled.span<{ hide: boolean }>`
    @media screen and (max-width: 980px) {
        display: block !important;
    }

    display: ${(p) => (p.hide ? `none` : "block")};
    color: ${(p) => (p.theme === "dark" ? "white" : "#113f67")};
    font-size: 40px;
    padding: 16.5px 18px;
    border-radius: 10px;
    transition: all 0.4s ease;

    &.true {
        transform: rotateZ(-90deg);

        transition: all 0.4s ease;
    }

    &.false {
        transition: all 0.4s ease;
    }

    &:hover {
        cursor: pointer;
        transform: ${(p) => (p.hide ? "" : "rotateZ(-90deg)")};
    }
`;
