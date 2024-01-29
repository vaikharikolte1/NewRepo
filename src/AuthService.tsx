export const mockLogin = async (
  username: string,
  password: string
): Promise<string> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "vkk" && password === "vkk") {
        resolve("mock_token");
      } else {
        reject(new Error("Invalid credentials"));
      }
    }, 1000);
  });
};

export const mockLogout = async (): Promise<void> => {
  return Promise.resolve();
};
