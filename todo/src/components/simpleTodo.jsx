import { useEffect, useState } from "react";
import SimpleList from "./simpleList";


function SimpleTodo({ name }) {
    const [state, setState] = useState([])
    const [text, setText] = useState('')
    const [storageLength, setStorageLength] = useState(Object.keys(localStorage).sort().pop())
    const [last, setLast] = useState(0)
    useEffect(() => {
        if (storageLength) {
            setLast(storageLength)
        } 
        let tempArray = []
        const oKeys = Object.keys(localStorage).sort()
        for (let key of oKeys) {
            const name = localStorage.getItem(key)
            const item = { [key]: name }
            tempArray.push(item)
        }
        setState(tempArray)
        console.log(localStorage, state, storageLength, last)
        
    }, [])

    function addTodo() {
        setState(() => [...state, {[+last+1] : text}])
        localStorage.setItem(+last+1, text)
        // setTimeout(() => {
        //     setText('')
        // }, 150)

    }
    const handleChange = (e) => {
        const { value } = e.target
        setText(value)
    }
    function clear() {
        localStorage.clear()
        setState([])
    }
    const deleteItem = (e) => {
        const { id } = e.target 
        console.log(id)
        // setState((prev) => prev.filter((_, i) => i != id))
        localStorage.removeItem(+id-1)
    }
    return <div>
        <div className="todosList"></div>
        <input value={text} onChange={handleChange} type="text" />
        <button onClick={addTodo}>{name}</button>
        <button onClick={clear}>clear</button>
        {state.map((el, id) => <SimpleList key={id+1} id={id+1} name={el[id+1]}
            el={el} deleteItem={deleteItem} />)}
      </div>
}

export default SimpleTodo;