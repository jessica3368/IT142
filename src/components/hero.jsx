
import '../style/hero.css';
import reactLogo from "../assets/conan.png";

function App() {
  return (
    <div className="main-container">
      <div className='container'>
        <img src={reactLogo} alt="Profile" className='profile-image' />
        <div className='text'>
            <h2>Hello, <span>I am</span> <span className="highlight">Jessica!</span></h2>
            <p>Every challenge is a chance to grow, and I choose to face them with curiosity and heart.</p>
            <a href="#" className="cta-button highlight-text">Hire me!</a>
        </div>
      </div>
    </div>
  );
}

export default App;
