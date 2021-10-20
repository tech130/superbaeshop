import React from "react";
import Block from "../styled/Block";
import Flex from "../styled/Flex";
import Txt from "../styled/Txt";
import Marquee from "react-fast-marquee";
import ProductBuy from "../product/ProductBuy";
import { Container, Row, Col } from "styled-bootstrap-grid";
import MainHeading from "../styled/MainHeading";
import AnimateText from "../styled/AnimateText";
// import image1 from './images/ultimate-bundle/Desk.jpg';
// import image2 from './images/ultimate-bundle/Wall.jpg';
// import image3 from './images/ultimate-bundle/weekly.jpg';
// import image4 from './images/ultimate-bundle/laptop.jpg';
// import image5 from './images/ultimate-bundle/Slam.jpg';
import ResponsiveImage from "../common/ResponsiveImage";

import { ProductPrices } from "../product/ProductPrice";
import useProduct from "../../hooks/redux/product/useProduct";
import styled from "styled-components";

const MainDiv = styled.div`
  height:250px !important;
  border-radius:10px;
  margin: 10px 0px;
  display: flex;
  @media (max-width: 576px) {
    align-items: center;
    justify-content: center;
    margin: 25px 0px;
}
`;
const MainDiv2 = styled.div`
  height:100% !important;
  display: flex;
  align-items: center;
  margin: 0px 15px;
  border: 1px solid transparent;
  box-shadow:  1px 1px 16px 1px #efebff;
  border-radius: 20px;
  overflow: hidden;
  img{
    width:250px;
  }
`;



const scrollTexts = [
    {
        key: ['./images/ultimate-bundle/Desk.jpg',
            './images/ultimate-bundle/Wall.jpg',
            './images/ultimate-bundle/weekly.jpg',
            './images/ultimate-bundle/Newlaptop.jpg',
            './images/ultimate-bundle/Slam.jpg']
    },

];
const UltimateBundle = () => {

    let tempProduct = useProduct("lets-goal-2021-planner");
    let product = tempProduct.sub_product;
    let product_country = product.product_country;
    // const productCountry = useProdCountry(product_country[0]);
    const productCountry = product_country[0];
    return (
        <Block padding="0px 0px 65px 0px" className="overflow-hidden">
            <div className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                <Flex vertical width="100%" alignItems="center" margin="0">
                    <Flex alignItems="center" margin="0px 0px 30px 0" >
                        <MainHeading textAlign="center" mb="0px">Add these and get your <AnimateText> bundle </AnimateText></MainHeading>

                    </Flex>


                    <Flex className="overflow-hidden">
                        <Marquee
                            play={true}
                            speed={50}
                            // gradientWidth={200}
                            gradient={false}
                            // loop={0}
                            delay={0}
                            style={{
                                padding: "0.6rem 0",
                                overflow: "hidden",
                            }}
                        >
                            {scrollTexts.map((name, ind) => {
                                return (

                                    <MainDiv key={ind}>
                                        {
                                            name.key.map((item, ind) => {
                                                return (
                                                    <MainDiv2 key={ind}>

                                                        <ResponsiveImage
                                                            image={require(`${item}?resize`)}
                                                        />
                                                        {/* <img src={item} /> */}
                                                    </MainDiv2>
                                                )
                                            })
                                        }

                                    </MainDiv>
                                );
                            })}
                        </Marquee>
                    </Flex>
                    <Flex alignItems="center" margin="30px 0px 0px 0px" >
                        <Txt fontSize="18px" weight="700" lineHeight="1.1" color="#777777" >Priced just right at  </Txt>

                        <Txt
                            textDecor={"none"}
                            margin="0px 8px 0px 10px"
                            weight={700}
                            fontSize="16px"

                        >

                            {productCountry.country.currency_type}
                            {1 * (productCountry["selling_price"] || 0)}{" "}
                        </Txt>
                        <Txt
                            margin="0px 8px 0px 0px"
                            weight={600}
                            color="#999999"
                            fontSize="14px"
                            textDecor={"line-through "}

                        >
                            {productCountry.country.currency_type}
                            {1 * (productCountry["original_price"] || 0)}{" "}
                        </Txt>
                        {/* <ProductPrices slug={"lets-goal-2021-planner"} addition="bundle-2021" /> */}

                    </Flex>
                    <Flex alignItems="center" margin="10px 0px 0px 0px" >
                        {/* <ProductBuy slug={"lets-goal-2021-planner"} addition="bundle-2021" /> */}
                        <ProductBuy slug={'bundle-2021'} />

                    </Flex>
                </Flex>
            </div>
            <div className="d-block d-sm-none d-md-none d-lg-none d-xl-none">
                <Container>
                    <Flex vertical width="100%" alignItems="center" margin="0">
                        <Flex alignItems="center" margin="0px 0px 30px 0" >
                            <MainHeading textAlign="center" mb="0px">Add these and get your <AnimateText> bundle </AnimateText></MainHeading>

                        </Flex>
                    </Flex>
                    {scrollTexts.map((name, ind) => {
                        return (

                            <Row key={ind}>
                                {
                                    name.key.map((item, index) => {
                                        return (
                                            <Col key={index} sm={12} xs={12}>
                                                <MainDiv key={ind}>
                                                    <MainDiv2 >
                                                        <ResponsiveImage
                                                            image={require(`${item}?resize`)}
                                                        />

                                                        {/* <img src={item} /> */}
                                                    </MainDiv2>
                                                </MainDiv>
                                            </Col>
                                        )
                                    })
                                }
                            </Row>


                        );
                    })}
                    <Flex vertical width="100%" alignItems="center" margin="0">
                        <Flex alignItems="center" margin="30px 0px 0px 0px" >
                            <Txt fontSize="18px" weight="700" lineHeight="1.1" color="#777777" >Priced just right at  </Txt>

                            <Txt
                                textDecor={"none"}
                                margin="0px 8px 0px 10px"
                                weight={700}
                                fontSize="16px"

                            >

                                {productCountry.country.currency_type}
                                {1 * (productCountry["selling_price"] || 0)}{" "}
                            </Txt>
                            <Txt
                                margin="0px 8px 0px 0px"
                                weight={600}
                                color="#999999"
                                fontSize="14px"
                                textDecor={"line-through "}

                            >
                                {productCountry.country.currency_type}
                                {1 * (productCountry["original_price"] || 0)}{" "}
                            </Txt>
                            {/* <ProductPrices slug={"lets-goal-2021-planner"} addition="bundle-2021" /> */}

                        </Flex>
                        <Flex alignItems="center" margin="10px 0px 0px 0px" >
                            <ProductBuy slug={"lets-goal-2021-planner"} addition="bundle-2021" />

                        </Flex>
                    </Flex>
                </Container>
            </div>
        </Block>

    );
};



export default UltimateBundle;
