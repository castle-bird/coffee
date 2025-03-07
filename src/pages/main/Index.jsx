import { Outlet } from "react-router-dom";
import SubNavi from "../../components/navigation/SubNavi";
import MainContainer from "./styled";
import { useSelector } from "react-redux";

function Main() {
    const test = useSelector((state) => state.modal);
    return (
        <MainContainer>
            <SubNavi />
            <Outlet />
        </MainContainer>
    );
}

export default Main;
