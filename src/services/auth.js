import apiCaller from "../common/api_caller";
import router from "@/router"

class AuthService {
  async login(user) {
    const res = await apiCaller("users/sign_in", "POST", {
      user: {
        email: user.email,
        password: user.password,
      },
    });
    if (res.data.token) {
      localStorage.setItem("user", JSON.stringify(res.data));
    }
    return res.data;
  }

  logout() {
    localStorage.removeItem("user");
    router.push({path: "login", params: {}})
  }

  async register(user) {
    return await apiCaller("users", "POST", {
      user: {
        email: user.email,
        password: user.password,
        password_confirmation: user.password_confirmation,
      },
    });
  }
}
export default new AuthService();
