import React from 'react';
import { withRouter } from 'react-router-dom';
import CollectionItem from '../CollectionItem/CollectionItem';
import {
  CollectionPreviewcontainer,
  PreviewTitle,
  PreviewContainer,
} from './CollectionPreview.styles';

const CollectionPreview = ({ title, items, routeName, history, match }) => (
  <CollectionPreviewcontainer>
    <PreviewTitle onClick={() => history.push(`${match.path}/${routeName}`)}>
      {title}
    </PreviewTitle>
    <PreviewContainer>
      {items
        .filter((item, index) => index < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </PreviewContainer>
  </CollectionPreviewcontainer>
);

export default withRouter(CollectionPreview);
