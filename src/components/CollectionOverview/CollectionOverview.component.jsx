import React from 'react'
import './CollectionOverview.styles.scss'
import CollectionPreview from '../CollectionPreview/CollectionPreview.component'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCollectionsForPreview } from '../../redux/shop/Shop.selector'

const CollectionOverview = ({ collections }) => {
    return (
        <div className='collections-overview'>
            {
                collections.map(({id,...otherCollectionProps}) => 
                    <CollectionPreview key={id} {...otherCollectionProps}></CollectionPreview>
                )
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionOverview)
