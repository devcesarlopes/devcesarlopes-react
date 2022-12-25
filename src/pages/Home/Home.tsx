import { About } from "../About/About";
import { Banner } from "../Banner/Banner";
import { Experiences } from "../Experiences/Experiences";
import { Portfolio } from "../Portfolio/Portfolio";
import { Container } from "./styles";

export const Home = ({ lang }: { lang: string }) => {
    return (
        <>
            <Banner id="Home" lang={lang} />
            <Portfolio id="Portfolio" lang={lang} />
            <Container id="TEST">
                <About id="About" lang={lang} />
                <Experiences id="Experiences" lang={lang} />
            </Container>
        </>
    );
};
