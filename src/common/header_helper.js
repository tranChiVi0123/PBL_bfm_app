export default function headerHelper() {
  let user = JSON.parse(localStorage.getItem("user"));
    return { 
      "Authorization": `Bearer " + ${user ? user.token : undefined}`,
      "Content-Type": 'application/json'
    };
}
