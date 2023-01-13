import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";
import "./FeaturedProducts.scss";

const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );
  console.log(data);
  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quis
          saepe maxime illum dolores, ex ad harum quia eos mollitia earum
          aliquam beatae, quasi recusandae dolorem enim vitae error quibusdam
        </p>
      </div>
      <div className="bottom">
        {error
          ? "Something went wrong"
          : loading
          ? "Loading..."
          : data?.map((i) => <Card item={i} key={i.id} />)}
      </div>
    </div>
  );
};

export default FeaturedProducts;
