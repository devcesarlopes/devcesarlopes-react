import styled from "styled-components";

export const Title = styled.div`
    margin-top: 30px;
    width: 100%;
    color: white;
    position: relative;

    h1 {
        font-size: 35px;
        font-family: museomoderno-black;
    }

    h1:after {
        content: "";
        position: absolute;
        margin-top: 40px;
        left: 0;
        width: 100px;
        height: 2px;
        background-color: ${(props) => props.theme.colors.secondary};
    }
`;
