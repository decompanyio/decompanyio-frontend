import auth0 from "auth0-js";
import { APP_CONFIG } from "app.config";
import AuthService from "../service/rest/AuthService";
import UserInfo from "service/model/UserInfo";

const AUTH_CONFIG = {
  domain: "decompany.auth0.com",
  clientID: "e7kW3VpEKzprBPyHy13VL221pB1q971j",
  redirectUri: APP_CONFIG.domain().mainHost + "/callback",
  responseType: "token id_token",
  scope: "openid profile email"
};

let authData = new auth0.WebAuth(AUTH_CONFIG);

export const AUTH_APIS = {
  sync(callback, error) {
    const token = localStorage.getItem("id_token");
    const userInfo = localStorage.getItem("user_info");
    const data = {
      header: { Authorization: `Bearer ${token}` },
      data: userInfo
    };
    AuthService.POST.sync(data, result => callback(result), err => error(err));
  },
  login: (isSilentAuthentication: boolean) => {
    if (isSilentAuthentication) {
      authData.authorize({ prompt: "none" });
    } else authData.authorize();
  },
  logout() {
    this.clearSession();

    authData.logout({
      returnTo: APP_CONFIG.domain().mainHost,
      clientID: AUTH_CONFIG.clientID
    });
    window.location.href = "/";
  },
  syncUser() {
    const session = this.getSession();
    const idToken = localStorage.getItem("id_token");
    if (idToken && session) {
      this.sync(
        res => {
          if (res.success) {
            localStorage.setItem("user_sync", JSON.stringify(res));
          } else {
            console.error("Login failed because user sync failed.");
            this.logout();
          }
        },
        err => console.log(err)
      );
    } else console.log("session is not init...");
  },
  isAuthenticated() {
    if (typeof window === "undefined") return false;

    const expiresAt = JSON.parse(localStorage.getItem("expires_at") || "{}");
    return new Date().getTime() < expiresAt;
  },
  scheduleRenewal() {
    let expiresAt = JSON.parse(localStorage.getItem("expires_at") || "{}");
    let timeout = expiresAt - Date.now(); // mms

    if (timeout > 0) (() => setTimeout(() => this.renewSession(), timeout))();
    else if (timeout <= 0) this.logout();
  },
  renewSession() {
    authData.checkSession({}, (err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setMyInfo(authResult)
          .then(user => this.setSession(authResult, user))
          .catch(() => this.logout());
      } else if (err) {
        this.logout();
        console.error(err);
      }
    });
  },
  renewSessionPromise() {
    return new Promise((resolve, reject) => {
      authData.checkSession({}, (err, authResult) => {
        if (authResult && authResult.accessToken && authResult.idToken) {
          resolve(authResult);
          this.setMyInfo(authResult).then(user =>
            this.setSession(authResult, user)
          );
        } else if (err) {
          console.log(err);
          this.clearSession();
          reject(err);
        }
      });
    });
  },
  handleAuthentication(location) {
    return new Promise((resolve, reject) => {
      if (!/access_token|id_token|error/.test(location.hash)) reject();
      authData.parseHash((err, authResult) => {
        if (authResult && authResult.accessToken && authResult.idToken) {
          this.setMyInfo(authResult)
            .then(user => {
              this.setSession(authResult, user);
              this.scheduleRenewal();
              this.syncUser();
              resolve(user.sub);
            })
            .catch(err => reject(err));
        } else if (err) {
          this.clearSession();
          reject(err);
        }
      });
    });
  },
  setSession(authResult, userInfo) {
    let expiresAt = JSON.stringify(
      authResult.expiresIn * 1000 + new Date().getTime()
    );
    localStorage.setItem("access_token", authResult.accessToken);
    localStorage.setItem("id_token", authResult.idToken);
    localStorage.setItem("expires_at", expiresAt);

    if (userInfo) localStorage.setItem("user_info", JSON.stringify(userInfo));
  },
  getSession() {
    return {
      accessToken: localStorage.getItem("access_token"),
      idToken: localStorage.getItem("id_token"),
      userInfo: JSON.parse(localStorage.getItem("user_info") || "{}"),
      expiresAt: JSON.parse(localStorage.getItem("expires_at") || "{}")
    };
  },
  clearSession() {
    // Auth0 API
    localStorage.removeItem("access_token");
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
    localStorage.removeItem("user_info");

    // Tracking API
    localStorage.removeItem("tracking_info");

    // Content Editor
    localStorage.removeItem("content");
  },
  setMyInfo(authResult) {
    return new Promise((resolve, reject) => {
      authData.client.userInfo(authResult.accessToken, (err, user) => {
        if (err) {
          // console.error('Getting userInfo', err);
          reject(console.error(`Error: ${err.error}. Getting UserInfo`));
        } else {
          // console.log('Getting Userinfo Success!!', { user, authResult });
          resolve(user);
        }
      });
    });
  },
  getMyInfo() {
    let userInfo = localStorage.getItem("user_info");
    let userInfoWithJson = userInfo ? JSON.parse(userInfo) : "";
    if (!userInfoWithJson && this.isAuthenticated()) {
      this.renewSession();
      return new UserInfo(null);
    }
    return new UserInfo(userInfoWithJson);
  }
};
