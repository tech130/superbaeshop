import React,{useState, useRef, useEffect } from "react";
import Button from "../styled/Button";
import Block from "../styled/Block";
import HeaderDropdown from "./HeaderDropdown";
import Img from "../styled/Img";
import Txt from "../styled/Txt";
import Link from "next/link";
import { useActiveCountry } from "../common/CountryLink";
import CaretDown from "../icons/CaretDown";

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
    const wrapperRef = useRef(null);
    const[toggle,settoggle]=useState(false);
    useEffect(() => {
        document.addEventListener("click", handleClickOutside, false);
        return () => {
          document.removeEventListener("click", handleClickOutside, false);
        };
      }, []);
      const handleClickOutside = event => {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
            settoggle(false);
        }
      };
    return (
        <div ref={wrapperRef}>

        <HeaderDropdown
        toggle={toggle}
            btn={
                <Button onClick={()=>{settoggle(!toggle)}}>
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
            }
        >
            <ul>
                {countries.map((country) => (
                    <CountryItem {...country} toggle={toggle} settoggle={settoggle} key={country.id} />
                ))}
            </ul>
        </HeaderDropdown>
        </div>
    );
};

const CountryItem = ({
    title = "",
    image,
    code2 = "",
    code = "",
    currency_type = "",
    settoggle="",
    toggle=false
}) => {
    return (
        <li  onClick={()=>{settoggle(!toggle)}}>
            <Link href={"/[country]"} as={`/${code2.toLowerCase()}`}>
                <a>
                    <Img
                        width={16}
                        height={13}
                        margin="0px 5px 0px 0px"
                        src={image}
                        alt={`${title} flag`}
                        loading="lazy"
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
