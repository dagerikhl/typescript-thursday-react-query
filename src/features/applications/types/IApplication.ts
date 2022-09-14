import { ApplicationState } from "../enums/ApplicationState";
import { IDeployment } from "./IDeployment";

export interface IApplication {
  id: string;
  namespace: string;
  name: string;
  state: ApplicationState;
  branches?: string[];
  deployments?: IDeployment[];
}
