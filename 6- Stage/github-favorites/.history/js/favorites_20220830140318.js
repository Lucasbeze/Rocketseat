export class favorites {
  constructor(root){
    this.root = document.querySelector(root)
  }
}
export class favoritesView extends favorites{
  constructor(root) {
    super(root)

    this.update()
  }

  update() {
    this.removeAlltr()
  }

  removeAlltr() {
    const tbody = this.root.querySelector('table tbody')

    tbody.querySelectorAll('tr').forEach((tr) => {
      tr.remove()
    })
  }
}
