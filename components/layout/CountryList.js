import React from "react";
import Button from "../styled/Button";
import Block from "../styled/Block";
import HeaderDropdown from "./HeaderDropdown";
import Img from "../styled/Img";
import Txt from "../styled/Txt";
import Link from "next/link";
import { useActiveCountry } from "../common/CountryLink";
import CaretDown from "../icons/CaretDown";
import { useRouter } from "next/router";

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
                        <CaretDown size={14} />
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
    const router = useRouter();
    const { pathname } = router;

    return (
        <li>
            <Link
                href={pathname}
                as={pathname.replace("[country]", code2.toLowerCase())}
            >
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
