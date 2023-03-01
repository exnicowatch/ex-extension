interface Message{
  type: "getVersion" | "fetchApi";
  payload: null | FetchApiPayload;
}

interface FetchApiPayload{
  url: string;
  method: "GET" | "POST" = "GET";
  param?: {[key: string]: unknown};
}
