import React from "react";
import { Navbar } from "..";
import styled from "styled-components";

const DivContainer = styled.div`
    @media screen and (max-width: 680px) {
        padding-top: 93px !important;
    }

    padding-top: 103px;
    display: flex;
    flex-direction: column;
`;

export const Container = ({
    lang,
    children,
    setShowWindow,
}: {
    lang: string;
    children: JSX.Element | JSX.Element[];
    setShowWindow: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    return (
        <>
            <Navbar setShowWindow={setShowWindow} lang={lang} />
            <DivContainer>{children}</DivContainer>
        </>
    );
};
