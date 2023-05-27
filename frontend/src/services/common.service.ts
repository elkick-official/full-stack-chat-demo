export const isValidURLWithIPAddress = (url: string) => {
  try {
    const parsedURL = new URL(url);
    return parsedURL.protocol === "http:" || parsedURL.protocol === "https:";
  } catch (error) {
    return false;
  }
};
export const truncateString = (str: string, maxLength: number = 15) => {
  if (str.length <= maxLength) {
    return str;
  }
  return str.substring(0, maxLength) + "...";
};
