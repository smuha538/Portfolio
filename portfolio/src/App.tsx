import * as React from 'react';
import About from './components/about';
import './App.css'
import Portfolio from './components/portfolio';

function App() {

  const [headerOption, setHeader] = React.useState(true);
  const handleAbout = () => setHeader(true);
  const handlePortfolio = () => setHeader(false);

  return (
    <>
      <header className='my-10 bg-[#ca786d] rounded-xl'>
        <h1 className='text-center text-white outfit-title pt-5'>My Portfolio</h1> 
          <nav className="m-5 bg-[#d28a85] rounded-t-lg py-1">   
            <button className='mx-5 header-button' onClick={handleAbout}>About</button>    
            <button className='mx-5 header-button' onClick={handlePortfolio}>Portfolio</button>    
          </nav>
      </header>
      <body className="justify-evenly bg-[url('/images/mru.jpg')]">
      {headerOption ? (<About />) : (<Portfolio />)}
      </body>
    </>
  )
}

export default App
