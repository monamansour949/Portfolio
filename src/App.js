import './App.css';
import Header from './components/header/header';
import "bootstrap/dist/css/bootstrap.min.css";
import About from './components/about/about';
import Skills from './components/skills/skills';
import Portfolio from './components/portfolio/portfolio';
import Footer from './components/footer/footer';
import RegisterForm from './components/register';

function App() {
  return (
   <>
   
        <Header/>
        <About/>
        <Skills/>
        <Portfolio/>
        <div className='my-5'>
       <RegisterForm/>
       </div>
        <Footer/>
        
        
    </>    
   
  );
}

export default App;
