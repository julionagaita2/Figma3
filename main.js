const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {

        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }

        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}
const contadores = document.querySelectorAll(".contador")
const tempo1 = new Date ("2023-10-05T00:00:00")
const tempo2 = new Date ("2023-12-05T00:00:00")
const tempo3 = new Date ("2023-12-30T00:00:00")
const tempo4 = new Date ("2024-02-01T00:00:00")
contadores[0].textContent = calculaTempo(tempo1)

const tempos = [tempo1,tempo2,tempo3,tempo4]

function calculaTempo(objetivo1){
    let tempoAtual = newDate();
    let tempoFinal = tempo1 - tempoAtual
    let segundos = Math.floor(tempoFinal/1000)
    let minutos = Math.floor(segundos/60)
    let horas = Math.floor(minutos/60)
    let dias = Math.floor(horas/24)
    segundos %= 60
    minutos %= 60
    horas %= 24

}


