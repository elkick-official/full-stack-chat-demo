import { axiosApi } from "../AxiosApi";

export const getRoomList = async (userId: string | null) => {
  const response = await axiosApi({
    method: "GET",
    url: `v1/chat/room-list/${userId}`,
  });
  return response.data;
};

export const getAllMessageByRoom = async (roomId: number, page: number = 1) => {
  const response = await axiosApi({
    method: "GET",
    url: `v1/chat/message-list/${roomId}?page=${page}&pageSize=20`,
  });
  return response.data;
};
