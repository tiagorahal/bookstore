import categoryList from '../../lists/categorylist';

const allCategories = categoryList.map((cat) => <h3 key={cat.id}>{cat.category}</h3>);

const Categories = () => (
  <div className="container has-navbar">
    { allCategories }
  </div>
);

export default Categories;
