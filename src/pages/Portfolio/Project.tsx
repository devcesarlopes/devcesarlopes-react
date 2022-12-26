import {
    MacPC,
    Tablet,
    Phone,
    SIMC40,
    SIMC40Tablet,
    SIMC40Phone,
    SIMC40Reader,
} from "../../assets/imgs";
import {
    BoxBorder,
    BoxImage,
    BoxImageContent,
    BoxText,
    BoxTitle,
    DivBoxImage,
} from "./styles";

export const Project = ({ lang, type }: { lang: string; type: string }) => {
    const bigscreenType = () => {
        switch (type) {
            case "SIMC40":
                return "mac";
        }
    };
    const bigscreenSrc = () => {
        switch (type) {
            case "SIMC40":
                return MacPC;
        }
    };

    const bigScreenContentSrc = () => {
        switch (type) {
            case "SIMC40":
                return SIMC40;
        }
    };

    const mediumScreenContentSrc = () => {
        switch (type) {
            case "SIMC40":
                return SIMC40Tablet;
        }
    };

    const smallScreenContentSrc = () => {
        switch (type) {
            case "SIMC40":
                return SIMC40Phone;
        }
    };

    const enText = () => {
        switch (type) {
            case "SIMC40":
                return "This was my major Freelance Project, this project was a full stack complete cicle, with Front End in React, Back-End in NodeJs, Mobile with Kotlin. The software manages and track building pieces along the building site with QR Code technology, as well as syncronize building development with 3D Modeling.";
        }
    };

    const ptText = () => {
        switch (type) {
            case "SIMC40":
                return "Este foi o meu maior projeto Freelancer, este projeto foi um ciclo completo de Full Stack, com Front End em React, Back-End em NodeJs, Mobile com Kotlin. O software gerencia e rastreia as peças de construção ao longo do canteiro de obras com a tecnologia QR Code, além de sincronizar o desenvolvimento da construção com a modelagem 3D.";
        }
    };

    return (
        <BoxBorder className="static">
            <BoxTitle>{type}</BoxTitle>
            <DivBoxImage>
                <BoxImage type={bigscreenType()!} src={bigscreenSrc()} />
                <BoxImageContent
                    type={bigscreenType()!}
                    src={bigScreenContentSrc()}
                />
                <BoxImage type="tablet" src={Tablet} />
                <BoxImageContent type="tablet" src={mediumScreenContentSrc()} />
                <BoxImage type="phone" src={Phone} />
                <BoxImageContent type="phone" src={smallScreenContentSrc()} />
                {type === "SIMC40" ? (
                    <BoxImage type="tcl-reader" src={SIMC40Reader} />
                ) : (
                    <></>
                )}
            </DivBoxImage>
            <BoxText>{lang === "en" ? enText() : ptText()}</BoxText>
        </BoxBorder>
    );
};
