import {CategoryContainer, BackgroundImage, CategoryBodyContainer} from  "./category-item.styles.jsx";
import { useNavigate } from "react-router-dom";

const CategoryItem = ({ category }) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(`shop/${title}`);

  return (
    <>
      <CategoryContainer onClick={onNavigateHandler}>
        <BackgroundImage imageUrl={imageUrl} />
        <CategoryBodyContainer>
          <h2>{title.toLocaleUpperCase()}</h2>
          <p>Shop Now</p>
        </CategoryBodyContainer>
      </CategoryContainer>
    </>
  );
};

export default CategoryItem;
