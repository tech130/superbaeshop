import React, { useEffect } from "react";
import HeroSection from "./HeroSection";
import WhatsInside from "./WhatsInside";
import FreeInclusions from "./FreeInclusions";
import GoodVibes from "./GoodVibes";
import TestimonialSection from "./TestimonialSection";
import StayTuned from "./StayTuned";
import UltimateBundle from "./UltimateBundle";
import PagesSlider from "./PageSlider";
import Block from "../styled/Block";
import { eventOnProductDetailPage } from "../../utils/analytics";
import useProduct from "../../hooks/redux/product/useProduct";
import { useProdCountry } from "../common/CountryLink";



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
const slug = "lets-goal-2021-planner";
const LetsGoal2021 = () => {
    const product = useProduct(slug);

    const productCountry = useProdCountry(product.product_country)
    useEffect(() => {
        eventOnProductDetailPage([product.sku], productCountry.country.code, productCountry.selling_price);
    }, []);
    return (
        <>
            <HeroSection />
            <WhatsInside />
            <PagesSlider />
            <FreeInclusions images={images} slug={slug} />
            <UltimateBundle />
            <Block padding="65px 0px 0px 0px">
                <TestimonialSection />
            </Block>
            <StayTuned />
            <GoodVibes />


        </>
    );
};

export default LetsGoal2021;
