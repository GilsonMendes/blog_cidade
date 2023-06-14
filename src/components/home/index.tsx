import Header from "../header"
import Body from "../body-pages"
import BaseBoard from "../baseboard"
import PageEducacao from "../pages/page-educacao.tsx"
import '../../index.css'

export default function home() {
    return (
        <div className="home">
            <Header />
            {/* <Body /> */}
            <PageEducacao/>
            <BaseBoard />
        </div>
    )
}