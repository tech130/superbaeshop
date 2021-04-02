import { useRouter } from "next/router";
import { Col, Container, Row } from "styled-bootstrap-grid";
import styled from "styled-components";
import useToggle from "../../hooks/useToggle";
import CountryLink, { useCountryParam } from "../common/CountryLink";
import Modal from "../modal/Modal";
import ModalHeader from "../modal/ModalHeader";
import { ProductImage } from "../product/ProductItem";
import Block from "../styled/Block";
import Button from "../styled/Button";
import Txt from "../styled/Txt";

const Type1Styl = styled(Button)`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    text-align: center;
    font-size: 14px;
    margin-bottom: 20px;
    padding: 15px 0px;
    border: 1px solid #eaeaea;
`;

const CatImgStyl = styled.div`
    width: 60px;
    height: 60px;
    background: ${(props) => (props.hasImage ? "transparent" : "#f3f3f3")};
    margin-bottom: 10px;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;

const SubCatLink = styled(CountryLink)`
    display: block;
    font-size: 16px;
    margin-bottom: 15px;
`;

const Type1 = ({ id, image, sub_categories = [], title }) => {
    const country = useCountryParam();
    const router = useRouter();
    const { toggle, onTrue, onFalse } = useToggle();

    const onClick = () => {
        if (sub_categories.length > 0) {
            onTrue();
        } else {
            router.push(
                `/[country]/product/?category=${id}`,
                `/${country}/product/?category=${id}`
            );
        }
    };

    return (
        <>
            <Type1Styl onClick={onClick}>
                {!!image && (
                    <CatImgStyl>
                        <img loading="lazy" src={image} alt={title} />
                    </CatImgStyl>
                )}
                <span>{title}</span>
            </Type1Styl>
            <Modal isOpen={toggle} close={onFalse}>
                <ModalHeader
                    desc={
                        <CountryLink href="/product" query={{ category: id }}>
                            <Txt textDecor="underline">View all products</Txt>
                        </CountryLink>
                    }
                    title={title}
                    closeModal={onFalse}
                />
                <Block padding="15px 5px">
                    <Container fluid>
                        <Row>
                            {sub_categories.map((x) => (
                                <Col lg={4} md={6} key={x.id}>
                                    <SubCatLink
                                        href="/product"
                                        query={{ sub_category: x.id }}
                                    >
                                        {x.title}
                                    </SubCatLink>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </Block>
            </Modal>
        </>
    );
};

const Title = styled.div`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 600;
    text-align: center;
`;

const ProductLink = styled(CountryLink)`
    display: block;

    &:hover {
        text-decoration: underline;
    }
`;

const Type2 = ({ thumbnail_image, slug, title, is_barter }) => {
    return (
        <Block margin="0px 0px 25px 0px">
            <ProductLink
                href={is_barter ? `/product/${slug}` : "/product/[productSlug]"}
                query={is_barter ? {} : { productSlug: slug }}
            >
                <Block margin="0px 0px 10px 0px">
                    <ProductImage src={thumbnail_image} alt={title} />
                </Block>
                <Block>
                    <Title title={title}>{title}</Title>
                </Block>
            </ProductLink>
        </Block>
    );
};

const CategoryList = ({ categories = [] }) => {
    if (categories.length === 0) {
        return null;
    }
    if (categories.length === 1) {
        const { show_products } = categories[0];
        return (
            <Row>
                {show_products.map((x) => (
                    <Col col={6} lg={3} md={4} key={x.id}>
                        <Type2 {...x} />
                    </Col>
                ))}
            </Row>
        );
    }
    return (
        <Row>
            {categories.map((x) => (
                <Col lg={2} md={3} col={4} key={x.id}>
                    <Type1 {...x} />
                </Col>
            ))}
        </Row>
    );
};

export default CategoryList;
