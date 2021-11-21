import apiCaller from "../common/api_caller";

class AccountsService {
  aggregating = async (otp) => {
    const res = await apiCaller("accounts/aggregations", "POST", {
      oauth: {
        otp,
      },
    });
    return res;
  };

  fetch_accounts = async () => {
    const res = await apiCaller("accounts", "GET", {});
    return res;
  };
}
export default new AccountsService();
