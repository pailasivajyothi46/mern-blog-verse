const SignIn = () => {
    return (
        <div className="flex flex-col items-center min-h-screen bg-indigo-50">

        <div className=" border flex  flex-col items-center rounded-2xl bg-white  w-[24%] py-5 mt-40">
            <form action="">
                <div className=" gap-1">
                    <h1 className="text-center font-bold text-2xl ">Sign in</h1>
                    <p className="text-center font-semibold">Access Your Account</p>
                </div>
                <div className="flex flex-col mt-5  w-[90%]">
                    <p>EmailAddress</p>
                    <input type="email" className="border  rounded-xl   px-20  py-1 " placeholder="enter email address" />
                </div>
                <div className="flex flex-col mt-5  w-[90%]">
                    <p>Password</p>
                    <input type="password" placeholder="enter password" className=" border rounded-xl px-20 py-1" />
                </div>
            </form>
            <div className="flex  justify-around gap-3 mt-9 mb-8">

                <input type="checkbox" name="" id=" " />
                <p >Remember me</p>
                <span className="px-6 text-blue-800">forgot Password</span>
            </div>
            <div classNmae="border  rounded-xl  ">
                <button className="text-white-700 bg-green-700 font-semibold   rounded-xl text-center h px-10 py-2"> sign in</button>
            </div>
            <div className="flex justify arround mt-3">
                <p>Do you have an Account?</p>
                <span className="px-5 text-blue-800">create one here</span>
            </div>


        </div>
        </div>


    )
}
export default SignIn