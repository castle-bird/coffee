import { NavLink } from "react-router-dom";

import MainNaviContainer from "./MainNavi-styled";

function MainNavi() {
    return (
        <MainNaviContainer>
            <ul>
                <li>
                    <NavLink to="/">홈</NavLink>
                </li>
                <li>
                    <NavLink to="/product">프로덕트</NavLink>
                </li>
            </ul>
        </MainNaviContainer>
    );
}

export default MainNavi;
