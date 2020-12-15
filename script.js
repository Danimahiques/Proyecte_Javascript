

class Players{
  constructor(name, height, ranking, weight, birthDate, residence, plays ){

    this.name=name;
    this.height=height;
    this.ranking=ranking;
    this.weight=weight;
    this.birthDate=birthDate;
    this.residence=residence;
    this.plays=plays;


  }
    
 comprobaciones(j1,j2){

      if (this.puntos==0 ) {
        this.puntos = 15;
      }else if(this.puntos==15){
        this.puntos =30;
      }else if(this.puntos==30){
        this.puntos = 40;
      }    
}
}
//CLASES
 class People{
  constructor(name, birthDate, age, match, bankTarget){

    this.name=name;
    this.birthDate=birthDate;
    this.age=age;
    this.match=match;
    this.bankTarget=bankTarget;

  }

 



}
//VARIABLES 
    let nombre;
    let apellido;
    let fecha;
  function registraUsuario(){
        // VALIDACIO FORMULARI
    nombre=document.getElementById("nombre").value;
    apellido=document.getElementById("apellidos").value;  
    let password=document.getElementById("password");
    let confirmPassword=document.getElementById("confirmpassword").value;  
    let correo=document.getElementById("email").value;
    fecha=document.getElementById("fecha-nacimiento").value;
    let telefono=document.getElementById("telefono").value; 
    let errores;
      console.log(errores);
      alert("dfgkdfnblkdn")
    if (nombre=='' && apellido=='') {
      errores="El campo nombre no puede estar vacio";
        alert(errores);
    }
    if (password=='') {
      errores="El campo password no puede estar vacio";
        alert(errores);
    }
    if(confirmPassword==''&& confirmPassword != password){
        errores="El campo Confirmar Password no puede estar vacio, o escribe la misma contraseña";
        alert(errores);
    }
    if (correo='') {
      errores="El campo correo no puede estar vacio";
        alert(errores);
    }
    if (fecha==''||fecha>2002) {
      errores="El campo no puede estar vacio o no puede ser menor de edad";
        alert(errores);
    }
     
    if (telefono=='') {
      errores="El campo no puede estar vacio";
        alert(errores)
    }  
    if(errores==undefined){
        inscripciones();

    }
  }

  function formularioRegistro(){
      
      document.body.innerHTML='';
      barra();
      document.body.innerHTML+=`<div class="container3">
         
           <div class="wrapper">
    <form action="index2.html" name="entrar" class="form-signin">
      <h2 class="form-signin-heading">Please Sign Up</h2>
      <input type="text" id="username" class="form-control" name="username" placeholder="Email Address" required="" autofocus="" />
      <input type="password" id="password" class="form-control" name="password" placeholder="Password" required="" />
      <input type="password" id="password" class="form-control" name="password" placeholder="Confirma Password" required="" />
      <label class="checkbox">
        <input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe"> Remember me
      </label>
      <button class="btn btn-lg btn-primary btn-block" type="submit" onclick="login()">Login</button>
      <a class="registro">Registrate Aquí</a>
    </form>
  </div>    
          
  
          
  
        </div>`;
      
      
  }


 function login(){
    
     var usuario=document.getElementById("username").value;
     
      var password=document.getElementById("password").value;
     
     if (usuario=="alumno" && password=="1234"){ 
         document.body.innerHTML='';
         barraLogout();
         document.cookie="usuario="+"alumno";
         formulario();
         
    } 
    else{ 
         alert("Por favor ingrese un nombre de usuario y contraseña correctos."); 
    } 
     
     
     
     
 }

