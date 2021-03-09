import styled from "styled-components";
import Button from "../styled/Button";
import { H3 } from "../styled/Headings";
import CloseIcon from "../icons/CloseIcon";

const ModalHead = styled.div`
    padding: 25px 15px;
    background: #fff;
    color: #000;
    position: relative;
    border-bottom: solid 4px #f5f5f5;

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

const ModalHeader = ({ closeModal = null, title = "", desc = "" }) => {
    return (
        <ModalHead>
            <ClsBtn onClick={closeModal}>
                <CloseIcon size={20} />
            </ClsBtn>
            {title && <H3>{title}</H3>}
            {desc && <div className="modal-header-desc">{desc}</div>}
        </ModalHead>
    );
};

export default ModalHeader;
