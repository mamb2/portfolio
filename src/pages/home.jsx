import './pages.css'
import Navbar from '../components/navMenu'
import logo from '../img/logo.png'



function Home() {

  return (
    <>    
      <div className='backgroundStyle'>
        
              <Navbar background = 'green'>

              </Navbar>
              <div className='logoContainer'>
                <img src= {logo} className='logo'/>
              </div>
        
      </div>
     </>
  )
}

export default Home