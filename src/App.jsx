import React, { useState } from "react";
import ToDoList from "./ToDoList";

const App = () => {

    const [inputList, setInputList] = useState("");
    const [Items, setItems] = useState([]);
    const itemsEvent = (event) => {
        setInputList(event.target.value);
    };

    const listofItems = () => {
        setItems((oldItems) => {
            return [...oldItems, inputList];
        });
        setInputList("");
    };

    const deleteItem = (id) => {
        console.log("deleted");

        setItems((oldItems) => {
            return oldItems.filter((arrElem, index) => {
            return index !== id;
            })
        })
    };

    return (
    <>
        <div className="main_div">
        <div className="center_div">
            <br />
            <h1> ToDo List </h1>
            <br />
            <input type="text" 
            placeholder="Add Items"
            value={inputList}
            onChange={itemsEvent}
             />
             <button onClick={listofItems}> + </button>

             <ol>
                {/* <li> {inputList} </li> */}
                {Items.map((itemvalue, index) => {
                   return  <ToDoList 
                   key={index}
                   id={index}
                    text = {itemvalue}
                   onSelect = {deleteItem}
                    />;
                })}
             </ol>
        </div>

        </div>
    </>

    );
};

export default App;