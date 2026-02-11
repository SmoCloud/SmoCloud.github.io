import portrait from '/assets/Outstanding.jpeg';
import './App.css';

function App() {

  return (
    <>
      <h1>Hello, World <br />Welcome to my Portfolio!</h1>
      <div>
        <a href="https://github.com/SmoCloud?tab=repositories" target="_blank">
          <img src={portrait} className="logo" alt="Portrait of Mikel Cox" />
        </a>
        <h3>Mikel Cox<br />Aspiring Software Developer</h3>
      </div>
      <div className="card">
          <p>
            My name is Mikel Cox, and I am an aspiring software developer with a passion for creating innovative solutions. 
            I have a strong foundation in programming languages such as C, C++, JavaScript, Python, Go, and Java.
            I am constantly seeking opportunities to expand my skill set. 
            I am eager to contribute my creativity and problem-solving abilities to a dynamic team, 
            where I can continue to grow and make a meaningful impact in the world of technology.
          </p>
      </div>
      <p className="read-the-docs">
        Click on my portrait to view my GitHub repositories
      </p>
    </>
  )
};

export default App;
