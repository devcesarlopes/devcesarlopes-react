import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    height: fit-content;
    display: flex;
    padding: 2% 5%;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;
    background: ${(props) => props.theme.colors.background_secondary};
    color: white;
    font-weight: 600;
    box-shadow: 0px 0 5px 2px #888;
    z-index: 2;
`;

export const ProjectsRow = styled.div`
    @media screen and (max-width: 1080px) {
        flex-direction: column !important;
    }
    display: flex;
    justify-items: center;
    align-items: center;
    column-gap: 2%;
    row-gap: 5%;
    padding: 2% 0;
`;
export const BoxBorder = styled.div`
    @media screen and (max-width: 680px) {
        padding-top: 10px !important;
    }

    @media screen and (max-width: 1080px) {
        margin-top: 20px;
    }

    background: #e8e8e8;
    width: -webkit-fill-available;
    height: -webkit-fill-available;
    padding: 5%;
    padding-top: 20px;
    box-shadow: 0 0 10px rgb(0, 0, 0);
    -webkit-box-shadow: 0 0 10px rgb(0, 0, 0);
    -moz-box-shadow: 0 0 10px rgb(0, 0, 0);
    border-radius: 15px;

    &:hover {
    }
`;
export const BoxTitle = styled.div`
    @media screen and (max-width: 680px) {
        font-size: 5vw !important;
    }

    font-size: 2.5vw;
    text-align: center;
    font-weight: bold;
    color: ${(props) => props.theme.colors.primary};
`;

export const DivBoxImage = styled.div`
    @media screen and (max-width: 680px) {
        margin-top: 5px !important;
    }

    margin-bottom: 8%;
    display: block;
    margin-top: 20px;
    width: 100%;
    height: auto;
    position: relative;
`;

export const BoxText = styled.div`
    @media screen and (max-width: 680px) {
        font-size: 15px !important;
    }

    font-size: 17px;
    text-align: center;
    color: ${(props) => props.theme.colors.primary};
`;

export const BoxImage = styled.img<{ type: string }>`
    ${(p) => {
        switch (p.type) {
            case "mac":
                return "margin-top: 20;display: block;";
            case "tablet":
                return `
                    position: absolute;
                    bottom:-5%; 
                    right: -5%;
                    z-index:2;
                `;
            case "phone":
                return `
                    position: absolute;
                    bottom:-10%; 
                    left: 47%;
                    z-index:4;
                `;
            case "tcl-reader":
                return `
                    position: absolute;
                    bottom:-10%; 
                    width: 50%;
                    left: -10%;
                    z-index:4;
                `;
        }
    }};
    width: ${(p) => {
        switch (p.type) {
            case "mac":
                return "100%";
            case "tablet":
                return "35%";
            case "phone":
                return "43%";
        }
    }};
    height: auto;
`;

export const BoxImageContent = styled.img<{ type: string }>`
    position: absolute;

    ${(p) => {
        switch (p.type) {
            case "mac":
                return `
                    top: 0;
                    width: 100%;
                    height: 100%;
                    padding: 5% 4.3% 25.3%;
                `;
            case "tablet":
                return `
                    width: 30.3%;
                    height: 50%;
                    bottom: 0%; 
                    left: 72.3%;
                    z-index: 1;
                `;
            case "phone":
                return `
                    width: 19%;
                    height: 44%;
                    bottom: -5.3%; 
                    left: 58.8%;
                    z-index: 3;
                `;
        }
    }}
`;
