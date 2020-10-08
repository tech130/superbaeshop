import React from "react";
import CartIcon from "../icons/CartIcon";
import Flex from "../styled/Flex";
import styled from "styled-components";
import { Container } from "styled-bootstrap-grid";
import Ul from "../styled/Ul";
import CountryList from "./CountryList";
import SignInDrop from "./SignInDrop";
import CountryLink from "../common/CountryLink";
import { useCartCount } from "../../hooks/redux/checkout/useCart";

const Hdr = styled.div`
    border-bottom: 1px solid #eaeaea;
`;

const Hdrli = styled.li`
    margin-left: 20px;
    display: flex;
    align-items: center;
    position: relative;
`;

const CartCountStl = styled.span`
    display: inline-block;
    text-align: center;
    border-radius: 16px;
    line-height: 16px;
    height: 16px;
    min-width: 16px;
    background: #000;
    color: #fff;
    font-size: 10px;
    position: absolute;
    top: 2px;
    left: 12px;
`;

const HeaderLogo = styled.img`
    height: 25px;

    @media only screen and (min-width: 575px) {
        height: 30px;
    }
`;

const Header = () => {
    return (
        <>
            <Hdr>
                <Container>
                    <Flex
                        as="nav"
                        justifyContent="space-between"
                        alignItems="center"
                        minHeight="50px"
                    >
                        <CountryLink>
                            <picture>
                                <source
                                    media="(min-width:575px)"
                                    srcSet="/images/logo.png"
                                />
                                <HeaderLogo
                                    src={`/images/logo-small.png`}
                                    alt="space and beauty logo"
                                />
                            </picture>
                        </CountryLink>
                        <Ul alignItems="stretch">
                            <Hdrli>
                                <CountryLink href="/checkout">
                                    <CartCount />
                                    <CartIcon size={20} />
                                </CountryLink>
                            </Hdrli>
                            <Hdrli>
                                <SignInDrop />
                            </Hdrli>
                            <Hdrli>
                                <CountryList />
                            </Hdrli>
                        </Ul>
                    </Flex>
                </Container>
            </Hdr>
        </>
    );
};

const CartCount = () => {
    const count = useCartCount();
    if (!count) {
        return null;
    }
    return <CartCountStl>{count || 0}</CartCountStl>;
};

export default Header;
