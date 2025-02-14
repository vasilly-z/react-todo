import { useState } from "react";

function SimpleList({ el, deleteItem, index }) {
    const [id, setId] =  useState(Object.keys(el)[0])
    const [name, setName] = useState(el[id])
    return <div>
        {`${index+1})`} <input readOnly value={name} />
        <button id={id} onClick={deleteItem}>Delete</button>
    </div>
}

export default SimpleList;