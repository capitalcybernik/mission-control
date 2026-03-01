export type CMMCLevel = 'L1' | 'L2';

export type ImplementationStatus = 
  | 'Fully Implemented' 
  | 'Partially Implemented' 
  | 'Not Implemented' 
  | 'Not Applicable';

export interface CompanyInfo {
  name: string;
  contact: string;
  email: string;
  phone: string;
  level: CMMCLevel;
}

export interface ControlResponse {
  controlId: string;
  status: ImplementationStatus;
}

export interface AssessmentData {
  companyInfo: CompanyInfo;
  responses: Record<string, ImplementationStatus>;
  completedAt?: string;
}

export interface FamilyScore {
  familyCode: string;
  familyName: string;
  total: number;
  fullyImplemented: number;
  partiallyImplemented: number;
  notImplemented: number;
  notApplicable: number;
  score: number;
  maxScore: number;
}

export interface AssessmentResult {
  companyInfo: CompanyInfo;
  totalScore: number;
  maxScore: number;
  sprsScore: number;
  familyScores: FamilyScore[];
  gaps: GapItem[];
  completedAt: string;
}

export interface GapItem {
  controlId: string;
  family: string;
  description: string;
  status: ImplementationStatus;
}

export interface Submission {
  id: string;
  companyInfo: CompanyInfo;
  responses: Record<string, ImplementationStatus>;
  result: AssessmentResult;
  submittedAt: string;
}

// For nist-controls.ts compatibility
export interface ControlFamily {
  id: string;
  name: string;
  acronym: string;
  description: string;
}

export interface AssessmentQuestion {
  id: string;
  controlFamily: string;
  controlId: string;
  question: string;
  description: string;
  responseType: string;
}

export interface Control {
  id: string;
  family: string;
  name: string;
  isL1: boolean;
}
