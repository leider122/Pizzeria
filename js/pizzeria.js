function crear(precio){
	var numero=document.getElementById("entrada").value;
      var inhabilitar1=" ";
      
      var cont="";
    
      if(numero<=0){
        cont="<div class='col' id='error' onload='mostrarIndex2()'><label class='text-center mt-4 mb-4 ml-4'>" +
        "El numero digitado no es valido</label></div>";
        }
        else{
          for(var i=1;i<=numero;i++){
          cont+="<div class='row' id='contenido'><label class='mt-4 mb-4 ml-4'>" +
     "Tamaño Pizza "+ i+":</label>"+
     "<form>"+
    "<div class='form-row align-items-center mt-3 ml-4'>"+
    "<div class='col-auto my-1'>"+
        "<label class='mr-sm-2 sr-only' for='inlineFormCustomSelect'>Preference</label>"+
        "<select class='custom-select mr-sm-2' id='tm"+i+"' id='inlineFormCustomSelect'>"+leerTamanio(precio)+"</select></div></div></form></div><br>";
      
        }cont+="<div class='row' id='opcion'><input type='button'  onclick='opciones("+numero+")' value='cargar opciones'/></div>";

     
   }
   inhabilitar1+="<label class='mt-4 mb-4 ml-4'> Digite cantidad de Pizzas:</label>"+ 
      "<input class='mt-4 mb-4 ml-4' readonly='readonly' type='number' id='entrada' value='"+numero+"' />"+
      "<input class='mt-4 mb-4 ml-4' type='button' onclick='location.reload()' value='Cargar de nuevo'/>"+
      "<input class='mt-4 mb-4 ml-4 btn btn-success disabled' type='button'  value='Crear'/>";
      document.getElementById("inhabilitar").innerHTML=inhabilitar1;
      document.getElementById("pizzas").innerHTML=cont;
}



function opciones(numero){
	
  var url='./html/opciones.html?value='+numero+'';
    url+=leerForIndex(numero);
  
  location.href=url;
}


async function leerJSON(url) {

  try {
    let response = await fetch(url);
    let user = await response.json();
    return user;
  } catch(err) {
    
    alert(err);
  }
}


function mostrarIndex()
{
var url="https://raw.githubusercontent.com/madarme/persistencia/main/pizza.json";



leerJSON(url).then(datos=>{




document.getElementById("name").innerHTML=name(datos.nombrePizzeria);


})

}

function mostrarIndex2()
{
var url="https://raw.githubusercontent.com/madarme/persistencia/main/pizza.json";

var msg="";

leerJSON(url).then(datos=>{


crear(datos.pizzas[0].precio);

})

}




function mostrarOpciones()
{
var url="https://raw.githubusercontent.com/madarme/persistencia/main/pizza.json";
const urlParams = new URLSearchParams(window.location.search);
  var value = urlParams.get('value');

var msg="";


leerJSON(url).then(datos=>{

document.getElementById("name").innerHTML=name(datos.nombrePizzeria);


//var p=leerPizzas(datos.pizzas,i,"p");
//var adicional=leerAdicional(datos.adicional)
msg+=opcionesPizza(value,datos);    
document.getElementById("pig").innerHTML=msg;

})

}

function name(name){
  let msg="<h2 class='text-white mt-2'>"+name+"</h2>";
  return msg;
}

function opcionesPizza(numero,datos){
  var id="";
  var id2="";
var z="";
  var sabores=leerPizzas(datos.pizzas);
  let cont="";
  for(var i=1;i<=numero;i++){
          cont+="<br><br><div class='row-md-12' id='contenido'>"+
          "<div class='row'><div class='col-md-6'><label class='mt-4 mb-4 ml-4'>"+
     "Escoja sabores para pizza "+ i+"(puede escoger uno o dos):</label></div>"+
     "<div class='col-md-2'><form>"+
    "<div class='form-row align-items-center mt-3'>"+
    "<div class='col-auto my-1'>"+
        "<label class='mr-sm-2 sr-only' for='inlineFormCustomSelect'></label>";
        id="myselect"+i;
        z+="p";
        cont+="<select class='custom-select mr-sm-2' id='myselect"+i+"'  type='select' id='inlineFormCustomSelect' onclick='actualizar("+id+","+i+","+0+")'>";
        cont+=sabores+"</select></div></div></form></div>";
        //id="myselect2"+i;
      cont+="<div class='col-md-2'><form>"+
    "<div class='form-row align-items-center mt-3'>"+
    "<div class='col-auto my-1'>"+
        "<label class='mr-sm-2 sr-only' for='inlineFormCustomSelect'></label>";
        id2="myselect2"+i;
        z="s";
        cont+="<select class='custom-select mr-sm-2' id='myselect2"+i+"' type='select' id='inlineFormCustomSelect' onclick='actualizar("+id2+","+i+","+1+")'>"+
        "<option value='ninguno'>Ninguno</option>";
        cont+=sabores+"</select></div></div></form></div></div>";
        cont+="<div class='row'><div class='col-md-6'>"+
       "<div class='row ml-2' value='h' id='saborac1"+i+"'> Ingredientes adicionales (Pizza Napolitana)</div>"+
        "<br><div>"+leerAdicional(datos.adicional,i,0,'h')+"</div><br>"+
        "<div class='row ml-2' value='d' id='saborac2"+i+"'> Ingredientes adicionales (Escogió ninguno)</div>"+
        "<div id='deshabilitar"+i+"'>"+leerAdicional(datos.adicional,i,1,'d')+"</div></div><div id='img'"+i+" class='col-md-6'>"+
        "<img id='img"+i+0+"' class='mr-5' src='http://madarme.co/persistencia/pizza/napolitana.jpg' height='150px' width='150px'>"+
        "<img id='img"+i+1+"' class='ml-3' src='' height='150px' width='150px'>"+
        "</div></div></div><br>";
        }cont+="<div class='row' id='opcion'><input type='button'  onclick='irFactura("+numero+")' value='Calcular Factura'/></div>";
        
return cont;
}

