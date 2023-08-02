import React from 'react';
import { useState } from 'react';

function ShoppingList() {


    const [currentShoppingItem, setCurrentShoppingItem] = useState({
        id: 1,
        itemName: 'Shoes',
        price: 20.23,
        currency: '€'
    })

    function handleOnChange(event) {
        const { name, value } = event.target;
        setCurrentShoppingItem({ ...currentShoppingItem, [name]: value })
    }

    function handleShoppingItemSubmit(event) {
        event.preventDefault();

        console.log(currentShoppingItem);

        window.location.reload();
    }

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