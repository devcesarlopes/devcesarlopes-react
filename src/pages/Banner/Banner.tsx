import { useRef } from "react";
import styled from "styled-components";
import {
    ProfilePicture,
    GithubLogo,
    LinkedinLogo,
    StackOverflowLogo,
    GmailLogo,
} from "../../assets/imgs";
import { IconImage } from "../../components";
import {
    Container,
    DivFlexRow,
    DownloadLink,
    ImgProfileContainer,
    ImgProfile,
    Text,
} from "./styles";

export const Banner = ({ id, lang }: { id: string; lang: string }) => {
    return (
        <Container id={id}>
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
                        <DownloadLink>CV</DownloadLink>
                        <DownloadLink>CV - Linkedin</DownloadLink>
                    </DivFlexRow>
                </div>
                <DivFlexRow style={{ height: "6vh" }}>
                    <IconImageMargin
                        src={GithubLogo}
                        title={"Github"}
                        onClick={() => {
                            window.open("https://github.com/devcesarlopes");
                        }}
                    />
                    <IconImageMargin
                        src={LinkedinLogo}
                        title={"Linkedin"}
                        onClick={() => {
                            window.open(
                                "https://www.linkedin.com/in/dev-cesar-lopes/"
                            );
                        }}
                    />
                    <IconImageMargin
                        src={StackOverflowLogo}
                        title={"Stack Overflow"}
                        onClick={() => {
                            window.open(
                                "https://stackoverflow.com/users/12531920/cesar-lopes"
                            );
                        }}
                    />
                    <IconImageMargin
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

const IconImageMargin = styled(IconImage)`
    margin-right: 10px;
`;
