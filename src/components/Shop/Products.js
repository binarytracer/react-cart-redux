import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: 1,
    price: 6,
    title: "My First Book",
    description: "The first book I ever wrote",
  },
  {
    id: 2,
    price: 1,
    title: "My Second Book",
    description: "The second book I ever wrote",
  },
  {
    id: 3,
    price: 21,
    title: "My Third Book",
    description: "The third book I ever wrote",
  },
];

const Products = () => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            title={product.title}
            price={product.price}
            description={product.description}
            key={product.id}
            id={product.id}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
