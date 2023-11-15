import {useDispatch, useSelector} from 'react-redux'
import { Link} from 'react-router-dom'
import { ProductDetails } from './'
import { CURRENCY} from '../utils/Constants'
import { removeFromCart } from '../redux/cartSlice'
const Checkout = () => {
  const dispatch=useDispatch();
  const products=useSelector((state)=>state.cart.products);
  const itemsNumber=useSelector((state)=>state.cart.productsNumber);
  const subtotal=useSelector((state)=>state.cart.products.reduce(
    (subtotal, product) => subtotal + product.price * product.quantity,
    0
  ));
  return (
    <div className='h-screen bg-amazonclone-background'>
      <div className='m-w-[1000px] max-w-[1500px] m-auto pt-8'>
        <div className='grid grid-cols-8 bg-white'>
          {/*products*/}
          <div className='col-span-6'>
            <div className='text-2xl xl:text-3xl m-4'>Shopping Cart</div>
            {
              products.map(product=>{
                return(
                  <div key={product.id}>
                    <div className='grid grid-cols-12 divide-y divide-gray-400'>
                      <div className='col-span-10 grid grid-cols-8  divide-y divide-gray-400 mr-e'>
                      <div className='col-span-2'>
                      <Link to={`/products/${product.id}`}>
                        <img className="p-4 m-auto" src={product.image_small} alt="product" />
                      </Link>
                      </div>
                      <div className='col-span-6'>
                        <div className='font-medium text-black mt-2'>
                        <Link to={`/product/${product.id}`}>
                          <ProductDetails product={product} ratings={false}/>
                          </Link>
                        </div>
                        <div>
                          <button className='text-sm xl:text-base  font-semibold rounded text-blue-500 mt-2 mb-1' onClick={()=>dispatch(removeFromCart(product.id))}>Delete</button>
                        </div>
                        <div className="grid grid-cols-3 w-20 text-center">
                          <div
                            className="text-xl xl:text-2xl bg-gray-400 rounded cursor-pointer"
                           
                          >
                            -
                          </div>
                          <div className="text-lg xl:text-xl bg-gray-200">
                            {product.quantity}
                          </div>
                          <div
                            className="text-xl xl:text-2xl bg-gray-400 rounded cursor-pointer"
                          
                          >
                            +
                          </div>
                        </div>
                      </div>
                      </div>
                      <div className='col-span-2'>
                        <div className='text-lg xl:text-xl mt-2 mr-4 font-semibold'>{CURRENCY.format(product.price)}</div>
                      </div>
                    </div>
                  </div>
                )
              })
            }
           <div className="text-lg xl:text-xl text-right mb-4 mr-4">
              Subtotal ({itemsNumber} items):{" "}
              <span className="font-semibold">
                {CURRENCY.format(subtotal)}
              </span>
            </div>
          </div>
          {/*checkout*/}
          <div className="col-span-2 bg-white rounded h-[250px] p-7">
            <div className="text-xs xl:text-sm text-green-800 mb-2">
              Your order qualifies for{" "}
              <span className="font-bold">FREE DELIVERY</span>. Delivery Details
            </div>
            <div className="text-base xl:text-lg mb-4">
              Subtotal ({itemsNumber} items):{" "}
              <span className="font-semibold">
                {CURRENCY.format(subtotal)}
              </span>
            </div>
            <button className="btn">Proceed to Checkout</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout