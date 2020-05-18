export const onRequest = config => {
  const token = localStorage.getItem("token")
  if (config.url.indexOf("login") < 0)
    config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
};
export const onRequestError = error => {
  return error;
};

export const onResponse = response => {
  return response.data ? response.data : response;
};
export const onResponseError = error => {
  return error;
};
