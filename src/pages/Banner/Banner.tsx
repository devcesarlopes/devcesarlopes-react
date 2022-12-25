import styled from "styled-components";
import ProfilePicture from "../../assets/imgs/profile.png";
import GithubLogo from "../../assets/imgs/github.svg";
import LinkedinLogo from "../../assets/imgs/linkedin.svg";
import StackOverflowLogo from "../../assets/imgs/stackoverflow.svg";
import GmailLogo from "../../assets/imgs/gmail-circle.svg";

export const Banner = ({
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
            <Text>
                <h3>{lang === "en" ? "Hi There! I'm" : "Ola, Eu sou"}</h3>
                <h1>Cesar Lopes</h1>
                <div>
                    <h3>
                        {lang === "en"
                            ? "A Freelancer & Full Stack Developer"
                            : "Um Freelancer & Full Stack Developer"}
                    </h3>
                    <DivFlexRow>
                        <DownloadLink theme={theme}>CV</DownloadLink>
                        <DownloadLink theme={theme}>CV - Linkedin</DownloadLink>
                    </DivFlexRow>
                </div>
                <DivFlexRow style={{ height: "6vh" }}>
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
                        width: "calc(20vh + 30px)",
                        textAlign: "center",
                        marginTop: "10px",
                        color: theme === "dark" ? "white" : "#113f67",
                        fontSize: "2vh",
                    }}
                >
                    devcesalopes@gmail.com
                </div>
            </Text>
            <ImgProfileContainer>
                <ImgProfile src={ProfilePicture} />
            </ImgProfileContainer>
        </Container>
    );
};

const Container = styled.div<{ theme: string }>`
    width: 100%;
    height: fit-content;
    padding: 8vh 0px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    box-shadow: 0px 0 5px 2px #888;
    background-image: ${(p) =>
        p.theme === "dark"
            ? "linear-gradient(to bottom right, #11131d, #64687a)"
            : "linear-gradient(to bottom right, #1d456d, #c3dfe6)"};
    color: white;
    font-weight: 600;
    z-index: 3;
`;

const Text = styled.div<{ theme: string }>`
    @media screen and (max-width: 680px) {
        h1 {
            font-size: 14vw !important;
        }

        h3 {
            font-size: 4vw !important;
        }
    }

    @media screen and (minx-width: 681px) and (max-width: 980px) {
        h1 {
            font-size: 8vw !important;
        }

        h3 {
            font-size: 2vw !important;
        }
    }

    color: white;

    h1 {
        font-size: 80px;
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
`;

const ImgProfileContainer = styled.div<{ theme: string }>`
    @media screen and (max-width: 680px) {
        display: none;
    }

    @media screen and (max-width: 980px) {
        width: 25vw !important;
        height: 25vw !important;
    }

    width: 35vh;
    height: 35vh;
    border-radius: 50%;
    background: white;
`;

const ImgProfile = styled.img<{ theme: string }>`
    width: inherit;
    height: inherit;
    padding: 2px;
    border-radius: 50%;
`;

const ImgLogo = styled.img<{ theme: string }>`
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

const DownloadLink = styled.a<{ theme: string }>`
    @media screen and (max-width: 680px) {
        font-size: 3vw !important;
    }

    @media screen and (min-width: 681px) and (max-width: 980px) {
        font-size: 1.5vw !important;
    }

    display: block;
    width: fit-content;
    background: ${(p) => (p.theme === "dark" ? "#889BAE" : "#113f67")};
    color: ${(p) => (p.theme === "dark" ? "#fbf4e0" : "white")};
    font-size: 15px;
    font-weight: 600;
    letter-spacing: 0.5px;
    text-transform: capitalize;
    text-decoration: none;
    padding: 10px 18px;
    border: 1px solid ${(p) => (p.theme === "dark" ? "#889BAE" : "#113f67")};
    border-radius: 4px;
    margin-right: 20px;
    font-family: "Montserrat", sans-serif;
    transition: all 0.4s ease-in-out;
    cursor: pointer;

    &:hover {
        background: transparent;
        color: ${(p) => (p.theme === "dark" ? "#fbf4e0" : "black")};
    }
`;
