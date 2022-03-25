import { Department } from "./department";

export interface Template {
  id: number;
  subjectTemplate?: any;
  appealInfoTemplate?: any;
  planReferenceTemplate: string;
  createUser: string;
  createDate: Date;
  updateUser: string;
  updateDate: Date;
  comment?: any;
  execSummaryTemplate: string;
  recommendationsTemplate: string;
  department: Department;
}
