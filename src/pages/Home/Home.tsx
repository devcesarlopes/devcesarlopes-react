import { About } from "../About/About";
import { Banner } from "../Banner/Banner";
import { Experiences } from "../Experiences/Experiences";
import { Portfolio } from "../Portfolio/Portfolio";
import styled from "styled-components";

export const Home = ({ theme, lang }: { theme: string; lang: string }) => {
    return (
        <>
            <Banner id="Home" theme={theme} lang={lang} />
            <Portfolio id="Portifolio" theme={theme} lang={lang} />
            <Container theme={theme}>
                <About id="About" theme={theme} lang={lang} />
                <Experiences id="MyServices" theme={theme} lang={lang} />
            </Container>
        </>
    );
};

const Container = styled.div<{ theme: string }>`
    @media screen and (max-width: 1080px) {
        flex-direction: column;
    }

    @media screen and (min-width: 1081px) {
        background: ${(p) => (p.theme === "dark" ? "#24283d" : "#20486f")};
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
