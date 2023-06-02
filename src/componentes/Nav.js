import React from 'react';
const Nav=()=>{
      return(
      <div>
      <header id="header">
          <div className="container__header">
              <div className="logo">
                <img src={require('../imagenes/cocinero2.png')}/>

                <h3>Crespo Cocina</h3>
              </div>
              <div className="container__nav">
                  <nav id="nav">
                      <ul>
                          <li><a href="#" className="select">HOME</a></li>
                          <li><a href="#">ABOUT US</a></li>
                          <li><a href="#">HOW IT WORK</a></li>
                          <li><a href="#">CONTACT US</a></li>
                      </ul>
                  </nav>
                  <div className="btn__menu" id="btn_menu"><i className="fas fa-bars"></i></div>
              </div>
          </div>
      </header>

      <div className="container_all" id="container__all">
          <div className="cover">


                  <div className="bg_color"></div>
                  <div className="wave w1"></div>
                  <div className="wave w2"></div>


              <div className="container__cover">
                  <div className="container__info">

                      <h2>COCINALO</h2>
                      <p>Haz de la cocina una aventura con nuestras recetas deliciosas y faciles de preparar, comparte tus propias creaciones culinarias y haz que la hora de la cena sea una exxperiencia emocionante y memorable</p>
                      <input type="button" value="Quiero unirme"></input>
                  </div>
                  <div className="container__vector">


                  <img src={require('../imagenes/cocineros.png')}/>
                  </div>
              </div>
          </div>
            <script src="js/script.js"></script>
          </div>

      </div>



      )
}
export default Nav;
