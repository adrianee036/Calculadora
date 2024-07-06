var operandoa;
var operandob;
var operacion;
var res = 0;
var lstHistorial = [];

function init(){
    var resultado = document.getElementById('resultado');
    var reset = document.getElementById('reset');
    var suma = document.getElementById('suma');
    var resta = document.getElementById('resta');
    var multiplicacion = document.getElementById('multiplicacion');
    var division = document.getElementById('division');
    var igual = document.getElementById('igual');
    var uno = document.getElementById('uno');
    var dos = document.getElementById('dos');
    var tres = document.getElementById('tres');
    var cuatro = document.getElementById('cuatro');
    var cinco = document.getElementById('cinco');
    var seis = document.getElementById('seis');
    var siete = document.getElementById('siete');
    var ocho = document.getElementById('ocho');
    var nueve = document.getElementById('nueve');
    var cero = document.getElementById('cero');
  }

uno.onclick = function(e){
    while(parseFloat(resultado.textContent) == res){
        limpiar();
    }
    resultado.textContent = resultado.textContent  + "1";
}
dos.onclick = function(e){
    while(parseFloat(resultado.textContent) == res){
        limpiar();
    }
    resultado.textContent = resultado.textContent  + "2";
}
tres.onclick = function(e){
    while(parseFloat(resultado.textContent) == res){
        limpiar();
    }
    resultado.textContent = resultado.textContent  + "3";
}
cuatro.onclick = function(e){
    while(parseFloat(resultado.textContent) == res){
        limpiar();
    }
    resultado.textContent = resultado.textContent  + "4";
}
cinco.onclick = function(e){
    while(parseFloat(resultado.textContent) == res){
        limpiar();
    }
    resultado.textContent = resultado.textContent  + "5";
}
seis.onclick = function(e){
    while(parseFloat(resultado.textContent) == res){
        limpiar();
    }
    resultado.textContent = resultado.textContent  + "6";
}
siete.onclick = function(e){
    while(parseFloat(resultado.textContent) == res){
        limpiar();
    }
    resultado.textContent = resultado.textContent  + "7";
}
ocho.onclick = function(e){
    while(parseFloat(resultado.textContent) == res){
        limpiar();
    }
    resultado.textContent = resultado.textContent  + "8";
}
nueve.onclick = function(e){
    while(parseFloat(resultado.textContent) == res){
        limpiar();
    }
    resultado.textContent = resultado.textContent  + "9";
}
cero.onclick = function(e){
    while(parseFloat(resultado.textContent) == res){
        limpiar();
    }
    resultado.textContent = resultado.textContent  + "0";
}
reset.onclick = function(e){
    resetear();
}
suma.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "+";
    limpiar();
}
resta.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "-";
    limpiar();
}
multiplicacion.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "x";
    limpiar();
}
division.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "÷";
    limpiar();
}
igual.onclick = function(e){
    operandob = resultado.textContent;
    resolver();
}

function limpiar(){
    resultado.textContent = "";
  }
  function resetear(){
    resultado.textContent = "";
    operandoa = 0;
    operandob = 0;
    operacion = "";
  }

function resolver(){       
        switch(operacion){
        case "+":
            res = parseFloat(operandoa) + parseFloat(operandob);
            break;
        case "-":
            res = parseFloat(operandoa) - parseFloat(operandob);
            break;
        case "x":
            res = parseFloat(operandoa) * parseFloat(operandob);
            break;
        case "÷":
            res = parseFloat(operandoa) / parseFloat(operandob);
            break;
        }
        resultado.textContent = res;
        lstHistorial.push({num1:operandoa, num2:operandob, op:operacion, resultado:resultado.textContent});
        lstHistorial.forEach(element => {
            let elements = document.getElementById("historial");
            let p = document.createElement("p");
            p.innerHTML = element.num1 + " " + element.op + " " + element.num2 + " = " + element.resultado;
            elements.appendChild(p);
        });
        lstHistorial = [];
        
  }