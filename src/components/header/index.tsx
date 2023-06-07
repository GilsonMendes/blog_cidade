import './styles.css'
import '../../index.css'
import Menu from '../menu-top'
export default function header() {
    return (
        <div id='container'>
            <div id='topo'>
                <h1 className='logo'>Noticias Cidade</h1>
                <Menu/>
            </div>   
        </div>
    )
}