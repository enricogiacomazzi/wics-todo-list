import ListItem from "./ListItem"


export default function List({todos, toggleItem, deleteItem}) {
    return (
        <div className="row">
            <ul className="list-group m-5">
                {todos.map(i => <ListItem key={i.id} item={i} toggleItem={toggleItem} deleteItem={deleteItem}/>)}
            </ul>
      </div>
    )
}