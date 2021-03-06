import React, {useRef, useState} from 'react';
import { connect } from 'react-redux'
import {addTodos, removeTodos, updateTodos, completeTodos} from "../redux/reducer";
import TodoItem from "./TodoItem";

const mapStateToProps = (state) => {
    return{
        todos: state,
    }
};
const mapDispatchToProps = (dispatch) =>{
    return{
        addTodo: (obj) => dispatch(addTodos(obj)),
        removeTodo: (id) => dispatch(removeTodos(id)),
        updateTodo: (obj) => dispatch(updateTodos(obj)),
        completeTodo: (id) => dispatch(completeTodos(id)),
    }
};

const Todos = (props) => {
    console.log(props);

    const [todo, setTodo] = useState('');
    const handleChange = (e) => {
        setTodo(e.target.value)
    };

    return (
        <div className="addTodos">
            <input type="text"
                   onChange={(e)=>{handleChange(e)}}
                   className="todoInput"
            />

            <button
                className="add-btn"
                onClick={()=> props.addTodo({
                    id: Math.floor(Math.random()*1000),
                    item: todo,
                    completed: false,
                })}
                >  Добавить  </button>
            <br/>

        </div>
    )
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos)