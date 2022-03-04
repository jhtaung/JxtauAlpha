export interface Appeal {
  appealId: number;
  planTypeId: number;
  departmentId: number;
  mpid: string;
  subject: string;
  appealInfo: string;
  planReference: string;
  execSummary: string;
  additionalInfo: string;
  recommendations: string;
  analysis: string;
  supportingDocs: string;
  lock: boolean;
  rap: boolean;
  isPrecedentEstablished: boolean;
  appealReceivedDate: Date;
  expirationDate: Date;
  createUser: string;
  createDate: Date;
  updateUser: string;
  updateDate: Date;
  comment: string;
}
