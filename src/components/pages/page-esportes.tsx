import { Link } from 'react-router-dom'
import './noticia.css'
export default function body() {
    return (
        <div id="conteudo">
            <div id="primario">
                <div className='caixa'>
                    <h2>Campeonatos</h2>
                    <div className='caixa-conteudo destaque'>
                        <h3>Avante!</h3>
                        <img src="../../public/campeonato.jpg" alt="" width='100%' />
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Est quia sint quisquam excepturi, velit sit eos at recusandae
                        ex temporibus maxime quidem dolorem pariatur non, tenetur possimus,
                        dignissimos et fugit?
                    </div>

                </div>
                <div className='caixa'>
                    <h2>Novidades</h2>
                    <div className='caixa-conteudo'>
                        <ul id='lista-noticias'>
                            <li>
                                <Link to={'/'}>
                                    <img src="../../public/acao.jpg" alt="" width='80' />
                                    <h3>Educação fisíca!</h3>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                                </Link>
                            </li>
                            <li>
                                <Link to={'/'}>
                                    <img src="../../public/menina-jogando-volei.jpg" alt="" width='80' />
                                    <h3>Modalidades!</h3>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                                </Link>
                            </li>
                            <li>
                                <Link to={'/'}>
                                    <img src="../../public/Novo Jogo.jpg" alt="" width='80' height='60' />
                                    <h3>Campeonato femenino!</h3>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                                </Link>
                            </li>

                        </ul>

                    </div>

                </div>
            </div>

            <div id="lateral">
                <div className='caixa'>
                    <h2>Entrevistas</h2>
                    <div className='caixa-conteudo'>
                        <ul id='menu-vertical'>
                            <li><Link to={'/'}>José Almeida</Link></li>
                            <li><Link to={'/'}>Felipe Silva</Link></li>
                            <li><Link to={'/'}>Renato Rodrigues</Link></li>
                            <li><Link to={'/'}>Albelardo Silveira</Link></li>
                            <li><Link to={'/'}>André Carlos</Link></li>
                            <li><Link to={'/'}>Márcio Mello</Link></li>
                            <li><Link to={'/'}>Jão Pedro</Link></li>
                        </ul>
                    </div>



                </div>
                <div className='caixa'>
                    <h2>News</h2>
                    <div className='caixa-conteudo'>
                        <form action="">
                            <div>
                                <label htmlFor="email">Email: </label>
                                <input type="text" name='email' id='email' placeholder='Digite seu e-mail:' />
                            </div>
                            <button>Cadastra</button>
                        </form>

                    </div>

                </div>

            </div>

        </div>
    )
}