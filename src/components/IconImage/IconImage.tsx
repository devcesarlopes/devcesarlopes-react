import styled from "styled-components";

export const IconImage = styled.img`
    width: 5vh;
    height: 5vh;
    cursor: pointer;
    filter: ${(props) => props.theme.colors.icon_filter};

    &:hover {
        width: 6vh !important;
        height: 6vh !important;
    }
`;
