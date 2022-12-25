import { useContext, useState } from "react";
import styled, { ThemeContext } from "styled-components";
import LogoDark from "../../assets/imgs/logo-no-background-white.svg";
import LogoLight from "../../assets/imgs/logo-no-background.svg";

export const Navbar = ({
    lang,
    setShowWindow,
}: {
    lang: string;
    setShowWindow: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    const [menuToggle, setMenuToggle] = useState(false);
    const handleScroll = (id: string) => {
        const item = document.getElementById(id) as HTMLElement;
        const pos = item.getBoundingClientRect();
        window.scrollTo(0, pos.top);
    };

    const { title } = useContext(ThemeContext);
    return (
        <NavbarComponent>
            <NavbarContainer>
                <ImgLogo src={title === "dark" ? LogoDark : LogoLight} />
                <NavbarLinks lang={lang}>
                    <Li
                        HTMLtext="Home"
                        // style={{ color: theme === "dark" ? "white" : "black" }}
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
                    >
                        {!menuToggle ? "menu" : "close"}
                    </MaterialIcons>
                    <MaterialIcons
                        hide={false}
                        className={`material-symbols-outlined ${menuToggle}`}
                        onClick={() => setShowWindow(true)}
                    >
                        settings
                    </MaterialIcons>
                </IconsContainer>
            </NavbarContainer>
        </NavbarComponent>
    );
};

const NavbarComponent = styled.nav`
    flex-wrap: nowrap;
    position: fixed;
    width: 100%;
    max-width: inherit;
    box-shadow: 0px 0 5px 2px #888;
    background: ${(props) => props.theme.colors.background_primary};
    border: none;
    margin-bottom: 0;
    z-index: 9;
`;

const NavbarContainer = styled.div`
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

const Ul = styled.ul`
    margin: 0 !important;
    display: flex;
    flex-wrap: wrap;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    a {
        color: ${(props) => props.theme.colors.primary};
    }
`;

const NavbarCollapse = styled.div`
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
    lang,
    children,
}: {
    lang: string;
    children: JSX.Element | JSX.Element[];
}) => {
    return (
        <NavbarCollapse>
            <Ul>{children}</Ul>
            <ContactMe href="#contact">
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

const ContactMe = styled.a`
    color: ${(props) => props.theme.colors.primary};
    border: 1px solid ${(props) => props.theme.colors.primary};
    font-size: 15px;
    font-weight: 600;
    letter-spacing: 0.5px;
    text-transform: capitalize;
    text-decoration: none;
    padding: 10px 18px;

    border-radius: 4px;
    margin-left: 10px;
    font-family: "Montserrat", sans-serif;
    transition: all 0.4s ease-in-out;

    &:hover {
        color: ${(props) => props.theme.colors.background_primary};
        background: ${(props) => props.theme.colors.primary};
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
    color: ${(props) => props.theme.colors.third};
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
