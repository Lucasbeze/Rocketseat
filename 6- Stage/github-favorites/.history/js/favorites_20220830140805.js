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

    this.update()
  }

  update() {
    this.removeAlltr()

    

  createRow() {
    const tr = document.create
    const content = `
    
    <td class="user">
      <img src="https://github.com/Lucasbeze.png" alt="imagem de Lucas Bezerra">
      <a href="https://github.com/Lucasbeze" target="_blank">
        <p>Lucas Bezerra</p>
        <span>Lucasbeze</span>
      </a>
    </td>
    <td class="repositories">
      11
    </td>
    <td class="followers">
      45
    </td>
    <td>
      <button class="remove">&times;</button>
    </td>
  `
  }
  }
  
  removeAlltr() {
    const tbody = this.root.querySelector('table tbody')

    tbody.querySelectorAll('tr').forEach((tr) => {
      tr.remove()
    })
  }
}
