import React, { useEffect } from "react";
import Block from "../styled/Block";
import Banner from './Banner';
import ColorPicker from './ColorPicker';
import PagesSlider from "../lets-goal-2021/PageSlider";
import FreeInclusions from "../lets-goal-2021/FreeInclusions";
import { useProdCountry } from "../common/CountryLink";
import useProduct from "../../hooks/redux/product/useProduct";
import { eventOnProductDetailPage } from "../../utils/analytics";

const images = [
    './images/free-inclusions/planner.jpg',
    './images/free-inclusions/StickerBook.jpg',
    './images/free-inclusions/A5NoteBook.jpg',
    './images/free-inclusions/pocketNotebookcopy.jpg',
    
    './images/free-inclusions/PopSocketcopy.jpg',
    './images/free-inclusions/Badge.jpg',
    './images/free-inclusions/Todolist.jpg',
    './images/free-inclusions/Notes.jpg',
    './images/free-inclusions/Bookmark.jpg',
    './images/free-inclusions/PostCard.jpg',
    './images/free-inclusions/PlayCard.jpg',
]
const slug="my-space-2022-planner-black";
const BlackPlanner = () => {
    const product = useProduct(slug);

    const productCountry = useProdCountry(product.product_country)
    useEffect(() => {
        if (productCountry && productCountry.country) eventOnProductDetailPage([product?.sku], productCountry.country.code, productCountry.selling_price);
    }, []);
    return (
        <>
        <Banner />
          
        <FreeInclusions images={images} slug={slug} />
        <Block padding="0px 0px 45px 0px">

        <ColorPicker slug={slug}/>
        </Block>
        <PagesSlider />
        </>
    );
};





export default BlackPlanner;
