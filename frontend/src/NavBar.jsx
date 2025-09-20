import {Link} from 'react-router-dom'
const  NavBar=()=>{
    return(
        <div className="flex justify-around h-16 items-center border w-full ">
            <h1 className="font-bold text-1xl">BlogVerse</h1>
            <Link to="/homepage" className=" text-gray-700 curser-pointer hover:bg-blue-200 py-1 px-5">Home</Link>
            <div className="flex gap-3">
                <Link to="/signin" className=" text-gray-700 font-semibold cursor-pointer ">Sign in</Link>
                <Link to="/signup" className=" bg-blue-400 text-white-700 px-2 py-1 rounded-2xl ">Sign Up</Link>
            </div>

        </div>
    )
}
export default NavBar