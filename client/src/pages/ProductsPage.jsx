
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";

const ProductsPage = () => {
  return (
    <div>
       <div>
        <Cart />
      </div>
      <div>
        <CategoryMenu />
      </div>
      <div>
        <ProductList />
      </div>
     
    </div>
  );
};

export default ProductsPage;

