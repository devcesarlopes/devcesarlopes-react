import styled from "styled-components";
import ProfilePicture from "../../assets/imgs/profile.png";

export const Banner = ({ theme, lang }: { theme: string; lang: string }) => {
    return (
        <Container theme={theme} id="Home">
            <Text>
                <h3>{lang === "en" ? "Hi There! I'm" : "Ola, Eu sou"}</h3>
                <h1>Cesar Lopes</h1>
                <div>
                    <h3>
                        {lang === "en"
                            ? "A Freelancer & Full Stack Developer"
                            : "Um Freelancer & Full Stack Developer"}
                    </h3>
                    <div style={{ marginTop: "20px" }}>
                        <DownloadLink theme={theme}>CV</DownloadLink>
                        <DownloadLink theme={theme}>CV - Linkedin</DownloadLink>
                    </div>
                </div>
            </Text>
            <ImgContainer>
                <Img src={ProfilePicture} />
            </ImgContainer>
        </Container>
    );
};

const Container = styled.div<{ theme: string }>`
    width: 100%;
    height: 50vh;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background-image: ${(p) =>
        p.theme === "dark"
            ? "linear-gradient(to bottom right, #11131d, #64687a)"
            : "linear-gradient(to bottom right, #1d456d, #c3dfe6)"};
    color: white;
    font-weight: 600;

    h1 {
        font-size: 80px;
        font-family: museomoderno-black;
    }

    h3 {
        font-size: 22px;
        font-family: laila-medium;
    }
`;

const Text = styled.div<{ theme: string }>`
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

const ImgContainer = styled.div<{ theme: string }>`
    width: 35vh;
    height: 35vh;
    border-radius: 50%;
    background: white;
`;

const Img = styled.img<{ theme: string }>`
    width: inherit;
    height: inherit;
    padding: 2px;
    border-radius: 50%;
`;

const DownloadLink = styled.a<{ theme: string }>`
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
        // color: ${(p) => (p.theme === "dark" ? "#1f2233" : "white")};
        color: ${(p) => (p.theme === "dark" ? "#fbf4e0" : "black")};
    }
`;
