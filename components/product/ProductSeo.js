import React from "react";
import Head from "next/head";
import useProduct from "../../hooks/redux/product/useProduct";
import { useRouter } from "next/router";

const metaTitle = "A women's club built for growth, creativity & community.";

const ProductSeo = ({ slug }) => {
    const { asPath } = useRouter();
    const { id, thumbnail_image, short_descriptions } = useProduct(slug);

    if (!id) {
        return null;
    }
    return (
        <Head>
            <title>{metaTitle}</title>
            <meta property="og:title" content={metaTitle} />
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
