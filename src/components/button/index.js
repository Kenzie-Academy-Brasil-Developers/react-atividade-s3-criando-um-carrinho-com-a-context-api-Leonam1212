import { useContext } from "react";

import { CatalogueContext } from "../../Providers/catalogue";
import { CartContext } from "../../Providers/cart";
import { ButtonStyle } from "./style";

const Button = ({ type, item }) => {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);
  const { Catalogue, addToCatalogue, removeFromCatalogue } =
    useContext(CatalogueContext);

  const text = type === "catalogue" ? "Add to Cart" : "Remove from cart";

  const handleClick = () => {
    if (type === "catalogue") {
      removeFromCatalogue(item);
      addToCart(item);
    } else {
      removeFromCart(item);
      addToCatalogue(item);
    }
  };

  return <ButtonStyle onClick={handleClick}>{text}</ButtonStyle>;
};
export default Button;
