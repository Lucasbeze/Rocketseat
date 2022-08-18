export class Router{
  routes = {}

  add(routeName, page) {
    this.routes[routeName] = page
  }

  route(event) {
    event= event || window.event
    event.preventDefault()
    
    window.history.pushState({}, '' , event.taget.href)

    this.handle()
  }

  handle() {
    const { pathname} = window.location
    const route = this.routes {patchname} || this.routes [404]
    fetch(route)
    .then( data => data.text())
    .then(html => {
      document.querySelector('')
    })
  }
}