var altura = 0
var largura = 0
var vidas = 1
var tempo = 15
var nivel = window.location.search
var mosquitoTempo = 2000 
nivel = nivel.replace('?','')

if (nivel==='normal') {
    mosquitoTempo = 3000
} else if(nivel==='dificil') {
    mosquitoTempo = 2000
} else if (nivel==='dark_souls') {
    mosquitoTempo =750
}


var cronometro = setInterval(function() {
    tempo-=1
    if (tempo<0) {
        clearInterval(cronometro) //Parar o "cronometro" quadno a vitóia for alcançada
        clearInterval(criaMosca) //parar a criação de moscas quando a vitória for alcançada
        window.location.href='vitoria.html'
    } else {
        document.getElementById('cronometro').innerHTML = tempo
    }
    
}, 1000);
function ajustaTamanhoPalcoJogo() {

altura = window.innerHeight
largura = window.innerWidth
console.log(largura,altura)
}
ajustaTamanhoPalcoJogo()

//remover mosquito caso já exista um mesmo ID




/*Essa funcao posicaoRandomica() foi criada para que os elementos
elementos HTML manipulados de forma programática
possam ser lidos de acordo com a ordem em que
o Script é lido*/
function posicaoRandomica() {
    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()
        //console.log('O elemento selecionado foi v' + vidas)
        if (vidas>3) {
            window.location.href='fim_de_jogo.html  '
        } else {
            document.getElementById('v' + vidas).src="imagens/coracao_vazio.png"
        vidas++
        }
        
    }
    
var posicaox = Math.floor/*Elimina as casas decimais*/(Math.random()* largura) -90  //gera coordenadas aleatórias de até no máximo a largura da tela
var posicaoy = Math.floor(Math.random() * altura)- 90 //gera coordenadas aleatórias de até no máximo a altura da tela ()



console.log (posicaox, posicaoy)


//Criação dos elementos HTML de forma programática
var mosquito = document.createElement('img')
mosquito.src = 'imagens/mosca.png'
mosquito.className = tamanhoaleatorio() +' '+ ladoAleatorio()

//
mosquito.style.left = posicaox + 'px' //permite que os elementos sejam gerados de formas aleatórias de acordo com o tamanho da tela
mosquito.style.top = posicaoy + 'px'
mosquito.style.position ='absolute'
mosquito.id='mosquito'
mosquito.onclick=function() {
    
    this.remove()
}
document.body.appendChild(mosquito)
console.log(ladoAleatorio())
console.log(tamanhoaleatorio())
}

function tamanhoaleatorio() {
    var classe = Math.floor(Math.random() *3) 
    console.log(classe)
    switch(classe) {
        case 0:
            return 'mosquito1'

        case 1:
            return 'mosquito2'

        case 2:
            return 'mosquito3'
            
    }
}

function ladoAleatorio() {
    var classe = Math.floor(Math.random() *2) 
    console.log(classe)
    switch(classe) {
        case 0:
            return 'ladoA'

        case 1:
            return 'ladoB'

        
            
    }

}