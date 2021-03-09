import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { Col, Container, Row } from "styled-bootstrap-grid";
import styled from "styled-components";
import CountryLink, {
    useCountryParam,
} from "../../../components/common/CountryLink";
import Layout from "../../../components/layout/Layout";
import Modal from "../../../components/modal/Modal";
import ModalHeader from "../../../components/modal/ModalHeader";
import Block from "../../../components/styled/Block";
import Button from "../../../components/styled/Button";
import useToggle from "../../../hooks/useToggle";
import { common } from "../../../redux/handlePages";
import {
    categorySelector,
    fetchCategories,
} from "../../../redux/product/listing";

const CatListStyl = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-content: start;
`;

const CatStyl = styled(Button)`
    flex: 0 0 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    text-align: center;
    font-size: 14px;
    margin: 15px;
`;

const CatImgStyl = styled.div`
    width: 50px;
    height: 50px;
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
    padding: 8px 15px;
`;

const CatItem = ({ id, image, sub_categories = [], title }) => {
    const router = useRouter();
    const country = useCountryParam();
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
            <CatStyl onClick={onClick}>
                <CatImgStyl hasImage={!!image}>
                    {image && <img src={image} alt={title} />}
                </CatImgStyl>
                <span>{title}</span>
            </CatStyl>
            <Modal isOpen={toggle} close={onFalse}>
                <ModalHeader title={title} closeModal={onFalse} />
                <Container fluid>
                    <Row>
                        {sub_categories.map((x) => (
                            <Col md={6} key={x.id}>
                                <SubCatLink
                                    href={`/product?sub_category=${x.id}`}
                                >
                                    {x.title}
                                </SubCatLink>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </Modal>
        </>
    );
};

const CategoryPage = () => {
    const { query } = useRouter();
    const { data } = useSelector((state) =>
        categorySelector(state, query.categoryId)
    );

    const list = Array.isArray(data) ? data : [];

    return (
        <Layout>
            <Block padding="35px 0px">
                <Container>
                    <CatListStyl>
                        {list.length > 0 &&
                            list.map((cat) => (
                                <CatItem key={cat.id} {...cat} />
                            ))}
                    </CatListStyl>
                </Container>
            </Block>
        </Layout>
    );
};

CategoryPage.getInitialProps = async (ctx) => {
    await common(ctx);
    await ctx.store.dispatch(fetchCategories(ctx.query.categoryId));
};

export default CategoryPage;
