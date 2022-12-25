import { Title } from "../../components";
import { Box } from "./Box";
import { BoxContainer, Container } from "./styles";

export const Experiences = ({ id, lang }: { id: string; lang: string }) => {
    return (
        <Container id={id}>
            <Title>
                <h1>{lang === "en" ? "Experiences" : "Experiências"}</h1>
            </Title>
            <BoxContainer>
                <Box
                    lang={lang}
                    icon="react"
                    titleEn="Front End"
                    titlePt="Front End"
                    textEn={
                        <>
                            • React: 2yrs & 3 Projects + Side Projects
                            <br />
                            • Angular: 1y & 1 Project <br />• All projects done
                            with Typescript
                        </>
                    }
                    textPt={
                        <>
                            • React: 2 anos & 3 Projetos + Side Projects
                            <br />
                            • Angular: 1 ano & 1 Projeto <br />• Todos os
                            Projetos com Typescript
                        </>
                    }
                />
                <Box
                    lang={lang}
                    icon="developer_mode"
                    titleEn="Mobile"
                    titlePt="Mobile"
                    textEn={
                        <>
                            • React-Native: 1,5yrs & 3 Projects
                            <br />
                            • Kotlin: 1y & 1 Project <br />
                        </>
                    }
                    textPt={
                        <>
                            • React-Native: 1,5 anos & 3 Projetos
                            <br />
                            • Kotlin: 1 ano & 1 Projeto <br />
                        </>
                    }
                />
                <Box
                    lang={lang}
                    icon="database"
                    titleEn="Back End"
                    titlePt="Back End"
                    textEn={
                        <>
                            • NodeJs: 1,5yrs & 3 Projects
                            <br />
                            • Spring: 1yr & 1 Project
                            <br />• Databases: SQL & Firebase
                        </>
                    }
                    textPt={
                        <>
                            • NodeJs: 1,5 anos & 3 Projetos <br />
                            • Spring: 1 ano & 1 Projeto
                            <br />• Databases: SQL & Firebase
                        </>
                    }
                />
                <Box
                    lang={lang}
                    icon="view_in_ar"
                    titleEn="3D Modeling"
                    titlePt="Modelamento 3D"
                    textEn={<>• Forge APIs: 1yr & 1 Project + Side Projects</>}
                    textPt={
                        <>• Forge APIs: 1 ano & 1 Projeto + Side Projects</>
                    }
                />
                <Box
                    lang={lang}
                    icon="forum"
                    titleEn="Requirements Gathering"
                    titlePt="Levantamento de Requisitos"
                    textEn={
                        <>
                            • 2yrs managing software development with clients &
                            capturing software requirements based on Client
                            feedback.
                        </>
                    }
                    textPt={
                        <>
                            • 2 anos gerenciando desenvolvimento de software com
                            clientes e levantando requisitos com base em
                            feedbacks do cliente.
                        </>
                    }
                />
                <Box
                    lang={lang}
                    icon="code"
                    titleEn="Clean Code"
                    titlePt="Código Limpo"
                    textEn={
                        <>
                            • SOLID
                            <br />• 1yr Developing Unit & Integrated tests
                        </>
                    }
                    textPt={
                        <>
                            • SOLID
                            <br />• 1 ano Desenvolvendo Testes Unit. &
                            Integrados
                        </>
                    }
                />
            </BoxContainer>
        </Container>
    );
};
