export class gera{
    gerador(qtd_caracteres,min,mai,num,exp,dados){
   
        let manual = ""

        if(min){
            manual += "0"
        }

        if(mai){
            manual += "1"
        }

        if(num){
            manual += "2"
        }

        if(exp){
            manual += "3"
        }

        let caracteres = (min || mai || num || exp)
        let def_num_caracteres = (qtd_caracteres >= manual.length)

        let erro = (!def_num_caracteres || !caracteres)

        function mostra_erro(def_num_caracteres,caracteres){
            let problema = "Erro Desconhecido"

            if(!caracteres){
                problema = dados.mensagens[0]
            }else if (!def_num_caracteres) {
                problema = dados.mensagens[1]
            }

            document.getElementById('aqui').innerHTML=`<p class="textos_fonte a" >${problema}</p>`

            
        }

        function ver_Ja_esta(str,letra){
            let achou = 0
            for (let i = 0; i < str.length; i++) {
                
                if(str[i] == letra){
                    achou = 1
                    break
                }
                
            }

            return achou

        }

        function retorna_aleatorio(str) {
            return str[ Math.floor(Math.random()*str.length) ]
        }

        function gera_sequencia(qtd_caracteres,manual){

            let sequencia=""
            
            do {
            sequencia += manual[ Math.floor(Math.random()*manual.length) ]
            } while (sequencia.length != qtd_caracteres)

            return sequencia

        }

        function tem_que_fazer_de_novo(str,manual){
            let achou = 0
            for (let i = 0; i < manual.length; i++) {
            achou += ver_Ja_esta(str,manual[i])     
            }
            return achou
        }

        let sequencia
        let em_comum

        let senha = ""

        function gera_senha(sequencia){
            let ela = ""
            let tipo

            for (let i = 0; i < sequencia.length; i++) {
                tipo = parseInt(sequencia[i])
                ela += retorna_aleatorio(dados.letras[tipo])        
            }

            return ela

        }

        if(erro){
            mostra_erro(def_num_caracteres,caracteres,manual)
        }else{


            do {
            em_comum = 0
            
            sequencia = gera_sequencia(qtd_caracteres,manual)

            em_comum = tem_que_fazer_de_novo(sequencia,manual)

            } while (em_comum < manual.length)

            senha = gera_senha(sequencia)

            document.getElementById('aqui').innerHTML=`<p class="textos_fonte a" >${dados.mensagens[2]} ${senha}</p>`
            

        }
    }
}