import styled from "styled-components";
import Gif from "../../assets/gifs/brand-gif.gif";

export const LoadingPage = ({ loading }: { loading: boolean }) => {
    return loading ? (
        <Container>
            <img src={Gif} alt="" />
        </Container>
    ) : (
        <></>
    );
};

const Container = styled.div<{ theme: string }>`
    position: fixed;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    z-index: 999;
    width: 100%;
    height: 100vh;
    background: black;

    img {
        @media screen and (max-width: 1080px) {
            width: 100vw !important;
        }

        width: auto;
    }
`;
