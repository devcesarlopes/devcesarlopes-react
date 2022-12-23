import styled from "styled-components";
import ReactIcon from "../../assets/imgs/react-js-icon.svg";

export const MyServices = ({
    theme,
    lang,
}: {
    theme: string;
    lang: string;
}) => {
    return (
        <Container theme={theme} id="Home">
            <Title theme={theme}>
                <h1>{lang === "en" ? "Meus Serviços" : "My Services"}</h1>
            </Title>
            <BoxContainer>
                <Box
                    theme={theme}
                    lang={lang}
                    icon="react"
                    titleEn="Front End"
                    titlePt="Creative Design"
                    textEn="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusm tempor incididunt ut labore et."
                    textPt="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusm tempor incididunt ut labore et."
                />
                <Box
                    theme={theme}
                    lang={lang}
                    icon="developer_mode"
                    titleEn="Mobile"
                    titlePt="Mobile"
                    textEn="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusm tempor incididunt ut labore et."
                    textPt="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusm tempor incididunt ut labore et."
                />
                <Box
                    theme={theme}
                    lang={lang}
                    icon="database"
                    titleEn="Back End"
                    titlePt="Back End"
                    textEn="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusm tempor incididunt ut labore et."
                    textPt="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusm tempor incididunt ut labore et."
                />
                <Box
                    theme={theme}
                    lang={lang}
                    icon="view_in_ar"
                    titleEn="3D Modeling"
                    titlePt="Modelamento 3D"
                    textEn="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusm tempor incididunt ut labore et."
                    textPt="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusm tempor incididunt ut labore et."
                />
                <Box
                    theme={theme}
                    lang={lang}
                    icon="close"
                    titleEn="Creative Design"
                    titlePt="Creative Design"
                    textEn="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusm tempor incididunt ut labore et."
                    textPt="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusm tempor incididunt ut labore et."
                />
                <Box
                    theme={theme}
                    lang={lang}
                    icon="close"
                    titleEn="Creative Design"
                    titlePt="Creative Design"
                    textEn="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusm tempor incididunt ut labore et."
                    textPt="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusm tempor incididunt ut labore et."
                />
            </BoxContainer>
        </Container>
    );
};

const Container = styled.div<{ theme: string }>`
    width: 100%;
    height: fit-content;
    display: flex;
    padding: 2% 16%;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;
    background: ${(p) => (p.theme === "dark" ? "#24283d" : "#20486f")};
    color: white;
    font-weight: 600;
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
        left: 16%;
        width: 100px;
        height: 2px;
        background-color: ${(p) =>
            p.theme === "dark" ? "#889BAE" : "#87c0cd"};
    }
`;

const MaterialIcons = styled.span.attrs({
    className: "material-symbols-outlined",
})<{ theme: string }>`
    color: ${(p) => (p.theme === "dark" ? "white" : "#87c0cd")};
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
            ? "invert(100%) sepia(0%) saturate(1%) hue-rotate(193deg) brightness(104%) contrast(102%)"
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
    display: grid;
    justify-items: center;
    align-items: center;
    grid-template-columns: calc(100% / 3) calc(100% / 3) calc(100% / 3);
    grid-column-gap: 3%;
    grid-row-gap: 5%;
    height: calc(fit-content + 5%);
    padding: 3% 0;
`;
const BoxBorder = styled.div<{ theme: string }>`
    height: auto;
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
const BoxTitle = styled.div`
    font-size: 20px;
    font-weight: bold;
`;
const BoxText = styled.div<{ theme: string }>``;

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
    textEn: string;
    textPt: string;
}) => {
    return (
        <BoxBorder theme={theme}>
            {icon === "react" ? (
                <MaterialIconsImg theme={theme} src={ReactIcon} />
            ) : (
                <MaterialIcons theme={theme}>{icon}</MaterialIcons>
            )}
            <BoxTitle>{lang === "en" ? titleEn : titlePt}</BoxTitle>
            <BoxText theme={theme}>{lang === "en" ? textEn : textPt}</BoxText>
        </BoxBorder>
    );
};
