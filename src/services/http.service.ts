import {storageService} from './async-storage.service'

export interface IServerResponse {
  data?: any,
  errors?: Array<any>
}

export const httpService = {  
  async get(route: string, query: string): Promise<IServerResponse> {
    try {
      const res: any = await storageService.get(route, query)
      return {data: res}
    } catch (e) {
      return {errors: [e]};
    }
  },
  async post(route: string, data: any): Promise<IServerResponse> {
    try {
      const res: any = await storageService.post(route, data)
      return {data: res}
    } catch (e) {
      return {errors: [e]};
    }
  },
  async remove(route: string, id: string): Promise<IServerResponse> {
    try {
      const res: any = await storageService.remove(route, id)
      return {data: res}
    } catch (e) {
      return {errors: [e]};
    }
  }
}