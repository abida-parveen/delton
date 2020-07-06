import React from 'react'
import './CollectionPreview.style.scss'
import CollectionItem from '../collectionItem/CollectionItem.component'

const CollectionPreview = ({title,items}) => {
    //const {items,title} = props;
    return(
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {
                items.filter((item,idx)=>idx<4)
                .map( item => (
                    <CollectionItem key={item.id} item={item}></CollectionItem>
                ))
            }
        </div>
    </div>)
}
export default CollectionPreview