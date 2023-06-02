
import './App.css';
import Meal from './componentes/Meal';
import Nav from './componentes/Nav';
import BotonWhatsapp from './componentes/BotonWhatsapp';




function App() {
  return (
<div className='App'>
<Nav/>
<Meal/>
<BotonWhatsapp/>

</div>




  );
}
let x = 4;
    let y = new Number(4);
    let z = 4;

    console.log(x == y);
    console.log(x === y);
    console.log(y === z);
    console.log("♥" === "♥");

export default App;
