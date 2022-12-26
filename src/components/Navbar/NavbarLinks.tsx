import { NavbarCollapse, Ul, ContactMe } from "./styles";

export const NavbarLinks = ({
    lang,
    children,
    handleScroll,
}: {
    lang: string;
    children: JSX.Element | JSX.Element[];
    handleScroll: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}) => {
    return (
        <NavbarCollapse>
            <Ul>{children}</Ul>
            <ContactMe id="goto-Footer" onClick={handleScroll}>
                {lang === "en" ? "Contact Me" : "Contato"}
            </ContactMe>
        </NavbarCollapse>
    );
};
