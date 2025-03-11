import { Outlet } from "react-router-dom";
import SubNavi from "../../components/navigation/SubNavi";
import MainContainer from "./styled";

function Main() {
    return (
        <MainContainer>
            <SubNavi />
            <Outlet />
        </MainContainer>
    );
}

export default Main;
