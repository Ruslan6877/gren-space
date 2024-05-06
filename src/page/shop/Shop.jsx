
import {  useState } from "react";
import { Link, useParams } from "react-router-dom"
import {  FaInstagramSquare, FaLinkedinIn, FaStar, FaTwitter } from "react-icons/fa";
import { RiFacebookFill } from "react-icons/ri";

// import { FcLike } from "react-icons/fc";
import { MdFavoriteBorder } from "react-icons/md";
import { Checkbox } from "@mui/material";
import Button from "../../components/Button";

function Shop({data, buyCount, setBuyCount}) {
  const [count, setCouner] = useState(1);


  const {id} = useParams()
  const originRate = 5;



  const productShop = data.filter((item) => item.id == id)



  const seems = data.filter((item) => item.category == productShop[0].category )
  console.log(data, seems);
  const rate = productShop[0].rating.rate
   let arr = []
   for (let  i = 1; i <= 5 ; i++) {
    if (i < rate) {
      arr.push(<FaStar style={{color:"yellow"}}/>)
    } else{
      arr.push(<FaStar style={{color:"grey"}}/>)
    }
    
   }
  const Social = [
    <RiFacebookFill />,
    <FaInstagramSquare />,
    <FaTwitter />,
    <FaLinkedinIn />
]
function PlusNumber(){
    setCouner(count +1)
  }
  function MinusNumber(){
    if(count > 1) {

      setCouner(count -1)
    }
  }


  function handleAddToCard(pro) {
    setBuyCount([...buyCount, { ...pro, quantity: count }  ]); 
  }

 

  
  return (
    <div>
      {/* <Header shopping={buyCount} setShopping={setBuyCount}/> */}
        
      <div className="flex bg-plant_footer justify-around container mx-auto">
      <img className="w-[160px] h-[280px] cursor-pointer" src={productShop[0].image} alt="image" />
        <div className="w-[574px]">
      <h2 className="font-bold text-lg leading-7">{productShop[0].title}</h2>
      <div className="flex items-center justify-between">
      <p className="text-green font-semibold text-xl">${productShop[0].price}</p>
      <div className="flex">{arr}</div>
      
      </div>

      <h2>{productShop[0].description}</h2>

      <div className="flex items-center gap-3">
        <button className="border py-1 px-[10px] rounded-3xl bg-green text-white" onClick={PlusNumber}>+</button>
        <p>{count}</p>
        <button className="border py-1 px-3 rounded-3xl bg-green text-white" onClick={MinusNumber}>-</button>
        <Link to={'/'}><Button title={'Buy NOW'}/></Link>
   
        <Button className={' border rounded text-green border-x-green'} onClick={() => handleAddToCard(productShop[0])} title={'Add to cart'}/>
        <div className="border rounded-3xl cursor-pointer  text-white">
        <Checkbox   icon={<MdFavoriteBorder />} checkedIcon={<MdFavoriteBorder />} />
        </div>
      </div>

      <p>Categories: {productShop[0].category}</p>






      <div className="flex gap-2 items-center">
        <p>Share this products:</p>
      {Social.map((el, index)=>(
        <div key={index} className='cursor-pointer'>{el}</div>
      ))}
      </div>
      </div>
      </div>



      
      <div className=" mt-16 flex gap-2 items-center container mx-auto justify-center">
      {seems.map((item, index) => (
        <div key={index} className="w-60 h-80">
          <div className=" py-5 bg-welcome flex justify-center">
            <Link to={`/shop/${item.id}`}>
          <img src={item.image} alt="img" className="w-56 h-48 "/>
            </Link>
          </div>
            <div className="px-2">
            <p className="text-sm">{item.title}</p>
            <p className="text-green">${item.price}</p>
            </div>
          
        </div>
      ))}
      </div>
    </div>
  )
}

export default Shop