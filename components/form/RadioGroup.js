import React from "react";
import Flex from "../styled/Flex";
import Checkbox from "./Checkbox";
import Block from "../styled/Block";

const RadioGroup = ({ options = [], name, value = null, setValue }) => {
    return (
        <Flex flexWrap>
            {options.map((opt, idx) => (
                <Block margin="0px 25px 0px 0px" key={idx}>
                    <Checkbox
                        placeholder={opt.title}
                        name={`${name}${idx + 1}`}
                        value={value === opt.value}
                        setValue={(isChecked) => {
                            if (isChecked) {
                                setValue(opt.value);
                            }
                        }}
                    />
                </Block>
            ))}
        </Flex>
    );
};

// export const CheckGroup = ({ options = [], name, value = [], setValue }) => {
//     return (
//         <div className="d-flex flex-wrap">
//             {options.map((opt, idx) => (
//                 <div className="mr-4" key={idx}>
//                     <CheckBox
//                         title={opt.title}
//                         name={name}
//                         value={
//                             Array.isArray(value) && value.includes(opt.value)
//                         }
//                         setValue={(isChecked) => {
//                             if (Array.isArray(value)) {
//                                 if (isChecked) {
//                                     setValue([...value, opt.value]);
//                                 } else {
//                                     setValue(
//                                         value.filter((x) => x !== opt.value)
//                                     );
//                                 }
//                             }
//                         }}
//                         listIndex={idx + 1}
//                     />
//                 </div>
//             ))}
//         </div>
//     );
// };

export default RadioGroup;
