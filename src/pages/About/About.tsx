import styled from "styled-components";

export const About = ({
    id,
    theme,
    lang,
}: {
    id: string;
    theme: string;
    lang: string;
}) => {
    return (
        <Container id={id} theme={theme}>
            <Title theme={theme}>
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

const Container = styled.div<{ theme: string }>`
    @media screen and (max-width: 1080px) {
        width: 100%;
        box-shadow: 0px 0 5px 2px #888;
        z-index: 2;
        padding-bottom: 5%;
        background: ${(p) =>
            p.theme === "dark" ? "#24283d!important;" : "#20486f!important;"};
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

const Title = styled.div<{ theme: string }>`
    margin-top: 30px;
    width: 100%;
    color: white;
    position: relative;

    h1 {
        font-size: 35px;
        font-family: museomoderno-black;
    }

    h1:after {
        content: "";
        position: absolute;
        margin-top: 40px;
        left: 0;
        width: 100px;
        height: 2px;
        background-color: ${(p) =>
            p.theme === "dark" ? "#889BAE" : "#87c0cd"};
    }
`;
