// classe que vai conter a lógica dos dados
// como os dados seráo estruturados
export class favorites {
  constructor(root){
    this.root = document.querySelector(root)
    this.load()
  }

  load() {
    this.entries = [
      {
        login: 'Lucasbeze',
        name:'Lucasbeze',
        public_repos: '76',
        followers: '120000'
      },
      {
        login: 'diego3g',
        name:'Diego Fernandes',
        public_repos: '76',
        followers: '120000'
      }
    ]

  }
}

// classe que vai criar a visualização e eventos do HTML
export class favoritesView extends favorites{
  constructor(root) {
    super(root)

    this.tbody = this.root.querySelector('table tbody')

    this.update()
  }

  update() {
    this.removeAlltr()

    this.entries.forEach( user => {
      const row = this.createRow()
      
      row.querySelector('.user img').src`= 'https://github.com/${user.login}.png`

      this.tbody.appendChild(row)
    })
  }

  createRow() {
    const tr = document.createElement('tr')

    tr.innerHTML = `
    
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

  return tr
  }
  
  
  removeAlltr() {
    this.tbody.querySelectorAll('tr').forEach((tr) => {
      tr.remove()
    })
  }
}
