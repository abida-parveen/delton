import React from 'react'
import './Collection.styles.scss'
import { selectCollection } from '../../redux/shop/Shop.selector'
import { connect } from 'react-redux'
import CollectionItem from '../../components/collectionItem/CollectionItem.component'

const CollectionPage = ({ collection }) => {
    const {title,items} = collection
    return (
        <div className='collection-page'>
            <h2 className='title'>{title}</h2>
            <div className='items'>
                {
                    items.map(item=>(
                        <CollectionItem key={item.id} item={item} />
                    ))
                }
            </div>
        </div>
    )
}

const MapStateToProps = ( state, ownProps ) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(MapStateToProps)(CollectionPage)
