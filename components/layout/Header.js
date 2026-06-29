import React, { useEffect } from "react";
import CartIcon from "../icons/CartIcon";
import Flex from "../styled/Flex";
import styled, { keyframes } from "styled-components";
import { Container } from "styled-bootstrap-grid";
import Ul from "../styled/Ul";
import CountryList from "./CountryList";
import SignInDrop from "./SignInDrop";
import CountryLink from "../common/CountryLink";
import { useCartCount } from "../../hooks/redux/checkout/useCart";
import { useDispatch } from "react-redux";
import { fetchCart } from "../../redux/user/cart";
import { cartIsOpen } from "../../redux/user/local_cart";
import { useRouter } from "next/router";
// import Cartlist from "../../components/checkout/Cartlist";
import { CartlistPanel } from "../../components/checkout/Cartlist";
import useUser from "../../hooks/redux/user/useUser";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import ProductList from "./ProductList";
import { useCartIsOpen } from "../../hooks/redux/checkout/useCart";

const Hdr = styled.div`
    background: hsla(0,0%,100%,.8);
    -webkit-backdrop-filter: blur(40px);
    backdrop-filter: blur(40px);
    
    border-bottom: ${(props) => props.border};

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

// const HeaderLogo = styled.img`
//     height: 45px;

//     @media only screen and (min-width: 575px) {
//         height: 60px;
//     }
// `;

const rainbow_animation = keyframes`
    0%,100% {
        background-position: 0 0;
    }

    50% {
        background-position: 100% 0;
    }
`;
const LogoContent = styled.div`
    
`;
const Space = styled.div`
    font-size: 28px;
    background: linear-gradient(90deg,#60bbf1,#c6e1f1,#f57e93,#b4a8ff,#c8f1ff,#eda5b2);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    animation: ${rainbow_animation} 4s ease-in-out infinite;
    background-size: 400% 100%;
    font-weight: 700;
    font-family:"Lato";
    @media only screen and (max-width: 575px) {
        font-size: 26px;
    }
`;
const Beauty = styled.div`
    font-family:"Brittany";
    font-size: 23px;
    margin-top: -10px;
    @media only screen and (max-width: 575px) {
        font-size: 21px;
    }
`;
const BagTitle = styled.div`
    font-size: 18px;
    text-align: center;
    font-weight: 700;
    @media only screen and (max-width: 575px) {
        font-size: 16px;
    }
`;

const Header = () => {
    // const [state, setState] = useState({
    //     isPaneOpen: false,
    //   });

    const dispatch = useDispatch();

    const isPanel = useCartIsOpen();
    const { pathname } = useRouter();
    return (
        <>
            <Hdr border={pathname === "/[country]" ? '1px solid #ddd' : '1px solid #ddd'} >
                <Container>
                    <Flex
                        as="nav"
                        justifyContent="space-between"
                        alignItems="center"
                        minHeight="80px"
                        position="relative"
                    >
                        <CountryLink>
                            {/* <LogoContent>
                                <Space>
                                    SPACE
                                </Space>
                                <Beauty>
                                    and beauty
                                </Beauty>
                            </LogoContent> */}
                            <picture>
                                <img
                                    src="/images/logo.svg"
                                    alt="Logo"
                                    width={80}
                                    height={80}
                                    className="responsive-logo"
                                />

                                {/* <HeaderLogo
                                    src={`/images/logo-small.png`}
                                    alt="space and beauty logo"
                                /> */}
                            </picture>
                            {/* <picture>
                                <source
                                    media="(min-width:575px)"
                                    srcSet="/images/logo.png"
                                />
                                <HeaderLogo
                                    src={`/images/logo-small.png`}
                                    alt="space and beauty logo"
                                />
                            </picture> */}
                        </CountryLink>
                        <div className="d-sm-none d-none d-md-block d-lg-block d-xl-block">
                            <ProductList Show="products" />
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
                                        title={<BagTitle>MY SHOPPING BAG</BagTitle>}
                                        width="40%"
                                        shouldCloseOnEsc={false}
                                        onRequestClose={() => {
                                            // setState({ isPaneOpen: false });
                                            dispatch(cartIsOpen(false));
                                        }}
                                    >
                                        <CartlistPanel />
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
