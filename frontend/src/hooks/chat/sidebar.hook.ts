import { useEffect } from "react";
import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { getAllMessageByRoom, getRoomList } from "../../actions";
import { RoomType } from "../../types";
import { RootState } from "../../reducers";

export const useSideBarHook = () => {
  const { chatImageUrl, roomList, typingText, activeRoomDetails } = useSelector(
    (state: RootState) => state.chatReducer
  );
  const dispatch: Dispatch<{ type: string; payload: any }> = useDispatch();

  const handleActiveRoom = async (roomItem: RoomType) => {
    dispatch({
      type: "GET_ROOM_MESSAGE_LIST",
      payload: [],
    });
    dispatch({
      type: "STORE_CURRENT_PAGE",
      payload: 1,
    });
    dispatch({
      type: "ACTIVE_ROOM_DETAILS",
      payload: roomItem,
    });
  };

  useEffect(() => {
    fetchAllRoomList();
    return () => {
      dispatch({
        type: "GET_ROOM_LIST",
        payload: [],
      });
      dispatch({
        type: "GET_CHAT_IMAGE_URL",
        payload: null,
      });
    };
  }, []);

  const fetchAllRoomList = async () => {
    const userId = localStorage.getItem("userId");
    const roomListResponse: any = await getRoomList(userId);
    dispatch({
      type: "GET_ROOM_LIST",
      payload: roomListResponse?.data?.roomList,
    });
    dispatch({
      type: "GET_CHAT_IMAGE_URL",
      payload: roomListResponse?.data?.imageUrl,
    });
  };

  return {
    roomList,
    chatImageUrl,
    handleActiveRoom,
    typingText,
    activeRoomDetails,
  };
};
