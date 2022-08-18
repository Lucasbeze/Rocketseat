class Router {
   route(event) {
    event = event || window.event
    event.preventDefault()
   
    window.history.pushState({}, "", event.target.href)

    this.handle()
  }

  handle() {
    const {pathname} = window.location //desestruturando o location para pegar somente o pathname
    const route = routes [pathname] || routes [404]
    fetch(route) 
    .then( data => data.text())
    .then(html => {
    document.querySelector('#app').innerHTML = html
  })
  }
}



