// import ProductCard from "./ProductCard.jsx"
import NavBar from "./NavBar.jsx"
import HomePage from "./HomePage.jsx"
import {Routes,Route} from 'react-router-dom'
import SignIn from "./SignIn.jsx"
import SignUp from "./SignUp.jsx"
function App() {

  return (

    //  <div className="flex justify-center min-h-screen items-center gap-4 bg-blue-200">

    //   <ProductCard/>
    //   <ProductCard/>
    //   <ProductCard/>

    //  </div> 
    
      <Routes>

       <Route path="/" element={<HomePage/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/homepage" element={<HomePage/>}/>
      </Routes>
        //  <NavBar />
        // <HomePage/> 
        //  <SignIn/> 
        //  <SignUp />
         
         
       
  )
}

export default App
