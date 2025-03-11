import { Link } from "react-router-dom";

import SubNaviContainer from "./SubNavi-styled";

function SubNavi() {
    return (
        <SubNaviContainer>
            <ul>
                <li>
                    <Link to="/">전체메뉴</Link>
                </li>
                <li>
                    <Link to="coffee">커피</Link>
                </li>
                <li>
                    <Link to="non-coffee">논커피</Link>
                </li>
                <li>
                    <Link to="bread">빵</Link>
                </li>
                <li>
                    <Link to="tea-ade">티에이드</Link>
                </li>
            </ul>
        </SubNaviContainer>
    );
}

export default SubNavi;
