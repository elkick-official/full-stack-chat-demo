import React, {
  ChangeEvent,
  FunctionComponent,
  useMemo,
  useState,
} from "react";
import { Happyemoji, Send2, AttachCircle } from "iconsax-react";
import { Button, Modal, Nav, Tab } from "react-bootstrap";
import CDInput from "../CDInput/CDInput";
import CDChatModal from "../CDChatModal/CDChatModal";
import CDPreviewFile from "../CDPreviewFile/CDPreviewFile";
import CDPreviewFileIcon from "../CDPreviewFileIcon/CDPreviewFileIcon";
import { FileUpload } from "../../types";
import footerStyle from "./footer.module.css";

interface IFooterProps {
  handleInputSearch: (event: ChangeEvent<HTMLInputElement>) => void;
  messageText: string;
  sendMessage: () => void;
  modalFileUploadShow: boolean;
  handleShowFileUploadModal: () => void;
  handleCloseFileUploadModal: () => void;
  handleFileInput: (event: ChangeEvent<HTMLInputElement>) => void;
  fileList: Array<FileUpload>;
  sendDocument: () => void;
}

const CDFooter: FunctionComponent<IFooterProps> = (props) => {
  const {
    handleInputSearch,
    messageText,
    sendMessage,
    modalFileUploadShow,
    handleShowFileUploadModal,
    handleCloseFileUploadModal,
    handleFileInput,
    fileList,
    sendDocument,
  } = props;
  const [defaultActiveKey, setDefaultActiveKey] = useState<string>("0");
  const renderTabs = useMemo(() => {
    return fileList?.map((filteItem: FileUpload, fileIndex: number) => {
      return (
        <Tab.Pane
          eventKey={fileIndex?.toString()}
          key={`file-preview-${fileIndex}`}
        >
          <div
            className={`d-flex align-items-center justify-content-center flex-column`}
          >
            <CDPreviewFile
              fileType={filteItem.fileType}
              fileSource={filteItem.fileBase64}
              fileName={filteItem.originalName}
            />
            <span>{filteItem?.originalName}</span>
          </div>
        </Tab.Pane>
      );
    });
  }, [fileList]);

  const renderNavigateLinks = useMemo(() => {
    return fileList?.map((filteItem: FileUpload, fileIndex: number) => {
      return (
        <Nav.Item key={`file-preview-icon-${fileIndex}`}>
          <Nav.Link
            eventKey={fileIndex?.toString()}
            className="p-3 w-inherit h-inherit d-flex align-items-center justify-content-center"
          >
            <CDPreviewFileIcon
              fileType={filteItem.fileType}
              fileName={filteItem.originalName}
            />
          </Nav.Link>
        </Nav.Item>
      );
    });
  }, [fileList]);

  return (
    <>
      <div className={`${footerStyle.footerWrapper} w-100 p-3`}>
        <div className="d-flex align-items-center">
          <button
            className={`${footerStyle.attachFile} d-flex align-items-center p-2 me-2`}
            onClick={handleShowFileUploadModal}
          >
            <AttachCircle size="20" color="#000000" />
          </button>
          <CDInput
            icon={{
              isIcon: true,
              jsxIcon: <Happyemoji size="18" color="#ffffff" />,
            }}
            type={"text"}
            name={"searchBar"}
            id={"search-bar"}
            placeholder={"Search chat here...."}
            handleChange={handleInputSearch}
            value={messageText}
          />
          <button
            className={`${footerStyle.sendMessage} d-flex align-items-center p-2 ms-2`}
            onClick={sendMessage}
          >
            <Send2 size="20" color="#000000" />
          </button>
        </div>
      </div>
      <CDChatModal
        show={modalFileUploadShow}
        centered={true}
        onHide={handleCloseFileUploadModal}
        id={"contained-modal-title-vcenter"}
        size="md"
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className={`${footerStyle.fileUploadWrapper} position-relative`}>
            {fileList?.length > 0 ? (
              <>
                <Tab.Container
                  id="preview-uploaded-image"
                  defaultActiveKey={defaultActiveKey}
                >
                  <Tab.Content className="mb-4">{renderTabs}</Tab.Content>
                  <Nav>{renderNavigateLinks}</Nav>
                </Tab.Container>
                <div className="d-flex align-items-center justify-content-center mt-3">
                  <Button
                    onClick={sendDocument}
                    className="w-100 d-flex align-items-center justify-content-center p-3 custom-button"
                  >
                    Send
                  </Button>
                </div>
              </>
            ) : (
              <>
                <CDInput
                  type={"file"}
                  name={"fileUpload"}
                  id={"file-upload"}
                  placeholder={"attached image here...."}
                  handleChange={handleFileInput}
                  inputCustomClass={`${footerStyle.fileUploadInput} px-4`}
                  inputParentClass={`${footerStyle.fileUploadInputWrapper}`}
                  multiple={true}
                />
                <div className={`${footerStyle.uploadFileWrapper}`}>
                  <h4 className="text-secondary">Darg or upload here</h4>
                  <h6 className="text-secondary">
                    (Maximum Attachment Size: <b>10MB</b>)
                  </h6>
                </div>
              </>
            )}
          </div>
        </Modal.Body>
      </CDChatModal>
    </>
  );
};

export default CDFooter;
