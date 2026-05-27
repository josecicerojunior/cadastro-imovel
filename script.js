const imoveis = []

let opcao 

do {
opcao = prompt(
"Bem vindo ao cadastro de Imóveis Plínio Jaime!\n" +
"Total de imóveis: " + imoveis.length +
"\n\n Escolha uma opção\n1. Novo Imóvel\n2. Lista imóveis\n3. Sair"
)
switch(opcao){
    case "1": 
    case "2":
    case "3":
        alert("Opção invalida!");

}

}
while(opcao !== "3")
