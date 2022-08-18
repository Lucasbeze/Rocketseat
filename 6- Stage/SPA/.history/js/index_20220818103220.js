  import Router from './route.js'
  const router = new Router()
  router.add('/',"/pages/home.html")
  router.add('/about',"/pages/about.html")
  router.add('/contact',"/pages/contact.html")
  router.add('/',"/pages/home.html")

  /*
  const routes = {
    "/": "/pages/home.html",
    "/about": "/pages/about.html",
    "/contact": "/pages/contact.html",
    404: "/pages/404.html",
  }

  handle()

  window.onpopstate = () => handle()
  window.route = () => route()
  */