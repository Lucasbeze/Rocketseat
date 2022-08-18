import "./route.js"
const routes = {
"/": "/pages/home.html",
"/about": "/pages/about.html",
"/contact": "/pages/contact.html",
404: "/pages/404.html",
}

//função para pegar os links e pegar eles para utilizar
function route(event) {
event = event || window.event
//mudando a mudança automatica da pagina
event.preventDefault()
//coloque no seu historico que eu estou mudando de página
window.history.pushState({}, "", event.target.href)
handle()
}
//função do route para pegar o nome da página
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