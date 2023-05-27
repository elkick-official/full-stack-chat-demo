import { Action, handleActions } from "redux-actions";
import { chatConstant } from "./chat.const";
import { ChatState, IChatModel, TypingUserType } from "../../types";

const initialState: ChatState = {
  roomList: [],
  activeRoomDetails: null,
  chatImageUrl: "",
  roomMessageList: [],
  currentPage: 1,
  typingUserList: [],
  typingText: "",
};
export const chatReducer = handleActions<ChatState, IChatModel>(
  {
    [chatConstant.GET_ROOM_LIST]: (
      state: ChatState,
      action: Action<IChatModel["IRoomList"] | any>
    ) => {
      return {
        ...state,
        roomList: action.payload,
      };
    },
    [chatConstant.ACTIVE_ROOM_DETAILS]: (
      state: ChatState,
      action: Action<IChatModel["IActiveRoomDetails"] | any>
    ) => {
      return {
        ...state,
        activeRoomDetails: action.payload,
      };
    },
    [chatConstant.GET_CHAT_IMAGE_URL]: (
      state: ChatState,
      action: Action<IChatModel["IChatImageUrl"] | any>
    ) => {
      return {
        ...state,
        chatImageUrl: action.payload,
      };
    },
    [chatConstant.GET_ROOM_MESSAGE_LIST]: (
      state: ChatState,
      action: Action<IChatModel["IRoomMessageList"] | any>
    ) => {
      return {
        ...state,
        roomMessageList: action.payload,
      };
    },
    [chatConstant.STORE_CURRENT_PAGE]: (
      state: ChatState,
      action: Action<IChatModel["ICurrentPage"] | any>
    ) => {
      return {
        ...state,
        currentPage: action.payload,
      };
    },
    [chatConstant.STORE_NEW_ROOM_MESSAGE_LIST]: (
      state: ChatState,
      action: Action<IChatModel["IRoomMessageList"] | any>
    ) => {
      return {
        ...state,
        roomMessageList: [...state.roomMessageList, action.payload],
      };
    },
    [chatConstant.STORE_TYPING_USER_LIST]: (
      state: ChatState,
      action: Action<IChatModel["ITypingUserList"] | any>
    ) => {
      const isAlreadyTyping = state.typingUserList.findIndex(
        (typeingUser) =>
          typeingUser.userId === action.payload?.userId &&
          action.payload?.isTyping === true
      );
      let localTypingUserList: TypingUserType[] = [];
      if (isAlreadyTyping === -1) {
        if (action.payload.isTyping) {
          localTypingUserList = [...state.typingUserList, action.payload];
        }
      } else {
        localTypingUserList = state.typingUserList;
      }
      return {
        ...state,
        typingUserList: localTypingUserList,
      };
    },
    [chatConstant.STORE_TYPING_TEXT]: (
      state: ChatState,
      action: Action<IChatModel["ITypingText"] | any>
    ) => {
      return {
        ...state,
        typingText: action.payload,
      };
    },
  },
  initialState
);
