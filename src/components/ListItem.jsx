


export default function ListItem({item, toggleItem, deleteItem }) {


    return (
        <li className="list-group-item">
            <span className={item.done ? 'ok' : ''}>{item.text}</span>
            <button className="btn btn-primary" onClick={() => toggleItem(item.id)}>
                <i className="fa fa-check"/>
            </button>
            <button className="btn btn-danger" onClick={() => deleteItem(item.id)}>
                <i className="fa fa-trash"/>
            </button>
        </li>
    )

}