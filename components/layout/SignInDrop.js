import React from "react";
import LoginModalBtn from "./LoginModalBtn";
import Txt from "../styled/Txt";
import P from "../styled/P";
import HeaderDropdown from "./HeaderDropdown";
import Button from "../styled/Button";
import useUser from "../../hooks/redux/user/useUser";

const SignInDrop = () => {
    const user = useUser();

    console.log(user);

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
                            <a>Your Profile</a>
                        </li>
                        <li>
                            <a>Your Orders</a>
                        </li>
                        <li>
                            <Button inline>Logout</Button>
                        </li>
                    </>
                ) : (
                    <li>
                        <LoginModalBtn
                            padding="5px 10px"
                            border="1px solid #000"
                            block
                            margin="0px 0px 5px"
                        >
                            Sign In
                        </LoginModalBtn>
                        <P fontSize="12px" margin="0px">
                            New User ?{" "}
                            <LoginModalBtn inline isSignUp>
                                <Txt weight={500} textDecor="underline">
                                    Sign Up
                                </Txt>
                            </LoginModalBtn>
                        </P>
                    </li>
                )}
            </ul>
        </HeaderDropdown>
    );
};

export default SignInDrop;
