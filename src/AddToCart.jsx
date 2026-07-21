import { useSelector } from "react-redux"
import { Link } from "react-router-dom";

const AddToCart =()=>{

    const cartSelector = useSelector((state)=>state.cart.items);
    
    return(
    <div className="cart">
        <Link to="/cart">
          <img 
          src="https://cdn-icons-png.flaticon.com/512/263/263142.png" 
          alt="Cart"/>
        <span className="cart-count">{cartSelector.length? cartSelector.length : 0}</span>
        </Link>
    </div>

    )
}
export default AddToCart