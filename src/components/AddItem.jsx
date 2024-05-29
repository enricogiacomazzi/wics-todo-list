import { useRef } from "react"



export default function AddItem({add}) {

    const r = useRef();

    function clickHandler() {
        add(r.current.value);
        r.current.value = '';
    }

    return (
        <div className="row mx-5">
            <div className="col-auto">
                <input type="text" className="form-control" placeholder="add new" ref={r} />
            </div>
            <div className="col-auto">
                <button className="btn btn-success" onClick={clickHandler}>
                    Aggiungi
                </button>
            </div>
        </div>
    )
}