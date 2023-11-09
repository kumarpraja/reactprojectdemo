import React, { useEffect, useState } from "react";
import todo from "../images/todologo.png";


// to get the data from local storage
const getLocalItems = () => {
    let list = localStorage.getItem('lists');
    console.log(list);
    if(list){
        return JSON.parse(localStorage.getItem('lists'));
    }else {
        return [];
    }
}
const TodoEdit = () => {
    const [inputData, setInputData] = useState();
    const [item, setItem] = useState(getLocalItems());
    const [toggleSubmit, setToggleSubmit] = useState(true);
    const [isEditItem, setIsEditItem] = useState(null);
    const [textChange, setTextChange] = useState('Check List')

    const addItem = () => {
        if(!inputData){
            alert('Plz fill the Data');
        } else if(inputData && !toggleSubmit){
            setItem(
                item.map((currEle) => {
                    if(currEle.id === isEditItem){
                        return {...currEle, name:inputData}
                    }
                    return currEle;
                })
                );
                setToggleSubmit(true);
                setInputData('');
                setIsEditItem(null);
        } else {
            const allInputData = {id: new Date().getTime().toLocaleString(), name: inputData}
            console.log(allInputData);
            setItem([...item, allInputData]);
            setInputData('');
        }
    }

    // remove item

    const deleteItem = (index) => {
        const updataData = item.filter((ele) => {
            return index !== ele.id;
        });
        setItem(updataData);
    }

    // edit items
    const editItem = (id) => {
        let newEditItem = item.find((elem)=>{
            return elem.id === id
        })
        setToggleSubmit(false);
        // console.log(newEditItem);
        setInputData(newEditItem.name);
        setIsEditItem(id);
    }
    
    // remove All
    const removeAll = () => {
        setItem([]);
    }
    

    // Add Data to localStorage
    useEffect(() => {
        localStorage.setItem('lists', JSON.stringify(item))
    }, [item]);

    // text change in button remove all
    const handleHover = () => {
        setTextChange('Remove All');
    }
    const handleRemoveHover = () => {
        setTextChange('Check List');
    }
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
            <input type="text" placeholder=" 👌 Add Item" id="" value={inputData} onChange={(e) => setInputData(e.target.value)} />
            {
                toggleSubmit ? <i className="fas fa-plus add-btn" title="Add Item" onClick={addItem}></i> : <i className="fas fa-edit add-btn" title="Update Item" onClick={addItem}></i>
            }
            
          </div>
          <div className="show-items">
            {
                item.map((ele, ind) => {
                    return (
                    <div className="eachitem" key={ele.id}>
                        <h3>{ele.name}</h3>
                        <div>
                            <i className="fas fa-edit edit-btn" title="Edit Item" onClick={() => editItem(ele.id)}></i>
                            <i className="fas fa-trash-alt edit-btn" title="Delete Item" onClick={() => deleteItem(ele.id)}></i>
                        </div>
                    </div>
                    )

                })
            }
          </div>

          <div className="btn-sec mt-2">
            <button data-sm-link-text="Remove All" onClick={removeAll} onMouseEnter={handleHover} onMouseLeave={handleRemoveHover}><span>{textChange}</span></button>
          </div>

          <div className="deleted-item-show">
            <div>
                Ram
            </div>

          </div>

        </div>
      </div>
    </>
  );
};

export default TodoEdit;
