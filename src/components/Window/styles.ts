import styled from "styled-components";

export const CardBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 5;
    height: 100vh;
    width: 100%;
    backdrop-filter: blur(5px);
`;

export const Card = styled.div`
    @media screen and (max-width: 1080px) {
        width: 95% !important;
        margin-left: 2.5% !important;
    }

    margin-top: 25vh;
    position: fixed;
    margin-left: 20%;
    width: 60%;
    z-index: 10;
    height: 50vh;
`;

export const CardHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 20px;
    background: ${(props) => props.theme.colors.primary};
`;

export const CardTitle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    color: ${(props) => props.theme.colors.background_primary};
`;

export const CardIcon = styled.span`
    margin-right: 10px;
`;

export const CardTitleText = styled.strong``;

export const CardBody = styled.div`
    background: ${(props) => props.theme.colors.background_primary};
    border-radius: 0 0 5px 5px;
    display: flex;
    flex-direction: column;
`;

export const CardSelectionContainer = styled.div`
    width: 100%;
`;

export const CardSelectionTitle = styled.strong`
    color: ${(props) => props.theme.colors.third};
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 20px;
    padding: 10px;
    box-shadow: 0px 2px 0px 0px;
`;

export const CardSelection = styled.div`
    margin-top: 15px;
    display: flex;
    flex-direction: row;
    gap: 5%;
`;

export const SelectionOption = styled.div`
    @media screen and (max-width: 680px) {
        font-size: 0.8rem;
    }
    transition: all ease-in-out;
    width: 50%;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: row;
    border: 1px solid ${(props) => props.theme.colors.third};
    color: ${(props) => props.theme.colors.third};
    cursor: pointer;

    border-radius: 5px;
    padding: 15px;

    &:hover {
        background-color: ${(props) => props.theme.colors.third};
        color: ${(props) => props.theme.colors.background_primary};

        input {
        }
    }
`;

export const CheckboxMark = styled.span<{ checked: boolean }>`
    ::after {
        content: "";
        position: absolute;
        top: calc(15px + 0.5em);
        left: calc(15px + 0.4em);
        width: 0.5em;
        height: 0.5em;
        border-radius: 50%;
        background-color: ${(props) =>
            props.checked ? props.theme.colors.background_secondary : ""};
    }
`;

export const SelectionCheckBox = styled.input<{ type: string }>`
    margin-right: 20px;
    width: 1.3em;
    height: 1.3em;
    background-color: white;
    border-radius: 50%;
    vertical-align: middle;
    border: 1px solid #000;
    appearance: none;
    -webkit-appearance: none;
    outline: none;
    cursor: pointer;
`;
