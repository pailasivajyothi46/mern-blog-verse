const SignUp = () => {
    return (
        <div className="flex items-center flex-col mt-10 gap-4">
            <h1 className="text-blue-600 font-bold text-2xl">join BlogVerse</h1>
            <p classNmae=" text-xl font-semiobold text-center">create your account and <br /> start your blogging journey today</p>
            <form className="flex flex-col border-black w-1/3 py-7 items-center gap-5 ">
                <div className=" bg-gray-50 px-10 py-4 w-[90%] flex flex-col text-md gap-2">
                    <p className="w-[200] flex flex-col text-md">FULL NAME</p>
                    <input type="text" name="name" className="border rounded-xl focus: outline-none focus:border-fuchsia-500 px-3" placeholder="enter your name" />
                </div>
                <div className=" bg-gray-50 px-11 py-4 w-[90%] flex flex-col text-md gap-2">
                    <p className="w-[200] flex flex-col text-md">EMAIL</p>
                    <input type="email" name="email" className="border rounded-xl focus: outline-none focus:border-fuchsia-500 px-3" placeholder="enter your email" />
                </div>
                <div className=" bg-gray-50 px-10 py-4 w-[90%] flex flex-col text-md gap-2">
                    <p className="w-[200] flex flex-col text-md">password</p>
                    <input type="password" name="password" className="border rounded-xl focus: outline-none focus:border-fuchsia-500 px-3" placeholder="enter password" />
                </div>
                <div className=" bg-gray-50 px-10 py-4 w-[90%] flex flex-col text-md gap-2">
                    <p className="w-[200] flex flex-col text-md">conform your password</p>
                    <input type="password" name="re enter" className="border rounded-xl focus: outline-none focus:border-fuchsia-500 px-3" placeholder="re enter your password" />
                </div>
                <div className="flex black-2 border-1 px-3 py-1 gap[-2] w-[90%] rounded-1 items-center justify-around bg-gray-50" >
                    <input type="checkbox" name="" id=" "  />
                    <p>i agree to the terms of service and privacy policy</p>

                </div>
                <button className="bg-purple-600 text-white font-semibold px-3 py-1 gap-1 rounded-xl w-[90%]"> create Account</button>
                <div className="flex w-[90%] gap-10  ">
                    <p className="text-gray-700 font-semibold"> Already have an account?</p>
                    <span className="text-fuchsia-700"> sign in here</span>
                </div>
                <button className="text-gray-700 font-semibold   rounded-xl cursor-pointer text-center hover:bg-red-400 py-3 px-2 ">back to home</button>
            </form>

        </div>
    )
}
export default SignUp