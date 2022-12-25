import { About } from "../About/About";
import { Banner } from "../Banner/Banner";
import { Experiences } from "../Experiences/Experiences";
import { Portfolio } from "../Portfolio/Portfolio";
import { Container } from "./styles";

export const Home = ({ lang }: { lang: string }) => {
    return (
        <>
            <Banner id="Home" lang={lang} />
            <Portfolio id="Portifolio" lang={lang} />
            <Container>
                <About id="About" lang={lang} />
                <Experiences id="MyServices" lang={lang} />
            </Container>
        </>
    );
};
