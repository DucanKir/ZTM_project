import React from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './shop-page.styles.scss'
import CollectionPreview from '../../components/preview-collection/preview-collection.component';
import { selectCollections} from '../../redux/shop/shop.selector';

const ShopPage = ({collections}) => (
    <div className="shop-page">
        {
            collections.map(({id, ...collectionProps }) => (
                <CollectionPreview key={id} {...collectionProps} />
            ))
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})

export default connect(mapStateToProps)(ShopPage);