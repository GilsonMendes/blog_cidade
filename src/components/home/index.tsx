import Header from "../header"
import Body from "../body-pages"
import BaseBoard from "../baseboard"
import Galeria from "../pages/galeria-fotos.tsx"
import '../../index.css'

export default function home() {
    return (
        <div className="home">
            <Header />
            {/* <Body /> */}
            <Galeria/>
            <BaseBoard />
        </div>
    )
}