import { useState } from "react";
import styled from "styled-components";
import LogoDark from "../../assets/imgs/logo-no-background-white.svg";
import LogoLight from "../../assets/imgs/logo-no-background.svg";

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
    const handleScroll = (id: string) => {
        const item = document.getElementById(id) as HTMLElement;
        const pos = item.getBoundingClientRect();
        window.scrollTo(0, pos.top);
    };
    return (
        <NavbarComponent theme={theme}>
            <NavbarContainer>
                <ImgLogo src={theme === "dark" ? LogoDark : LogoLight} />
                <NavbarLinks theme={theme} lang={lang}>
                    <Li
                        HTMLtext="Home"
                        style={{ color: theme === "dark" ? "white" : "black" }}
                        onClick={() => handleScroll("Home")}
                    />
                    <Li
                        HTMLtext={lang === "en" ? "Portfolio" : "Portifólio"}
                        onClick={() => handleScroll("Home")}
                    />
                    <Li
                        HTMLtext={lang === "en" ? "Services" : "Serviços"}
                        onClick={() => handleScroll("MyServices")}
                    />
                    <Li
                        HTMLtext={lang === "en" ? "About" : "Sobre"}
                        onClick={() => handleScroll("Home")}
                    />
                    <Li
                        HTMLtext={lang === "en" ? "Resume" : "Carreira"}
                        onClick={() => handleScroll("Home")}
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
    flex-wrap: nowrap;
    position: fixed;
    width: 100%;
    max-width: inherit;
    background: ${(p) => (p.theme === "dark" ? "#1f2233" : "#e8e8e8")};
    box-shadow: 0px 0 5px 2px #888;
    border: none;
    margin-bottom: 0;
    z-index: 9;
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
    @media screen and (max-width: 380px) {
        height: 6vh;
    }

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
    HTMLtext,
    style,
    onClick,
}: {
    style?: React.CSSProperties;
    HTMLtext: string;
    onClick: any;
}) => {
    return (
        <NavLink style={style} onClick={onClick}>
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

    @media screen and (max-width: 680px) {
        font-size: 30px !important;
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
