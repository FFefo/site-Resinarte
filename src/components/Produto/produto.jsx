import './produto.scss'

export default function Produto(props) {
    return (
        <div className='comp-produto'>
            <img src={props.imagem} />
            <p className='des'>{props.descrição}</p>
            <p className='preço'>R${props.preço}</p>
        </div>
    )
}