
import { useParams } from 'react-router-dom'
import { MdDeleteOutline } from "react-icons/md";

function Shoping({data, buyCount, setBuyCount}) {
  console.log( buyCount);
  const removeCard = (itemId) => {
    const updated = buyCount.filter(item => item.id !== itemId)
    setBuyCount(updated)
  }

    
  return (
    <div className='container mx-auto p-2'>
      <div>
        <ul className='flex items-center'>
          <li className='mx-[120px]'>Product</li>
          <li className='mx-[120px]'>Price</li>
          <li className='mx-[90px]'>Quantity</li>
          <li className='mx-[125px]'>Total</li>
        </ul>
      </div>
        {
          
          buyCount.map((product ) => (
            <div key={product} className='my-5 flex items-center justify-between'>
              <div className='flex items-center gap-2'>
              <img className='w-16' src={product.image}  alt="img" />
              <h2 className='text-sm w-[125px]'>{product.title}</h2>
              </div>
              <h2>{product.quantity}</h2>
              <h2>${product.price}</h2>
              <h2>${product.price * product.quantity}</h2>
               <button onClick={() => removeCard(product.id)}  className='w-[60px] text-xl'><MdDeleteOutline/></button>
            </div>
          ))
        }
    </div>
  )
}

export default Shoping