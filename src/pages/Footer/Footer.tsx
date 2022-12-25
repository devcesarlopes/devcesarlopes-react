import styled from "styled-components";
import GithubLogo from "../../assets/imgs/github.svg";
import LinkedinLogo from "../../assets/imgs/linkedin.svg";
import StackOverflowLogo from "../../assets/imgs/stackoverflow.svg";
import GmailLogo from "../../assets/imgs/gmail-circle.svg";

export const Footer = ({
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
            <Text theme={theme}>
                <h1>{lang === "en" ? "Let's Talk?" : "Vamos Conversar?"}</h1>
                <h3>
                    {lang === "en"
                        ? "If you have any questions, please, do not hesitate to contact me."
                        : "Se você tiver alguma dúvida, por favor, não hesite em contactar-me"}
                </h3>
                <DivFlexRow>
                    <ImgLogo
                        theme={theme}
                        src={GithubLogo}
                        title={"Github"}
                        onClick={() => {
                            window.open("https://github.com/devcesarlopes");
                        }}
                    />
                    <ImgLogo
                        theme={theme}
                        src={LinkedinLogo}
                        title={"Linkedin"}
                        onClick={() => {
                            window.open(
                                "https://www.linkedin.com/in/dev-cesar-lopes/"
                            );
                        }}
                    />
                    <ImgLogo
                        theme={theme}
                        src={StackOverflowLogo}
                        title={"Stack Overflow"}
                        onClick={() => {
                            window.open(
                                "https://stackoverflow.com/users/12531920/cesar-lopes"
                            );
                        }}
                    />
                    <ImgLogo
                        theme={theme}
                        src={GmailLogo}
                        title={"devcesarlopes@gmail.com"}
                        onClick={() => {
                            window.open(
                                `mailto:devcesarlopes@gmail.com?subject=I%20saw%20your%20Website&body=Hello%20Cesar,%0D%0AI'm%20interested%20in%20Contacting%20you%20because:%0D%0A`
                            );
                        }}
                    />
                </DivFlexRow>
                <div
                    style={{
                        marginTop: "10px",
                        color: theme === "dark" ? "white" : "#113f67",
                    }}
                >
                    devcesalopes@gmail.com
                </div>
            </Text>
        </Container>
    );
};

const Container = styled.div<{ theme: string }>`
    width: 100%;
    height: fit-content;
    padding: 6vh 0px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    box-shadow: 0px 0 5px 2px #888;
    background: ${(p) => (p.theme === "dark" ? "#1f2233" : "#e8e8e8")};
    color: white;
    font-weight: 600;
    z-index: 3;
`;

const Text = styled.div<{ theme: string }>`
    @media screen and (max-width: 680px) {
        h1 {
            font-size: 8vw !important;
        }

        h3 {
            font-size: 2.5vw !important;
        }
    }

    @media screen and (min-width: 681px) and (max-width: 980px) {
        h1 {
            font-size: 6vw !important;
        }

        h3 {
            font-size: 2vw !important;
        }
    }

    text-align: center;
    color: ${(p) => (p.theme === "dark" ? "white" : "#113f67")};

    h1 {
        font-size: 50px;
        font-family: museomoderno-black;
    }

    h3 {
        font-size: 22px;
        font-family: laila-medium;
    }
`;

const DivFlexRow = styled.div`
    margin-top: 20px;
    height: fit-content;
    display: flex;
    justify-content: center;
`;

const ImgLogo = styled.img<{ theme: string }>`
    margin: 0 10px;
    width: 5vh;
    height: 5vh;
    cursor: pointer;
    margin-right: 10px;
    filter: ${(p) =>
        p.theme === "dark"
            ? "invert(72%) sepia(11%) saturate(575%) hue-rotate(169deg) brightness(83%) contrast(87%)"
            : "invert(16%) sepia(98%) saturate(887%) hue-rotate(181deg) brightness(96%) contrast(93%)"};
    &:hover {
        width: 6vh !important;
        height: 6vh !important;
    }
`;
