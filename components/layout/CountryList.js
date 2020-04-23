import React, { useState } from "react";
import Button from "../styled/Button";
import Block from "../styled/Block";
import HeaderDropdown from "./HeaderDropdown";
import Img from "../styled/Img";
import Txt from "../styled/Txt";
import { useSelector } from "react-redux";

const CountryList = () => {
    const data = useSelector((state) => state.master);
    const countries = Array.isArray(data.countries) ? data.countries : [];

    if (countries.length > 0) {
        return <CountrySelect countries={countries} />;
    }

    return null;
};

const CountrySelect = ({ countries = [] }) => {
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
                    <Block margin="0px 5px">
                        <Txt weight={600}>INR</Txt>
                    </Block>
                    <span>
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
                    </span>
                </Button>
            )}
        >
            <ul>
                {countries.map((country) => (
                    <CountryItem {...country} key={country.id} />
                ))}
            </ul>
        </HeaderDropdown>
    );
};

const CountryItem = ({ title = "" }) => {
    return (
        <li>
            <a>
                <Img
                    width={16}
                    height={13}
                    margin="0px 5px 0px 0px"
                    src="https://api.letsgoal2020.com/media/country_image/india_IPsNQvi.png"
                    alt=""
                />
                <span>{title}</span>
            </a>
        </li>
    );
};

export default CountryList;
