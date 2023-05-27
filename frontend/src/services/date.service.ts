import moment, { Moment } from "moment";
export const getTimeFromDate = (date: string) => {
  return moment(date).format("LT");
};

export const getFormatedDate = (date: string) => {
  return moment(date).format("DD MMM, YY");
};

export const getDayformate = (date: Moment): string => {
  const today: Moment = moment().startOf("day");
  const yesterday: Moment = moment().subtract(1, "days").startOf("day");

  if (date.isSame(today, "d")) {
    return "Today";
  } else if (date.isSame(yesterday, "d")) {
    return "Yesterday";
  } else {
    return moment(date).format("DD MMM, YY");
  }
};

export const formatFileSize = (bytes: number) => {
  if (bytes < 1024) {
    return bytes + " B";
  } else if (bytes < 1024 * 1024) {
    return (bytes / 1024).toFixed(2) + " KB";
  } else if (bytes < 1024 * 1024 * 1024) {
    return (bytes / (1024 * 1024)).toFixed(2) + " MB";
  } else {
    return (bytes / (1024 * 1024 * 1024)).toFixed(2) + " GB";
  }
};
