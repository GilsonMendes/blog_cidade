import Header from "../header"
import Body from "../body-pages"
import BaseBoard from "../baseboard"
import '../../index.css'

export default function home() {
    return (
        <div className="home">
            <Header />
            <Body />
            <BaseBoard />
        </div>
    )
}