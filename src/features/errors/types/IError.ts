import { ErrorSeverity } from "../enums/ErrorSeverity";

export interface IError {
  id: string;
  timestamp: number;
  severity: ErrorSeverity;
  message?: string;
}
