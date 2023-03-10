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
                        afraid to face a challenge π€ .
                        <br />
                        <br />
                        I'm passionate about my work and I know how to get the
                        job done π. I have a incredible skill for learning π€,
                        If I don't have all the answers I won't measure
                        strenghts to look for them. Actually I learnead to
                        program by myself.
                        <br /> <br />I love to go to the beach ποΈ, gym πͺ and
                        swim in deep sea water π.
                        <br />
                        <br />
                        I'm located at πΊοΈ Salvador, Bahia, Brazil.
                        <br />
                        π I Speak Fluently English and Portuguese, also
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
                        que nΓ£o tem medo de enfrentar um desafio π€ .
                        <br />
                        <br />
                        Sou apaixonado pelo meu trabalho e sei como fazΓͺ-lo π.
                        Eu tenho uma habilidade incrΓ­vel para aprender novas
                        tecnologias e metodologias π€, Se eu nΓ£o tiver todas as
                        respostas, nΓ£o medirei esforΓ§os para procurΓ‘-las. Na
                        verdade, eu aprendi a programar sozinho..
                        <br /> <br />
                        Eu amo ir Γ  praia ποΈ, academia πͺ e nadar em Γ‘guas
                        profundas no mar π.
                        <br />
                        <br />
                        Eu estou em πΊοΈ Salvador, Bahia, Brasil.
                        <br />
                        π Eu falo fluentemente InglΓͺs e PortuguΓͺs, e tenho
                        nΓ­vel intermediΓ‘rio com Espanhol <br />
                        <br />
                        Veja o meu{" "}
                        <u style={{ cursor: "pointer" }}>CurrΓ­culo</u>.
                        <br />
                        <br />
                        Ou se preferir, dΓͺ uma olhada no meu{" "}
                        <u style={{ cursor: "pointer" }}>GitHub</u>,
                        <br />
                        <br />
                        Ou <u style={{ cursor: "pointer" }}>LinkedIn</u> para
                        ter uma visΓ£o completa da minha carreira.
                    </div>
                )}
            </div>
        </Container>
    );
};
