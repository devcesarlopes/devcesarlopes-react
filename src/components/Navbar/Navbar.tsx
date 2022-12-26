import { MouseEvent, useContext, useState } from "react";
import styled, { ThemeContext } from "styled-components";
import LogoDark from "../../assets/imgs/logo-no-background-white.svg";
import LogoLight from "../../assets/imgs/logo-no-background.svg";
import { Li, LiVertical } from "./Li";
import { NavbarLinks } from "./NavbarLinks";
import {
    NavbarComponent,
    NavbarContainer,
    ImgLogo,
    IconsContainer,
    MaterialIcons,
    NavbarVerticalCollapse,
} from "./styles";

export const Navbar = ({
    lang,
    setShowWindow,
}: {
    lang: string;
    setShowWindow: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    const [menuToggle, setMenuToggle] = useState(false);

    const handleScroll = (event: MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        console.log(window.outerHeight);
        const id = (event.target as Element).id.replace("goto-", "");
        switch (id) {
            case "Home":
                window.scrollTo(0, 0);
                break;
            case "Portfolio":
                window.scrollTo(0, window.innerHeight * 0.6);
                break;
            case "About":
                let about = document.getElementById("About") as HTMLElement;
                let aboutPos = about.getBoundingClientRect();
                window.scrollTo(
                    0,
                    window.pageYOffset + aboutPos.top - window.innerHeight * 0.1
                );
                break;
            case "Experiences":
                let exp = document.getElementById("Experiences") as HTMLElement;
                let expPos = exp.getBoundingClientRect();
                window.scrollTo(
                    0,
                    window.pageYOffset + expPos.top - window.innerHeight * 0.1
                );
                break;

            case "Footer":
                let foot = document.getElementById("Footer") as HTMLElement;
                let footPos = foot.getBoundingClientRect();
                window.scrollTo(0, window.pageYOffset + footPos.top);
                break;
        }
    };

    const { title } = useContext(ThemeContext);
    return (
        <NavbarComponent>
            <NavbarContainer>
                <ImgLogo src={title === "dark" ? LogoDark : LogoLight} />
                <NavbarLinks lang={lang} handleScroll={handleScroll}>
                    <Li id="goto-Home" HTMLtext="Home" onClick={handleScroll} />
                    <Li
                        id="goto-Portfolio"
                        HTMLtext={lang === "en" ? "Portfolio" : "Portifolio"}
                        onClick={handleScroll}
                    />
                    <Li
                        id="goto-About"
                        HTMLtext={lang === "en" ? "About" : "Sobre"}
                        onClick={handleScroll}
                    />
                    <Li
                        id="goto-Experiences"
                        HTMLtext={
                            lang === "en" ? "Experiences" : "Experiências"
                        }
                        onClick={handleScroll}
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
                        className={`material-symbols-outlined`}
                        onClick={() => setShowWindow(true)}
                    >
                        settings
                    </MaterialIcons>
                </IconsContainer>
            </NavbarContainer>
            {menuToggle ? (
                <NavbarVerticalCollapse>
                    <LiVertical
                        id="goto-Home"
                        HTMLtext="Home"
                        onClick={(event) => {
                            handleScroll(event);
                            setMenuToggle(!menuToggle);
                        }}
                    />
                    <LiVertical
                        id="goto-Portfolio"
                        HTMLtext={lang === "en" ? "Portfolio" : "Portifolio"}
                        onClick={(event) => {
                            handleScroll(event);
                            setMenuToggle(!menuToggle);
                        }}
                    />
                    <LiVertical
                        id="goto-About"
                        HTMLtext={lang === "en" ? "About" : "Sobre"}
                        onClick={(event) => {
                            handleScroll(event);
                            setMenuToggle(!menuToggle);
                        }}
                    />
                    <LiVertical
                        id="goto-Experiences"
                        HTMLtext={
                            lang === "en" ? "Experiences" : "Experiências"
                        }
                        onClick={(event) => {
                            handleScroll(event);
                            setMenuToggle(!menuToggle);
                        }}
                    />
                    <LiVertical
                        id="goto-Footer"
                        HTMLtext={lang === "en" ? "Contact Me" : "Contato"}
                        onClick={(event) => {
                            handleScroll(event);
                            setMenuToggle(!menuToggle);
                        }}
                    />
                </NavbarVerticalCollapse>
            ) : (
                <></>
            )}
        </NavbarComponent>
    );
};
