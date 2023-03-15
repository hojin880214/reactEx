import React, {useState} from 'react';

function TodoForm() {

    function exe() {
        debugger;
        console.log('aa');

    }

    return (
        <div>
            {/*<form>*/}
            <input type="text"/>
            <label>
                <input type="checkbox" name="option1" value="Option 1"/>Option 1</label>

            <label>
                <input type="checkbox" name="option2" value="Option 2"/>Otion 2</label>
            <button onClick={exe}>할일추가</button>
            {/*</form>*/}
        </div>
    );
}

export default TodoForm;
//
//
//
//
// import React, { useState } from 'react';
//
// const Todo = () => {
//     const [todos, setTodos] = useState([]);
//     const [todo, setTodo] = useState('');
//
//     const handleInputChange = (event) => {
//         setTodo(event.target.value);
//     };
//
//     const handleFormSubmit = (event) => {
//         event.preventDefault();
//         if (todo.trim() === '') return; // 빈 값 체크
//         setTodos([...todos, todo.trim()]);
//         setTodo('');
//     };
//
//     const handleDeleteClick = (index) => {
//         const newTodos = [...todos];
//         newTodos.splice(index, 1);
//         setTodos(newTodos);
//     };
//
//     return (
//         <div>
//             <form onSubmit={handleFormSubmit}>
//                 <input type="text" value={todo} onChange={handleInputChange} />
//                 <button type="submit">Add Todo</button>
//             </form>
//             <ul>
//                 {todos.map((todo, index) => (
//                     <li key={index}>
//                         {todo}
//                         <button onClick={() => handleDeleteClick(index)}>Delete</button>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };
//
// export default Todo;