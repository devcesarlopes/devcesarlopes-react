import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import "bootstrap/dist/css/bootstrap.css";
import { Container, WindowConfig } from "./components";
import { useEffect, useState } from "react";
import { Footer } from "./pages/Footer/Footer";
import { LoadingPage } from "./pages/LoadingPage/LoadingPage";
import GlobalStyle from "./styles/global";
import { ThemeProvider } from "styled-components";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";

function App() {
    const [showLoadingPage, setShowLoadingPage] = useState(true);
    const [showWindow, setShowWindow] = useState(false);
    const [lang, setLang] = useState<string>(
        localStorage.getItem("lang") === null ||
            localStorage.getItem("lang") === "en"
            ? "en"
            : "pt"
    );
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") === null ||
            localStorage.getItem("theme") === "dark"
            ? dark
            : light
    );

    if (theme === null) localStorage.setItem("theme", JSON.stringify(dark));
    if (lang === null) localStorage.setItem("lang", "en");

    useEffect(() => {
        setTimeout(() => setShowLoadingPage(false), 4000);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        localStorage.setItem(
            "theme",
            theme.title === "light" ? "light" : "dark"
        );
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [theme]);

    useEffect(() => {
        localStorage.setItem("lang", lang);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [lang]);

    const toggleTheme = () => {
        setTheme(theme.title === "light" ? dark : light);
    };

    return (
        <ThemeProvider theme={theme}>
            <Container lang={lang} setShowWindow={setShowWindow}>
                <GlobalStyle />
                <LoadingPage loading={showLoadingPage} />
                <WindowConfig
                    lang={lang}
                    setTheme={toggleTheme}
                    setLang={setLang}
                    showWindow={showWindow}
                    setShowWindow={setShowWindow}
                />
                <Routes>
                    <Route path="/" element={<Home lang={lang} />}></Route>
                </Routes>
                <Footer id={"Footer"} lang={lang} />
            </Container>
        </ThemeProvider>
    );
}

export default App;
