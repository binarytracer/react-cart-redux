import { useDispatch, useSelector } from "react-redux";
import classes from "./CartButton.module.css";
import { uiActions } from "../../store/ui-slice";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const totalQty = useSelector((state) => state.cart.totalQuantity);

  function handleCart() {
    dispatch(uiActions.toggle());
  }

  return (
    <button className={classes.button} onClick={handleCart}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQty}</span>
    </button>
  );
};

export default CartButton;
