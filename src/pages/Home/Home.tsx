import { Banner } from "./Banner";
import { MyServices } from "./MyServices";

export const Home = ({ theme, lang }: { theme: string; lang: string }) => {
    return (
        <>
            <Banner theme={theme} lang={lang} />
            <MyServices theme={theme} lang={lang} />
        </>
    );
};
