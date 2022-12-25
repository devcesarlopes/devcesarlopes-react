import Gif from "../../assets/gifs/brand-gif.gif";
import { Container } from "./styles";

export const LoadingPage = ({ loading }: { loading: boolean }) => {
    return loading ? (
        <Container>
            <img src={Gif} alt="" />
        </Container>
    ) : (
        <></>
    );
};
