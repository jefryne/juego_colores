let cuadrado_1=document.getElementById("cuadrado_1");
let cuadrado_2=document.getElementById("cuadrado_2");
let cuadrado_3=document.getElementById("cuadrado_3");
let cuadrado_4=document.getElementById("cuadrado_4");
let tabla=document.getElementById("tabla");
let secuencia=document.getElementById("secuencia");
let numeroAleatorio=0;
let cantidadVueltas=1;
let proceso=0;
let tiempo=500;
let salidaAlerta=0;
let vecesApretadas=0;
let arrayNumerosRandom=[];
let arrayNumerosElegidos=[];
let alert=` <div id="alerta" class="alert alert-danger text-center" role="alert">
                Debes esperar que haga la secuencia!
            </div>`;

juego();

function juego(){
    tiempo=500;
    secuencia.innerText="Secuencia: "+proceso+"\n Veces apretadas: "+vecesApretadas;
    setTimeout(function(){
        for(let i=0; i<cantidadVueltas; i++){
    
            numeroAleatorio =  Math.trunc(Math.random()*4+1);
            arrayNumerosRandom.push(numeroAleatorio);
            console.log(arrayNumerosRandom);
    
            switch(numeroAleatorio){
                case 1: 
                        setTimeout(function(){
                            cuadrado_1.className = "blanco tabla";
                        }, tiempo);
                        tiempo+=500;
                        setTimeout(function(){
                            cuadrado_1.className = "tabla cuadrado_1";
                            proceso++;
                            console.log(cantidadVueltas+""+""+proceso);
                            secuencia.innerText="Secuencia: "+proceso+"\n Veces apretadas: "+vecesApretadas;
                        }, tiempo);
                        tiempo+=500;
                    break;
                case 2: 
          
                        setTimeout(function(){
                            cuadrado_2.className = "blanco tabla";
                        }, tiempo);
                        tiempo+=500;
                        setTimeout(function(){
                            cuadrado_2.className = "tabla cuadrado_2";
                            proceso++;
                            console.log(cantidadVueltas+""+""+proceso);
                            secuencia.innerText="Secuencia: "+proceso+"\n Veces apretadas: "+vecesApretadas;
                        }, tiempo);
                        tiempo+=500;
                    break;
                case 3:
            
                        setTimeout(function(){
                            cuadrado_3.className = "blanco tabla";
                        }, tiempo);
                        tiempo+=500;
                        setTimeout(function(){
                            cuadrado_3.className = "tabla cuadrado_3";
                            proceso++;
                            console.log(cantidadVueltas+""+""+proceso);
                            secuencia.innerText="Secuencia: "+proceso+"\n Veces apretadas: "+vecesApretadas;
                        }, tiempo);
                        tiempo+=500;
                    break;
                case 4: 
         
                        setTimeout(function(){
                            cuadrado_4.className = "blanco tabla";
                        }, tiempo);
                        tiempo+=500;
                        setTimeout(function(){
                            cuadrado_4.className = "tabla cuadrado_4";
                            proceso++;
                            console.log(cantidadVueltas+""+""+proceso);
                            secuencia.innerText="Secuencia: "+proceso+"\n Veces apretadas: "+vecesApretadas;
                        }, tiempo);
                        tiempo+=500;
                    break;
            }
        }
    }, 500);   
}


cuadrado_1.addEventListener('click', function color(){
    if(proceso==cantidadVueltas){
        arrayNumerosElegidos.push(1);
        vecesApretadas++;
        secuencia.innerText="Secuencia: "+proceso+"\n Veces apretadas: "+vecesApretadas;
        if(arrayNumerosRandom.length==arrayNumerosElegidos.length){
            for(let j=0; j<arrayNumerosRandom.length; j++){
                if(arrayNumerosRandom[j]!=arrayNumerosElegidos[j]){
                    // alert("perdio");
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Perdiste!',
                        width: '60%',
                        padding: '6em',
                        allowOutsideClick: false,
                        allowEscapeKey: false,
                        showConfirmButton: false,
                        timer: 2000
                    })
                    setTimeout(function(){
                        window.location.reload();
                    }, 2000);  
                }
            }
            cantidadVueltas++;
            proceso=0;
            vecesApretadas=0;
            setTimeout(function(){
                juego();
            }, 500);
        }
        console.log(arrayNumerosElegidos);
        cuadrado_1.className = "tabla blanco"
        setTimeout(function(){
            cuadrado_1.className = "tabla cuadrado_1";
        }, 500);
    }else{
        if(salidaAlerta<1){
            salidaAlerta++;
            tabla.insertAdjacentHTML("beforebegin", alert);
            setTimeout(function(){
               document.getElementById("alerta").outerHTML = "";
               salidaAlerta=0;
            }, 1000);
        }  
    }
});


