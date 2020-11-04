import React from 'react';
import CollectionItem from '../CollectionItem/CollectionItem';
import {
  CollectionPreviewcontainer,
  PreviewTitle,
  PreviewContainer,
} from './CollectionPreview.styles';

const CollectionPreview = ({ title, items }) => (
  <CollectionPreviewcontainer>
    <PreviewTitle>{title}</PreviewTitle>
    <PreviewContainer>
      {items
        .filter((item, index) => index < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </PreviewContainer>
  </CollectionPreviewcontainer>
);

export default CollectionPreview;
