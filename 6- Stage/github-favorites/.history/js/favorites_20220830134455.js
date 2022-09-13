// classe que vai conter a lógica dos dados
// como os dados seráo estruturados
export class favorites {
  constructor(root){
    this.root = document.querySelector(root)
  }
}
// classe que vai criar a visualização e eventos do HTML
export class favoritesView extends favorites{
  constructor(root) {
    super(root)
  }
}