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
  }
}