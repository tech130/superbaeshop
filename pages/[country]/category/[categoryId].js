import CategoryDetail from "../../../components/category/CategoryDetail";
import Layout from "../../../components/layout/Layout";
import { common } from "../../../redux/handlePages";
import { fetchCategories } from "../../../redux/product/listing";

const CategoryPage = () => {
    return (
        <Layout>
            <CategoryDetail />
        </Layout>
    );
};

CategoryPage.getInitialProps = async (ctx) => {
    await common(ctx);
    await ctx.store.dispatch(fetchCategories(ctx.query.categoryId));
};

export default CategoryPage;