function irFactura(numero){
  
  var url='./factura.html?value='+numero+leerformularioSabor(numero);
    //url+=leerForIndex(numero);
  
  location.href=url;
}

function leerPizzas(pizzas)
{
let msg="";
for(let i=0;i<pizzas.length;i++)
{
msg+="<option value='"+pizzas[i].sabor+"' m='' name='opciones'>"+pizzas[i].sabor+"</option>";
}
return msg;
}

function leerPrecios(precio)
{

var msg="";
for(let i=0;i<precio.length;i++)
{

  msg+="<br> Tamaño:"+precio[i].tamano+", Precio:"+precio[i].precio;
  

}
return msg;
}


function leerAdicional(adicional,e,p,habilitar)
{

var msg="<div class='row'>";
for(let i=0;i<adicional.length;i++)
{
if(habilitar=='h'){msg+="<div class='col-auto ml-4'><input class='form-check-input mt-2' id='input"+e+p+i+"' type='checkbox' value='"+adicional[i].nombre_ingrediente+"'";}
if(habilitar=='d'){msg+="<div class='col-auto ml-4'><input class='form-check-input mt-2' type='checkbox' value='"+adicional[i].nombre_ingrediente+"' id='input"+e+p+i+"' disabled>";}
  msg+="<label>"+adicional[i].nombre_ingrediente+"</label></div>";
}
msg+="</div>";
return msg;
}

function leerTamanio(precios)
{

let msg="";
for(let i=0;i<precios.length;i++)
{

  msg+="<option value='"+precios[i].tamano+"' id='tm'>"+precios[i].tamano+"</option>";
  

}
return msg;
}


function leerformularioAd(numero,p) {
var ad=new Array(4);
var adic=[false,false,false,false];
  if(p=='1'){
    if(document.getElementById('saborac2'+numero).value=='d'){return adic;}
  }
    for(var n = 0; n < ad.length; n++){
  var inputs = document.getElementById('input'+numero+p+n);
  //var el = inputs[i];

  if (inputs.type == 'checkbox') {
    ad[n]= inputs.checked;
  //}
}}
  return ad;
  
}

