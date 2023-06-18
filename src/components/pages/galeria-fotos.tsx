import './galeria.css'

export default function galeria() {
    return (
        <div className="container">
            <h1>Galeria de Fotos</h1>
            <div id='container-fotos'>

                <div className="galeria-fotos-a">
                    <img src="../../../public/Campeonato.jpg" alt="campeonato" />

                </div>
                <div className="galeria-fotos-a">
                    <img src="../../../public/Novo jogo.jpg" alt="campeonato" />

                </div>

                <div className="galeria-fotos-a">
                    <img src="../../../public/atleta.jpg" alt="campeonato" />


                </div>
                <div className="galeria-fotos-a">
                    <img src="../../../public/mulher-jovem.jpg" alt="campeonato" />

                </div>
                <div className="galeria-fotos-b">
                    <img src="../../../public/mundo.jpg" alt="campeonato" />

                </div>
                <div className="galeria-fotos-b">
                    <img src="../../../public/cidade.jpg" alt="campeonato" />

                </div>

            </div>
        </div>
    )
}