const ProductCard=()=>{
    const ProductName="apple"
    const ProductPrice=20000
    

    return(
        <div className="border-2 border-black w-[300px] flex flex-col items-center gap-10 py-4 rounded-2xl">
            <img src="vite.svg" alt="" className="w-[150px] h-[150px] border-4 border-blue-500 rounded-full"/>
           
           <div className="flex flex-col items-baselinecenter gap-4"> <h1 className="font-bold text-[20px] text-blue-500 text-center ">product1</h1>
            <p className="font-bold text-4 text-center text-bold">  {ProductName} is available to order</p>
            <p className="text-bold text-green-600 text-center">${ProductPrice}</p>
            <button className="border-2 w-[200px] items-center bg-blue-700 text-black-[20px] rounded-3xl text-center curser-pointer hover:bg-blue-400">ORDER NOW</button>
        </div></div>
    )




}
export default ProductCard