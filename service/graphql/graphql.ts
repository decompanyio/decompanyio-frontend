import axios from "axios";
import { APP_CONFIG } from "../../app.config";

export default params => {
  let _header = { "Content-Type": "application/json" };

  // 헤더에 JWT 추가
  if (params.header) _header = Object.assign(params.header, _header);

  return new Promise(async (resolve, reject) =>
    axios({
      method: "POST",
      url: APP_CONFIG.domain().graphql + "api/graphql",
      data: {
        query:
          (params.mutation
            ? "mutation {" + params.mutation
            : "{" + params.query) + "}"
      },
      headers: _header
    })
      .then(response => {
        if (response.data.data) resolve(response.data.data);
        // 성공 alert
        else reject("NO_DATA");
      })
      .catch(error => {
        if (error.response) {
          let status = error.response.status;
          let headers = error.response.headers;
          let data = error.response.data;
          let statusText = error.response.statusText;

          if (APP_CONFIG.debug) {
            console.log(headers, data, status, statusText);
            console.log(
              "Error!\ncode:" +
                status +
                "\nmessage:" +
                statusText +
                "\nerror:" +
                error
            );
          }
          console.log("Status: " + status);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log("Error", error);
        }

        console.log(error);
        reject(error);
      })
  );
};
