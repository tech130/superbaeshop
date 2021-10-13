import PopSocketPage from "../../../components/pop-socket/PopSocketPage";
import ProductPage from "../../../components/product/ProductPage";
import slug from "../../../components/professional-planner/slug";

export default ProductPage(slug, PopSocketPage);

// import React from "react";
// import Layout from "../../../components/layout/Layout";
// import Block from "../../components/styled/Block";
// import { common } from "../../redux/handlePages";
// import PopSocketPage from "../../../components/pop-socket/PopSocketPage";
// const PopSocket = () => {
//     return (
//         <Layout>
            
//             <Block padding="0px 0px">
//                 <PopSocketPage />
//             </Block>
            
//         </Layout>
//     );
// };

// PopSocket.getInitialProps = async (ctx) => {
//     await common(ctx, true);
// };

// export default PopSocket;