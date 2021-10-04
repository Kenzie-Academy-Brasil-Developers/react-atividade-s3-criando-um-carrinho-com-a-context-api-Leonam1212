import Button from "../button";

import { useContext } from "react";

import { CatalogueContext } from "../../Providers/catalogue";
import { CartContext } from "../../Providers/cart";

import { Container, List } from "./style";

const ProductList = ({ type }) => {
  const { catalogue } = useContext(CatalogueContext);
  const { cart } = useContext(CartContext);

  const cartTotal = () => {
    return cart.reduce((acc, curr) => acc + curr.price, 0);
  };
  return (
    <Container>
      <List>
        {type === "catalogue" &&
          catalogue.map((item, index) => (
            <li key={index}>
              {item.name}
              <span style = {{color: "#ee5253", fontWeight: "bold"}}>R$ {item.price}</span>
              <Button type={type} item={item} />
            </li>
          ))}

        {type === "cart" &&
          cart.map((item, index) => (
            <li key={index}>
              {item.name}
              <span>R$ {item.price}</span>
              <Button type={type} item={item} />
            </li>
          ))}
      </List>
    </Container>
  );
};
export default ProductList;
