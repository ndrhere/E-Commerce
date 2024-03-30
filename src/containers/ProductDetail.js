import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectedProduct, removeSelectedProduct } from "../redux/actions/productActions";
import { useSelector } from "react-redux";

const ProductDetail = () => {
  const product = useSelector((state)=> state.product)
  
  const {image, title, price, category, description } = product;
  const { productId } = useParams();
  console.log("product", product);
  const dispatch = useDispatch();
  const fetchProductDetail = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((error) => {
        console.log("error", error);
        console.log("respo", response)
      });
    dispatch(selectedProduct(response.data));
  };

const handleAddToCart = async () => {
  try{
    const productItems = await axios.get('http://localhost:3000/cartitems');
    const isProductInCart = productItems.data.some((item) => item.productId === productId);
    if(isProductInCart){
     return  alert('Product already added')
    } 
      await axios.post('http://localhost:3000/savetocart', {
        title,
        description,
        image,
        price,
        productId
      })
      alert('Product added to the cart')
   
  }catch(error){
    console.error('There is some error', error);
    alert('Failed adding to the cart')
  }
}




  useEffect(()=>{
        if(productId && productId !== "") fetchProductDetail();
        return () =>{
            dispatch(removeSelectedProduct())
        }
  }, [productId]);

  return (
  <div>
    {Object.keys(product).length === 0 ? (
        <div> ...Loading </div>
    ) : (
        <div className="container my-4" style={{padding:"40px"}}>
      <div className="row">
        <div className="col-md-6">
          <img src={image} alt={title} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h3>{title}</h3>
          <p>{category}</p>
          <p>Price: ${price}</p>
          <p>{description}</p>
          <button className="btn btn-primary" onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
    )}
</div>
)
};

export default ProductDetail;


