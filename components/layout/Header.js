import React, { useEffect,useState } from "react";
import CartIcon from "../icons/CartIcon";
import Flex from "../styled/Flex";
import styled from "styled-components";
import { Container } from "styled-bootstrap-grid";
import Ul from "../styled/Ul";
import CountryList from "./CountryList";
import SignInDrop from "./SignInDrop";
import CountryLink from "../common/CountryLink";
import { useCartCount } from "../../hooks/redux/checkout/useCart";
import { useDispatch } from "react-redux";
import { fetchCart } from "../../redux/user/cart";
import { cartIsOpen } from "../../redux/user/local_cart";

import Cartlist from "../../components/checkout/Cartlist";
import useUser from "../../hooks/redux/user/useUser";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import ProductList from "./ProductList";
import useCart, { useLocalCart,useCartIsOpen } from "../../hooks/redux/checkout/useCart";

const Hdr = styled.div`
    background: hsla(0,0%,100%,.6);
    -webkit-backdrop-filter: blur(40px);
    backdrop-filter: blur(40px);
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
    height: 45px;

    @media only screen and (min-width: 575px) {
        height: 60px;
    }
`;

const Header = () => {
    const [state, setState] = useState({
        isPaneOpen: false,
      });
      const dispatch = useDispatch();

      const isPanel = useCartIsOpen();
      console.log("wewe",isPanel)
    return (
        <>
            <Hdr>
                <Container>
                    <Flex
                        as="nav"
                        justifyContent="space-between"
                        alignItems="center"
                        minHeight="80px"
                        position="relative"
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
                        <div className="d-sm-none d-none d-md-block d-lg-block d-xl-block">
                        <ProductList />
                            </div>
                        <Ul alignItems="stretch">
                            <Hdrli>
                                {/* <CountryLink href="/checkout">
                                    <CartCount />
                                    <CartIcon size={20} />
                                </CountryLink> */}
                                    <div className="cursor-pointer" >
                                        <div onClick={() => dispatch(cartIsOpen(true))}>
                                        
                                            <CartCount />
                                            <CartIcon size={20} />
                                        </div>
                                       
                                        <SlidingPane
                                            className="custom-pane"
                                            overlayClassName="some-custom-overlay-class"
                                            isOpen={isPanel}
                                            title="MY SHOPPING BAG"
                                            width="40%"
                                            shouldCloseOnEsc={false}
                                            onRequestClose={() => {
                                            // setState({ isPaneOpen: false });
                                            dispatch(cartIsOpen(false));
                                            }}
                                        >
                                            <Cartlist />
                                        </SlidingPane>
                                        
                                        </div>
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
    const { token } = useUser();
    const count = useCartCount();
    const dispatch = useDispatch();

    useEffect(() => {
        if (token) {
            dispatch(fetchCart());
        }
    }, [token]);

    if (!count) {
        return null;
    }
    return <CartCountStl>{count || 0}</CartCountStl>;
};

export default Header;
