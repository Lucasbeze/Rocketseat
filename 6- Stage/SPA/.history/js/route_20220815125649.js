class Router {
   route(event) {
    event = event || window.event
    //mudando a mudança automatica da pagina
    event.preventDefault()
    //coloque no seu historico que eu estou mudando de página
    window.history.pushState({}, "", event.target.href)
    handle()
  }
}



