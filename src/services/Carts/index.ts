import { Request } from "../../libs";

import { env } from "../../data";

import { CartType, ResponseModel } from "../../entities";

class Carts {
  private request = new Request();

  constructor() {
    this.request.setBaseURL(env.standard.API_URL + "/cheffs/carts");
  }

  public async getAll({ token }: { token: string }) {
    this.request.setAuthorization(token);

    try {
      const data = (await this.request.get("/", {})) as any;

      return new ResponseModel<CartType[]>(data);
    } catch (error) {
      throw new ResponseModel<{}>(error as any);
    }
  }

  public async approve({ token, id }: { token: string; id: number }) {
    this.request.setAuthorization(token);

    try {
      const data = (await this.request.patch(`/${id}/approve`, {})) as any;

      return new ResponseModel<CartType>(data);
    } catch (error) {
      throw new ResponseModel<{}>(error as any);
    }
  }

  public async refuse({ token, id }: { token: string; id: number }) {
    this.request.setAuthorization(token);

    try {
      const data = (await this.request.patch(`/${id}/refuse`, {})) as any;

      return new ResponseModel<CartType>(data);
    } catch (error) {
      throw new ResponseModel<{}>(error as any);
    }
  }
}

const carts = new Carts();

export { carts };
