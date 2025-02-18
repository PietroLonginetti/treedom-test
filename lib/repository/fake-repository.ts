// Fake Repository

const DELAY = 3000; // default apis response time in milliseconds

export function fakeApi(data: any, delay = DELAY): Promise<ResponseType> {
  return new Promise((resolve, reject) => {
    // doing somethin with data...
    setTimeout(() => {
      if (Math.random() > 0.3) {
        resolve({ success: true });
      } else {
        reject({ success: false, errorMsg: "Validation error. Please retry" });
      }
    }, delay);
  });
}

export type ResponseType = {
  success: boolean;
  errorMsg?: string;
};
