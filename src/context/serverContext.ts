import LmaoAPI from '../services/lmao'

export interface ServerContext {
    dataSources: {
      lmao: LmaoAPI;
    };
  }
  