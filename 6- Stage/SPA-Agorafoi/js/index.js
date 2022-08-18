import {Router} from './route.js'

const router = new Router()
router.add('/', "/pages/home.html")
router.add('/universum', "/pages/universum.html")
router.add('/explorer', "/pages/explorer.html")
router.add(404, "/pages/404.html")


router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()