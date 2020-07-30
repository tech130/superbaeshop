import React from "react";
import LoginModalBtn from "./LoginModalBtn";
import Txt from "../styled/Txt";
import P from "../styled/P";
import HeaderDropdown from "./HeaderDropdown";
import Button from "../styled/Button";
import useUser from "../../hooks/redux/user/useUser";
import CountryLink from "../common/CountryLink";

const SignInDrop = () => {
    const user = useUser();

    return (
        <HeaderDropdown
            Btn={({ onClick }) => (
                <Button onClick={onClick}>
                    <div>
                        <P
                            lineHeight={1}
                            fontSize="12px"
                            weight={400}
                            margin="0px"
                        >
                            Hello,{" "}
                            {user.user
                                ? user.user.first_name || "User"
                                : "Sign In"}
                        </P>
                        <Txt lineHeight={1} fontSize="14px" weight={600}>
                            Your Account
                        </Txt>
                    </div>
                </Button>
            )}
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
                        <LoginModalBtn
                            padding="5px 10px"
                            border="1px solid #000"
                            margin="0px 0px 5px"
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
                    </li>
                )}
            </ul>
        </HeaderDropdown>
    );
};

export default SignInDrop;
