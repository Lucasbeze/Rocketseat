class Router {
   route(event) {
    event = event || window.event
    //mudando a mudança automatica da pagina
    event.preventDefault()
    //coloque no seu historico que eu estou mudando de página
    window.history.pushState({}, "", event.target.href)
    this.handlehandle()
  }

  handle() {
    const {pathname} = window.location //desestruturando o location para pegar somente o pathname
    const route = routes [pathname] || routes [404]
    fetch(route) //fatch pega o conteudo da pagina e devolve por javascript para a gente ele link o front end com o servidor.
    .then( data => data.text())
    .then(html => {
    document.querySelector('#app').innerHTML = html
  })
  }
}



