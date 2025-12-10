import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext/useCartContext"
import "./Nav.css";

export const Nav = () => {
    const {getTotalItems} =useCartContext();

    return <nav>
        <ul>
            <li><Link to={"/"}>Inicio</Link>
             </li>
            <li><Link to={"/category/vaso"}>Vaso</Link>
             </li>
            <li><Link to={"/category/mochila"}>Mochila</Link>
             </li>
            <li>
            <Link to={"/carrito"}>Carrito</Link>
            {getTotalItems() > 0 && (
                <span className="in-cart">{getTotalItems()}</span>
             )}
            </li>

        </ul>
        
    </nav>
}