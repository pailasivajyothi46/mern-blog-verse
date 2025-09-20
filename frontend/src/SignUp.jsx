import NavBar from "./NavBar"
import { Link } from 'react-router-dom'
import { CircleUser } from 'lucide-react';
import { Mail } from 'lucide-react';
import { KeyRound } from 'lucide-react';
import { FolderPen } from 'lucide-react';
import { Lock } from 'lucide-react';
import { Eye } from 'lucide-react';
import { EyeOff } from 'lucide-react';
import { useState } from 'react';

const SignUp = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: ""

    })
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")
    const [showPassword, setPassword] = useState(false)
    const [sConform, setConform] = useState(true)
    const [errors, setErrors] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: ""

    })
    const handlePassword = () => {
        setPassword((password) => !password)
    }
    const handleConformPassword = () => {
        setConform((password) => !password)
    }
    const handleChange = (event) => {
        setError("")
        setSuccess("")
        setFormData((formData) => ({
            ...formData,
            [event.target.name]: event.target.value
        }
        ))
        setErrors((errors) => ({
            ...errors,
            [event.target.name]: ""
        }
        ))

    }
    const handleSubmit = (event) => {
        event.preventDefault();
        let newErrors = {}
        if (!formData.fullName) {
            newErrors.fullName = "please enter your full name"
        }
        if (!formData.email) {
            newErrors.email = "please enter your  email"
        }
        if (!formData.password) {
            newErrors.password = "please enter your password"
        }
        if (!formData.confirmPassword) {
            newErrors.confirmPassword = "please enter your password"
        }
        else if (formData.confirmPassword !== formData.password) {
            newErrors.confirmPassword = " your password doesn't match"
        }
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
        } else {
            setSuccess("your account created successfully")
            setFormData({
                fullName: "",
                email: "",
                password: "",
                confirmPassword: ""
            })
        }



        // if (!formData.fullName || !formData.email || !formData.password || !formData.confirmPassword) {
        //     setError("please fill all the fields")

        // }
        // else if (formData.password !== formData.confirmPassword) { setError("your password didn't match") }
        // else {
        //     setSuccess("your account created successfully")
        //     setError("")
        //     setFormData({
        //         fullName: "",
        //         email: "",
        //         password: "",
        //         confirmPassword: ""
        //     })

        // }
    }

    return (
        <div className="flex items-center flex-col mt-10 gap-4">
            <NavBar />
            <h1 className="text-blue-600 font-bold text-2xl">join BlogVerse</h1>
            <p className=" text-xl font-semiobold text-center">create your account and <br /> start your blogging journey today</p>

            <form onSubmit={handleSubmit} className="flex flex-col border-black w-1/3 py-7 items-center gap-5 ">

                <div className=" bg-gray-50 px-10 py-4 w-[90%] flex flex-col text-md gap-2">
                    <p className="w-[200] flex flex-col text-md">FULL NAME</p>
                    <div className="relative" > <input onChange={handleChange} value={formData.fullName} type="text" name="fullName" className="border rounded-xl focus: outline-none focus:border-fuchsia-500 w-[90%] px-10 py-2" placeholder="enter your name" />
                        <FolderPen className="absolute top-2 left-2 right-2 bottom-2" /> </div>
                    {errors.fullName && <p className="text-red-500">{errors.fullName}</p>}
                </div>

                <div className=" bg-gray-50 px-11 py-4 w-[90%] flex flex-col text-md gap-2">
                    <p className="w-[200] flex flex-col text-md"> EMAIL</p>
                    <div className="relative">
                        <input onChange={handleChange} value={formData.email} type="email" name="email" className="border rounded-xl focus: outline-none focus:border-fuchsia-500 px-10 py-2 w-[90%]" placeholder="enter your email" />
                        <Mail className="absolute top-2 left-2 right-2 bottom-2" /> </div>
                    {errors.email && <p className="text-red-500">{errors.email}</p>}
                </div>

                <div className=" bg-gray-50 px-10 py-4 w-[90%] flex flex-col text-md gap-2">
                    <p className="w-[200] flex flex-col text-md">password</p>
                    <div className="relative">
                        <input onChange={handleChange} value={formData.password} type={showPassword ? "text" : "password"} name="password" className="border  relative rounded-xl focus: outline-none focus:border-fuchsia-500 w-[90%] px-10 py-2" placeholder="enter password" />
                        <KeyRound className="absolute top-2 left-2 right-2 bottom-2" />
                        <p onClick={handlePassword}>{showPassword === true ? <Eye className="absolute right-12 top-2 " /> : <EyeOff className="absolute right-12  top-2 " />}</p>
                    </div>
                    {errors.password && <p className="text-red-500">{errors.password}</p>}
                </div>

                <div className=" bg-gray-50 px-10 py-4 w-[90%] flex flex-col text-md gap-2">
                    <p className="w-[200] flex flex-col text-md">conform your password</p>

                    <div className="relative">
                        <input onChange={handleChange} value={formData.confirmPassword} type={sConform ? "text" : "Password"} name="confirmPassword" className="border rounded-xl focus: outline-none focus:border-fuchsia-500 w-[90%] px-10 py-2" placeholder="re enter your password" />
                        <Lock className="absolute top-2 left-2 right-2 bottom-2" />
                        <p onClick={handleConformPassword}> {sConform === true ? <Eye className="absolute right-12 top-2 " /> : <EyeOff className="absolute right-12 top-2 " />}
                        </p>
                    </div>
                    {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword}</p>}

                </div>
                <div className="flex black-2 border-1 px-3 py-1 gap[-2] w-[90%] rounded-1 items-center justify-around bg-gray-50" >
                    <input type="checkbox" name="" id=" " />
                    <p>i agree to the terms of service and privacy policy</p>

                </div>
                {/* {error && <p className="text-red-500">{error}</p>}
                {success && <p className="text-green-500">{success}</p>}  */}
                {success && <p className="text-green-500">{success}</p>}

                <button type="submit" className="bg-purple-600 flex justify-center gap-3 text-white font-semibold px-3 py-1  rounded-xl w-[90%]">< CircleUser className="" /> <p>create Account</p> </button>
                <div className="flex w-[90%] gap-10  ">
                    <p className="text-gray-700 font-semibold"> Already have an account?</p>
                    <Link to="/signin" className="text-fuchsia-700 hover:underline cursor-point"> sign in here</ Link>
                </div>
                < Link to="/homepage" className="text-gray-700 font-semibold   rounded-xl cursor-pointer text-center hover:bg-red-400 py-3 px-2 ">back to home</Link>
            </form>

        </div>
    )
}
export default SignUp