/*function leerformularioSabor(numero) {
  var pizzas=new Array(numero);
var tm=leerTmUrl(numero);

for (var i =0; i<numero; i++) {
  
var sabor=new Array(2);
var sb=new Array(2);
var sb2=new Array(2);
var p=new Array(2);
// Obtener la referencia a la lista
//console.log(document.getElementById('myselect'+(i+1)));
var lista = document.getElementById('myselect'+(i+1));
// Obtener el índice de la opción que se ha seleccionado
var indiceSeleccionado =lista.selectedIndex;
// Con el índice y el array "options", obtener la opción seleccionada
var opcionSeleccionada = lista.options[indiceSeleccionado];

// Obtener el valor y el texto de la opción seleccionada
//var textoSeleccionado = opcionSeleccionada.text;
var valorSeleccionado = opcionSeleccionada.value;

sb[0]=valorSeleccionado;
sb[1]=leerformularioAd(i+1,0);
sabor[0]=sb;


var lista2 = document.getElementById('myselect2'+(i+1));
var indiceSeleccionado =lista2.selectedIndex;
var opcionSeleccionada2 = lista2.options[indiceSeleccionado];

// Obtener el valor y el texto de la opción seleccionada
//var textoSeleccionado2 = opcionSeleccionada2.text;
var valorSeleccionado2 = opcionSeleccionada2.value;
sb2[0]=valorSeleccionado2;
sb2[1]=leerformularioAd(i+1,1);
sabor[1]=sb2;
p[0]=sabor;
p[1]=tm[i];
pizzas[i]=p;
}
console.log(pizzas);
return pizzas;
}*/
function leerformularioSabor(numero) {
  var pizzas="";
var tm=leerTmUrl(numero);

for (var i =0; i<numero; i++) {
  
var sabor="";
var sb="";
var sb2="";
var p="";
// Obtener la referencia a la lista
//console.log(document.getElementById('myselect'+(i+1)));
var lista = document.getElementById('myselect'+(i+1));
// Obtener el índice de la opción que se ha seleccionado
var indiceSeleccionado =lista.selectedIndex;
// Con el índice y el array "options", obtener la opción seleccionada
var opcionSeleccionada = lista.options[indiceSeleccionado];

// Obtener el valor y el texto de la opción seleccionada
//var textoSeleccionado = opcionSeleccionada.text;
var valorSeleccionado = opcionSeleccionada.value;

sb="&Sabor"+(i+1)+0+"="+valorSeleccionado+"&";
sb+="adic"+(i+1)+0+"="+leerformularioAd(i+1,0)+"&";
sabor=sb;


var lista2 = document.getElementById('myselect2'+(i+1));
var indiceSeleccionado =lista2.selectedIndex;
var opcionSeleccionada2 = lista2.options[indiceSeleccionado];

// Obtener el valor y el texto de la opción seleccionada
//var textoSeleccionado2 = opcionSeleccionada2.text;
var valorSeleccionado2 = opcionSeleccionada2.value;
sb2="Sabor"+(i+1)+1+"="+valorSeleccionado2+"&";
sb2+="adic"+(i+1)+1+"="+leerformularioAd(i+1,1)+"&";
sabor+=sb2;
sabor+="tm"+(i+1)+"="+tm[i];
pizzas+=sabor;
}
console.log(pizzas);
return pizzas;
}


function leerForIndex(numero){
  var msg="";
  for(var i=1;i<=numero;i++){
    var l=document.getElementById('tm'+i);
    var indiceSeleccionado =l.selectedIndex;
    var opcionSeleccionada = l.options[indiceSeleccionado];
    var valorSeleccionado = opcionSeleccionada.value;
    msg+='&tm'+i+'='+valorSeleccionado;
  }
return msg;
}

function leerTmUrl(numero){
  const urlParams = new URLSearchParams(window.location.search);
  var tamanios=new Array(numero);
  for (var i = 0; i <= numero; i++) {
    tamanios[i]=urlParams.get('tm'+(i+1));
  } 
return tamanios;
}
//function actualizar(sabor){
//    actualizarNombre(sabor);
//}
function actualizar(id,pizza,puesto){
  var msg="";
  var l=id;//document.getElementById(id);
  var indiceSeleccionado =l.selectedIndex;
    var opcionSeleccionada = l.options[indiceSeleccionado];
    var valorSeleccionado = opcionSeleccionada.value;
    if(puesto=='0'){
      msg+="<div class='row-md-12'> Ingredientes adicionales (Pizza "+valorSeleccionado+")</div>";
      document.getElementById("saborac1"+pizza).innerHTML=msg;
      actualizarImagen(valorSeleccionado,pizza,puesto);
      //console.log(id);
      //document.getElementById(idotro).l.options[indiceSeleccionado].m='disabled';
    }
    if(puesto=='1'){
      if(valorSeleccionado=='ninguno'){
      msg+="<div class='row-md-12'> Ingredientes adicionales (Escogió Ninguno)</div>";
      deshabilitarHabilitar("saborac2"+pizza,pizza,puesto,'d');
      actualizarImagen(valorSeleccionado,pizza,puesto);
      }else{
        msg+="<div class='row-md-12'> Ingredientes adicionales (Pizza "+valorSeleccionado+")</div>";
            deshabilitarHabilitar("saborac1"+pizza,pizza,puesto,'h');
            actualizarImagen(valorSeleccionado,pizza,puesto);
      }


        document.getElementById("saborac2"+pizza).innerHTML=msg;
    }
}

function deshabilitarHabilitar(id,pizza,puesto,m){
  var url="https://raw.githubusercontent.com/madarme/persistencia/main/pizza.json";
var msg="";


leerJSON(url).then(datos=>{
msg=leerAdicional(datos.adicional,pizza,puesto,m);
document.getElementById("deshabilitar"+pizza).innerHTML=msg;
document.getElementById("deshabilitar"+pizza).value=m;
})
}

