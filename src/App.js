import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import {SelectExample} from 'components/SelectButton'
import {AddList} from 'components/AddSub'
import {EditList} from 'components/EditButton'


import React, { useRef, useState } from 'react'
import './App.css'
import Card from 'react-bootstrap/Card'

function CRUD() {
    const list = [
        {
            id: 1, 
            name: "Bathroom",
            price: "2222"
        },
        {
            id: 2, 
            name: "Library",
            price: "2445"
        },
    ]
   
    const [lists, setList] = useState(list)
    const [updateState, setUpdateState] = useState(-1)
    const [cardTitle, setCardTitle] = useState("CRUD Table")

    const handleCardTitleChange = (event) => {
        setCardTitle(event.target.value)
    }

    return (
        <Card>
            <Card.Header>
             <div style={{ display: "flex", justifyContent: "center", alignItems: "center", paddingTop: "20px" }}>
                <Card.Title style={{paddingTop:"150px"}}>      
                              
                   <input type="text" value={cardTitle} onChange={handleCardTitleChange} placeholder="Enter Realestate" />
                </Card.Title>
             </div>
            <Card.Body>      
            <SelectExample/>          
                <div className='crud'>
                    <div>
                    <AddList setList = {setList }/>
                    <form onSubmit={handleSubmit}>
                    <table>
                        {
                            lists.map((current) => (
                                updateState === current.id ? <EditList current={current} lists={lists} setList={setList}/> :
                                <tr>
                                    <td>{current.name}</td>
                                    <td>{current.price}</td>
                                    <td>
                                        <button className='edit' onClick={() => handleEdit(current.id)}>Edit</button>
                                        <button className='delete' type='button' onClick={() => handleDelete(current.id)}>Delete</button>
                                    </td>
                                </tr>
                                /*This callback function checks if the value of the updateState variable is equal to current.id.
                                 If true, it returns an <EditList> component with the current, lists, and setList props. If false, it returns a <tr> component containing the information of the current element in lists.
                                This <tr> component will display current information in columns including name and price, and also contains two buttons Edit and Delete. When the user clicks the Edit button, the handleEdit() method will be called with the current.id argument.
                                 When the user clicks the Delete button, the handleDelete() method will be called with the current.id argument.*/
                            ))
                        }
                    </table>
                    </form>
                    </div>
                </div>
                
            </Card.Body>
            </Card.Header>
        </Card>
    )

    function handleEdit(id) {
        setUpdateState(id)
    }

    function handleDelete(id) {
        const newlist = lists.filter((li) => li.id !== id)
        setList(newlist)
    }

    function handleSubmit(event) {
        event.preventDefault()
        const name = event.target.elements.name.value
        const price = event.target.elements.price.value
        const newlist = lists.map((li) => (
            li.id === updateState ? {...li, name:name, price: price} : li
        ))

        setList(newlist)
        setUpdateState(-1)
    }
}


export default CRUD;
