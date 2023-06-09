import Header from "../header"
import Body from "../bodyPages"
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