import React from "react";
import styled from "styled-components";
import useDropDown from "../../hooks/layout/useDropDown";
import Flex from "../styled/Flex";
import Txt from "../styled/Txt";
import CaretDown from "../icons/CaretDown";
import Button from "../styled/Button";

export const SelectCon = styled.div`
    position: relative;
`;

export const OptionsCon = styled.div`
    list-style: none;
    position: absolute;
    display: block;
    top: calc(100% + 2px);
    left: 0;
    right: 0;
    z-index: 1000;
    min-width: 100%;
    background: #fff;
    box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.03);
    padding: 3px 0;
    border: 1px solid #ced4da;
    max-height: 175px;
    overflow-y: scroll;
`;

export const TxtElipsis = styled.div`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const OptionButton = styled(Button)`
    justify-content: start;
    padding: 5px 10px;
`;

const Option = ({ name = "", onClick = null }) => {
    return (
        <OptionButton onClick={onClick}>
            <TxtElipsis>{name}</TxtElipsis>
        </OptionButton>
    );
};

const ValueCon = ({ name = "" }) => {
    return <Txt>{name}</Txt>;
};

const CustomSelect = ({
    value = {},
    setValue = null,
    options = [],
    valueKey = "id",
    nameKey = "name",
    placeholder,
    RenderOption = Option,
    RenderValue = ValueCon,
}) => {
    const [el, open, toggle] = useDropDown();

    return (
        <SelectCon ref={el}>
            <Flex
                onClick={toggle}
                height="40px"
                padding="0.375rem 0.75rem"
                border="1px solid #ced4da"
                alignItems="center"
                justifyContent="space-between"
            >
                <TxtElipsis>
                    {value[nameKey] ? (
                        <RenderValue
                            name={value[nameKey]}
                            value={value}
                            options={options}
                        />
                    ) : (
                        <Txt color="#8e8e8e">{placeholder}</Txt>
                    )}
                </TxtElipsis>
                <CaretDown size={16} />
            </Flex>
            {open && (
                <OptionsCon>
                    {options.map((option, idx) => (
                        <RenderOption
                            onClick={() => {
                                setValue(option[valueKey]);
                                toggle();
                            }}
                            options={options}
                            option={option}
                            value={value}
                            idx={idx}
                            key={idx}
                        />
                    ))}
                </OptionsCon>
            )}
        </SelectCon>
    );
};

export default CustomSelect;
