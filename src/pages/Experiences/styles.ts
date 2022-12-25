import styled from "styled-components";
import { IconImage } from "../../components";

export const Container = styled.div`
    @media screen and (max-width: 1080px) {
        width: 100%;
        box-shadow: 0px 0 5px 2px #888;
        z-index: 1;
        padding: 2% 5%;
        background: ${(props) =>
            props.theme.colors.background_secondary}!important;
    }

    width: 50%;
    height: fit-content;
    display: flex;
    padding-top: 2%;
    padding-right: 5%;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;
    background: transparent !important;
    color: white;
    font-weight: 600;
`;

export const MaterialIcons = styled.span.attrs({
    className: "material-symbols-outlined",
})<{ theme: string }>`
    color: ${(props) => props.theme.colors.secondary};
    font-size: 40px;
    transition: all 0.4s ease;
    cursor: default;

    &.true {
        transform: rotateZ(-90deg);

        transition: all 0.4s ease;
    }

    &.false {
        transition: all 0.4s ease;
    }
    &:hover {
        transform: rotateZ(-360deg);
    }
`;

export const MaterialIconsImg = styled(IconImage)`
    height: 40px;
    width: 40px;
    filter: ${(props) => props.theme.colors.icon_filter_secondary};
    &.true {
        transform: rotateZ(-90deg);
    }

    &:hover {
        transform: rotateZ(-180deg);
    }
`;

export const BoxContainer = styled.div`
    @media screen and (max-width: 1080px) {
        padding-right: 4%;
        margin-bottom: 4%;
    }

    @media screen and (min-width: 531px) and (max-width: 730px) {
        grid-template-columns: 50% 50%;
        margin-bottom: 15%;
    }

    @media screen and (max-width: 530px) {
        grid-template-columns: 100%;
        margin-bottom: 40%;
        grid-row-gap: 2% !important;
    }

    display: grid;
    justify-items: center;
    align-items: center;
    grid-template-columns: calc(100% / 3) calc(100% / 3) calc(100% / 3);
    grid-column-gap: 2%;
    grid-row-gap: 5%;
    height: fit-content;
    padding: 2% 0;
`;
export const BoxBorder = styled.div`
    width: -webkit-fill-available;
    height: -webkit-fill-available;
    padding: 10%;
    border: solid 2px ${(props) => props.theme.colors.secondary};
    border-radius: 2px;

    &:hover {
        span {
            transform: rotateZ(-360deg);
        }

        img {
            width: 40px !important;
            height: 40px !important;
            transform: rotateZ(-180deg);
        }
    }
`;
export const BoxTitle = styled.div<{ theme: string }>`
    font-size: 20px;
    font-weight: bold;
    color: ${(props) => props.theme.colors.secondary};
`;
export const BoxText = styled.div<{ theme: string }>`
    font-size: 14px;
`;
