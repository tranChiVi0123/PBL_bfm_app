import apiCaller from "../common/api_caller";

class AccountsService {
  async aggregating(id) {
    const res = await apiCaller("accounts/aggregations", "POST", {
      aggre_account_id: id
    });
    if (res.data) {
      console.log(res.data)
    }
    console.log(res.data);
    return res.data;
  }
}
export default new AccountsService();
