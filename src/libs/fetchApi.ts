async function fetchApi<T> (url: string, method : "GET" | "POST" = "GET", param: {[key: string]: string}): Promise<T> {
  try {
    const res = await fetch(url, {
      method: method,
      mode: "cors",
      headers: {
        "X-Frontend-Id": "6",
        "X-Frontend-Version": "0"
      },
      credentials: "include",
      body: param && JSON.stringify(param)
    });
    return await res.json() as T;
  } catch {
    return null;
  }
};

export default fetchApi;
