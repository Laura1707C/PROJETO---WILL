const urlParams = new URLSearchParams(window.location.search); 
const termoPesquisa = urlParams.has("query") ? urlParams.get("query").toLowerCase() : "";

const produtos = [
    {
        titulo: "Areia",
        descricao: "Areia Média Lavada Saco 20kg Grupo Tomino.",
        preco: "R$ 4,19",
        imagem: "images/imgprodutos/sacarias/areia_7ec4_300x300.jpg"
    },
    {
        titulo: "Argamassa",
        descricao: "Argamassa Porcelanato Interno e Externo Cinza 20kg Axton",
        preco: "R$ 25,85",
        imagem: "images/imgprodutos/sacarias/argamassas_b39d_300x300.jpg"
    },
    {
        titulo: "Cal",
        descricao: "Cal Hidratada para Construção Civil 20Kg Votoran",
        preco: "R$ 16,87",
        imagem: "images/imgprodutos/sacarias/cal_e04c_300x300.jpg"
    },
    {
        titulo: "Cimento",
        descricao: "Cimento CP II F 32 Todas as Obras 50kg Votoran",
        preco: "R$ 34,90",
        imagem: "images/imgprodutos/sacarias/cimentos_4bed_300x300.jpg"
    },
    {
        titulo: "Argila",
        descricao: "Argila Expandida 5Kg Geolia",
        preco: "R$ 17,99",
        imagem: "images/imgprodutos/sacarias/argila_expandida_e_vermiculita_188c_300x300.jpg"
    },
    {
        titulo: "Gesso",
        descricao: "Gesso em Pó Secagem Rápida 4Kg Fortaleza",
        preco: "R$ 11,66",
        imagem: "images/imgprodutos/sacarias/gessos_82c7_300x300.jpg"
    },
    {
        titulo: "Brita",
        descricao: "Pedra Britada 1 Saco 20kg Grupo Tomino",
        preco: "R$ 4,29",
        imagem: "images/imgprodutos/sacarias/pedra_brita_22e2_300x300.jpg"
    },
    {
        titulo: "Rejunte",
        descricao: "Rejunte Cimentício Aditivado Branco 5 Kg Axton",
        preco: "R$ 25,99",
        imagem: "images/imgprodutos/sacarias/rejuntes_04a4_300x300.jpg"
    },
    {
        titulo: "Tijolo Comum",
        descricao: "Tijolo Comum de Barro 4,3x9,1x18cm 10 Unidades Grupo Tomino",
        preco: "R$ 8,49",
        imagem: "images/imgprodutos/tijolos/tijolos_comuns_8604_300x300.jpeg"
    },
    {
        titulo: "Tijolos de acabamento",
        descricao: "Tijolo Aparente Reto Vermelho 10,2cmx5,2cmx22,2cm Bauth.",
        preco: "R$ 1,76",
        imagem: "images/imgprodutos/tijolos/tijolos_de_acabamento_d9c7_300x300.jpeg"
    },
    {
        titulo: "Telha Concreto",
        descricao: "Telha de Concreto Coppo Veneto Cinza Brastelha.",
        preco: "R$ 4,00",
        imagem: "images/imgprodutos/telhas/concreto_6c84_300x300.jpeg"
    },
    {
        titulo: "Telha de PVC",
        descricao: "Telha de PVC Plan Cerâmica 2,42m x 88cm 1,5mm - Precon.",
        preco: "R$ 179,90",
        imagem: "images/imgprodutos/telhas/telha_de_pvc_plan_ceramica_3,30x0,88m_precon_89341602_0001_300x300.jpeg"
    },
    {
        titulo: "Telha Esmaltada",
        descricao: "Telha Cerâmica Esmaltada 43x27cm Supernova Marfim 1 Face Perkus.",
        preco: "R$ 5,59",
        imagem: "images/imgprodutos/telhas/telha_esmaltada_8296_300x300.jpeg"
    },
    {
        titulo: "Telha Polipropileno",
        descricao: "Telha Polipropileno 3,05mx1,10m Ondulada Translúcida Atco",
        preco: "R$ 155,90",
        imagem: "images/imgprodutos/telhas/telha_polipropileno_2,44mx1,10m_ondulada_translucida_atco_88223905_0001_300x300.jpeg"
    },
    {
        titulo: "Ladrilhos",
        descricao: "Ladrilhos Hidráulicos Hexagonal Azul.",
        preco: "R$ 14,99",
        imagem: "images/imgprodutos/pisos_e_revestimentos/ladrilhos_298c_300x300.jpg"
    },
    {
        titulo: "Pisos Ceramicos",
        descricao: "Porcelanato Interno Cimento Acetinado Borda Reta 61924 61,1x61,1cm Artens.",
        preco: "R$ 50,20",
        imagem: "images/imgprodutos/pisos_e_revestimentos/pisos_ceramicos_ba43_300x300.jpg"
    },
    {
        titulo: "Pisos para Calçada",
        descricao: "Ladrilho para Calçada Copacabana 20x20cm Cimartex.",
        preco: "R$ 69,20",
        imagem: "images/imgprodutos/pisos_e_revestimentos/pisos_para_calcada_7e15_300x300.jpg"
    },
    {
        titulo: "Pisos Laminados",
        descricao: "Piso Laminado Click Nature 136x21,7cm m² Artens.",
        preco: "R$ 63,90",
        imagem: "images/imgprodutos/pisos_e_revestimentos/pisos_laminados_0d69_300x300.jpg"
    },
    {
        titulo: "Pisos Ceramicos",
        descricao: "Piso Laminado Click Nature 136x21,7cm m² Artens.",
        preco: "R$ 63,90",
        imagem: "images/imgprodutos/pisos_e_revestimentos/piso_ceramico_esmaltado_deck_native_hd61437_60x60cm_artens_90729611_4996_300x300.jpg"
    },
    {
        titulo: "Pisos Vinilicos",
        descricao: "Piso Vinílico Click Camden Pecan m² Artens.",
        preco: "R$ 164,90",
        imagem: "images/imgprodutos/pisos_e_revestimentos/pisos_vinilicos_e614_300x300.jpg"
    },
    {
        titulo: "Pisos Intertravados e Drenantes",
        descricao: "Piso Drenante Placa 20x20x6cm Natural Oterprem.",
        preco: "R$ 5,89",
        imagem: "images/imgprodutos/pisos_e_revestimentos/pisos_intertravados_e_drenantes_c36f_300x300.jpg"
    },
    {
        titulo: "Porcelanato Esmaltado",
        descricao: "Porcelanato Externo Cimento Esmaltado Borda Reta Chicago Sgr 87,7x87,7cm Portinari.",
        preco: "R$ 134,90",
        imagem: "images/imgprodutos/pisos_e_revestimentos/porcelanato_esmaltado_acetinado_reto_interno_87,7x87,7cm_m2_90427701_2bf2_300x300.jpg"
    },
    {
        titulo: "Esmalte a Base de Água",
        descricao: "Esmalte Base Água Acetinado Preto 900mL Luxens.",
        preco: "R$ 41,90",
        imagem: "images/imgprodutos/tintas/esmalte_base_agua_acetinado_preto_3,6l_luxens_89427751_0001_300x300.jpg"
    },
    {
        titulo: "Tinta Acrilica Fosca para Piso Azul",
        descricao: "Tinta Acrilica Fosca para Piso Azul Profundo 18L Luxens.",
        preco: "R$ 224,90",
        imagem: "images/imgprodutos/tintas/tinta_acrilica_fosca_para_piso_azul_profundo_18l_luxens_89915056_0001_300x300.jpg"
    },
    {
        titulo: "Tinta Acrilica Fosca para Piso Verde",
        descricao: "Tinta Acrilica Fosca para Piso Verde Folha 3,6L Luxens.",
        preco: "R$ 79,90",
        imagem: "images/imgprodutos/tintas/tinta_acrilica_fosca_para_piso_verde_folha_3,6l_luxens_89915112_0001_300x300.jpg"
    },
    {
        titulo: "Tinta Acrilica Fosca para Piso Preto",
        descricao: "Tinta acrílica fosca de alta qualidade.",
        preco: "R$ 79,90",
        imagem: "images/imgprodutos/tintas/tinta_acrilica_fosca_para_piso_preto_18l_luxens_89915063_0001_300x300.jpg"
    },
    {
        titulo: "Canos e Conexões",
        descricao: "Cano PVC para Esgoto 150mm ou 63m Equation.",
        preco: "R$ 100,00",
        imagem: "images/imgprodutos/materiais_hidráulicos/canos_e_conexoes_hidraulicas_e4b8_300x300.jpg"
    },
    {
        titulo: "Acabamentos para registro",
        descricao: "Acababamento para Registro Base Deca Parede Grande 1.1/4 1.1/2 Jess Cromado Sensea.",
        preco: "R$ 72,90",
        imagem: "images/imgprodutos/materiais_hidráulicos/acabamentos_para_registro_c491_300x300.jpg"
    },
    {
        titulo: "Acessórios Hidráulicos",
        descricao: "Kit Instalação para Vaso Sanitário com Caixa Acoplada Equation.",
        preco: "R$ 39,90",
        imagem: "images/imgprodutos/materiais_hidráulicos/acessorios_hidraulicos_c6de_300x300.jpg"
    },
    {
        titulo: "Ralos Internos",
        descricao: "Ralo Quadrado Pequeno Aço Inox 10cm Equation.",
        preco: "R$ 29,50",
        imagem: "images/imgprodutos/materiais_hidráulicos/ralos_internos_06e1_300x300.jpg"
    },
    {
        titulo: "Ducha Higiênicas",
        descricao: "Ducha Higiênica 1,2m Branca e Cromada Sensea.",
        preco: "R$ 75,00",
        imagem: "images/imgprodutos/materiais_hidráulicos/ducha_higienica_cromado_2_funcoes_produto_importado_87849916_cc2c_300x300.jpg"
    },
];

