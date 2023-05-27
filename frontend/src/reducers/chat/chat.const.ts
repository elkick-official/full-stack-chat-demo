import { createAction } from "redux-actions";

export const chatConstant = {
  GET_ROOM_LIST: "GET_ROOM_LIST",
  GET_CHAT_IMAGE_URL: "GET_CHAT_IMAGE_URL",
  ACTIVE_ROOM_DETAILS: "ACTIVE_ROOM_DETAILS",
  GET_ROOM_MESSAGE_LIST: "GET_ROOM_MESSAGE_LIST",
  STORE_CURRENT_PAGE: "STORE_CURRENT_PAGE",
  STORE_NEW_ROOM_MESSAGE_LIST: "STORE_NEW_ROOM_MESSAGE_LIST",
  STORE_TYPING_USER_LIST: "STORE_TYPING_USER_LIST",
  STORE_TYPING_TEXT: "STORE_TYPING_TEXT",
};

export const GET_ROOM_LIST = createAction(chatConstant.GET_ROOM_LIST);
export const ACTIVE_ROOM_DETAILS = createAction(
  chatConstant.ACTIVE_ROOM_DETAILS
);
export const GET_CHAT_IMAGE_URL = createAction(chatConstant.GET_CHAT_IMAGE_URL);
export const GET_ROOM_MESSAGE_LIST = createAction(
  chatConstant.GET_ROOM_MESSAGE_LIST
);
export const STORE_CURRENT_PAGE = createAction(chatConstant.STORE_CURRENT_PAGE);
export const STORE_NEW_ROOM_MESSAGE_LIST = createAction(
  chatConstant.STORE_NEW_ROOM_MESSAGE_LIST
);
export const STORE_TYPING_USER_LIST = createAction(
  chatConstant.STORE_TYPING_USER_LIST
);

export const STORE_TYPING_TEXT = createAction(chatConstant.STORE_TYPING_TEXT);
