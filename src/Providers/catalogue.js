import { createContext, useState } from "react";

export const CatalogueContext = createContext([]);

export const CatalogueProvider = ({ children }) => {
  const [catalogue, setCatalogue] = useState([
    { name: "Arroz", price: 30 },
    { name: "Picanha", price: 500 },
    { name: "Acém Moído", price: 100 },
  ]);

  const addToCatalogue = (item) => {
    setCatalogue([...catalogue, item]);
  };
  const removeFromCatalogue = (item) => {
    const newCatalogue = catalogue.filter(
      (itemCatalogue) => itemCatalogue.name !== item.name
    );
    setCatalogue(newCatalogue);
  };

  return (
    <CatalogueContext.Provider
      value={{ catalogue, addToCatalogue, removeFromCatalogue }}
    >
      {children}
    </CatalogueContext.Provider>
  );
};
