import Header from "../header"
import Body from "../body-pages"
import BaseBoard from "../baseboard"
import PageNoticia from "../pages/page-noticias.tsx"
import '../../index.css'

export default function home() {
    return (
        <div className="home">
            <Header />
            {/* <Body /> */}
            <PageNoticia/>
            <BaseBoard />
        </div>
    )
}