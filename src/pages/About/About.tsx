import { Container } from "./styles";
import { Title } from "../../components";
export const About = ({ id, lang }: { id: string; lang: string }) => {
    return (
        <Container id={id}>
            <Title>
                <h1>{lang === "en" ? "About Me" : "Sobre Mim"}</h1>
            </Title>
            <div>
                {lang === "en" ? (
                    <div style={{ fontSize: "20px" }}>
                        I am a hard-working and driven individual who isn't
                        afraid to face a challenge 🤠.
                        <br />
                        <br />
                        I'm passionate about my work and I know how to get the
                        job done 😉. I have a incredible skill for learning 🤓,
                        If I don't have all the answers I won't measure
                        strenghts to look for them. Actually I learnead to
                        program by myself.
                        <br /> <br />I love to go to the beach 🏖️, gym 💪 and
                        swim in deep sea water 🏊.
                        <br />
                        <br />
                        I'm located at 🗺️ Salvador, Bahia, Brazil.
                        <br />
                        🌐 I Speak Fluently English and Portuguese, also
                        Intermediary level Spanish
                        <br />
                        <br />
                        Check out my <u style={{ cursor: "pointer" }}>RESUME</u>
                        .
                        <br />
                        <br />
                        Or if you'd prefer, take a look at my{" "}
                        <u style={{ cursor: "pointer" }}>GitHub</u>,
                        <br />
                        <br />
                        Or <u style={{ cursor: "pointer" }}>LinkedIn</u> for a
                        closer look about my career.
                    </div>
                ) : (
                    <div style={{ fontSize: "20px" }}>
                        Eu sou extremamente dedicado ao trabalho e motivado e
                        que não tem medo de enfrentar um desafio 🤠.
                        <br />
                        <br />
                        Sou apaixonado pelo meu trabalho e sei como fazê-lo 😉.
                        Eu tenho uma habilidade incrível para aprender novas
                        tecnologias e metodologias 🤓, Se eu não tiver todas as
                        respostas, não medirei esforços para procurá-las. Na
                        verdade, eu aprendi a programar sozinho..
                        <br /> <br />
                        Eu amo ir à praia 🏖️, academia 💪 e nadar em águas
                        profundas no mar 🏊.
                        <br />
                        <br />
                        Eu estou em 🗺️ Salvador, Bahia, Brasil.
                        <br />
                        🌐 Eu falo fluentemente Inglês e Português, e tenho
                        nível intermediário com Espanhol <br />
                        <br />
                        Veja o meu{" "}
                        <u style={{ cursor: "pointer" }}>Currículo</u>.
                        <br />
                        <br />
                        Ou se preferir, dê uma olhada no meu{" "}
                        <u style={{ cursor: "pointer" }}>GitHub</u>,
                        <br />
                        <br />
                        Ou <u style={{ cursor: "pointer" }}>LinkedIn</u> para
                        ter uma visão completa da minha carreira.
                    </div>
                )}
            </div>
        </Container>
    );
};
