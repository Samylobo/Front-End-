var Roupas = {};
        var Bolsas = {};
        var Perfumes = {};
        var MEU_CARRINHO = [];
        var MEU_ENDERECO = null;
        var VALOR_CARRINHO = 0;
        var VALOR_ENTREGA = {};
        var CELULAR_EMPRESA = '5511942443416';

        // Função para adicionar produto ao carrinho
        function adicionarAoCarrinho(categoria) {
            var tamanho = document.getElementById('tamanho-roupas').value;
            var produto = {
                categoria: categoria,
                tamanho: tamanho,
                preco: 99.99 // Preço fictício, substitua pelo preço real
            };
            MEU_CARRINHO.push(produto);
            console.log("Produto adicionado ao carrinho:", produto);
            // Aqui você pode adicionar mais funcionalidades, como atualizar o valor total do carrinho
        }

       // Função para mostrar mais produtos
       function mostrarMais() {
        var imagens = document.querySelectorAll('.imagem');
        for (var i = 0; i < imagens.length; i++) {
            imagens[i].style.display = 'block'; // Mostra todas as imagens
        }
        document.getElementById('ver-mais').style.display = 'none'; // Esconde o botão "Ver Mais"
    }