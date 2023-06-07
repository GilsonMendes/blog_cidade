
import { Link } from "react-router-dom"
import './styles.css'
import '../../index.css'


export default function menuTop() {
    return (
        <div className="menu-container">
            <div id="menu-topo">
                <ul id="navegacao"> {/* voltar para esse trecho do condigo */}
                    <li id="home"><Link to={'/'}>Home</Link></li>
                    <li id="esportes"><Link to={'/'}>Esportes</Link></li>
                    <li id="educacao"><Link to={'/'}>Educação</Link></li>
                    <li id="saude"><Link to={'/'}>Saúde</Link></li>
                    <li id="fotos"><Link to={'/'}>Galeria de fotos</Link></li>
                </ul>
            </div>
        </div>
    )
}






