import React from 'react';
import img1 from '../imgs/img1.png';
import img2 from '../imgs/img2.png';
import '../App.css';


const main = () => {
    return (
<div className="App">
<aside>
<h3>Hi my name is Ana Gondring </h3>
<img src={img1} className="App-logo" alt="Women with red hair on a computer drinking coffee with a cat at her feet" />
<p> I really like coffee, cats, and computers, I'm a Front-End UX Engineer, with a focus on Accessibility</p>
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
<img src={img2} className="passwordGen" alt="Women with red hair on a computer drinking coffee with a cat at her feet" />
<h2><b>Password Generator</b></h2> 
<p><b>Tools:</b> HTML, CSS, JavaScript</p>
<p>Random charters for a password Generator</p>
<a href="https://github.com/zednon/PasswordGen" aria="follow link to see my code"> View the Project</a> <br/>
<a href="https://zednon.github.io/PasswordGen/" aria="will take you try it your self">Test it for yourself</a>
</div>
</div>
</section>


</main>




</div>

);
};

export default main;