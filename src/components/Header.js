import { LOGO_URL } from "../utils/constants";

const Header=()=>{
    return(
        <div id="header">
            <div id="logo-img">
                <img src={LOGO_URL}/>
            </div>
            <div id="nav-bar">
                <ul>
                    <li>Home</li>
                    <li>Mission</li>
                    <li>FAQ</li>
                    <li>Login</li>
                </ul>
            </div>
        </div>
    );
};
export default Header;
