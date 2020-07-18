import React from "react";
import Button from "../styled/Button";
import Block from "../styled/Block";
import HeaderDropdown from "./HeaderDropdown";
import Img from "../styled/Img";
import Txt from "../styled/Txt";
import Link from "next/link";
import { useActiveCountry } from "../common/CountryLink";

const CountryList = () => {
    const { countries, activeCountry } = useActiveCountry();

    if (countries.length > 0 && activeCountry.id) {
        return (
            <CountrySelect activeCon={activeCountry} countries={countries} />
        );
    }

    return null;
};

const CountrySelect = ({ activeCon = {}, countries = [] }) => {
    return (
        <HeaderDropdown
            Btn={({ onClick }) => (
                <Button onClick={onClick}>
                    <Img
                        width={18}
                        height={13}
                        src={activeCon.image}
                        alt={`${activeCon.title} flag`}
                    />
                    <Block margin="0px 5px">
                        <Txt weight={600}>{activeCon.code}</Txt>
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

const CountryItem = ({ title = "", image, code2, code, currency_type }) => {
    return (
        <li>
            <Link href={`/[country]`} as={`/${code2.toLowerCase()}`}>
                <a>
                    <Img
                        width={16}
                        height={13}
                        margin="0px 5px 0px 0px"
                        src={image}
                        alt={`${title} flag`}
                    />
                    <span>
                        {code} - {currency_type}
                    </span>
                </a>
            </Link>
        </li>
    );
};

export default CountryList;
