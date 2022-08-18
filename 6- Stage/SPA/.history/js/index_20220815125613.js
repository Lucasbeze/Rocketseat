import "./route.js"
    const routes = {
      "/": "/pages/home.html",
      "/about": "/pages/about.html",
      "/contact": "/pages/contact.html",
      404: "/pages/404.html",
    }

    
    function handle() {
      const {pathname} = window.location //desestruturando o location para pegar somente o pathname
      const route = routes [pathname] || routes [404]
      fetch(route) //fatch pega o conteudo da pagina e devolve por javascript para a gente ele link o front end com o servidor.
      .then( data => data.text())
      .then(html => {
      document.querySelector('#app').innerHTML = html
    })
    }

    handle()

    window.onpopstate = () => handle()
    window.route = () => route()