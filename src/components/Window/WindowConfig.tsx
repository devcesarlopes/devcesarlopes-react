import { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import {
    CardBackground,
    Card,
    CardHeader,
    CardTitle,
    CardIcon,
    CardTitleText,
    CardBody,
    CardSelectionContainer,
    CardSelectionTitle,
    CardSelection,
    SelectionOption,
    SelectionCheckBox,
    CheckboxMark,
} from "./styles";

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
