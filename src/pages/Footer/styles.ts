import styled from "styled-components";

export const Container = styled.div<{ theme: string }>`
    width: 100%;
    height: fit-content;
    padding: 6vh 0px;
    display: flex;
    flex-direction: row;
    align-items: center;
    background: ${(props) => props.theme.colors.background_primary};
    justify-content: space-evenly;
    box-shadow: 0px 0 5px 2px #888;
    color: white;
    font-weight: 600;
    z-index: 3;
`;

export const Text = styled.div<{ theme: string }>`
    @media screen and (max-width: 680px) {
        h1 {
            font-size: 8vw !important;
        }

        h3 {
            font-size: 2.5vw !important;
        }
    }

    @media screen and (min-width: 681px) and (max-width: 980px) {
        h1 {
            font-size: 6vw !important;
        }

        h3 {
            font-size: 2vw !important;
        }
    }

    text-align: center;
    color: ${(props) => props.theme.colors.third};

    h1 {
        font-size: 50px;
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
    justify-content: center;
`;
