
import { Link } from "react-router-dom"
import './styles.css'


export default function menuTop() {
    return (
        <div>
            <div id="menu-topo">
                <ul>
                    <li className="primeiro"><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/'}>Esportes</Link></li>
                    <li><Link to={'/'}>Educação</Link></li>
                    <li><Link to={'/'}>Saúde</Link></li>
                    <li><Link to={'/'}>Galeria de fotos</Link></li>
                </ul>
            </div>
        </div>
    )
}






