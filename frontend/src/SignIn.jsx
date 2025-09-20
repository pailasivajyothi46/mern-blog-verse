import {Link} from 'react-router-dom'
import NavBar from "./NavBar"
import { Mail } from 'lucide-react';
import { KeyRound } from 'lucide-react';
import { Eye } from 'lucide-react';
import { EyeOff } from 'lucide-react';
const SignIn = () => {
    return (
        <div className="flex flex-col items-center min-h-screen  bg-indigo-50">
          <NavBar/>
         <div className=" border flex  flex-col items-center rounded-2xl bg-white  w-[24%] py-5 mt-40">
            <form action="">
                <div className=" gap-1">
                    <h1 className="text-center font-bold text-2xl ">Sign in</h1>
                    <p className="text-center font-semibold">Access Your Account</p>
                </div>
                <div className="flex flex-col mt-5  w-[98%]">
                    <p>EmailAddress</p>
                   <div className='relative'> <input type="email" className="border  rounded-xl   px-10  py-1 w-400px" placeholder="enter email address" />
                    <Mail className='absolute top-2 left-2 right-2 bottom-2'/>
                </div> </div>
                <div className="flex flex-col mt-5  w-[98%]">
                    <p>Password</p>
                  <div className='relative'> <input type="password" placeholder="enter password" className=" border w-400px rounded-xl px-10 py-1 " />
                    <KeyRound className='absolute top-2 left-2 right-2 bottom-2'/>
                    <Eye className="absolute right-2 top-1"/>
                </div> </div>
            </form>
            <div className="flex  justify-around gap-3 mt-9 mb-8">

                <input type="checkbox" name="" id=" " />
                <p >Remember me</p>
                <span className="px-6 text-blue-800">forgot Password</span>
                
            </div>
            <div classNmae="border  rounded-xl   ">
                <button className="text-white-700 bg-green-700 font-semibold   rounded-xl text-center h px-10 py-2"> sign in</button>
            </div>
            <div className="flex justify arround mt-5">
                <p>Do you have an Account?</p>
                <Link to ="/signup" className="px-5 text-blue-800">create one here</Link>
            </div>


        </div>
        </div>


    )
}
export default SignIn