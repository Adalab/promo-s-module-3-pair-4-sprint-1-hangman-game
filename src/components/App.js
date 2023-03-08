import '../styles/App.scss';
import {numberOfErrors, useState} from 'react';

function App() {

  const [numberOfErrors, setNumberOfErrors] = useState(0);

  const [lastLetter, setLastLetter] = useState('');

  const handleButton = (ev) => {
    ev.preventDefault();
    setNumberOfErrors(numberOfErrors+1);
  };
  const handleLetter = (ev) => {

    const inputLastLetter = ev.target.value;

    if (inputLastLetter.includes) {
      
    } else {
      
    }
  }




  // const handleLetter = (ev) => {
  //   ev.preventDefault();
  // const inputLastLetter = ev.target.value;

  //   if (/[a-zA-ZñÑáéíóúüÁÉÍÓÚÜ]/.test(inputLastLetter
  //   )) {
  //     setLastLetter(ev.target.value);

  //   } else {
  //     setLastLetter('');
  //   }
  // };

  return (<div className="App">{<div className="page">
  <header>
    <h1 className="header__title">Juego del ahorcado</h1>
  </header>
  <main className="main">
    <section>
      <div className="solution">
        <h2 className="title">Solución:</h2>
        <ul className="letters">
          <li className="letter">k</li>
          <li className="letter">a</li>
          <li className="letter"></li>
          <li className="letter">a</li>
          <li className="letter">k</li>
          <li className="letter">r</li>
          <li className="letter"></li>
          <li className="letter">k</li>
          <li className="letter">e</li>
          <li className="letter">r</li>
        </ul>
      </div>
      <div className="error">
        <h2 className="title">Letras falladas:</h2>
        <ul className="letters">
          <li className="letter">f</li>
          <li className="letter">q</li>
          <li className="letter">h</li>
          <li className="letter">p</li>
          <li className="letter">x</li>
        </ul>
      </div>
      <form className="form">
        <label className="title" for="last-letter">Escribe una letra:</label>
        <input onChange={handleLetter}
          autocomplete="off"
          className="form__input"
          maxlength="1"
          type="text"
          name="last-letter"
          id="last-letter"
        />
      </form>
    </section>
    
    <section className= {`dummy error-${numberOfErrors}`}>
      <span className="error-13 eye"></span>
      <span className="error-12 eye"></span>
      <span className="error-11 line"></span>
      <span className="error-10 line"></span>
      <span className="error-9 line"></span>
      <span className="error-8 line"></span>
      <span className="error-7 line"></span>
      <span className="error-6 head"></span>
      <span className="error-5 line"></span>
      <span className="error-4 line"></span>
      <span className="error-3 line"></span>
      <span className="error-2 line"></span>
      <span className="error-1 line"></span>
      <input onClick={handleButton} value= 'Incrementar'/>
    </section>
  </main>
</div>
}</div>);
}

export default App;
