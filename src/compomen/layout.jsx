import { Outlet, Link } from "react-router-dom";
const Layout = () =>{
    return (
        <>
            <button className="buttonCss"><Link to = '/home'>Home</Link></button>
            <button className="buttonCss"><Link to = '/blog'>Blog</Link></button>
            <button className="buttonCss"><Link to = '/todolist'>TodoList</Link></button>
            <button className="buttonCss"><Link to = '/changebackgroud'>Change Backgroud Color</Link></button>
            <Outlet></Outlet>
        </>
    )
}
export default Layout;