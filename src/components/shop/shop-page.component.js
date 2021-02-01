import React from 'react';
import { Route } from 'react-router-dom';

import './shop-page.styles.scss'
import CollectionsOverview from '../collections-overview/collections-overview.component';
import CollectionPage from '../../pages/category/collection.component';


const ShopPage = ({match}) => (
    <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionsOverview}/>
        <Route  path={`${match.path}/:categoryId`} component={CollectionPage}/>
    </div>
)


export default ShopPage;