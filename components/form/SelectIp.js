import React from "react";
import Select from "react-select";

const mapSelect = (data) =>
    data.reduce((acc, cur) => {
        return [
            ...acc,
            { value: cur.value || cur.id || "", label: cur.label || cur.title },
        ];
    }, []);

const mapGroup = (data, name) =>
    data.reduce((acc, cur) => {
        return [
            ...acc,
            {
                label: cur.label || cur.title || "",
                options: mapSelect(cur[name]),
            },
        ];
    }, []);

const mapData = (options, optgroup) => {
    if (optgroup) {
        return mapGroup(options, optgroup);
    }
    return mapSelect(options);
};

const SelectIp = ({
    options = [],
    optgroup = false,
    setValue = null,
    defaultOptions = [],
    placeholder = "",
    ...ipProps
}) => {
    return (
        <Select
            placeholder={placeholder}
            options={mapData([...options, ...defaultOptions], optgroup)}
            classNamePrefix="react-select"
            onChange={(val) => {
                if (typeof setValue === "function") {
                    setValue(val);
                }
            }}
            {...ipProps}
        />
    );
};

export default SelectIp;
