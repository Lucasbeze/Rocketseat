export class GithubUser {
  static search (username) {
    const endpoint = `https://api.github.com/users/${username}`

    return fetch(endpoint)
    .then(data => data.json())
    .then (
      ({ login, name, public_repos, followers }) => ({
        login,
        name,
        public_repos,
        followers
      }))
   }
}

// classe que vai conter a lógica dos dados
// como os dados seráo estruturados
export class favorites {
  constructor(root){
    this.root = document.querySelector(root)
    this.load()
  }

  load() {
    this.entries = JSON.parse(localStorage.getItem('@github-favorites:')) || []
  }

  add(username){
    const user = await GithubUser.search(username)
  }

  delete(user) {
    // Higher-order functions (map, filter,find, reduce)
    const filteredEntries =this.entries.
      filter(entry => entry.login !== user.login)

    this.entries = filteredEntries
    this.update()
  }
}

// classe que vai criar a visualização e eventos do HTML
export class favoritesView extends favorites{
  constructor(root) {
    super(root)

    this.tbody = this.root.querySelector('table tbody')

    this.update()
    this.onadd()
  }

  onadd() {
    const addButton = this.root.querySelector('.search button')
    addButton.onclick = () => {
      const {value} = this.root.querySelector('.search input')

      this.add(value)
    }
  }

  update() {
    this.removeAlltr()

    this.entries.forEach( user => {
      const row = this.createRow()
      
      row.querySelector('.user img').src = `https://github.com/${user.login}.png`
      row.querySelector('.user img').alt = `Imagem de ${user.name}`
      row.querySelector('.user p').textContent = user.name
      row.querySelector('.user span').textContent = user.login
      row.querySelector('.repositories').textContent = user.public_repos
      row.querySelector('.followers').textContent = user.followers

      row.querySelector('.remove').onclick = () => {
        const isOk = confirm ('Tem certeza que deseja deletar essa linha?')
        if(isOk) {
          this.delete(user)
        }
      }

      this.tbody.append(row)
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
