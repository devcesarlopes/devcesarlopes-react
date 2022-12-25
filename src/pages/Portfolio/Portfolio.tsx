import { Title } from "../../components";
import { Project } from "./Project";
import { Container, ProjectsRow } from "./styles";

export const Portfolio = ({ id, lang }: { id: string; lang: string }) => {
    return (
        <Container id={id}>
            <Title>
                <h1>
                    {lang === "en"
                        ? "Featured Projects"
                        : "Projetos em Destaque"}
                </h1>
            </Title>
            <ProjectsRow>
                <Project lang={lang} type={"SIMC40"} />
                <Project lang={lang} type={"SIMC40"} />
            </ProjectsRow>
            <ProjectsRow>
                <Project lang={lang} type={"SIMC40"} />
                <Project lang={lang} type={"SIMC40"} />
                <Project lang={lang} type={"SIMC40"} />
            </ProjectsRow>
        </Container>
    );
};
