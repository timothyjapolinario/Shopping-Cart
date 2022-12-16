import Header from "../components/Header";

const breadFactory = () => {
  const breadObjects = [{}, {}, {}, {}];
  return [...breadObjects];
};

const BreadList = () => {
  return (
    <div>
      <Header />
      <div className="bread-list">Our Breads</div>
    </div>
  );
};

export default BreadList;
