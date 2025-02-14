import { useEffect, useState } from "react";
import SimpleList from "./simpleList";


function SimpleTodo({ name }) {
    const [state, setState] = useState([])
    const [text, setText] = useState('')
    const [last, setLast] = useState(0)

    useEffect(() => {
        let tempArray = []
        const oKeys = Object.keys(localStorage).sort((a,b) => +a - +b)
        console.log(oKeys)
        if (oKeys.length > 0) {
            setLast((+oKeys[oKeys.length -1 ]))
            for (let key of oKeys) {
                const name = localStorage.getItem(key)
                const item = { [key]: name }
                tempArray.push(item)
                setState(tempArray)
            }
        }
        console.log( last)
    }, [])

    function addTodo() {
        setLast((prev) => prev+1)
        localStorage.setItem(last+1, text)
         setState(() => [...state, { [last+1]: text }])
         setTimeout(() => {
            setText('')
        }, 150)

    }
    const handleChange = (e) => {
        const { value } = e.target;
        setText(value)
    }
    function clear() {
        localStorage.clear()
        setState([])
    }
    const deleteItem = (e) => {
        const { id } = e.target
        setState((prev) => (prev.filter((el) => (Object.keys(el)[0] != id))))          
        localStorage.removeItem(+id)
    }
    return <div>
        <div className="todosList"></div>
        <input value={text} onChange={handleChange} type="text" />
        <button onClick={addTodo}>{name}</button>
        <button onClick={clear}>clear</button>
        {state.map((el, index) => <SimpleList key={Object.keys(el)[0]}
           index={index} el={el} deleteItem={deleteItem} />)}
      </div>
}

export default SimpleTodo;