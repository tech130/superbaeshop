import React from "react";
import { H4 } from "../styled/Headings";
import Txt from "../styled/Txt";
import { useProdCountry } from "../common/CountryLink";
import useProduct from "../../hooks/redux/product/useProduct";
import ProductBuy from "../product/ProductBuy";
import ProductPrice from "../product/ProductPrice";

const ProPlannerPrice = ({slug}) => {
    const { id, product_country } = useProduct(
        slug
    );
    const productCountry = useProdCountry(product_country);

    if (id && productCountry && productCountry.country) {
        return (
            <>
                <H4 className="responseBottom text-center text-sm-start" mb="15px" fontSize="18px" weight={700}>
                    <Txt  fontSize="18px" lineHeight="1.1" color="#777777" >Priced just right at </Txt>
                    
                    <ProductPrice slug={slug} />
                    {" "}
                    <ProductPrice
                        weight={300}
                        type="original_price"
                        slug={slug}
                    />
                   
                </H4>
                <ProductBuy slug={slug} />
            </>
        );
    }

    return (
        <H4 mb="15px" weight={700}>
            <Txt fontSize="28px" color="#777777">Currently unavailable for your country </Txt>
        </H4>
    );
};

export default ProPlannerPrice;
