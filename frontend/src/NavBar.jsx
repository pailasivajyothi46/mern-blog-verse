
const  NavBar=()=>{
    return(
        <div className="flex justify-around h-16 items-center border">
            <h1 className="font-bold text-1xl">BlogVerse</h1>
            <button className=" text-gray-700 curser-pointer hover:bg-blue-200 py-1 px-5">Home</button>
            <div className="flex gap-3">
                <button className=" text-gray-700 font-semibold cursor-pointer ">Sign in</button>
                <button className=" bg-blue-400 text-white-700 px-2 py-1 rounded-2xl ">Sign Up</button>
            </div>

        </div>
    )
}
export default NavBar