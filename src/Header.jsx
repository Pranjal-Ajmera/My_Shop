import AddToCart from "./AddToCart"
import { Link } from "react-router-dom"

const Header =()=>{
    return(
        <header className="header">
    <div className="logo">MyShop</div>

    <nav className="nav">
        <Link to="/">Home</Link>
        <a href="#">Products</a>
    </nav>
     <AddToCart/>
</header>
    )
}
export default Header