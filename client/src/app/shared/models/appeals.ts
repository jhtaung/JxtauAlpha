export interface Department {
  departmentId: number;
  departmentCode: string;
  departmentName: string;
  presenterName: string;
  presenterTitle: string;
  createUser: string;
  createDate: Date;
  updateUser: string;
  updateDate: Date;
  comment: string;
  appeals: any[];
}

export interface PlanType {
  planTypeId: number;
  planTypeName: string;
  createUser: string;
  createDate: Date;
  updateUser: string;
  updateDate: Date;
  comment: string;
  appeals: any[];
}

export interface AppealContact {
  appealContactId: number;
  contactTypeId: number;
  appealId: number;
  appellantTypeId: number;
  firstName: string;
  middleName?: any;
  lastName: string;
  companyName?: any;
  addressLine1: string;
  addressLine2?: any;
  city: string;
  state: string;
  zip: string;
  providerId?: any;
  createDate: Date;
  createUser: string;
  updateDate: Date;
  updateUser: string;
  appeal?: any;
  appellantType?: any;
  contactType?: any;
}

export interface AppealStatusLog {
  appealStatusLogId: number;
  appealId: number;
  meetingScheduleId: number;
  appealStatusTypeId: number;
  notes?: any;
  createUser: string;
  createDate: Date;
  updateUser: string;
  updateDate: Date;
  comment?: any;
  appeal?: any;
  appealStatusType?: any;
  meetingSchedule?: any;
}

export interface Appeal {
  appealId: number;
  planTypeId: number;
  departmentId: number;
  mpid: string;
  subject: string;
  appealInfo: string;
  planReference: string;
  execSummary: string;
  additionalInfo?: any;
  recommendations: string;
  analysis?: any;
  supportingDocs?: any;
  lock: boolean;
  rap: boolean;
  isPrecedentEstablished: boolean;
  appealReceivedDate: Date;
  expirationDate: Date;
  createUser: string;
  createDate: Date;
  updateUser: string;
  updateDate: Date;
  comment?: any;
  department: Department;
  planType: PlanType;
  appealContacts: AppealContact[];
  appealStatusLogs: AppealStatusLog[];
}
