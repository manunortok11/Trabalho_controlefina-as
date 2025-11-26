document.getElementById("formsalvar").addEventListener("submit", function(event)
{
/**submete dados sem que outra página seja carregada */
    event.preventDefault();

    /**declara as variaveis epega os valores da caixa de texto */
    var data=document.getElementById("data").value
    var nome=document.getElementById("nome").value
    var valor=document.getElementById("valor").value
    /**declara o objeto com os atributos nome e idade e atribui os dados q estao nas variaveis acima nome eidade */
    var despesa={data:data, nome:nome ,valor:valor}

    /**criar lista de alunos, carregar os alunos pré existentes ou carregar uma lista vazia */
    var lista_despesas= JSON.parse(localStorage.getItem('listagem')) || []
    /**inserir o aluno na lista */
    lista_despesas.push(despesa)

    /**adicionar o aluno no arquivo do local storage */
    localStorage.setItem('listagem', JSON.stringify(lista_despesas))

   document.getElementById('formsalvar').reset()

   exibir_despesas()
})

function exibir_despesas(){
    var lista_despesas=JSON.parse(localStorage.getItem('listagem')) || []
    var output=document.getElementById('output')
        output.innerHTML=''

for(let i=0;i<lista_despesas.length;i++){
    let li=document.createElement('li')
    li.textContent='Data:'+lista_despesas[i].data+' Nome:'+lista_despesas[i].nome+' Valor:'+lista_despesas[i].valor
    output.appendChild(li)
}
}