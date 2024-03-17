import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { plusItem, minusItem, removeItem } from '../redux/cart/slice';
import { CartItem as CartItemType } from '../redux/cart/types';
import plusImg from '../assets/img/plus.svg';
import minusImg from '../assets/img/minus.svg';
import deleteImg from '../assets/img/delete.svg';

const CartItem: FC<CartItemType> = ({ id, title, description, imageUrl, price, count }) => {
  const dispatch = useDispatch();

  const onClickPlus = () => {
    dispatch(plusItem(id));
  };

  const onClickMinus = () => {
    dispatch(minusItem(id));
  };

  const onClickRemove = () => {
    dispatch(removeItem(id));
  };
  return (
    <div className="cart-item">
      <div className="cart-item__main">
        <img className="cart-item__img" src={imageUrl} alt="cart-item-img" />
        <div className="cart-item__text">
          <h4 className="cart-item__text-title">{title}</h4>
          <p className="cart-item__text-value">{description}</p>
        </div>
      </div>
      <div className="cart-item__right">
        <div className="cart-item__quantity">
          <button
            className="cart-item__quantity-btn"
            onClick={onClickMinus}
            disabled={count === 1 && true}>
            <img className="cart-item__quantity-img" src={minusImg} alt="cart-arrow-left" />
          </button>
          <p className="cart-item__quantity-counter">{count}</p>
          <button className="cart-item__quantity-btn" onClick={onClickPlus}>
            <img
              className="cart-item__quantity-img"
              src={plusImg}
              alt="cart-arrow-right"
              onClick={onClickPlus}
            />
          </button>
        </div>
        <div className="cart-item__wrap">
          <p className="cart-item__price">{price} ₽</p>
          <img
            className="cart-item__delete"
            src={deleteImg}
            alt="button-delete"
            onClick={onClickRemove}
          />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
