import styled from "styled-components";

export const Container = styled.div`
    @media screen and (max-width: 1080px) {
        width: 100%;
        box-shadow: 0px 0 5px 2px #888;
        z-index: 2;
        padding-bottom: 5%;
        background: ${(props) => props.theme.colors.background_third}!important;
    }

    width: 50%;
    height: fit-content;
    display: flex;
    padding: 2% 5%;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;
    background: transparent !important;

    color: white;
    font-weight: 600;
`;
