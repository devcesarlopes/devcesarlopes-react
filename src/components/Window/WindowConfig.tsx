import styled from "styled-components";

export const WindowConfig = ({
    theme,
    lang,
    setTheme,
    setLang,
    showWindow,
    setShowWindow,
}: {
    theme: string;
    lang: string;
    setTheme: React.Dispatch<React.SetStateAction<string>>;
    setLang: React.Dispatch<React.SetStateAction<string>>;
    showWindow: boolean;
    setShowWindow: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    return (
        <CardBackground style={{ display: showWindow ? "block" : "none" }}>
            <Card className="card">
                <CardHeader theme={theme} className="card-header">
                    <CardTitle theme={theme}>
                        <CardIcon
                            theme={theme}
                            className="material-symbols-outlined"
                        >
                            settings
                        </CardIcon>
                        <CardTitleText theme={theme}>
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

                <CardBody theme={theme} className="card-body">
                    <CardSelectionContainer>
                        <CardSelectionTitle theme={theme}>
                            <CardIcon
                                theme={theme}
                                className="material-symbols-outlined"
                            >
                                palette
                            </CardIcon>
                            {lang === "en" || lang === null ? "Theme" : "Tema"}
                        </CardSelectionTitle>
                        <CardSelection>
                            <SelectionOption
                                theme={theme}
                                type="light"
                                onClick={() => setTheme("light")}
                            >
                                <SelectionCheckBox
                                    checked={theme === "light"}
                                    type="checkbox"
                                    theme={theme}
                                    onChange={() => {
                                        void 0;
                                    }}
                                />
                                <strong>
                                    {lang === "en" || lang === null
                                        ? "Theme-Light"
                                        : "Tema Claro"}
                                </strong>
                            </SelectionOption>
                            <SelectionOption
                                theme={theme}
                                type="dark"
                                onClick={() => setTheme("dark")}
                            >
                                <SelectionCheckBox
                                    checked={theme === "dark"}
                                    type="checkbox"
                                    theme={theme}
                                    onChange={() => {
                                        void 0;
                                    }}
                                />
                                <strong>
                                    {lang === "en" || lang === null
                                        ? "Theme-Dark"
                                        : "Tema Escuro"}
                                </strong>
                            </SelectionOption>
                        </CardSelection>
                    </CardSelectionContainer>
                    <CardSelectionContainer>
                        <CardSelectionTitle theme={theme}>
                            <CardIcon
                                theme={theme}
                                className="material-symbols-outlined"
                            >
                                translate
                            </CardIcon>
                            {lang === "en" || lang === null
                                ? "Language"
                                : "Idioma"}
                        </CardSelectionTitle>
                        <CardSelection>
                            <SelectionOption
                                theme={theme}
                                type={theme}
                                onClick={() => setLang("en")}
                            >
                                <SelectionCheckBox
                                    checked={lang === "en"}
                                    type="checkbox"
                                    theme={theme}
                                    onChange={() => {
                                        void 0;
                                    }}
                                />
                                <strong>
                                    {lang === "en" || lang === null
                                        ? "English"
                                        : "Inglês"}
                                </strong>
                            </SelectionOption>
                            <SelectionOption
                                theme={theme}
                                type={theme}
                                onClick={() => setLang("pt")}
                            >
                                <SelectionCheckBox
                                    checked={lang === "pt"}
                                    type="checkbox"
                                    theme={theme}
                                    onChange={() => {
                                        void 0;
                                    }}
                                />
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

    background: ${(p) => (p.theme === "dark" ? "#1f2233" : "")};
`;

const CardTitle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const CardIcon = styled.span<{ theme: string }>`
    margin-right: 10px;

    color: ${(p) => (p.theme === "dark" ? "white" : "")};
`;

const CardTitleText = styled.strong<{ theme: string }>`
    color: ${(p) => (p.theme === "dark" ? "white" : "")};
`;

const CardBody = styled.div<{ theme: string }>`
    background: ${(p) => (p.theme === "dark" ? "#183c64" : "white")};
    border-radius: 0 0 5px 5px;
    display: flex;
    flex-direction: column;
`;

const CardSelectionContainer = styled.div<{ theme: string }>`
    width: 100%;
    // color: ${(p) => (p.theme === "dark" ? "white" : "")};
    // border-radius: 0 0 5px 5px;
    // display: flex;
    // flex-direction: column;
`;

const CardSelectionTitle = styled.strong<{ theme: string }>`
    color: ${(p) => (p.theme === "dark" ? "white" : "#183c64")};
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 20px;
    padding: 10px;
    box-shadow: 0px 2px 0px 0px
        ${(p) => (p.theme === "dark" ? "white" : "#183c64")};
`;

const CardSelection = styled.div`
    margin-top: 15px;
    display: flex;
    flex-direction: row;
    gap: 5%;
`;

const SelectionOption = styled.div<{ type: string; theme: string }>`
    @media screen and (max-width: 680px) {
        font-size: 0.8rem;
    }

    width: 50%;
    display: flex;
    align-items: center;
    flex-direction: row;
    background: ${(p) => (p.type === "dark" ? "#183c64" : "white")};
    color: ${(p) => (p.type === "dark" ? "white" : "#183c64")};
    cursor: pointer;

    border-radius: 5px;
    padding: 15px;
    border: 1px solid ${(p) => (p.theme === "dark" ? "white" : "#183c64")};

    &:hover {
        background-color: ${(p) => (p.type === "dark" ? "#1f2233" : "#ccc")};

        input {
            background-color: ${(p) => (p.type === "dark" ? "gray" : "black")};
        }
    }
`;

const SelectionCheckBox = styled.input<{ type: string; theme: string }>`
    margin-right: 20px;
    width: 1.3em;
    height: 1.3em;
    background-color: white;
    border-radius: 50%;
    vertical-align: middle;
    border: 1px solid #ddd;
    appearance: none;
    -webkit-appearance: none;
    outline: none;
    cursor: pointer;

    &:hover {
        background-color: ${(p) => (p.type === "dark" ? "gray" : "black")};
    }

    &:checked {
        background-color: ${(p) => (p.theme === "dark" ? "gray" : "black")};
    }
`;
