const productsCart = [
    {
        id: 1,
        name: "banana",
        price: 10.00
    },
    {
        id: 2,
        name: "manga",
        price: 10.00
    },
    {
        id: 3,
        name: "amora",
        price: 10.00
    },
    {
        id: 4,
        name: "uva",
        price: 10.00
    },

]




function criaCabecalho(cabecalhoList){

    let cabecalho = document.createElement("ul")
    cabecalho.classList.add("cabecalho")

    cabecalhoList.forEach(valor => {
        let item = document.createElement("li")
        let paragrafo = document.createElement("p")
        paragrafo.innerText = valor

        paragrafo.classList.add("itemCabecalho") 
        
        item.appendChild(paragrafo)

        cabecalho.appendChild(item)

    })

    return cabecalho
}


function criaCardProduto(produto){

    let item = document.createElement("li")
    item.classList.add("itemProduto")
    
    let nome = document.createElement("p")
    nome.classList.add("nomeProduto")
    nome.innerText = produto.name
    let valor = document.createElement("P")
    valor.classList.add("valorProduto")
    valor.innerText = `R$ ${produto.price.toFixed(2)}`

    item.appendChild(nome)
    item.appendChild(valor)

    return item
}

function criaListaproduct(lista){

    let listaProdutos = document.createElement("ul")
    listaProdutos.classList.add("listaProdutos")

    lista.forEach(produto =>{
        let item = criaCardProduto(produto)
        listaProdutos.appendChild(item)
    })

    return listaProdutos

}


function criaproductDetalisList(produtos){
    
    let soma = 0 

    produtos.forEach(produto =>{
        
        soma += produto.price

    })

    const finalizarButton = document.createElement("button")
    finalizarButton.innerText = "Finalizar"
    finalizarButton.classList.add("finalizar")

    return [soma,finalizarButton]
}
   
    
function criaProdutosDetalhes(listaDetalhes){
        
    let somaTotal = listaDetalhes[0].toFixed(2)
    let buttonFinalizar = listaDetalhes[1]

    let productDetalis = document.createElement("ul")
    productDetalis.classList.add("listaDetalhe")
    
    let itemTotal =  document.createElement("li") 
    itemTotal.classList.add("itemDetalhe")

    let total = document.createElement("p")
    total.innerText = "Total"
    itemTotal.appendChild(total)

    let valorTotal = document.createElement("p")
    valorTotal.innerText = `R$ ${somaTotal}`
    itemTotal.appendChild(valorTotal)
    
    productDetalis.appendChild(itemTotal)
    productDetalis.appendChild(buttonFinalizar)


    return productDetalis
}

const body = document.body

const main = document.createElement("main")

let cabecalhoProdutosList = ["Item","Valor"]

let cabecalhoProdutos =  criaCabecalho(cabecalhoProdutosList)

let listaProdutos = criaListaproduct(productsCart)

let productDetalisList =  criaproductDetalisList(productsCart)

let productDetalis = criaProdutosDetalhes(productDetalisList)

main.appendChild(cabecalhoProdutos)
main.appendChild(listaProdutos)
main.appendChild(productDetalis)

body.appendChild(main)