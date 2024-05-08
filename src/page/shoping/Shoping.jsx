
import { useParams } from 'react-router-dom'
import { MdDeleteOutline } from "react-icons/md";
import { Breadcrumbs, Link, Typography } from '@mui/material';

function Shoping({data, buyCount, setBuyCount}) {
  console.log( buyCount);
  const removeCard = (itemId) => {
    const updated = buyCount.filter(item => item.id !== itemId)
    setBuyCount(updated)
  }

    
  return (
    <div className='container mx-auto p-2'>
      <Breadcrumbs aria-label="breadcrumb">
  <Link underline="hover" color="inherit" href="/">
    Home
  </Link>
  
  <Typography color="green">Shoping</Typography>
</Breadcrumbs>
      <div>
        <ul className='xl:flex lg:flex xl:block lg:block ml:hidden items-center'>
          <li className='mx-[120px]'>Product</li>
          <li className='mx-[120px]'>Price</li>
          <li className='mx-[90px]'>Quantity</li>
          <li className='mx-[125px]'>Total</li>
        </ul>
      </div>
        {
          
          buyCount.map((product ) => (
            <div key={product} className='my-5 flex gap-2 items-center justify-between'>
              <div className='flex items-center gap-2'>
              <div className='w-14'>
              <img  src={product.image}  alt="img" />
              </div>
              <h2 className='text-sm w-[125px] xl:block lg:block ml:hidden'>{product.title}</h2>
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