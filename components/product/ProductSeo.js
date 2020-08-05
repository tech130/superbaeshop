import React from "react";
import Head from "next/head";
import useProduct from "../../hooks/redux/product/useProduct";

const ProductSeo = ({ slug }) => {
    const { id, title, thumbnail_image } = useProduct(slug);

    if (!id) {
        return null;
    }
    return (
        <Head>
            {title && (
                <>
                    <title>{title} | Space and Beauty</title>
                    <meta
                        property="og:title"
                        content={`${title} | Space and Beauty`}
                    />
                </>
            )}
            <meta property="og:type" content="product" />
            {thumbnail_image && (
                <>
                    <meta property="og:image" content={thumbnail_image} />
                </>
            )}
        </Head>
    );
};

export default ProductSeo;
