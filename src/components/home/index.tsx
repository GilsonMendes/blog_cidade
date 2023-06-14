import Header from "../header"
import Body from "../body-pages"
import BaseBoard from "../baseboard"
import PageSportes from "../pages/page-esportes.tsx"
import '../../index.css'

export default function home() {
    return (
        <div className="home">
            <Header />
            {/* <Body /> */}
            <PageSportes/>
            <BaseBoard />
        </div>
    )
}