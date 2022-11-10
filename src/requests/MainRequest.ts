// @ts-ignore
import axios from "axios";

const api = "http://localhost:3000";

export default class MainRequest {
  static async getValues() {
    return await axios.get(`${api}/backend/values`);
  }
}
