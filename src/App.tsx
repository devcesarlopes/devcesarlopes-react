import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home/Home";
import "bootstrap/dist/css/bootstrap.css";
import { Container, WindowConfig } from "./components";
import { useEffect, useState } from "react";
import { Footer } from "./pages/Footer/Footer";
import { LoadingPage } from "./pages/LoadingPage/LoadingPage";
import GlobalStyle from "./styles/global";


function App() {
    const [showLoadingPage, setShowLoadingPage] = useState(true);
    const [showWindow, setShowWindow] = useState(false);
    const [lang, setLang] = useState<string>(
        localStorage.getItem("lang") === null ||
            localStorage.getItem("lang") === "en"
            ? "en"
            : "pt"
    );
    const [theme, setTheme] = useState<string>(
        localStorage.getItem("theme") === null ||
            localStorage.getItem("theme") === "dark"
            ? "dark"
            : "light"
    );

    if (theme === null) localStorage.setItem("theme", "dark");
    if (lang === null) localStorage.setItem("lang", "en");

    useEffect(() => {
        setTimeout(() => setShowLoadingPage(false), 4000);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        localStorage.setItem("theme", theme);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [theme]);

    useEffect(() => {
        localStorage.setItem("lang", lang);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [lang]);

    return (
        <Container theme={theme} lang={lang} setShowWindow={setShowWindow}>
            <GlobalStyle/>
            <LoadingPage loading={showLoadingPage} />
            <WindowConfig
                theme={theme}
                lang={lang}
                setTheme={setTheme}
                setLang={setLang}
                showWindow={showWindow}
                setShowWindow={setShowWindow}
            />
            <Routes>
                <Route
                    path="/"
                    element={<Home theme={theme} lang={lang} />}
                ></Route>
            </Routes>
            <Footer id={"Footer"} theme={theme} lang={lang} />
        </Container>
    );
}

export default App;
