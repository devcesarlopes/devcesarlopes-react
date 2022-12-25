import styled from "styled-components";
import MacPC from "../../assets/imgs/macpc.png";
import SIMC40 from "../../assets/imgs/simc40.png";
import SIMC40Tablet from "../../assets/imgs/simc40tablet.png";
import SIMC40Phone from "../../assets/imgs/simc40phone.png";
import Tablet from "../../assets/imgs/tablet.png";
import Phone from "../../assets/imgs/phone.png";

export const Portfolio = ({
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
                <h1>
                    {lang === "en"
                        ? "Featured Projects"
                        : "Projetos em Destaque"}
                </h1>
            </Title>
            <ProjectsRow>
                <Project theme={theme} lang={lang} type={"SIMC40"} />
                <Project theme={theme} lang={lang} type={"SIMC40"} />
            </ProjectsRow>
            <ProjectsRow>
                <Project theme={theme} lang={lang} type={"SIMC40"} />
                <Project theme={theme} lang={lang} type={"SIMC40"} />
                <Project theme={theme} lang={lang} type={"SIMC40"} />
            </ProjectsRow>
        </Container>
    );
};

const Container = styled.div<{ theme: string }>`
    width: 100%;
    height: fit-content;
    display: flex;
    padding: 2% 5%;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;
    background: ${(p) => (p.theme === "dark" ? "#35384e" : "#395a7a")};
    color: white;
    font-weight: 600;
    box-shadow: 0px 0 5px 2px #888;
    z-index: 2;
`;

const Title = styled.div<{ theme: string }>`
    margin-top: 30px;
    width: 100%;
    color: white;

    h1 {
        font-size: 35px;
        font-family: museomoderno-black;
    }

    h1:after {
        content: "";
        position: absolute;
        margin-top: 40px;
        left: 5%;
        width: 155px;
        height: 2px;
        background-color: ${(p) =>
            p.theme === "dark" ? "#889BAE" : "#87c0cd"};
    }
`;

const ProjectsRow = styled.div<{ theme: string }>`
    @media screen and (max-width: 1080px) {
        flex-direction: column !important;
    }
    display: flex;
    justify-items: center;
    align-items: center;
    column-gap: 2%;
    row-gap: 5%;
    padding: 2% 0;
`;
const BoxBorder = styled.div<{ theme: string }>`
    @media screen and (max-width: 680px) {
        padding-top: 10px !important;
    }

    @media screen and (max-width: 1080px) {
        margin-top: 20px;
    }

    background: #e8e8e8;
    width: -webkit-fill-available;
    height: -webkit-fill-available;
    padding: 5%;
    padding-top: 20px;
    -webkit-box-shadow: 0 0 10px rgb(0, 0, 0);
    -moz-box-shadow: 0 0 10px rgb(0, 0, 0);
    border-radius: 15px;

    &:hover {
    }
`;
const BoxTitle = styled.div<{ theme: string }>`
    @media screen and (max-width: 680px) {
        font-size: 5vw !important;
    }

    font-size: 2.5vw;
    text-align: center;
    font-weight: bold;
    color: ${(p) => (p.theme === "dark" ? "#889BAE" : "#113f67")};
`;

const DivBoxImage = styled.div`
    @media screen and (max-width: 680px) {
        margin-top: 5px !important;
    }

    margin-bottom: 8%;
    display: block;
    margin-top: 20px;
    width: 100%;
    height: auto;
    position: relative;
`;

const BoxText = styled.div<{ theme: string }>`
    @media screen and (max-width: 680px) {
        font-size: 15px !important;
    }

    font-size: 17px;
    text-align: center;
    color: ${(p) => (p.theme === "dark" ? "#889BAE" : "#113f67")};
`;

const BoxImage = styled.img<{ type: string }>`
    ${(p) => {
        switch (p.type) {
            case "mac":
                return "margin-top: 20;display: block;";
            case "tablet":
                return `
                    position: absolute;
                    bottom:-5%; 
                    right: -5%;
                    z-index:2;
                `;
            case "phone":
                return `
                    position: absolute;
                    bottom:-10%; 
                    left: 47%;
                    z-index:4;
                `;
        }
    }};
    width: ${(p) => {
        switch (p.type) {
            case "mac":
                return "100%";
            case "tablet":
                return "35%";
            case "phone":
                return "43%";
        }
    }};
    height: auto;
`;

const BoxImageContent = styled.img<{ type: string }>`
    position: absolute;

    ${(p) => {
        switch (p.type) {
            case "mac":
                return `
                    top: 0;
                    width: 100%;
                    height: 100%;
                    padding: 5% 4.3% 25.3%;
                `;
            case "tablet":
                return `
                    width: 30.3%;
                    height: 50%;
                    bottom: 0%; 
                    left: 72.3%;
                    z-index: 1;
                `;
            case "phone":
                return `
                    width: 19%;
                    height: 44%;
                    bottom: -5.3%; 
                    left: 58.8%;
                    z-index: 3;
                `;
        }
    }}
`;

const Project = ({
    theme,
    lang,
    type,
}: {
    theme: string;
    lang: string;
    type: string;
}) => {
    const bigscreenType = () => {
        switch (type) {
            case "SIMC40":
                return "mac";
        }
    };
    const bigscreenSrc = () => {
        switch (type) {
            case "SIMC40":
                return MacPC;
        }
    };

    const bigScreenContentSrc = () => {
        switch (type) {
            case "SIMC40":
                return SIMC40;
        }
    };

    const mediumScreenContentSrc = () => {
        switch (type) {
            case "SIMC40":
                return SIMC40Tablet;
        }
    };

    const smallScreenContentSrc = () => {
        switch (type) {
            case "SIMC40":
                return SIMC40Phone;
        }
    };

    const enText = () => {
        switch (type) {
            case "SIMC40":
                return "This was my major Freelance Project, this project was a full stack complete cicle, with Front End in React, Back-End in NodeJs, Mobile with Kotlin. The software manages and track building pieces along the building site with QR Code technology, as well as syncronize building development with 3D Modeling.";
        }
    };

    const ptText = () => {
        switch (type) {
            case "SIMC40":
                return "Este foi o meu maior projeto Freelancer, este projeto foi um ciclo completo de Full Stack, com Front End em React, Back-End em NodeJs, Mobile com Kotlin. O software gerencia e rastreia as peças de construção ao longo do canteiro de obras com a tecnologia QR Code, além de sincronizar o desenvolvimento da construção com a modelagem 3D.";
        }
    };

    return (
        <BoxBorder className="static" theme={theme}>
            <BoxTitle theme={theme}>{type}</BoxTitle>
            <DivBoxImage>
                <BoxImage type={bigscreenType()!} src={bigscreenSrc()} />
                <BoxImageContent
                    type={bigscreenType()!}
                    src={bigScreenContentSrc()}
                />
                <BoxImage type="tablet" src={Tablet} />
                <BoxImageContent type="tablet" src={mediumScreenContentSrc()} />
                <BoxImage type="phone" src={Phone} />
                <BoxImageContent type="phone" src={smallScreenContentSrc()} />
            </DivBoxImage>
            <BoxText>{lang === "en" ? enText() : ptText()}</BoxText>
        </BoxBorder>
    );
};
