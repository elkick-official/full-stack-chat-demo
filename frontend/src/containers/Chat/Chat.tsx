import { FunctionComponent } from "react";

import { useSocketConnect } from "../../hooks";
import CDSideBar from "../../components/CDSideBar/CDSideBar";
import CDChatBody from "../../components/CDChatBody/CDChatBody";

const Chat: FunctionComponent = () => {
  useSocketConnect();
  return (
    <div className="d-flex">
      <CDSideBar />
      <CDChatBody />
    </div>
  );
};

export default Chat;
