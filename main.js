function cor(){
    let botao= document.querySelectorAll('.botoes')
    for(i= 0;i<botao.length;i++){
        botao[i].onclick =function(){
            for(j=0;j<botao.length;j++){
                botao[j].classList.remove('ativo')
                
            }
        botao[i].classList.add('botaoAtivo')
        }
    }
    
}

    