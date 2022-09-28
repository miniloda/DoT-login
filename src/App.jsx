import './App.css';
import logo from "./images/logo.png";
function App() {
  return (
    <div className='login'>
      <div className='w-screen h-screen'>
        <div className='w-full h-full flex justify-center items-center'>
          <div className='lg:w-600 w-2/3 h-2/3 bg-white rounded-lg shadow-lg flex flex-col  items-center'>
            {/* Header/Banner */}
            <div className = "m-8 w-full justify-center flex items-center">
              <img src={logo} alt="logo" className="w-32 rounded-full" />
              <h1 className = "text-3xl">
                Diocese of Tagbilaran
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
