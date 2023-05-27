import { useState, ChangeEvent, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { RootState } from "../../reducers";
import { socket } from "../../socket";
import { FileUpload } from "../../types";
import { convertToBase64File } from "../../services";
import { getAllMessageByRoom } from "../../actions";

export const useChatBodyHook = () => {
  const {
    activeRoomDetails,
    chatImageUrl,
    roomMessageList,
    typingUserList,
    currentPage,
  } = useSelector((state: RootState) => state.chatReducer);

  const [messageText, setMessageText] = useState<string>("");
  const [fileList, setFileList] = useState<Array<FileUpload>>([]);
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [modalFileUploadShow, setModalFileUploadShow] =
    useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const dispatch: Dispatch<{ type: string; payload: any }> = useDispatch();

  const handleInputSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const prepareTypingMessgae = {
      roomId: activeRoomDetails?.id,
      userId: parseInt(localStorage.getItem("userId") || ""),
    };
    socket.emit("typing", prepareTypingMessgae);
    const { value } = event?.target;
    setMessageText(value);
  };

  const sendMessage = () => {
    if (messageText?.trim()?.length > 0) {
      const prepareSendMessgae = {
        roomId: activeRoomDetails?.id,
        userId: parseInt(localStorage.getItem("userId") || ""),
        message: messageText,
        type: "text",
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      socket.emit("send-message", prepareSendMessgae);
      setMessageText("");
    }
  };
  const handleShowFileUploadModal = () => {
    setModalFileUploadShow(true);
  };
  const handleCloseFileUploadModal = () => {
    setModalFileUploadShow(false);
    setFileList([]);
  };

  const handleFileInput = async (event: ChangeEvent<HTMLInputElement>) => {
    const localFileList: Array<FileUpload> = [];
    if (event.target.files && event.target.files?.length > 0) {
      for (const fileItem of Array.from(event.target.files)) {
        const fileObject: FileUpload = {
          originalName: fileItem.name,
          fileSize: fileItem.size,
          fileType: fileItem.name.split(".").pop() || "",
          fileBase64: await convertToBase64File(fileItem),
        };
        localFileList.push(fileObject);
      }
      setFileList(localFileList);
    }
  };

  const sendDocument = () => {
    if (fileList?.length > 0) {
      for (const fileItem of fileList) {
        const prepareSendMessgae = {
          roomId: activeRoomDetails?.id,
          userId: parseInt(localStorage.getItem("userId") || ""),
          document: fileItem,
          type: "doc",
          createdAt: new Date(),
          updatedAt: new Date(),
        };
        socket.emit("send-message", prepareSendMessgae);
      }
      handleCloseFileUploadModal();
    }
  };
  useEffect(() => {
    retriveMessages();
  }, [activeRoomDetails]);

  const retriveMessages = async () => {
    if (activeRoomDetails) {
      const fetchMessagesByRoom = await getAllMessageByRoom(
        activeRoomDetails?.id,
        currentPage
      );
      let localMessages = fetchMessagesByRoom?.data?.messageList;
      if (localMessages?.length === 0) {
        setHasMore(false);
      }

      if (roomMessageList?.length > 0) {
        localMessages = [...roomMessageList, ...localMessages];
      }
      dispatch({
        type: "STORE_CURRENT_PAGE",
        payload: currentPage + 1,
      });
      dispatch({
        type: "GET_ROOM_MESSAGE_LIST",
        payload: localMessages,
      });
    }
  };

  return {
    activeRoomDetails,
    chatImageUrl,
    roomMessageList,
    messageText,
    handleInputSearch,
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
  };
};
