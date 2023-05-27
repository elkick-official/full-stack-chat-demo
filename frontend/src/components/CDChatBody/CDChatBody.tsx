import React, { FunctionComponent } from "react";
import CDHeader from "../CDHeader/CDHeader";
import CDFooter from "../CDFooter/CDFooter";
import CDContent from "../CDContent/CDContent";
import chatBodyStyle from "./chatbody.module.css";
import { useChatBodyHook } from "../../hooks";

const CDChatBody: FunctionComponent = () => {
  const {
    activeRoomDetails,
    chatImageUrl,
    roomMessageList,
    handleInputSearch,
    messageText,
    sendMessage,
    containerRef,
    typingUserList,
    modalFileUploadShow,
    handleShowFileUploadModal,
    handleCloseFileUploadModal,
    handleFileInput,
    fileList,
    sendDocument,
    retriveMessages,
    hasMore,
  } = useChatBodyHook();
  return (
    <div className="w-100 position-relative box-shadow d-flex flex-column overflow-hidden h-full">
      {activeRoomDetails ? (
        <>
          <CDHeader />
          <CDContent
            roomMessageList={roomMessageList}
            chatImageUrl={chatImageUrl}
            activeRoomDetails={activeRoomDetails}
            containerRef={containerRef}
            retriveMessages={retriveMessages}
            hasMore={hasMore}
          />
          <CDFooter
            handleInputSearch={handleInputSearch}
            messageText={messageText}
            sendMessage={sendMessage}
            modalFileUploadShow={modalFileUploadShow}
            handleShowFileUploadModal={handleShowFileUploadModal}
            handleCloseFileUploadModal={handleCloseFileUploadModal}
            handleFileInput={handleFileInput}
            fileList={fileList}
            sendDocument={sendDocument}
          />
        </>
      ) : (
        <div
          className={`${chatBodyStyle.newConversation} d-flex align-items-center justify-content-center position-relative w-100`}
        >
          <h1>Start Conversation</h1>
        </div>
      )}
    </div>
  );
};

export default CDChatBody;
