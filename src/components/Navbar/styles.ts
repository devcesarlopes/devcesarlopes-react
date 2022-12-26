import styled from "styled-components";

const hexToRgb = (hex: string) => {
    let result = /^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)!;
    return {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
    };
};

export const NavbarComponent = styled.nav`
    flex-wrap: nowrap;
    position: fixed;
    width: 100%;
    max-width: inherit;
    box-shadow: 0px 0 5px 2px #888;
    background: ${(props) => {
        const color = props.theme.colors.background_primary;
        const { r, g, b } = hexToRgb(color);
        return `rgba(${r}, ${g}, ${b}, 0.8)`;
    }};
    border: none;
    margin-bottom: 0;
    z-index: 9;
`;

export const NavbarContainer = styled.div`
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

export const ImgLogo = styled.img`
    @media screen and (max-width: 380px) {
        height: 6vh;
    }

    height: 6.5vh;
    padding: 10px 0px;
    width: auto;
`;

export const Ul = styled.ul`
    margin: 0 !important;
    display: flex;
    flex-wrap: wrap;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
`;

export const NavbarCollapse = styled.div`
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

export const NavbarVerticalCollapse = styled.div`
    @media screen and (min-width: 981px) {
        display: none !important;
    }

    border-top: 1px solid ${(props) => props.theme.colors.primary};
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    transition: all 0.4s ease-in-out;
`;

export const NavLink = styled.a.attrs({
    className: "",
})`
    color: ${(props) => props.theme.colors.primary};
    cursor: pointer;
    font-size: 17px;
    font-weight: bold;
    letter-spacing: 0.5px;
    text-transform: capitalize;
    text-decoration: none;
    font-family: "Montserrat", sans-serif;
    transition: all 0.4s ease-in-out;
    padding: 10px 12px;

    &:hover {
        color: ${(props) => props.theme.colors.background_primary};
        background: ${(props) => props.theme.colors.primary};
        border-radius: 4px;
        padding: 2px 12px;
    }
`;

export const NavLinkVertical = styled(NavLink)`
    width: 90%;
    text-align: center;
    &:hover {
        padding: 10px 12px;
    }
`;

export const ContactMe = styled.a`
    color: ${(props) => props.theme.colors.primary};
    border: 1px solid ${(props) => props.theme.colors.primary};
    font-size: 15px;
    font-weight: 600;
    letter-spacing: 0.5px;
    text-transform: capitalize;
    text-decoration: none;
    padding: 10px 18px;
    cursor: pointer;
    border-radius: 4px;
    margin-left: 10px;
    font-family: "Montserrat", sans-serif;
    transition: all 0.4s ease-in-out;

    &:hover {
        color: ${(props) => props.theme.colors.background_primary};
        background: ${(props) => props.theme.colors.primary};
    }
`;

export const IconsContainer = styled.div`
    display: flex;
`;

export const MaterialIcons = styled.span<{ hide: boolean }>`
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

        /* transition: all 0.4s ease; */
    }

    &:hover {
        cursor: pointer;
        transform: ${(p) => (p.hide ? "" : "rotateZ(-90deg)")};
    }
`;
