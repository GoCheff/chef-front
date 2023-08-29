import { Request } from "../../libs";

import { env } from "../../data";

import { FoodPlateType, ResponseModel } from "../../entities";

class FoodPlates {
  private request = new Request();

  constructor() {
    this.request.setBaseURL(env.standard.API_URL + "/cheffs/food-plates");
  }

  public async getAll({ token }: { token: string }) {
    this.request.setAuthorization(token);

    try {
      const data = (await this.request.get("", {})) as any;

      return new ResponseModel<FoodPlateType[]>(data);
    } catch (error) {
      throw new ResponseModel<{}>(error as any);
    }
  }

  public async create({
    token,
    data,
  }: {
    token: string;
    data: Omit<
      FoodPlateType,
      "id" | "cheffId" | "createdAt" | "updatedAt" | "deletedAt"
    >;
  }) {
    this.request.setAuthorization(token);

    try {
      const response = (await this.request.post("", data)) as any;

      return new ResponseModel<FoodPlateType>(response);
    } catch (error) {
      throw new ResponseModel<{}>(error as any);
    }
  }
}

const foodPlates = new FoodPlates();

export { foodPlates };
