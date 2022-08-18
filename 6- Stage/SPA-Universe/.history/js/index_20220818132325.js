import { Router} from "./route.js"

const router = new Router()
router.add('/', "/index.html")
router.add('/ouniverso', "/pages/ouniverso.html")
router.add('/exploracao', "/pages/exploracao.html")
router.add('404', "/pages/404.html")

router.handle()

window.onpopstate = () => router.handle()
window.router=
