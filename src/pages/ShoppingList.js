// file name: ShoppingList.js

import React from 'react';
import { useState } from 'react';

// Die Komponente ist ein Relikt von RH aus einem früheren Projekt
// Ich behalte sie vorerst, falls sie noch interessante Ideen enthält.
function ShoppingList() {

    // Initialisierung des aktuellen Einkaufsartikels mit useState
    const [currentShoppingItem, setCurrentShoppingItem] = useState({
        id: 1,
        itemName: 'Shoes',
        price: 20.23,
        currency: '€'
    })

    // Funktion zum Aktualisieren des aktuellen Einkaufsartikels
    function handleOnChange(event) {
        const { name, value } = event.target;
        setCurrentShoppingItem({ ...currentShoppingItem, [name]: value })
    }

    // Funktion zum Hinzufügen des aktuellen Einkaufsartikels zur Liste
    function handleShoppingItemSubmit(event) {
        event.preventDefault();

        console.log(currentShoppingItem);

        window.location.reload();
    }

    // Render-Methode
    return (<div>
        <div className='shopping-list'>
            <h1>Shopping List</h1>
            <ul>
                <li key={currentShoppingItem.id}>{currentShoppingItem.itemName} - {currentShoppingItem.price} - {currentShoppingItem.currency}</li>
            </ul>
        </div>

        <div className='form-shopping-item'>
            <form onSubmit={(event) => handleShoppingItemSubmit(event)}>
                <label htmlFor='itemName'>Item Name</label>
                <input
                    id='itemName'
                    name='itemName'
                    value={currentShoppingItem.itemName}
                    onChange={(event) => handleOnChange(event)}
                />

                <label htmlFor='price'>Price</label>
                <input
                    id='price'
                    name='price'
                    type='text'
                    value={currentShoppingItem.price}
                    onChange={(event) => handleOnChange(event)}
                />

                <label htmlFor='currency'>Currency</label>
                <input
                    id='currency'
                    name='currency'
                    type='text'
                    value={currentShoppingItem.currency}
                    onChange={(event) => handleOnChange(event)}
                />

                <button type='submit'>Add</button>
            </form>

        </div>
    </div>
    );
}
export default ShoppingList;