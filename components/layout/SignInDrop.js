import React,{useState} from "react";
import LoginModalBtn from "./LoginModalBtn";
import Txt from "../styled/Txt";
import P from "../styled/P";
import HeaderDropdown from "./HeaderDropdown";
import Button from "../styled/Button";
import useUser from "../../hooks/redux/user/useUser";
import CountryLink from "../common/CountryLink";
import Block from "../styled/Block";

const SignInDrop = () => {
    const user = useUser();
const[toggle,settoggle]=useState(false);
    return (
        <HeaderDropdown
        toggle={null}
            btn={
                <Button>
                    <div>
                        <P
                            lineHeight={1}
                            fontSize="16px"
                            weight={400}
                            margin="0px"
                        >
                            Hello,{" "}
                            {user.user
                                ? user.user.first_name || "User"
                                : "Sign In"}
                        </P>
                        <Txt lineHeight={1} fontSize="16px" weight={600}>
                            Your Account
                        </Txt>
                    </div>
                </Button>
            }
        >
            <ul>
                {user.user && user.user.id ? (
                    <>
                        <li>
                            <CountryLink href="/profile">
                                Your Profile
                            </CountryLink>
                        </li>
                        <li>
                            <CountryLink href="/orders">
                                Your Orders
                            </CountryLink>
                        </li>
                        <li>
                            <CountryLink href="/logout">Logout</CountryLink>
                        </li>
                    </>
                ) : (
                    <li>
                        <Block padding="0px 8px">
                            <LoginModalBtn
                                padding="5px 10px"
                                border="1px solid #000"
                                margin="0px 0px 3px"
                                block
                            >
                                Sign In
                            </LoginModalBtn>
                            <div>
                                <LoginModalBtn inline isSignUp>
                                    <Txt
                                        fontSize="12px"
                                        weight={500}
                                        textDecor="underline"
                                    >
                                        New User? Sign Up
                                    </Txt>
                                </LoginModalBtn>
                            </div>
                        </Block>
                    </li>
                )}
            </ul>
        </HeaderDropdown>
    );
};

export default SignInDrop;
