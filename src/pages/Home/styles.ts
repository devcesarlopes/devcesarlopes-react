import styled from "styled-components";

export const Container = styled.div`
    @media screen and (max-width: 1080px) {
        flex-direction: column;
    }

    @media screen and (min-width: 1081px) {
        background: ${(props) => props.theme.colors.background_third};
        padding-bottom: 2%;
    }
    width: 100%;
    height: fit-content;
    display: flex;
    align-items: flex-start;
    flex-direction: row;
    justify-content: space-evenly;
    color: white;
    font-weight: 600;
`;
