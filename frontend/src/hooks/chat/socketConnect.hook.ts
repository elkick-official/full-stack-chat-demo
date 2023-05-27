import { useEffect } from "react";
import { socket } from "../../socket";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../reducers";
import { MessageType } from "../../types";
import { Dispatch } from "redux";

export const useSocketConnect = () => {
  const { activeRoomDetails } = useSelector(
    (state: RootState) => state.chatReducer
  );
  const dispatch: Dispatch<{ type: string; payload: any }> = useDispatch();

  useEffect(() => {
    socket.emit("active_user", localStorage.getItem("userId"));
    socket.on("receive-message", (responseData: MessageType) => {
      dispatch({
        type: "STORE_NEW_ROOM_MESSAGE_LIST",
        payload: responseData,
      });
    });
    socket.on("typing", (responseData: any) => {
      dispatch({
        type: "STORE_TYPING_USER_LIST",
        payload: responseData,
      });
    });
    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    console.log(" ========== RoomId Changed ===========.");
    if (activeRoomDetails) {
      const prepareJoinRomm: { userId: number; roomId: number } = {
        userId: parseInt(localStorage.getItem("userId") || ""),
        roomId: activeRoomDetails?.id,
      };
      socket.emit("join-room", prepareJoinRomm);
    }
  }, [activeRoomDetails?.id]);

  return {};
};
