import { NavLink } from "react-router-dom";

import SubNaviContainer from "./SubNavi-styled";

function SubNavi() {
    return (
        <SubNaviContainer>
            <ul>
                <li>
                    <NavLink to="/main" end>전체메뉴</NavLink>
                </li>
                <li>
                    <NavLink to="coffee">커피</NavLink>
                </li>
                <li>
                    <NavLink to="non-coffee">논커피</NavLink>
                </li>
                <li>
                    <NavLink to="bread">빵</NavLink>
                </li>
                <li>
                    <NavLink to="tea-ade">티에이드</NavLink>
                </li>
            </ul>
        </SubNaviContainer>
    );
}

export default SubNavi;
