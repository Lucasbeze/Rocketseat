# DOM

Document Object Model

# Buscando e Selecionando elementos

- por id: .getElementById()
- por class: .getElementByClassName()
-por seletores css: .querySelector() //O melhor metodo
- por uma coleção de elementos pelo seletor: .querySelectorAll() //se voce quiser pegar todos os elementos.

# Manipulação do conteúdo

- pegar ou mudar o conteúdo:

- .textContent:
  Considera quebras de linhas e espaços entre tags não renderiza HTML

- .innerText: 
  Desconsidera quebras de linhas e espaços entre tags não renderiza HTML

- .innerHTML:
  para adicionar ou pegar tags HTML de qualquer elemento que tenha conteúdo.

- .value:
  São valores dentro do input quando voce quer pegar oq as pessoas iram digitar no seu site ou formulário.

  # Trabalhando com propriedades e classes

  - alterar o estilo direto na tag: 
  .style //cuidado com essa tag pois ela vai zoar tudo se você não colocar direito. o !important será mais forte no CSS.

  - pegar e alterar a lista de classes:
   .classList
    - .add() //adicionar um atributo
    - .remove() //remover um atributo
    - .toogle() //Fazer a troca

  - pegar atributos:
   .getAttribute() // Isto é uma função e ele pega atributos comuns

  - pegar atributos do tipo data:
   .dataset //Pega atributos do tipo data-*, são atributos que você mesmo pode colocar e criar.

  - atribuir ou modificar atributos: 
  .setAttribute() // Isto é uma função utiliza dois parâmetros: ('color', 'red'): nome do atributo e valor do atributo.

  