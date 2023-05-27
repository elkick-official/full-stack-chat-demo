import { FunctionComponent } from "react";
import { Modal } from "react-bootstrap";

interface ICDChatModalProps {
  id: string;
  children: JSX.Element | JSX.Element[];
  centered: boolean;
  show: boolean;
  onHide: () => void;
  isBackDrop?: "static" | boolean;
  size?: "sm" | "md" | "lg" | "xl" | any;
}

const CDChatModal: FunctionComponent<ICDChatModalProps> = (props) => {
  const {
    children,
    centered,
    onHide,
    show,
    isBackDrop = false,
    size = "lg",
    id,
  } = props;
  return (
    <Modal
      size={size}
      aria-labelledby={id}
      centered={centered}
      show={show}
      onHide={onHide}
      backdrop={isBackDrop}
    >
      {children}
    </Modal>
  );
};

export default CDChatModal;
