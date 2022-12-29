import React ,{useState}from 'react';
import "../componentsStyles/HeroProduct.css"
import {useParams} from "react-router-dom"
import shopItems from '../data/shopItems';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../store/cartSlice';
import { Link } from 'react-router-dom';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';


export default function HeroProduct(){
    // eslint-disable-next-line no-unused-vars
    const [outline,setOutline] = useState(false)
    const outlineTriggerBag = () => setOutline((prev) => !prev);
   
    const {productId} = useParams()

    const product = shopItems.find(product => product.id == productId)
  
    const cartItems = useSelector(state=> state.cart.itemsList)


    const dispatch = useDispatch()
    const addToCart = () =>  {
        dispatch(
            cartActions.addToCart({
              name: product.name,
              id: product.id,
              price: product.price,
              Img: product.img,
              quantity: 1,
            }))
            outlineTriggerBag()
    }

    return(

        <div className='hero-product-container'>
          
            <img src={product.img} />
         
            <div className="info-container">
                <Link to="/" style={{color:"black"}}>
            <KeyboardBackspaceIcon  id="back-arrow-cart"/>
            </Link >
                <h2>{product.name}</h2>
                <h3>${product.price}.00</h3>
                <span id='line' ></span>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis Theme natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                <button onClick={() => addToCart()}>{cartItems.find(x=> x.id == product.id)? "ADDED":"ADD TO CART"}</button>
            </div>
        </div>
    )
}





