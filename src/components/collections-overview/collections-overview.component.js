import Reat from 'react';
import { connect } from 'react-redux';
import {createStructuredSelector}  from 'reselect';
import { selectCollectionsForPreview} from '../../redux/shop/shop.selector';

import CollectionPreview from '../preview-collection/preview-collection.component';

import './collections-overview.styles.scss';

const collectionsOverview = ({collections}) => (
    <div className="collections-overview">
        {
            collections.map(({id, ...collectionProps }) => (
                <CollectionPreview key={id} {...collectionProps} />
            ))
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(collectionsOverview)