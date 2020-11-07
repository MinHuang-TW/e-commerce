import styled from 'styled-components';

export const CheckoutContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const TextContainer = styled.span`
  width: 23%;
`;

export const QantityContainer = styled(TextContainer)`
  display: flex;
  align-items: center;

  span {
    margin: 0 16px;
  }

  div {
    cursor: pointer;
    font-size: 32px;
  }
`;

export const RemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;
