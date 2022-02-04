import React, {useRef} from "react";


const TodoItem = (props) => {
    const {item, updateTodo, removeTodo, completeTodo} = props;
    const inputRef = useRef(true);

    const changeFocus = () => {
        inputRef.current.disabled = false;
        inputRef.current.focus();
    };

    //13 это Enter key
    const update = (id, value, e) => {
        if (e.which === 13) {
            updateTodo({ id, item: value });
            inputRef.current.disabled = true;

        }
    };

    return(
        <li key ={item.id}>
            <textarea
                    ref={inputRef}
                    disabled={inputRef}
                    defaultValue={item.item}
                    onKeyPress={(e) => update(item.id, inputRef.current.value, e)}
            />
            <div>
            <button onClick={()=>changeFocus()}> Ред.</button>
            <button onClick={()=>completeTodo(item.id)}> Compl.</button>
            <button onClick={()=>removeTodo(item.id)}> Удал.</button>
            </div>
            {item.completed && <span> done </span>}

        </li>
    )
};
export default TodoItem;