function actualizarImagen(sabor,pizza,puesto){
  var url="https://raw.githubusercontent.com/madarme/persistencia/main/pizza.json";
var msg="";

  leerJSON(url).then(datos=>{
if(sabor=='ninguno'){document.getElementById("img"+pizza+puesto).src="";}
else{
for(var i=0;i<datos.pizzas.length;i++){
  if(sabor==datos.pizzas[i].sabor){document.getElementById("img"+pizza+puesto).src=datos.pizzas[i].url_Imagen;}

}}
})

}
function mostrarFactura(){
  var url="https://raw.githubusercontent.com/madarme/persistencia/main/pizza.json";
const urlParams = new URLSearchParams(window.location.search);
  var value = urlParams.get('value');

var msg="";


leerJSON(url).then(datos=>{

console.log("old");
document.getElementById("name").innerHTML=name(datos.nombrePizzeria);
leerUrlPedido(datos);

//var p=leerPizzas(datos.pizzas,i,"p");
//var adicional=leerAdicional(datos.adicional)
//msg+=opcionesPizza(value,datos);    
//document.getElementById("pig").innerHTML=msg;

})

}

function leerUrlPedido(datos){
const urlParams = new URLSearchParams(window.location.search);
var value = urlParams.get('value');
var tabla="";
var total=0;
var pre=0;
tabla+="<table class='center'>"+
            "<tr>"+
              "<th> Descripción </th>"+
              "<th> Valor </th>"+
              "</tr>";
    for(var i=1;i<=value;i++){
        var tm = urlParams.get('tm'+i);
        var sabor1=urlParams.get('Sabor'+i+0);
        var sabor2=urlParams.get('Sabor'+i+1);
        if(sabor2=='ninguno'){
        tabla+="\n<tr>"+
               "\n<td>Pizza "+tm+" "+sabor1+"</td>";
               pre=precioMayor(tm,datos.pizzas,sabor1,sabor2);
               total+=pre;
        tabla+="\n<td>"+pre+"</td>"+
        "</tr>";
       var a=separarAd(urlParams.get('adic'+i+0));
       
          for(var m=0;m<a.length;m++){
            if(a[m]=='true'){tabla+="\n<tr>"+
               "\n<td>Adicional-"+sabor1+"-"+datos.adicional[m].nombre_ingrediente+"</td>";
            pre=datos.adicional[m].valor;
            total+=pre;
            tabla+="\n<td>"+pre+"</td>";
            tabla+="</tr>";}
        }
             }
        else{
          tabla+="\n<tr>"+
               "\n<td>Pizza "+tm+" Mitad "+sabor1+" y Mitad "+sabor2+"</td>";
               pre=precioMayor(tm,datos.pizzas,sabor1,sabor2);
               total+=pre;
               tabla+="\n<td>"+pre+"</td>"+
        "</tr>";
        var a=separarAd(urlParams.get('adic'+i+0));
       
          for(var m=0;m<a.length;m++){
            if(a[m]=='true'){tabla+="\n<tr>"+
               "\n<td>Adicional-"+sabor1+"-"+datos.adicional[m].nombre_ingrediente+"</td>";
            pre=datos.adicional[m].valor;
               total+=pre;
            tabla+="\n<td>"+pre+"</td>";
            tabla+="</tr>";}
        }
        var a=separarAd(urlParams.get('adic'+i+1));
       
          for(var m=0;m<a.length;m++){
            if(a[m]=='true'){tabla+="\n<tr>"+
               "\n<td>Adicional-"+sabor2+"-"+datos.adicional[m].nombre_ingrediente+"</td>";
            pre=datos.adicional[m].valor;
               total+=pre;
            tabla+="\n<td>"+pre+"</td>";
            tabla+="</tr>";}
        }
        }
        
          

        

    }tabla+="\n<tr>"+
               "\n<td>Total: </td>";
            tabla+="\n<td>"+total+"</td>";
            tabla+="</tr>";

  tabla+="</table>";
  document.getElementById("pig").innerHTML=tabla;
}

function precioMayor(tm,pizzas,sabor1,sabor2){
  var precio1=0;
  var precio2=0;
  for(var i=0;i<pizzas.length;i++){
      if(pizzas[i].sabor==sabor1){
         for(var j=0;j<pizzas[i].precio.length;j++){
            if(pizzas[i].precio[j].tamano==tm){precio1=pizzas[i].precio[j].precio;}
         } 
      }
      if(pizzas[i].sabor==sabor2){
         for(var j=0;j<pizzas[i].precio.length;j++){
            if(pizzas[i].precio[j].tamano==tm){precio2=pizzas[i].precio[j].precio;}
         } 
      }
  }
  if(precio1<precio2){
    return precio2;
  }else{
    return precio1;
  }
}
function separarAd(adicionales){
  var ad=adicionales.split(',');

return ad;
}