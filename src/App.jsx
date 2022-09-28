import './App.css';
import logo from "./images/logo.png";
import { useEffect, useState } from 'react';

function App() {
  const [password, setPassword] = useState(null);
  function handleSignIn(){
    setPassword(document.querySelector("#password").value);
    console.log(password);
  }
  function handleChangePass(){
    setPassword(document.querySelector("#password").value);
 
    
  }
  useEffect(() => {
    function handleEnter(event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        document.querySelector("#signIn").click();
      }
    }
    document.querySelector("#password").addEventListener("keyup", handleEnter)
    return () => {
      document.querySelector("#password").removeEventListener("keyup", handleEnter)
    }


  });
  return (
    <div className='login relative'>
      <div className='w-screen h-screen'>
        <div className='w-full h-full flex justify-center items-center relative'>
          <div className='lg:w-500 w-2/3 h-600 bg-white rounded-lg shadow-lg flex flex-col relative  items-center'>
            {/* Header/Banner */}
            <div className = "p-8 w-full justify-center flex items-center">
              <img src={logo} alt="logo" className="w-32 rounded-full" />
              <h1 className = "text-3xl">
                Diocese of Tagbilaran
              </h1>
              
            </div>
            <div className = "w-full px-12">
            <form class="">
              <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                  Username
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"></input>
              </div>
              <div class="mb-6">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                  Password
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" onKeyDown={()=>handleChangePass()} ></input>
                {password === "" ? <ErrorCredential credentialName = {"password"} credential={password}/> : null}
              </div>
              <div className = "mb-4 flex justify-end">
                <a href="#" class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
                  Forgot Password?
                </a>
              </div>
              <div class="flex items-center justify-between">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" type="button" id = "signIn" onClick={()=>handleSignIn("")}>
                  Sign In
                </button>
                
              </div>
            </form>
            <div className = "mt-4 flex justify-center items-center">
              <a>Not a member yet?</a><a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">

                  Sign Up
                </a>
            </div>
            </div>
            <div className='flex justify-center absolute bottom-10'>
              &copy; 2021 Diocese of Tagbilaran
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function ErrorCredential({credentialName, credential}){
  return(
    <p class="text-red-500 text-xs italic">Please choose a {credentialName}</p>
  )
}

export default App;
