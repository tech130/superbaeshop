import styled from "styled-components";
import Button from "../styled/Button";
import { H3 } from "../styled/Headings";
import CloseIcon from "../icons/CloseIcon";

const ModalHead = styled.div`
    padding: 25px 15px;
    background: #fff;
    color: #000;
    position: relative;
    border-bottom: ${(props) => props.border} ;

    .modal-header-desc {
        font-size: 14px;
        font-weight: 300;
    }
`;

const ClsBtn = styled(Button)`
    position: absolute;
    top: 10px;
    right: 10px;
    color: #000;
`;

const ModalHeader = ({ closeModal = null, title = "", desc = "", desc2 = "", border = "solid 4px #f5f5f5", className = "" }) => {
    return (
        <ModalHead border={border} className={className}>
            <ClsBtn onClick={closeModal}>
                <CloseIcon size={20} />
            </ClsBtn>
            {title && <H3>{title}</H3>}
            {desc && <div className="modal-header-desc">{desc}</div>}
            {desc2 && <div className="modal-header-desc">{desc2}</div>}
        </ModalHead>
    );
};

export default ModalHeader;
