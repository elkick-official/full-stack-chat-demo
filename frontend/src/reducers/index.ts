import { combineReducers } from "@reduxjs/toolkit";
import { connectRouter, RouterState } from "connected-react-router";
import { chatReducer } from "./chat/chat.reducer";
import { ChatState } from "../types";
interface StoreEnhancerState {}
export interface RootState extends StoreEnhancerState {
  history: RouterState;
  chatReducer: ChatState;
}
export const rootReducer = (history: any) =>
  combineReducers<RootState>({
    history: connectRouter(history) as any,
    chatReducer: chatReducer as any,
  });
