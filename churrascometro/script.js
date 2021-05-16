var butao = document.querySelector('but')

function verificar (){
var adul = document.getElementById('txt')
var cria = document.getElementById('txt2')
var al = document.getElementById('alcatra')
var pica = document.getElementById('picanha')
var cala = document.getElementById('calabresa')
var paoo = document.getElementById('pao')
var refri = document.getElementById('refrigerante')
var cerva = document.getElementById('cerveja')
var res = document.getElementById('res')
var res2 = document.getElementById('res2')
if(adul.value <= 0 || Number(adul.value) >= 101){
  alert('Digite a quantidade de pessoas adultas e crianças entre 1 a 100')

}else {
    var carne = document.getElementsByName('carnes')
    var bebidas = document.getElementsByName('bebida')
    var adu = Number(adul.value)
    var criaa = Number(cria.value)
    var soma1 = adu + criaa;
   
    if(carne || bebidas){
    if(carne[0].checked){
      var soma2 =  soma1 * 0.200;
      res.innerHTML += `Total de Alcatra ${soma2}  kg.<br> `
    }if(carne[1].checked){
      var soma3 =  soma1 * 0.200;
      res.innerHTML += `Picanha total de ${soma3}  kg.<br> `
    }if(carne[2].checked){
      var soma4 =  soma1 * 0.200;
      res.innerHTML += `Calabresa total de ${soma4}  kg. <br> `
    }if(carne[3].checked){
      var soma5 =  soma1 * 0.100;
      res.innerHTML += `Pão de Alho total de ${soma5}  kg. <br> `
    }
    if(bebidas[0].checked){
        var soma6 =  adu * 1;
          res2.innerHTML += `Total de Refrigerante ${soma6} Litros. <br>  `
  } if(bebidas[1].checked){
     var soma7 =  soma1 * 12;
    res2.innerHTML += `Total de cervejas ${soma7} Latas. <br> ` 
  } 
  }
     
    }
} function limpar(){
     res.innerHTML = "<strong>A quantidade para o churrasco é de:</strong> <br>"
     res2.innerHTML = "<strong>A quantidade de Bebida é:</strong> <br>"
}





//var soma = (adu + criaa) * gramasCarne;
//res.innerHTML += `O total de carnes a comprar é de: ${soma}`



/*var carnesTotal = {
  alcatra: 200,
  picanha: 200,
  calabresa: 200,
  pao: 100,
},*/