const resultadosContainer = document.getElementById("resultados");

document.getElementById("termo-pesquisa").innerText = termoPesquisa || "nenhum termo";

resultadosContainer.innerHTML = "";

const resultados = produtos.filter(produto => 
    produto.titulo.toLowerCase().includes(termoPesquisa) ||
    produto.descricao.toLowerCase().includes(termoPesquisa)
);

function adicionarAoCarrinho(produto) {

    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    const produtoExistente = carrinho.find(item => item.titulo === produto.titulo);

    if (produtoExistente) {
        produtoExistente.qnt += 1;
    } else {
        produto.qnt = 1;
        carrinho.push(produto);
    }

    localStorage.setItem("carrinho", JSON.stringify(carrinho));


    alert(`${produto.titulo} foi adicionado ao carrinho!`);


    window.location.href = "components/carrinho/index.html";  
}

if (resultados.length > 0) {
    resultados.forEach(produto => {
        const produtoDiv = document.createElement("div");
        produtoDiv.className = "produto";
        produtoDiv.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.titulo}" class="produto-imagem">
            <h3>${produto.titulo}</h3>
            <p>${produto.descricao}</p>
            <p><strong>Preço:</strong> ${produto.preco}</p>
            <button class="btn-adicionar" onclick='adicionarAoCarrinho(${JSON.stringify(produto)})'>Adicionar ao Carrinho</button>
        `;
        resultadosContainer.appendChild(produtoDiv);
    });
} else {
    resultadosContainer.innerHTML = "<p class='nenhum-resultado'>Nenhum produto encontrado.</p>";
}
function voltarPagina() {
    window.history.back(); 
}
