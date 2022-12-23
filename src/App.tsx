import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home/Home";
import { Project } from "./pages/Projects/Project";
import "bootstrap/dist/css/bootstrap.css";
import { Container, WindowConfig } from "./components";
import { useEffect, useState } from "react";

function App() {
    const firstVisit: string | null = localStorage.getItem("firstVisit");
    const [showWindow, setShowWindow] = useState(true);
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
        localStorage.setItem("theme", theme);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [theme]);

    useEffect(() => {
        localStorage.setItem("lang", lang);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [lang]);

    return (
        <Container theme={theme} lang={lang} setShowWindow={setShowWindow}>
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
                <Route path="/project" element={<Project />}></Route>
            </Routes>
        </Container>
    );
}

export default App;
