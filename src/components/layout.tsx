import { ReactNode } from "react";
import { Link, Outlet } from "react-router-dom";

function Header() {
    return <div>
        Actions:
        <ul>
            <li> <Link to="/login">Login</Link> </li>
        </ul>
    </div>
}

interface Props {
    children?: ReactNode
}
const Body: React.FC<Props> = ({children}) => {
    return <div>
        {children}
        <Outlet/>
    </div>
}

export {Body, Header}

const Layout: React.FC<Props> = ({children}) => {
    return <div>
        <Header/>
        <Body children={children}/>
    </div>
}
export default Layout