// COOKIES

    function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function deleteAllCookies() {
    let cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}
  function cosas(){
    document.body.innerHTML =`<section class="navigation">
    <div class="nav-container">
      <div class="brand">
        <img src="img/Logo.png" alt="Logo" style="width: 80px;">
      </div>
      <nav>
        <div class="nav-mobile"><a id="nav-toggle" href="#!"><span></span></a></div>
        <ul class="nav-list">
          
           
         
          <li>
            <a href="#!">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  </section>
  <div id="home"></div>
  <div id="news"></div>
  <div id="players"></div>`;
  }


  function barra(){
    cosas();
    var container=document.querySelector(".navigation");
   //OBJECTES/ARRAYS
      var baseDeDatosusuario=[];
    
    let divNavegador=document.createElement("div");
    divNavegador.className="nav-container";
    container.appendChild(divNavegador); 
    
    
    let divLogo=document.createElement("div");
    divLogo.className="brand";
    container.appendChild(divLogo); 
    divNavegador.appendChild(divLogo);

    let logo=document.createElement("a");
    container.appendChild(logo);
    divLogo.appendChild(logo);

    let navegar=document.createElement("nav");
    container.appendChild(navegar);
    
      let divNav=document.createElement("div");
      container.appendChild(divNav);
      navegar.appendChild(divNav);

    var listaMenu= document.createElement("ul");
   listaMenu.className="nav-list";
   container.appendChild(listaMenu);
   navegar.appendChild(listaMenu); 
   
   var li_prim=document.createElement("li");
   container.appendChild(li_prim);
   listaMenu.appendChild(li_prim);
   
   var li1=document.createElement("a");
   li1.id="li1";
   container.appendChild(li1);
   listaMenu.appendChild(li1);
   li_prim.appendChild(li1);
   li1.textContent="Home";
   li1.setAttribute("onclick","home()");
      
   
      
   var li_tercer=document.createElement("li");
   container.appendChild(li_tercer);
   listaMenu.appendChild(li_tercer);

   var li2=document.createElement("a");
   li2.className="li2";
   container.appendChild(li2);
   listaMenu.appendChild(li2);
   li_tercer.appendChild(li2);
   li2.textContent="Players";
   li2.setAttribute("onclick","GenerarPlayers()");


// SELECTORES / MODIFICAR NODES
   
    var li_tercera=document.createElement("li");
    container.appendChild(li_tercera);
    listaMenu.appendChild(li_tercera);

   var li3=document.createElement("a");
   li3.className="li3";
   container.appendChild(li3);
   listaMenu.appendChild(li3);
   navegar.appendChild(li3);
   li_tercera.appendChild(li3);
   li3.textContent="Partidos";
    li3.setAttribute("onclick","partido()");  



  }
    // FUNCIONS AUTOINVOCADES
    (function () {
      "use strict";
        //REGISTRE DE EVENTS
      document.addEventListener("DOMContentLoaded", function crearHTML(){
    
        barra();
        mostraDatos();
          
});
 })();
        function news(){
         
         document.body.innerHTML='';
         barra();
         let news=document.getElementById("news").innerHTML+=`    <div class="container">

                   
          <div class="parr1">
              <img src="img/rafanadal.jpg" alt="Rafa Nadal">
              <h1><a href="https://www.marca.com/tenis/copa-masters/2020/11/12/5fad491422601dfb498b4659.html">Rafa Nadal, el séptimo tenista en el ranking de ganancias en el Masters: 3.630.770 euros</a></h1>
  
          </div>
  
              
          <div class="parr2">
              <img src="img/daniil-medvedev-mi-proximo-objetivo-esta-puesto-en-el-torneo-de-maestros.jpg" alt="Danil Medvedev">
              <h1><a href="https://www.marca.com/tenis/masters-1000-paris/2020/11/08/5fa809ad268e3e397f8b45a3.html">París tiene nuevo campeón: Medvedev acaba con la racha de Zverev </a></h1>
  
          </div>

  
      </div>`;
        
        }
        function home(){
         
          document.body.innerHTML='';
          barra();
            // TEMPLATE LITERALS
          let news=document.getElementById("home").innerHTML+=` 
          <div class="container2">
         
           <div class="wrapper">
    <form action="index2.html" name="entrar" class="form-signin">
      <h2 class="form-signin-heading">Please login</h2>
      <input type="text" id="username" class="form-control" name="username" placeholder="Email Address" required="" autofocus="" />
      <input type="password" id="password" class="form-control" name="password" placeholder="Password" required="" />
      <label class="checkbox">
        <input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe"> Remember me
      </label>
      <button class="btn btn-lg btn-primary btn-block" type="submit" onclick="login()">Login</button>
      <a class="registro">Registrate Aquí</a>
    </form>
  </div>    
          
  
          
  
        </div>
  
      `;
         
        let variable=document.querySelector(".registro");
        variable.addEventListener("click",formularioRegistro);    
        
        }


        function formulario(){
            
            document.body.innerHTML+=` <header>


    <div class="header-peq">
      <div class="container-headerpeq">
        <img src="img/logo_ico.png" alt="Logo" title="Portfolio Sarah" class="header_logo" />
        <h1>Bienvenido futura leyenda</h1><br /><br />
        <p class="subtitulo-header">Aqui tienes un formulario de inscripcion al torneo 2021/2022<p>
            <div class="redesdos">
              <a id="facebookdos" href="#" title="Facebook"><span></span></a>
              <a id="emaildos" href="#" title="E-mail"><span></span></a>
              <a id="googledos" href="#" title="Google+"><span></span></a>
              <a id="twitterdos" href="#" title="Twitter"><span></span></a>
              <a id="linkedindos" href="#" title="LinkedIn"><span></span></a>
            </div>
      </div>
    </div>
    <!--cierre del div que contiene el header-->
  </header>
  <section>
    <div class="main-contenedor">
      <div class="formulario">
        <h2 class="titulo-formulario"> Inscripcion al Torneo </h2>
        <form id="contacto-form">
          <input type="hidden" name="redirect" value="http://www.opera.com" />
          <fieldset class="datos-personales">
            <legend class="titulos">Datos personales:</legend>
            <hr class="linea" />
            <ul class="datos">
              <li>
                <label for="nombre">Nombre:</label>
                <input type="text" name="nombre" size="60" placeholder="escribe tu nombre" id="nombre" value="" required="required" /><span class="note"></span>
              </li>
              <li>
                <label for="apellidos">Apellidos:</label>
                <input type="text" name="apellidos" size="60" placeholder="escribe tus apellidos" id="apellidos" value="" required="required" /><span class="note"></span>
              </li>

                <li>
                <label for="password">Contraseña:</label>
                <input type="password" name="password" size="60" placeholder="escribe tu contraseña" id="password" value="" required="required" /><span class="note"></span>
              </li>

                 <li>
                <label for="confirmpassword">Confirmar Contraseña:</label>
                <input type="password" name="password" size="60" placeholder="escribe tu contraseña" id="confirmpassword" value="" required="required" /><span class="note"></span>
              </li>


              <li>
                <label for="email">Email:</label>
                <input type="text" name="email" size="60" placeholder="escribe tu email" id="email" value="" required="required" /><span class="note"></span>
              </li>
              <li>
                <label for="telefono">Teléfono:</label>
                <input type="text" name="telefono" size="60" placeholder="escribe tu telefono" id="telefono" value="" required="required" /><span class="note"></span>
              </li>
              <li>
                <label for="fecha-nacimiento">Fecha de nacimiento:</label>
                <input type="text" name="fecha-nacimiento" size="30" placeholder="dd/mm/aaaa" id="fecha-nacimiento" value="" required="required" /><span class="note"></span>
              </li>
            </ul>
          </fieldset><br>
     
            <hr />
        
          
          <fieldset>
            <input type="submit" value="Enviar" class="boton-enviar" id="enviar">
            <br>
            <input type="reset" name="reset" value="Borrar datos" class="boton-reset">
          </fieldset>
        </form>
      </div>
    </div>
    <!--cierre del div que contiene el formulario-->
  </section>`;
 
            let botonEnviar=document.querySelector("#enviar");
            botonEnviar.addEventListener("click",()=>{ //FUNCION FLECHA 
                registraUsuario(); 
            })
            
    }
        //FUNCION / DECLARACION DE FUNCION
          function GenerarPlayers(){
          document.body.innerHTML='';
          barra();
              //ITERABLE
          for (let i = 0; i < datosPlayers.length; i++) {
            let divImagenes=document.createElement("div");
            divImagenes.innerHTML+=` <div class="card-group">
            <div class="card">
              <div class="card-body">
               <img id="imagen_jugadores" src="`+datosPlayers[i].image+`"
               
                <ul class="list-group list-group-vertical">
                <li class="list-group-item">Name: `+datosPlayers[i].name+`</li>
                  <li class="list-group-item">Country: `+datosPlayers[i].country+`</li>
                  <li class="list-group-item">Age: `+datosPlayers[i].age+`</li>
                  <li class="list-group-item">Ranking: `+datosPlayers[i].ranking+`</li>
                  <li class="list-group-item">Titles: `+datosPlayers[i].titles+`</li>
                  <li class="list-group-item">Weight: `+datosPlayers[i].weight+`</li>
                  <li class="list-group-item">Height: `+datosPlayers[i].height+`</li>
                </ul>
              </div>
            </div>`;
            document.body.appendChild(divImagenes);
          }
        }

        async function  datos(){
            //PROMESAS / FETCH
          let array={}
          await fetch('players.json')
          .then(response => response.json())
          .then(dato=>array=dato)
         //FUNCION FLECHA 
          return array;
        }
     
        let datosPlayers;
        async function mostraDatos(){
      
          let arrays=await datos();
      
          let players=arrays.players;
          datosPlayers=players;
          matchmaking(players);
        
        }
        
        function barraNavegacion(){

          let barraNavegar=`<p>Esta es la barra de navegacion</p>`
        document.body.appendChild(barraNavegar);



        }

        function barraLogout(){
            cosas()
            barra()
            let inscripciones=document.querySelector(".nav-list");
            let liInscripcion=document.createElement("li");
            liInscripcion.innerHTML=`<a id="li8" onclick="inscripciones()" >Inscripciones</a>`;
            
            inscripciones.appendChild(liInscripcion);
           let navegar=document.querySelector(".nav-list");
            let nuevoli=document.createElement("li");
            nuevoli.innerHTML=`<a id="li7" onclick="logout()">Logout</a>`;
            
            navegar.appendChild(nuevoli);
            
            }

        function logout(){
            deleteAllCookies();
            home();
            
        }
        //EXPRESION DE FUNCION
          function matchmaking(jugadors){

          let emparejamientos=[];
          let usados=[];
          let contador=0;
          let repetido=function(numero){

            for (let index = 0; index < usados.length; index++) {
              if (usados[index]==numero) {
                return true;
              }
            }
            return false;
          }

          while (contador<jugadors.length) {
            let num=Math.floor(Math.random()*jugadors.length); //OBJECTES PREDEFINITS
              if (!repetido(num)) {
              emparejamientos[contador]=jugadors[num];
              usados[contador]=num;
              contador++;
              }
          }
            console.log(emparejamientos);
            return emparejamientos;



        }

         let MuestraPartidos;
         function partido(){
        document.body.innerHTML='';
          barraLogout();         
          document.body.innerHTML+=`
                <div class="containerTabla">
                    <table id="tablaPartido">
                        <tr>
                            <th colspan="2">Puntos</th>
                            
                        </tr>

                        <tr class="filaNueva">
                            <td>JUGADOR 1</td>
                            <td>JUGADOR 2</td>
                        </tr>
                    
                    </table>
                </div>
                `;
             document.body.innerHTML+=`   <div class="containerTablaSets">
                    <table id="tablaSets">
                        <tr>
                            <th colspan="2">Sets</th>
                            
                        </tr>

                        <tr class="filaNueva">
                            <td>JUGADOR 1</td>
                            <td>JUGADOR 2</td>
                        </tr>
                    
                    </table>
                </div>`;
             
                   document.body.innerHTML+=`   <div class="containerTablaVictoria">
                    <table id="tablaVictoria">
                        <tr>
                            <th colspan="2">Jugador Ganador</th>
                            
                        </tr>

                        <tr class="filaNueva">
                            <td>JUGADOR 1</td>
                            <td>JUGADOR 2</td>
                        </tr>
                    
                    </table>
                </div>`
          let Jugador1=new Players();
          let Jugador2= new Players();
          Jugador1.puntos = 0;
          Jugador2.puntos = 0;
          Jugador1.sets = 0;
          Jugador2.sets = 0;
          Jugador1.victoria = 0;
          Jugador2.victoria = 0;

          /*PUNTOS*/
             let puntosTotal;
          let puntos = function(){
              while(Jugador1.puntos < 40 &&  Jugador2.puntos < 40){
                  if (Math.random()<0.5) {
                    //Jugador1.comprobaciones();
                    Jugador1.comprobaciones(Jugador1,Jugador2);
                  }else{
                    //Jugador2.comprobaciones();
                    Jugador2.comprobaciones(Jugador1,Jugador2);
                  }
              //    console.log("*********************");
                  let trPuntos=document.querySelector("#tablaPartido");
                  trPuntos.innerHTML+=`<tr class="filaNueva">
                            <td>`+Jugador1.puntos+`</td>
                            <td>`+Jugador2.puntos+`</td>
                        </tr>`;
                //  console.log(Jugador1.puntos,Jugador2.puntos);
                //  console.log("*********************");
                  puntosTotal=puntos;
              }

              //console.log("Resultado Juego: " +Jugador1.puntos,Jugador2.puntos);

              if(Jugador1.puntos == 40){
                Jugador1.sets += 1;
              }else{
                Jugador2.sets += 1;
              }

              Jugador1.puntos = 0;
              Jugador2.puntos = 0;
          }
          /*PUNTOS*/

          /*SETS*/
          let setsTotal;
          let sets =function(){
            while(Jugador1.sets < 6 && Jugador2.sets < 6){
              puntos();
            }
            
            //console.log("----------------------------");
              let tablaDeSets=document.querySelector("#tablaSets");
              tablaDeSets.innerHTML+=`
                        <tr class="filaNueva">
                            <td>`+Jugador1.sets+`</td>
                            <td>`+Jugador2.sets+`</td>
                        </tr
                        
                    `;
            //console.log("Resultado Set:"+Jugador1.sets,Jugador2.sets);

            if(Jugador1.sets == 6){
              Jugador1.victoria += 1;
            }else{
              Jugador2.victoria += 1;
            }

            Jugador1.sets = 0;
            Jugador2.sets = 0;
              
              setsTotal=sets;
          }
          /*SETS*/

          while(Jugador1.victoria < 3 && Jugador2.victoria < 3){
            sets();
          }
          //console.log("------------------------****")
         // console.log(Jugador1.victoria,Jugador2.victoria);
             
          if(Jugador1.victoria == 3){
            alert("Jugador 1 ha gando");
          }

          if(Jugador2.victoria == 3){
            alert("Jugador 2 ha gando");
          }
         
             let tablaVictoriaVariable=document.querySelector("#tablaVictoria");
             tablaVictoriaVariable.innerHTML+=` <tr class="filaNueva">
                            <td>`+Jugador1.victoria+`</td>
                            <td>`+Jugador2.victoria+`</td>
                        </tr`;
     }
             
   

        function inscripciones(){
           document.body.innerHTML='';
            barraLogout();
            document.body.innerHTML+=`
                <div class="containerTabla">
        <h1 style="text-align:center">Inscripciones del Usuario</h1>
        <table style="text-align:center">
            <tr>
                
                <th>Nombre</th>
                <th>Apellidos</th>
                <th>Fecha</th>
                
                
            </tr>
            
            <tr>
                <td>`+nombre+`</td>
                <td>`+apellido+`</td>
                <td>`+fecha+`</td>
                
            </tr>
            
        </table>
        
    </div>

                `;
            
     }