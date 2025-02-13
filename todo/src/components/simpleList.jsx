import { useState } from "react";

function SimpleList({ el, id, name, deleteItem }) {
    return <div>
        <input readOnly value={el[id]} />
        <button id={id} onClick={deleteItem}>Delete</button>
    </div>
}

export default SimpleList;