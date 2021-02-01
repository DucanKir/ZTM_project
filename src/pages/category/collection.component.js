import React from 'react';
import CollectionItem from '../../components/collection-item/collection-item.component';
import { selectCollection } from '../../redux/shop/shop.selector';
import { connect } from 'react-redux';

import './collection.styles.scss';

const CollectionPage = ({collection}) => (
    <div className="collection-page">
        <h1>COLLECTION PAGE</h1>
    </div>
)

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.CollectionId)(state)
})

export default connect (mapStateToProps)(CollectionPage);