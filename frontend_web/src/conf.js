// Configurations:
// 1. Backend endpoint depending on test vs live
// 2.

// const ENVIRON = "PROD";
const ENVIRON = "DEV";

const CONF = {
  DEV: {
    baseUrl: "http://localhost:8000/api",
  },
  PROD: {
    baseUrl: "/api",
  },
};

export const BASE_URL = CONF[ENVIRON].baseUrl;
export const GOOGLE_API_KEY = "AIzaSyDQ7WXCqy5-cyHTyho_XLgBDHJZe4n-nAw";
