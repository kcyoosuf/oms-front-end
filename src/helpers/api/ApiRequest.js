import API from "./Api";
export default async options => {
  try {
    return await API(options);
  } catch (exception) {
    return exception;
  }
};