cuadrado_2.addEventListener('click', function color(){
    if(proceso==cantidadVueltas){
        arrayNumerosElegidos.push(2);
        vecesApretadas++;
        secuencia.innerText="Secuencia: "+proceso+"\n Veces apretadas: "+vecesApretadas;
        if(arrayNumerosRandom.length==arrayNumerosElegidos.length){
            for(let j=0; j<arrayNumerosRandom.length; j++){
                if(arrayNumerosRandom[j]!=arrayNumerosElegidos[j]){
                    // alert("perdio");
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Perdiste!',
                        width: '60%',
                        padding: '6em',
                        allowOutsideClick: false,
                        allowEscapeKey: false,
                        showConfirmButton: false,
                        timer: 2000
                    })
                    setTimeout(function(){
                        window.location.reload();
                    }, 2000);  
                }
            }
            cantidadVueltas++;
            proceso=0;
            vecesApretadas=0;
            setTimeout(function(){
                juego();
            }, 500);
            
        }
        console.log(arrayNumerosElegidos);
        cuadrado_2.className = "tabla blanco"
        setTimeout(function(){
            cuadrado_2.className = "tabla cuadrado_2";
        }, 500);
    }else{
        if(salidaAlerta<1){
            salidaAlerta++;
            tabla.insertAdjacentHTML("beforebegin", alert);
            setTimeout(function(){
               document.getElementById("alerta").outerHTML = "";
               salidaAlerta=0;
            }, 1000);
        }
        
    }
});

cuadrado_3.addEventListener('click', function color(){
    if(proceso==cantidadVueltas){
        arrayNumerosElegidos.push(3);
        vecesApretadas++;
        secuencia.innerText="Secuencia: "+proceso+"\n Veces apretadas: "+vecesApretadas;
        if(arrayNumerosRandom.length==arrayNumerosElegidos.length){
            for(let j=0; j<arrayNumerosRandom.length; j++){
                if(arrayNumerosRandom[j]!=arrayNumerosElegidos[j]){
                    // alert("perdio");
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Perdiste!',
                        width: '60%',
                        padding: '6em',
                        allowOutsideClick: false,
                        allowEscapeKey: false,
                        showConfirmButton: false,
                        timer: 2000
                    })
                    setTimeout(function(){
                        window.location.reload();
                    }, 2000);
                        
                }
            }
            cantidadVueltas++;
            proceso=0;
            vecesApretadas=0;
            setTimeout(function(){
                juego();
            }, 500);
        }
        console.log(arrayNumerosElegidos);
        cuadrado_3.className = "tabla blanco"
        setTimeout(function(){
            cuadrado_3.className = "tabla cuadrado_3";
        }, 500);
    }else{
        if(salidaAlerta<1){
            salidaAlerta++;
            tabla.insertAdjacentHTML("beforebegin", alert);
            setTimeout(function(){
               document.getElementById("alerta").outerHTML = "";
               salidaAlerta=0;
            }, 1000);
        }
        
    }   
});

cuadrado_4.addEventListener('click', function color(){
    if(proceso==cantidadVueltas){
        arrayNumerosElegidos.push(4);
        vecesApretadas++;
        secuencia.innerText="Secuencia: "+proceso+"\n Veces apretadas: "+vecesApretadas;
        if(arrayNumerosRandom.length==arrayNumerosElegidos.length){
            for(let j=0; j<arrayNumerosRandom.length; j++){
                if(arrayNumerosRandom[j]!=arrayNumerosElegidos[j]){
                    // alert("perdio");
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Perdiste!',
                        width: '60%',
                        padding: '6em',
                        allowOutsideClick: false,
                        allowEscapeKey: false,
                        showConfirmButton: false,
                        timer: 2000
                    })
                    setTimeout(function(){
                        window.location.reload();
                    }, 2000);  
                }
            }
            cantidadVueltas++;
            proceso=0;
            vecesApretadas=0;
            setTimeout(function(){
                juego();
            }, 500);
    
        }
        console.log(arrayNumerosElegidos);
        cuadrado_4.className = "tabla blanco"
        setTimeout(function(){
            cuadrado_4.className = "tabla cuadrado_4";
        }, 500);
    }else{
        if(salidaAlerta<1){
            salidaAlerta++;
            tabla.insertAdjacentHTML("beforebegin", alert);
            setTimeout(function(){
               document.getElementById("alerta").outerHTML = "";
               salidaAlerta=0;
            }, 1000);
        }
        
    }
});






 






