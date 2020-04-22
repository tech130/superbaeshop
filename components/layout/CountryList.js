import React from "react";
import Button from "../styled/Button";
import Block from "../styled/Block";
import Picture from "../common/Picture";
import HeaderDropdown from "./HeaderDropdown";
import Img from "../styled/Img";

const CountryList = () => {
    return (
        <HeaderDropdown
            Btn={({ onClick }) => (
                <Button onClick={onClick}>
                    <Img
                        width={18}
                        height={13}
                        src="https://api.letsgoal2020.com/media/country_image/india_IPsNQvi.png"
                        alt=""
                    />
                    <Block margin="0px 5px">INR</Block>
                    <Button>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={14}
                            height={14}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <polyline points="6 9 12 15 18 9" />
                        </svg>
                    </Button>
                </Button>
            )}
        >
            <ul>
                <li>
                    <a>
                        <Img
                            width={16}
                            height={13}
                            margin="0px 5px 0px 0px"
                            src="https://api.letsgoal2020.com/media/country_image/india_IPsNQvi.png"
                            alt=""
                        />
                        <span>INR</span>
                    </a>
                </li>
                <li>
                    <a>
                        <Img
                            width={16}
                            height={13}
                            margin="0px 5px 0px 0px"
                            src="https://api.letsgoal2020.com/media/country_image/india_IPsNQvi.png"
                            alt=""
                        />
                        <span>INR</span>
                    </a>
                </li>
            </ul>
        </HeaderDropdown>
    );
};

export default CountryList;
