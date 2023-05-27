import React, { FunctionComponent } from "react";
import CDUserProfile from "../CDUserProfile/CDUserProfile";
import sidebarStyle from "./conversation.module.css";
import { ParticipantType } from "../../types";
import { config } from "../../config";

interface ICDConversation {
  roomItem: any;
  handleActiveRoom: (roomItem: any) => void;
  activeRoomDetails: any;
  typingText: string;
}

const CDConversation: FunctionComponent<ICDConversation> = (props) => {
  const { roomItem, handleActiveRoom, activeRoomDetails, typingText } = props;
  const reciverUser = roomItem?.participantsList?.filter(
    (participantItem: ParticipantType) =>
      participantItem?.userId !== parseInt(localStorage.getItem("userId") || "")
  )[0];
  const displayName =
    roomItem?.type === "group" ? roomItem?.name : reciverUser?.user?.name;
  const displayImage =
    roomItem?.type === "group"
      ? `${config.IMAGE_URL}/default.png`
      : `${config.IMAGE_URL}/${reciverUser?.user?.profileImage}`;

  const isSelf =
    roomItem?.lastMessage?.userId ===
    parseInt(localStorage.getItem("userId") || "")
      ? true
      : false;

  const document =
    roomItem?.lastMessage?.type && JSON.parse(roomItem?.lastMessage?.media);

  return (
    <div
      className={`${sidebarStyle.userChatWrapper} d-flex align-items-center p-3`}
      onClick={() => handleActiveRoom(roomItem)}
    >
      <CDUserProfile
        src={displayImage}
        alt={`user-profile`}
        isActive={roomItem?.type === "group" ? false : false}
        parentClassName="icon-md"
      />

      <div className={`${sidebarStyle.userProfileRight} ms-3`}>
        <h3 className={`${sidebarStyle.userName} mb-2`}>{displayName}</h3>
        <span className={`${sidebarStyle.lastMessage}`}>
          {activeRoomDetails?.id === roomItem?.id ? (
            <>
              {typingText !== "" ? (
                <small>{typingText}</small>
              ) : (
                <>
                  {roomItem?.lastMessage?.type ? (
                    <>{document?.originalName}</>
                  ) : (
                    <>
                      {roomItem?.lastMessage?.message
                        ? isSelf
                          ? `You : ${roomItem?.lastMessage?.message}`
                          : `${
                              roomItem?.type === "group"
                                ? `${roomItem?.lastMessage?.user?.name} : `
                                : ""
                            }${roomItem?.lastMessage?.message}`
                        : null}
                    </>
                  )}
                </>
              )}
            </>
          ) : (
            <>
              {roomItem?.lastMessage?.type ? (
                <>{document?.originalName}</>
              ) : (
                <>
                  {roomItem?.lastMessage?.message
                    ? isSelf
                      ? `You : ${roomItem?.lastMessage?.message}`
                      : `${
                          roomItem?.type === "group"
                            ? `${roomItem?.lastMessage?.user?.name} : `
                            : ""
                        }${roomItem?.lastMessage?.message}`
                    : null}
                </>
              )}
            </>
          )}
        </span>
      </div>
      {roomItem?.messageCount > 0 ? (
        <div
          className={`${sidebarStyle.messageCount} ms-auto d-flex align-items-center justify-content-center`}
        >
          0
        </div>
      ) : null}
    </div>
  );
};

export default CDConversation;
