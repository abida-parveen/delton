import React from 'react';
import './shop.style.scss';
import CollectionOverview from '../../components/CollectionOverview/CollectionOverview.component';
import { Route } from 'react-router-dom';
import CollectionPage from '../Collection/Collection.component';

const ShopPage = ({ match }) =>
{
    return(
        <div>
            <Route exact path={`${match.path}`} component={CollectionOverview} />
            <Route exact path={`${match.path}/:collectionId`} component={CollectionPage} />
        </div>
    )
}

export default ShopPage