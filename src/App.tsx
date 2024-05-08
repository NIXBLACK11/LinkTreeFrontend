import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Signup } from "./pages/Signup"
import { Signin } from "./pages/Signin"
import { User } from "./pages/User"
// import { NotFound } from "./pages/NotFound"


function App() {

  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/' element={<Signin/>}/>
            <Route path='/:userName' element={<User/>}/>
            {/* <Route element={<NotFound/>} /> */}
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App