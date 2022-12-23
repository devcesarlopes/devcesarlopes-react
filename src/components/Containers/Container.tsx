import React from "react";
import { Navbar } from "../../components";
import styled from "styled-components";

const DivWrapper = styled.div`
    // width: 100%;
    // min-height: 100vh;
    // display: flex;
    // background: white;
`;

const DivContainer = styled.div`
    padding-top: 103px;
    display: flex;
    flex-direction: column;
`;

export const Container = ({
    theme,
    lang,
    children,
    setShowWindow,
}: {
    theme: string;
    lang: string;
    children: JSX.Element | JSX.Element[];
    setShowWindow: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    return (
        <DivWrapper>
            <Navbar setShowWindow={setShowWindow} theme={theme} lang={lang} />
            <DivContainer>{children}</DivContainer>
        </DivWrapper>
    );
};
