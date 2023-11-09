import React, { useState } from "react";
import todo from "../images/todologo.png";

const Todo = () => {
  const [inputData, setInputData] = useState();
  const [item, setItem] = useState([]);
  const addItem = () => {
    if (!inputData) {
    } else {
      setItem([...item, inputData]);
      setInputData("");
    }
  };

  // remove item

  const deleteItem = (id) => {
    console.log(id);
    const updataData = item.filter((ele, ind) => {
      return ind !== id;
    });
    setItem(updataData);
  };

  // remove All

  const removeAll = () => {
    setItem([]);
  };

  return (
    <>
      <div className="todo-wraper">
        <div className="child-div">
          <div className="figure-wrap">
            <figure>
              <img src={todo} alt="todo logo" />
              <figcaption>Add Your List Here 👍</figcaption>
            </figure>
          </div>
          <div className="add-item">
            <input
              type="text"
              placeholder=" 👌 Add Item"
              id=""
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
            />
            <i
              className="fas fa-plus add-btn"
              title="Add Item"
              onClick={addItem}
            ></i>
          </div>
          <div className="show-items">
            {item.map((ele, ind) => {
              return (
                <div className="eachitem" key={ind}>
                  <h3>{ele}</h3>
                  <div>
                    <i
                      className="fas fa-trash-alt edit-btn"
                      title="Delete Item"
                      onClick={() => deleteItem(ind)}
                    ></i>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="btn-sec mt-2">
            <button data-sm-link-text="Remove All" onClick={removeAll}>
              <span>Check List</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
