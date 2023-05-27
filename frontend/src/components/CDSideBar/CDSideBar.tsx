import React, { ChangeEvent, FunctionComponent, useState } from "react";
import { SearchNormal1 } from "iconsax-react";
import CDInput from "../CDInput/CDInput";
import { ParticipantType, RoomType } from "../../types";
import { useSideBarHook } from "../../hooks";
import { config } from "../../config";
import sidebarStyle from "./sidebar.module.css";
import CDConversation from "../CDConversation/CDConversation";

const CDSideBar: FunctionComponent = () => {
  const {
    roomList,
    chatImageUrl,
    handleActiveRoom,
    typingText,
    activeRoomDetails,
  } = useSideBarHook();
  const [searchText, setSearchText] = useState<string>("");
  const [activeTab, setActiveTab] = useState<string>("all");

  const handleInputSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchText(value);
  };
  const handleActiveTab = (tabValue: string) => {
    setActiveTab(tabValue);
  };

  return (
    <div
      className={`${sidebarStyle.messageSidebarWrapper} px-4 w-100 box-shadow`}
    >
      <div
        className={`${sidebarStyle.chatSearchWrapper} d-flex align-items-center justify-content-center`}
      >
        <CDInput
          icon={{
            isIcon: true,
            jsxIcon: <SearchNormal1 size="18" color="#ffffff" />,
          }}
          type={"text"}
          name={"searchBar"}
          id={"search-bar"}
          placeholder={"Search chat here...."}
          handleChange={handleInputSearch}
          value={searchText}
        />
      </div>
      <div className={`${sidebarStyle.messageCategoryWrapper} mb-3`}>
        <h2 className={`${sidebarStyle.messageHeading} mb-3`}>Messages</h2>
        <div
          className={`${sidebarStyle.messageCategoryList} p-2 d-flex align-items-center`}
        >
          <span
            className={`${sidebarStyle.categoryItem} ${
              activeTab === "all" && sidebarStyle.categoryItemActive
            } d-flex align-items-center justify-content-center w-100`}
            onClick={() => handleActiveTab("all")}
          >
            All Chats
          </span>
          <span
            className={`${sidebarStyle.categoryItem} ${
              activeTab === "groups" && sidebarStyle.categoryItemActive
            } d-flex align-items-center justify-content-center w-100`}
            onClick={() => handleActiveTab("groups")}
          >
            Status
          </span>
          <span
            className={`${sidebarStyle.categoryItem} ${
              activeTab === "calls" && sidebarStyle.categoryItemActive
            } d-flex align-items-center justify-content-center w-100`}
            onClick={() => handleActiveTab("calls")}
          >
            Calls
          </span>
        </div>
      </div>
      <div className={`${sidebarStyle.userListWrapper} vertical-scroll`}>
        {roomList?.length > 0 ? (
          <>
            {roomList?.map((roomItem: RoomType, roomIndex: number) => {
              return (
                <CDConversation
                  roomItem={roomItem}
                  handleActiveRoom={handleActiveRoom}
                  activeRoomDetails={activeRoomDetails}
                  typingText={typingText}
                  key={roomIndex}
                />
              );
            })}
          </>
        ) : (
          <div className="d-flex align-items-center justify-content-center">
            No conversation Found
          </div>
        )}
      </div>
    </div>
  );
};

export default CDSideBar;
