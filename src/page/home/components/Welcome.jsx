
import Button from "../../../components/Button"
import Planet from "/src/assets/planet.svg"

function Welcome() {
  return (
    <div className="container  mx-auto flex  items-center bg-welcome px-10  ">
        <div>
            <h3 className="text-[14px] leading-4 font-medium lg:mt-3 md:mt-3 ml:mt-3 sm:mt-3">Welcome to GreenShop</h3>
            <h1 className="w-[530px] font-black text-[70px] leading-[70px] lg:text-[50px] lg:leading-[50px] lg:w-[330px] md:text-[40px] md:leading-[40px] md:w-[230px] ml:text-[20px] ml:w-[130px] ml:leading-[25px] ml:text-center">Let’s Make a
                Better <span className="text-green">Planet</span></h1>
                <p className="my-4 md:text-[10px] xl:text-[20px]">We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!</p>
                <Button className={'lg:mb-3 md:mb-3 ml:mb-3 sm:mb-3'}  title={'SHOP NOW'}/>
        </div>
        <img src={Planet} alt="" className="ml:hidden  lg:w-[300px] xl:block xl:w-[500px] md:block md:w-[350px] " />
    </div>
  )
}

export default Welcome