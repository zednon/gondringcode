import img1 from './imgs/img1.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <aside>
<h3>Hi my name is Ana Gondring </h3>
<img src={img1} className="App-logo" alt="Women with red hair on a computer drinking coffee with a cat at her feet" />
<p> I really like coffee, cats, and computers, I'm a Front-End UX Engineer</p>
<p><strong>Skills</strong>  </p>
<p>Languages</p>
<p>Semantic HTML, CSS, JavaScript</p>
<hr></hr>
<p>Tech</p>
<p>React, Vue, ARIA</p>
<hr></hr>
<p>UX</p>
<p>Accessiblity first design, Mock-ups, Prototyping, User Interviews, Style Guilds</p>
<hr></hr>
<p>Tools</p>
<p>Figma, NVDA, Adobe XD, Github</p>
</aside>
      <header className="App-header">
      
        <h1>
          Welcome to my code portfolio
        </h1>
      </header>
<main>
<section><div className="card">
 <div className="container">
    <h2><b>Password Generator</b></h2> 
    <button> View the Project</button>
  </div>
  </div>
</section>


</main>




    </div>
  );
}

export default App;
