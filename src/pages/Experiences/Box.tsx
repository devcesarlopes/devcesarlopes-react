import { ReactIcon } from "../../assets/imgs";
import {
    BoxBorder,
    BoxText,
    BoxTitle,
    MaterialIcons,
    MaterialIconsImg,
} from "./styles";

export const Box = ({
    lang,
    icon,
    titleEn,
    titlePt,
    textEn,
    textPt,
}: {
    lang: string;
    icon: string;
    titleEn: string;
    titlePt: string;
    textEn: string | JSX.Element;
    textPt: string | JSX.Element;
}) => {
    return (
        <BoxBorder>
            {icon === "react" ? (
                <MaterialIconsImg src={ReactIcon} />
            ) : (
                <MaterialIcons>{icon}</MaterialIcons>
            )}
            <BoxTitle>{lang === "en" ? titleEn : titlePt}</BoxTitle>
            <BoxText>{lang === "en" ? textEn : textPt}</BoxText>
        </BoxBorder>
    );
};
