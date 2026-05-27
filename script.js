const imoveis = []
let opcao

do {
    opcao = prompt(
        "Bem vindo ao cadastro de Imóveis!\n" +
        "Total de Imóveis: " + imoveis.length +
        "\n\nEscolha uma opção\n1. Novo imóvel\n2. Lista imóveis\n3. Sair" 

    )

    switch(opcao){
        case "1":
            const imovel = {}
            imovel.proprietario = prompt("Informe o proprietário do imóvel:")
            imovel.quartos = prompt("Quantos quartos possui o imóvel?:")
            imovel.banheiros = prompt("Quantos banheiros possui o imóvel?:")
            imovel.garagem = prompt("O imóvel possui garagem?:")

            const confimacao = confirm(
            "Salvar este imóvel?\n" +
            "\nProprietario " + imovel.proprietario +
            "\nQuartos: " + imovel.quartos +
            "\nBanheiros " + imovel.banheiros +
            "\nPossui garagem " + imovel.garagem
            
            )
            if (confirmacao){
                imoveis.push(imovel)
            }break
        case "2":
        case "3":
            alert("Opção inválida1!");
    }
} while(opcao !== "3")

