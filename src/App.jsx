import { BrowserRouter, Link, Routes , Route} from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'

import { useEffect, useState } from 'react';
import Home from './page/home/Home';
import Shop from './page/shop/Shop';
import Categoriyes from './page/home/components/Categoriyes';
import Shoping from './page/shoping/Shoping';
import Regiser from './page/register/Register';





function App() {
  const [data, setData] = useState([])
  const [ buyCount, setBuyCount ] = useState([]);

  const [filterP, setFilterP] = useState(1000);
  const [ allPro, setAllPro ] = useState([]);


  const handleBtn = () => {
    console.log("ishladi");
    const priceFilter = Number(localStorage.getItem("val")) 
    console.log(priceFilter);
    const fileredProducts = data && data.filter((p) =>  p.price < priceFilter );
    setAllPro(fileredProducts)
  }



  useEffect(()=>{
    const fetchData = async() =>{
      fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((json) => {
        setData(json)
        setAllPro(json)
      })
    }
    fetchData()
  } , [])





  
  return (
    <>
    <BrowserRouter>
    <Header  setBuyCount={setBuyCount}  buyCount={buyCount}/>
    <Routes>
      
      <Route path='/'  element={<Home data = {data} handleBtn={handleBtn} allPro={allPro} setAllPro={setAllPro}/>}></Route>
      <Route path='/shop/:id' element={<Shop buyCount={buyCount} setBuyCount={setBuyCount} data = {data}/>}></Route>
      <Route path='/register' element={<Regiser />}></Route>
      <Route path='/shoping' element={<Shoping data = {data}  buyCount={buyCount} setBuyCount={setBuyCount} />}></Route>
      <Route path='/category' element={<Categoriyes filterP={filterP} setFilterP={setFilterP} data = {data}  />}></Route>
      {/* <Route path='/modal' element={<Modal/>}></Route> */}
    </Routes>

    <Footer />  
    
    </BrowserRouter>

    </>
  )
}

export default App