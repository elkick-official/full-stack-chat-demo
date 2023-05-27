import { FunctionComponent } from "react";
import moment from "moment";
import CDUserProfile from "../CDUserProfile/CDUserProfile";
import { MessageType, ParticipantType, RoomType } from "../../types";
import {
  formatFileSize,
  getDayformate,
  getFormatedDate,
  getTimeFromDate,
} from "../../services";
import CDPreviewFile from "../CDPreviewFile/CDPreviewFile";
import { truncateString } from "../../services/common.service";
import clsx from "clsx";
import { config } from "../../config";
import InfiniteScroll from "react-infinite-scroll-component";
import contentStyle from "./content.module.css";

interface IContentProps {
  roomMessageList: MessageType[];
  chatImageUrl: string;
  activeRoomDetails: RoomType;
  containerRef: any;
  retriveMessages: any;
  hasMore: boolean;
}
const CDContent: FunctionComponent<IContentProps> = (props) => {
  const {
    roomMessageList,
    activeRoomDetails,
    containerRef,
    retriveMessages,
    hasMore,
  } = props;

  return (
    <div
      className={`${contentStyle.messageContentWrapper} p-3 vertical-scroll`}
      ref={containerRef}
    >
      {roomMessageList?.map(
        (messageItem: MessageType, messageIndex: number) => {
          const isOwn =
            messageItem?.userId ===
            parseInt(localStorage.getItem("userId") || "");
          const userData = activeRoomDetails?.participantsList?.filter(
            (particpant: ParticipantType) =>
              particpant.userId === messageItem?.userId
          )[0];
          const document = messageItem?.type && JSON.parse(messageItem?.media);

          return (
            <div key={`content-${messageIndex}`}>
              {roomMessageList[messageIndex - 1] ? (
                getFormatedDate(messageItem?.createdAt) !==
                  getFormatedDate(
                    roomMessageList[messageIndex - 1]?.createdAt
                  ) && (
                  <div className="text-center text-white w-max-content mx-auto p-2 rounded-2 bg-green m-2">
                    {getDayformate(moment(messageItem?.createdAt))}
                  </div>
                )
              ) : (
                <div className="text-center text-white w-max-content mx-auto p-2 rounded-2 bg-green m-2">
                  {getDayformate(moment(messageItem?.createdAt))}
                </div>
              )}
              <div
                className={clsx("d-flex p-3", {
                  [contentStyle.messageRight]: isOwn,
                  [contentStyle.messageLeft]: !isOwn,
                })}
                key={`message-${messageIndex}`}
              >
                <CDUserProfile
                  src={`${config.IMAGE_URL}/${userData?.user?.profileImage}`}
                  alt={userData?.user?.profileImage}
                  parentClassName="icon-md"
                />
                <div
                  className={`${contentStyle.messageWrapper} p-3 box-shadow`}
                >
                  {activeRoomDetails?.type === "group" ? (
                    !isOwn ? (
                      <div
                        className={`${contentStyle.messageInfo} d-flex align-items-center justify-content-between mb-1`}
                      >
                        <div className={`${contentStyle.messageInfoName}`}>
                          {userData?.user?.name}
                        </div>
                      </div>
                    ) : null
                  ) : null}
                  {messageItem?.type ? (
                    <>
                      <CDPreviewFile
                        fileType={document?.fileType}
                        fileSource={`${config.IMAGE_URL}/media/${document?.uploadedMedia}`}
                        fileName={document?.originalName}
                      />
                      <div className="d-flex align-items-center justify-content-between mt-2">
                        <span>{truncateString(document?.originalName)}</span>
                        <span>{formatFileSize(document?.fileSize)}</span>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className={`mb-1 text-break`}>
                        {messageItem?.message}
                      </div>
                    </>
                  )}
                  <div
                    className={`${contentStyle.messageInfo} ${contentStyle.messageInfoTime} d-flex`}
                  >
                    {getTimeFromDate(messageItem?.createdAt)}
                  </div>
                </div>
              </div>
            </div>
          );
        }
      )}
    </div>
  );
};

export default CDContent;
