function criaCartao(pergunta, resposta){
let conteudo=document.getElementById("conteudo")
let cartao= createElement (article)
cartao.className="cartao"
console.log (cartao)
cartao.innerHTML=`
<div class="cartao--conteudo">
                    <div class="cartao-pergunta">
                        <p>Qual é o país mais populoso do mundo?</p>
                    </div>
                        <div class="cartao-respota">
                            <p>A India</p>
                        </div>
                        `
                        console.log(cartao)
                        conteudo.appendchild(cartao)

                        function viracartao(){
                        repostaEstaVisivel =!respostaEstaVisivel
                        cartao.addEventListener('click',viracartao)
                        conteudo.appendchild(cartao)
 
                        }