import { all, call, takeLatest, put, select } from 'redux-saga/effects';
import { SIGN_IN_SUCCESS, SIGN_OUT_SUCCESS } from '../user/user-types';
import { getUserCartRef } from '../../firebase/firebase.utils';
import { selectCurrentUser } from '../user/user-selectors';
import { clearCart, setCartFromFirebase } from './cart-actions';
import { selectCartItems } from './cart-selectors';
import { ADD_ITEM, CLEAR_ITEM_FROM_CART, REMOVE_ITEM } from './cart-types';

export function* clearCartOnSignOut() {
  yield put(clearCart());
}

export function* onSignOutSuccess() {
  yield takeLatest(SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* updateCartInFirebase() {
  const currentUser = yield select(selectCurrentUser);

  if (currentUser) {
    try {
      const cartRef = yield getUserCartRef(currentUser.id);
      const cartItems = yield select(selectCartItems);
      yield cartRef.update({ cartItems });
    } catch (error) {
      console.log(error);
    }
  }
}

export function* onCartChange() {
  yield takeLatest(
    [ADD_ITEM, REMOVE_ITEM, CLEAR_ITEM_FROM_CART],
    updateCartInFirebase
  );
}

export function* checkCartFromFirebase({ payload: user }) {
  const cartRef = yield getUserCartRef(user.id);
  const cartSnapshot = yield cartRef.get();
  yield put(setCartFromFirebase(cartSnapshot.data().cartItems));
}

export function* onUserSignIn() {
  yield takeLatest(SIGN_IN_SUCCESS, checkCartFromFirebase);
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess), call(onCartChange), call(onUserSignIn)]);
}
