import { useContext } from "react";
import styled, { ThemeContext } from "styled-components";

export const WindowConfig = ({
    lang,
    setTheme,
    setLang,
    showWindow,
    setShowWindow,
}: {
    lang: string;
    setTheme: React.Dispatch<React.SetStateAction<string>>;
    setLang: React.Dispatch<React.SetStateAction<string>>;
    showWindow: boolean;
    setShowWindow: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    const { title } = useContext(ThemeContext);

    return (
        <CardBackground style={{ display: showWindow ? "block" : "none" }}>
            <Card className="card">
                <CardHeader className="card-header">
                    <CardTitle>
                        <CardIcon className="material-symbols-outlined">
                            settings
                        </CardIcon>
                        <CardTitleText>
                            {lang === "en" || lang === null
                                ? "Configurations"
                                : "Configurações"}
                        </CardTitleText>
                    </CardTitle>
                    <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => setShowWindow(false)}
                    >
                        {lang === "en" || lang === null ? "Close" : "Fechar"}
                    </button>
                </CardHeader>

                <CardBody className="card-body">
                    <CardSelectionContainer>
                        <CardSelectionTitle>
                            <CardIcon className="material-symbols-outlined">
                                palette
                            </CardIcon>
                            {lang === "en" || lang === null ? "Theme" : "Tema"}
                        </CardSelectionTitle>
                        <CardSelection>
                            <SelectionOption onClick={() => setTheme("light")}>
                                <SelectionCheckBox
                                    checked={title === "light"}
                                    type="checkbox"
                                    onChange={() => {
                                        void 0;
                                    }}
                                />
                                <CheckboxMark checked={title === "light"} />
                                <strong>
                                    {lang === "en" || lang === null
                                        ? "Theme-Light"
                                        : "Tema Claro"}
                                </strong>
                            </SelectionOption>
                            <SelectionOption onClick={() => setTheme("dark")}>
                                <SelectionCheckBox
                                    checked={title === "dark"}
                                    type="checkbox"
                                    onChange={() => {
                                        void 0;
                                    }}
                                />
                                <CheckboxMark checked={title === "dark"} />
                                <strong>
                                    {lang === "en" || lang === null
                                        ? "Theme-Dark"
                                        : "Tema Escuro"}
                                </strong>
                            </SelectionOption>
                        </CardSelection>
                    </CardSelectionContainer>
                    <CardSelectionContainer>
                        <CardSelectionTitle>
                            <CardIcon className="material-symbols-outlined">
                                translate
                            </CardIcon>
                            {lang === "en" || lang === null
                                ? "Language"
                                : "Idioma"}
                        </CardSelectionTitle>
                        <CardSelection>
                            <SelectionOption onClick={() => setLang("en")}>
                                <SelectionCheckBox
                                    checked={lang === "en"}
                                    type="checkbox"
                                    onChange={() => {
                                        void 0;
                                    }}
                                />
                                <CheckboxMark checked={lang === "en"} />
                                <strong>
                                    {lang === "en" || lang === null
                                        ? "English"
                                        : "Inglês"}
                                </strong>
                            </SelectionOption>
                            <SelectionOption onClick={() => setLang("pt")}>
                                <SelectionCheckBox
                                    checked={lang === "pt"}
                                    type="checkbox"
                                    onChange={() => {
                                        void 0;
                                    }}
                                />
                                <CheckboxMark checked={lang === "pt"} />
                                <strong>
                                    {lang === "en" || lang === null
                                        ? "Portuguese"
                                        : "Português"}
                                </strong>
                            </SelectionOption>
                        </CardSelection>
                    </CardSelectionContainer>
                </CardBody>
            </Card>
        </CardBackground>
    );
};

const CardBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 5;
    height: 100vh;
    width: 100%;
    backdrop-filter: blur(5px);
`;

const Card = styled.div`
    @media screen and (max-width: 1080px) {
        width: 95% !important;
        margin-left: 2.5% !important;
    }

    margin-top: 25vh;
    position: fixed;
    margin-left: 20%;
    width: 60%;
    z-index: 10;
    height: 50vh;
`;

const CardHeader = styled.div<{ theme: string }>`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 20px;
    background: ${(props) => props.theme.colors.primary};
`;

const CardTitle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    color: ${(props) => props.theme.colors.background_primary};
`;

const CardIcon = styled.span<{ theme: string }>`
    margin-right: 10px;

    /* color: ${(p) => (p.theme === "dark" ? "white" : "")}; */
`;

const CardTitleText = styled.strong<{ theme: string }>`
    /* color: ${(p) => (p.theme === "dark" ? "white" : "")}; */
`;

const CardBody = styled.div<{ theme: string }>`
    background: ${(props) => props.theme.colors.background_primary};
    border-radius: 0 0 5px 5px;
    display: flex;
    flex-direction: column;
`;

const CardSelectionContainer = styled.div<{ theme: string }>`
    width: 100%;
`;

const CardSelectionTitle = styled.strong<{ theme: string }>`
    color: ${(props) => props.theme.colors.third};
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 20px;
    padding: 10px;
    box-shadow: 0px 2px 0px 0px;
`;

const CardSelection = styled.div`
    margin-top: 15px;
    display: flex;
    flex-direction: row;
    gap: 5%;
`;

const SelectionOption = styled.div`
    @media screen and (max-width: 680px) {
        font-size: 0.8rem;
    }
    transition: all ease-in-out;
    width: 50%;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: row;
    border: 1px solid ${(props) => props.theme.colors.third};
    color: ${(props) => props.theme.colors.third};
    cursor: pointer;

    border-radius: 5px;
    padding: 15px;

    &:hover {
        background-color: ${(props) => props.theme.colors.third};
        color: ${(props) => props.theme.colors.background_primary};

        input {
        }
    }
`;

const CheckboxMark = styled.span<{ checked: boolean }>`
    ::after {
        content: "";
        position: absolute;
        /* top: 17px; */
        /* left: 15px; */
        top: calc(15px + 0.5em);
        left: calc(15px + 0.4em);
        width: 0.5em;
        height: 0.5em;
        border-radius: 50%;
        background-color: ${(props) =>
            props.checked ? props.theme.colors.background_secondary : ""};
    }
`;

const SelectionCheckBox = styled.input<{ type: string; theme: string }>`
    margin-right: 20px;
    width: 1.3em;
    height: 1.3em;
    background-color: white;
    border-radius: 50%;
    vertical-align: middle;
    border: 1px solid #000;
    appearance: none;
    -webkit-appearance: none;
    outline: none;
    cursor: pointer;

    &:hover {
        /* background-color: ${(p) =>
            p.type === "dark" ? "gray" : "black"}; */
    }

    &:checked {
        /* background-color: ${(p) =>
            p.theme === "dark" ? "gray" : "black"}; */
    }
`;
