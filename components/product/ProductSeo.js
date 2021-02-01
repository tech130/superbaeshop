import React from "react";
import Head from "next/head";
import useProduct from "../../hooks/redux/product/useProduct";
import { useRouter } from "next/router";

const ProductSeo = ({ slug }) => {
    const { asPath } = useRouter();
    const { id, title, thumbnail_image, short_descriptions } = useProduct(slug);

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
            <meta
                property="og:url"
                content={`https://spaceandbeauty.com${asPath}`}
            />
            <meta property="og:type" content="product" />
            {short_descriptions && (
                <>
                    <meta name="description" content={short_descriptions} />
                    <meta
                        property="og:description"
                        content={short_descriptions}
                    />
                </>
            )}
            {thumbnail_image && (
                <>
                    <meta property="og:image" content={thumbnail_image} />
                </>
            )}
        </Head>
    );
};

export default ProductSeo;
