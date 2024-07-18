import React from 'react'
import "./NewCollection.css"
import new_collections from '../Assets/new_collections'
import Item from '../Items/Item'

const NewCollection = () => {

    return (
        <div className='new-collections'>
            <h1>NEW COLLECTION</h1>
            <hr />
            <div className='collections'>
                {
                    new_collections.map((collection, index) => {
                        return (
                            <Item {...collection} key={index} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default NewCollection