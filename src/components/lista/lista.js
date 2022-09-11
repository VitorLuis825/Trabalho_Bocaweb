import './lista.css'
export const Lista = ({odas,busca}) =>{
    return(
        <div className='lista'>
            <div className="resultado">
                <span>Resultado da busca por <strong>{busca}</strong>: <strong>{odas.length}</strong> objetos</span>
            </div>
            {odas.map(oda=>(
                <div key={oda._key} className='oda'>
                    <h1>{oda.nome} </h1>
                    <p className='descricao'>{oda.descricao}</p>
                    <p className='data'>Submetido em <strong>{oda.data_inclusao}</strong></p>
                    <p className='usuario'>Por <strong>{oda.usuario}</strong></p>
                    <p className='tags'>Tags: <strong>{oda.palavras_chave}</strong></p>
                </div>
            )
            )}
      </div>
    )
}
