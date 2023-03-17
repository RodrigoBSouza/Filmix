import { HeaderBar } from "./styles.Header";
import { Link } from "react-router-dom";

const linkStyle = {
    textDecoration: "none"
}

function Header() {
    return(
        <HeaderBar>
            <Link to="/" style={linkStyle}>
                <h1>Filmix</h1>
            </Link>
            <nav>
                <ul>
                    <Link to="/" style={linkStyle}>
                        <li>Filmes</li>
                    </Link>

                    <Link to="/tv/popular" style={linkStyle}>
                        <li>Séries</li>
                    </Link>
                </ul>
            </nav>
        </HeaderBar>
    )
}

export default Header;