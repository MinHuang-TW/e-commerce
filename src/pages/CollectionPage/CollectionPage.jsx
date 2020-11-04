import React from 'react';
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop-selectors';
import CollectionItem from '../../components/CollectionItem/CollectionItem';
import styled from 'styled-components';

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <CollectionContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItemsContainer>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionItemsContainer>
    </CollectionContainer>
  );
};

const CollectionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const CollectionTitle = styled.h2`
  font-size: 38px;
  margin: 0 auto 30px;
`;

const CollectionItemsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;

  & > div {
    margin-bottom: 30px;
  }
`;

const mapStateToProps = (
  state,
  {
    match: {
      params: { collectionId },
    },
  }
) => ({
  collection: selectCollection(collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
