import styled from "styled-components";
import ReactIcon from "../../assets/imgs/react-js-icon.svg";

export const Experiences = ({
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
                <h1>{lang === "en" ? "Experiences" : "Experiências"}</h1>
            </Title>
            <BoxContainer>
                <Box
                    theme={theme}
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
                    theme={theme}
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
                    theme={theme}
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
                    theme={theme}
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
                    theme={theme}
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
                    theme={theme}
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

const Container = styled.div<{ theme: string }>`
    @media screen and (max-width: 1080px) {
        width: 100%;
        box-shadow: 0px 0 5px 2px #888;
        z-index: 1;
        padding: 2% 5%;

        background: ${(p) =>
            p.theme === "dark" ? "#35384e!important;" : "#395a7a!important;"};
    }

    width: 50%;
    height: fit-content;
    display: flex;
    padding-top: 2%;
    padding-right: 5%;
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

const MaterialIcons = styled.span.attrs({
    className: "material-symbols-outlined",
})<{ theme: string }>`
    color: ${(p) => (p.theme === "dark" ? "#889BAE" : "#87c0cd")};
    font-size: 40px;
    transition: all 0.4s ease;
    cursor: default;

    &.true {
        transform: rotateZ(-90deg);

        transition: all 0.4s ease;
    }

    &.false {
        transition: all 0.4s ease;
    }
    &:hover {
        transform: rotateZ(-360deg);
    }
`;

const MaterialIconsImg = styled.img<{ theme: string }>`
    filter: ${(p) =>
        p.theme === "dark"
            ? "invert(62%) sepia(14%) saturate(484%) hue-rotate(169deg) brightness(95%) contrast(87%)"
            : "invert(98%) sepia(9%) saturate(5212%) hue-rotate(166deg) brightness(83%) contrast(93%)"};
    height: 40px;
    width: 40px;
    transition: all 0.4s ease;
    cursor: default;

    &.true {
        transform: rotateZ(-90deg);

        transition: all 0.4s ease;
    }

    &.false {
        transition: all 0.4s ease;
    }

    &:hover {
        transform: rotateZ(-180deg);
    }
`;

const BoxContainer = styled.div<{ theme: string }>`
    @media screen and (max-width: 1080px) {
        padding-right: 4%;
        margin-bottom: 4%;
    }

    @media screen and (min-width: 531px) and (max-width: 730px) {
        grid-template-columns: 50% 50%;
        margin-bottom: 15%;
    }

    @media screen and (max-width: 530px) {
        grid-template-columns: 100%;
        margin-bottom: 40%;
        grid-row-gap: 2% !important;
    }

    display: grid;
    justify-items: center;
    align-items: center;
    grid-template-columns: calc(100% / 3) calc(100% / 3) calc(100% / 3);
    grid-column-gap: 2%;
    grid-row-gap: 5%;
    height: fit-content;
    padding: 2% 0;
`;
const BoxBorder = styled.div<{ theme: string }>`
    width: -webkit-fill-available;
    height: -webkit-fill-available;
    padding: 10%;
    border: solid 2px ${(p) => (p.theme === "dark" ? "#889BAE" : "#87c0cd")};
    border-radius: 2px;

    &:hover {
        span {
            transform: rotateZ(-360deg);
        }

        img {
            transform: rotateZ(-180deg);
        }
    }
`;
const BoxTitle = styled.div<{ theme: string }>`
    font-size: 20px;
    font-weight: bold;
    color: ${(p) => (p.theme === "dark" ? "#889BAE" : "#87c0cd")};
`;
const BoxText = styled.div<{ theme: string }>`
    font-size: 14px;
`;

const Box = ({
    theme,
    lang,
    icon,
    titleEn,
    titlePt,
    textEn,
    textPt,
}: {
    theme: string;
    lang: string;
    icon: string;
    titleEn: string;
    titlePt: string;
    textEn: string | JSX.Element;
    textPt: string | JSX.Element;
}) => {
    return (
        <BoxBorder theme={theme}>
            {icon === "react" ? (
                <MaterialIconsImg theme={theme} src={ReactIcon} />
            ) : (
                <MaterialIcons theme={theme}>{icon}</MaterialIcons>
            )}
            <BoxTitle theme={theme}>
                {lang === "en" ? titleEn : titlePt}
            </BoxTitle>
            <BoxText theme={theme}>{lang === "en" ? textEn : textPt}</BoxText>
        </BoxBorder>
    );
};
