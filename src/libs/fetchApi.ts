async function fetchApi (url: string, method : "GET" | "POST" = "GET", param?: {[key: string]: unknown}, additionalHeaders?: {[key: string]: string}) {
  try {
    const res = await fetch(url, {
      method: method,
      mode: "cors",
      headers: {
        ...additionalHeaders,
        "X-Frontend-Id": "6",
        "X-Frontend-Version": "0"
      },
      credentials: "include",
      body: param && JSON.stringify(param)
    });
    return await res.json();
  } catch {
    return null;
  }
};

export default fetchApi;
