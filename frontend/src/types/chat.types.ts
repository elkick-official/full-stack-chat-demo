export type UserType = {
  id?: number;
  name: string;
  userName?: string;
  profileImage: string;
  email?: string;
};
export type ParticipantType = {
  id?: number;
  roomId?: number;
  userId: number;
  createdAt?: string;
  updatedAt?: string;
  user: UserType;
};

export type LastMessageType = {
  id: number;
  roomId: number;
  userId: number;
  message: string;
  media: string;
  type: boolean;
  createdAt: string;
  updatedAt: string;
  user: UserType;
};

export type RoomType = {
  id: number;
  name: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  participantsList: ParticipantType[];
  lastMessage: LastMessageType;
  messageCount: number;
};

export type MessageType = {
  id: number;
  roomId: number;
  userId: number;
  message: string;
  media: string;
  type: boolean;
  createdAt: string;
  updatedAt: string;
  user: UserType;
};

export type TypingUserType = {
  roomId: number;
  userId: number;
  isTyping?: boolean;
  isOnline?: boolean;
};

export type FileUpload = {
  originalName: string;
  fileSize: number;
  fileType: string;
  fileBase64: string;
};

export type ChatState = {
  roomList: RoomType[] | [];
  activeRoomDetails: RoomType | null;
  chatImageUrl: string;
  roomMessageList: MessageType[] | [];
  currentPage: number;
  typingUserList: TypingUserType[] | [];
  typingText: string;
};

export type IChatModel = {
  IRoomList: RoomType[] | [];
  IActiveRoomDetails: RoomType | null;
  IChatImageUrl: string;
  IRoomMessageList: MessageType[] | [];
  ICurrentPage: number;
  ITypingUserList: string;
  ITypingText: string;
};
