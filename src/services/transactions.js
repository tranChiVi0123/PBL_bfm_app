import apiCaller from "../common/api_caller";

class TransactionsService {
  fetch_transactions = () => {
    const res = apiCaller("transactions", "GET", {});
    return res;
  };
}
export default new TransactionsService();
