import { Link } from "react-router-dom";
import { pluralize } from "../../utils/helpers"
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";

function ProductItemProdPage(item) {
  const [state, dispatch] = useStoreContext();

  const {
    color,
    description,
    details,
    image,
    name,
    price,
    quantity,
    _id,
    // category
    
  } = item;

  const { cart } = state

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id)
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...item, purchaseQuantity: 1 }
      });
      idbPromise('cart', 'put', { ...item, purchaseQuantity: 1 });
    }
  }


  return (
    
    <div className="mt-5">
      <div key={_id} className="bg-white p-6 rounded-lg shadow-md border-2 border-[--Navy]  flex-col justify-center max-w-[300px] mx-2 my-8">
        <h4 className="text-black pb-3 h-16 overflow-hidden">
          {description} <br />
          <span style={{ fontSize: '1rem' }}>
            {color}
          </span>
        </h4>
  
        <div className="mb-4" style={{ marginTop: '-110px' }}>
          <img
            className="border-2 border-[--Navy] w-full h-40 object-cover object-center rounded-xl"
            src={image}
            alt={`Product ${_id}`}
          />
        </div>
  
        <h3 className="font-bold text-lg text-center font-mono text-black">{name}</h3>
        {/* <p className="text-black">{details}</p> */}
        {/* <div className=" mt-2 text-white">{quantity} {pluralize("item", quantity)} in stock</div> */}
        <span className="text-black max-w-[90px] block">${price}</span>
        <Link
          className="btn btn-block text-black btn-squared underline max-w-[90px]"
          to={`/products/${_id}`}
        >
          View Details  
        </Link>
        
  
         <button onClick={addToCart} className="btn btn-primary border-2 border-white btn-block btn-squared bg-black text-white rounded-2xl max-w-[150px] min-w-[130px] mx-auto mt-5 hover:min-w-[132px] hover:bg-[--Navy] hover:text-black hover:font-semibold">
          Add to cart
        </button>
      </div>
    </div>
  );
  
  
}

export default ProductItemProdPage;


  // return (
  //   <div className="card px-1 py-1">
  //     <Link to={`/products/${_id}`}>
  //       <img
  //         alt={name}
  //         src={`/images/${image}`}
  //       />
  //       <p>{name}</p>
  //     </Link>
  //     <div>
  //       <div>{quantity} {pluralize("item", quantity)} in stock</div>
  //       <span>${price}</span>
  //     </div>
  //     <button onClick={addToCart}>Add to cart</button>
  //   </div>
  // );