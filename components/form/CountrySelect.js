import React, { useCallback, useState, useEffect } from "react";
import styled from "styled-components";
import dialCodes from "../../utils/dialCodes";
import useDropDown from "../../hooks/layout/useDropDown";
import Flex from "../styled/Flex";
import Txt from "../styled/Txt";
import CaretDown from "../icons/CaretDown";

const countryList = Object.values(dialCodes);

const Con = styled.div`
    position: relative;
`;

const ConList = styled.ul`
    list-style: none;
    position: absolute;
    display: block;
    top: calc(100% + 2px);
    left: 0;
    right: 0;
    z-index: 1000;
    width: 100%;
    background: #fff;
    box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.03);
    padding: 3px 0;
    border: 1px solid #ced4da;
    max-height: 175px;
    overflow-y: scroll;

    li {
        padding: 5px 10px;
        font-size: 14px;
        cursor: pointer;
    }
`;

const CountrySelect = ({
    value = "",
    setValue = null,
    valKey = "name",
    placeholder,
}) => {
    const [el, open, toggle] = useDropDown();
    const [country, setCountry] = useState(value);

    // useEffect(() => {
    //     if (setValue && val) {
    //         setValue(isDialCode ? val.dialCode : val.name);
    //     }
    // }, [val]);

    return (
        <Con ref={el}>
            <Flex
                onClick={toggle}
                height="40px"
                padding="0.375rem 0.75rem"
                border="1px solid #ced4da"
                alignItems="center"
                justifyContent="space-between"
            >
                <div>
                    {country ? (
                        <>
                            <FlagIcon countryCode={country} />
                            <Txt color="#000" margin="0px 10px 0px">
                                {dialCodes[country][valKey] || ""}
                            </Txt>
                        </>
                    ) : (
                        <Txt color="#8e8e8e">{placeholder}</Txt>
                    )}
                </div>
                <CaretDown size={16} />
            </Flex>
            {open && (
                <CountryList
                    onClick={(value) => {
                        setCountry(value);
                        toggle();
                    }}
                />
            )}
        </Con>
    );
};

const CountryList = ({ onClick }) => {
    return (
        <ConList>
            {countryList.map((con) => (
                <li onClick={() => onClick(con.countryCode)}>
                    <FlagIcon
                        margin="0px 10px 0px 0px"
                        countryCode={con.countryCode}
                    />
                    <span>{con.name}</span>
                </li>
            ))}
        </ConList>
    );
};

const Flag = styled(Txt)`
    border: 1px solid #eee;
`;

const FlagIcon = ({ countryCode = "", ...rest }) => {
    return (
        <Flag
            {...rest}
            className={`flag-icon flag-icon-${countryCode.toLowerCase()}`}
        ></Flag>
    );
};

export default CountrySelect;
