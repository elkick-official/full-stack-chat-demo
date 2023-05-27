export const convertToBase64File = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result as string);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
};

export const base64toBlob = (contentType: string, data: string) => {
  const base64WithoutPrefix = data.substr(`${contentType}`.length);
  const bytes = window.atob(base64WithoutPrefix);
  let length = bytes.length;
  let out = new Uint8Array(length);
  while (length--) {
    out[length] = bytes.charCodeAt(length);
  }
  return new Blob([out], { type: "application/pdf" });
};
