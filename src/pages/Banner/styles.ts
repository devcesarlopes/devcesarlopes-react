import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: fit-content;
    padding: 8vh 0px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    box-shadow: 0px 0 5px 2px #888;
    background-image: ${(props) => props.theme.colors.background_gradient};
    color: white;
    font-weight: 600;
    z-index: 3;
`;

export const Text = styled.div`
    @media screen and (max-width: 680px) {
        h1 {
            font-size: 14vw !important;
        }

        h3 {
            font-size: 4vw !important;
        }
    }

    @media screen and (minx-width: 681px) and (max-width: 980px) {
        h1 {
            font-size: 8vw !important;
        }

        h3 {
            font-size: 2vw !important;
        }
    }

    color: white;

    h1 {
        font-size: 80px;
        font-family: museomoderno-black;
    }

    h3 {
        font-size: 22px;
        font-family: laila-medium;
    }
`;

export const DivFlexRow = styled.div`
    margin-top: 20px;
    height: fit-content;
    display: flex;
`;

export const ImgProfileContainer = styled.div`
    @media screen and (max-width: 680px) {
        display: none;
    }

    @media screen and (max-width: 980px) {
        width: 25vw !important;
        height: 25vw !important;
    }

    width: 35vh;
    height: 35vh;
    border-radius: 50%;
    background: white;
`;

export const ImgProfile = styled.img`
    width: inherit;
    height: inherit;
    padding: 2px;
    border-radius: 50%;
`;

export const DownloadLink = styled.a`
    @media screen and (max-width: 680px) {
        font-size: 3vw !important;
    }

    @media screen and (min-width: 681px) and (max-width: 980px) {
        font-size: 1.5vw !important;
    }

    background: ${(props) => props.theme.colors.primary};
    border: 1px solid ${(props) => props.theme.colors.primary};
    color: white;
    display: block;
    width: fit-content;

    font-size: 15px;
    font-weight: 600;
    letter-spacing: 0.5px;
    text-transform: capitalize;
    text-decoration: none;
    padding: 10px 18px;

    border-radius: 4px;
    margin-right: 20px;
    font-family: "Montserrat", sans-serif;
    transition: all 0.4s ease-in-out;
    cursor: pointer;

    &:hover {
        background: transparent;
        color: white;
    }
`;
