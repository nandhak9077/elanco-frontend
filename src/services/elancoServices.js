import axios from "axios";
import { constants } from "../shared/constants";

export const getData = async (serviceName) => {

  return await axios
    .get(
      `${constants.BASE_URL}${constants.QUERY_PARENT}${serviceName}${constants.QUERY_CHILD}${constants.IS_QUERY_CHILD_NULLABLE}`
    )
    .then((response) => {
      return response.data;
    })
    .catch((e) => {
      return e;
    });
};

export const getDataByName = async (childServiceName,parentServiceName) => {
  return await axios
    .get(
      `${constants.BASE_URL}${constants.QUERY_PARENT}${parentServiceName}${constants.QUERY_CHILD}${childServiceName}`
    )
    .then((response) => {
      return response.data;
    })
    .catch((e) => {
      return e;
    });
};
