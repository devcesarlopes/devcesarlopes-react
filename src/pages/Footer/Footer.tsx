import styled from "styled-components";
import {
    GithubLogo,
    LinkedinLogo,
    StackOverflowLogo,
    GmailLogo,
} from "../../assets/imgs";
import { Container, DivFlexRow, Text } from "./styles";
import { IconImage } from "../../components";

export const Footer = ({ id, lang }: { id: string; lang: string }) => {
    return (
        <Container id={id}>
            <Text>
                <h1>{lang === "en" ? "Let's Talk?" : "Vamos Conversar?"}</h1>
                <h3>
                    {lang === "en"
                        ? "If you have any questions, please, do not hesitate to contact me."
                        : "Se você tiver alguma dúvida, por favor, não hesite em contactar-me"}
                </h3>
                <DivFlexRow>
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
                <div style={{ marginTop: "10px" }}>devcesalopes@gmail.com</div>
            </Text>
        </Container>
    );
};

const IconImageMargin = styled(IconImage)`
    width: 5vh;
    height: 5vh;
    margin: 0 10px;

    &:hover {
        width: 6vh !important;
        height: 6vh !important;
    }
`;
