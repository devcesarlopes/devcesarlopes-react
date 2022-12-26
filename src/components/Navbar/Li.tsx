import { NavLink, NavLinkVertical } from "./styles";

export const Li = ({
    id,
    HTMLtext,
    style,
    onClick,
}: {
    id: string;
    style?: React.CSSProperties;
    HTMLtext: string;
    onClick: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}) => {
    return (
        <NavLink id={id} style={style} onClick={onClick}>
            {HTMLtext}
        </NavLink>
    );
};

export const LiVertical = ({
    id,
    HTMLtext,
    style,
    onClick,
}: {
    id: string;
    style?: React.CSSProperties;
    HTMLtext: string;
    onClick: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}) => {
    return (
        <NavLinkVertical id={id} style={style} onClick={onClick}>
            {HTMLtext}
        </NavLinkVertical>
    );
};
