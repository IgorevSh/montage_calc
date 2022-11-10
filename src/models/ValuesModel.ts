import MainRequest from "@/requests/MainRequest";
export default class ValuesModel {
  static async getValues() {
    return await MainRequest.getValues();
  }
}
