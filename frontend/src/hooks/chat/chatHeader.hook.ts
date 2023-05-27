import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { RootState } from "../../reducers";
import { ParticipantType } from "../../types";
import { config } from "../../config";

export const useChatHeaderHook = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isMediaOpen, setIsMediaOpen] = useState<boolean>(false);

  const [userInfo, setUserInfo] = useState<any>(null);
  const { activeRoomDetails, chatImageUrl, typingUserList, typingText } =
    useSelector((state: RootState) => state.chatReducer);

  const dispatch: Dispatch<{ type: string; payload: any }> = useDispatch();

  const handleOpenDrawer = () => setIsActive(true);
  const handleCloseDrawer = () => setIsActive(false);
  const handleOpenMedia = () => setIsMediaOpen(true);
  const handleCloseMedia = () => setIsMediaOpen(false);

  const settleUserInfo = () => {
    const reciverUser = activeRoomDetails?.participantsList?.filter(
      (participantItem: ParticipantType) =>
        participantItem?.userId !==
        parseInt(localStorage.getItem("userId") || "")
    )[0];

    const displayName =
      activeRoomDetails?.type === "group"
        ? activeRoomDetails?.name
        : reciverUser?.user?.name;
    const displayImage =
      activeRoomDetails?.type === "group"
        ? `${config.IMAGE_URL}/default.png`
        : `${config.IMAGE_URL}/${reciverUser?.user?.profileImage}`;

    const participants = activeRoomDetails?.participantsList
      ?.map((participantItem: ParticipantType) =>
        participantItem?.userId !==
        parseInt(localStorage.getItem("userId") || "")
          ? participantItem?.user?.name
          : null
      )
      .filter((participantName: string | null) => participantName !== null)
      .join(",");

    const prepareUserInfo = {
      displayName: displayName,
      displayImage: displayImage,
      participants: participants,
    };
    setUserInfo(prepareUserInfo);
  };

  useEffect(() => {
    settleUserInfo();
  }, [activeRoomDetails]);

  useEffect(() => {
    let localTypingText = "";
    if (typingUserList?.length > 0) {
      if (activeRoomDetails?.type === "group") {
        if (typingUserList?.length > 1) {
          localTypingText = `${
            typingUserList?.length - 1
          } or more person typing....`;
        } else {
          const user = activeRoomDetails?.participantsList?.filter(
            (participantItem: ParticipantType) =>
              participantItem.userId === typingUserList[0].userId &&
              participantItem?.userId !==
                parseInt(localStorage.getItem("userId") || "")
          )[0];
          if (user) {
            localTypingText = `${user?.user?.name} is typing...`;
          }
        }
      } else {
        if (typingUserList?.length > 0) {
          const user = activeRoomDetails?.participantsList?.filter(
            (participantItem: ParticipantType) =>
              participantItem.userId === typingUserList[0].userId &&
              participantItem?.userId !==
                parseInt(localStorage.getItem("userId") || "")
          )[0];
          if (user) {
            localTypingText = `Typing...`;
          }
        }
      }
    }
    dispatch({
      type: "STORE_TYPING_TEXT",
      payload: localTypingText,
    });
  }, [typingUserList]);

  return {
    isActive,
    isMediaOpen,
    handleOpenDrawer,
    handleCloseDrawer,
    handleOpenMedia,
    handleCloseMedia,
    userInfo,
    typingText,
    activeRoomDetails,
  };
};
