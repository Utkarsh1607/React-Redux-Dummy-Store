import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 99,
    title: "Headphone",
    description: "Best Quality Boat Headphone.",
  },
  {
    id: "p2",
    price: 149,
    title: "Trimmer",
    description: "Best Quality Phillips Trimmer.",
  },
  {
    id: "p3",
    price: 1999,
    title: "MacBook Air",
    description: "Best Quality Apple Laptop.",
  },
  {
    id: "p4",
    price: 499,
    title: "IPhone",
    description: "Best Quality Apple Phone.",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((prod) => (
          <ProductItem
            id={prod.id}
            key={prod.id}
            title={prod.title}
            price={prod.price}
            description={prod.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
