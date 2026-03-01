import { CompanyInfo, ImplementationStatus, FamilyScore, AssessmentResult, GapItem } from '@/types';
import { getControlsForLevel, getControlsByFamily, getFamilyName } from '@/data/assessment-controls';

export function calculateResults(
  companyInfo: CompanyInfo,
  responses: Record<string, ImplementationStatus>
): AssessmentResult {
  const controls = getControlsForLevel(companyInfo.level);
  const grouped = getControlsByFamily(controls);
  const familyScores: FamilyScore[] = [];
  const gaps: GapItem[] = [];
  let totalScore = 0;
  let maxScore = 0;

  for (const [code, familyControls] of Object.entries(grouped)) {
    let full = 0, partial = 0, notImpl = 0, na = 0;

    for (const c of familyControls) {
      const status = responses[c.id] || 'Not Implemented';
      if (status === 'Fully Implemented') full++;
      else if (status === 'Partially Implemented') {
        partial++;
        gaps.push({ controlId: c.id, family: code, description: c.name, status });
      } else if (status === 'Not Implemented') {
        notImpl++;
        gaps.push({ controlId: c.id, family: code, description: c.name, status });
      } else {
        na++;
      }
    }

    const applicable = familyControls.length - na;
    const familyMax = applicable;
    const familyScore = full + (partial * 0.5);

    familyScores.push({
      familyCode: code,
      familyName: getFamilyName(code),
      total: familyControls.length,
      fullyImplemented: full,
      partiallyImplemented: partial,
      notImplemented: notImpl,
      notApplicable: na,
      score: familyScore,
      maxScore: familyMax,
    });

    totalScore += familyScore;
    maxScore += familyMax;
  }

  // SPRS-like: start at max, subtract for gaps
  // Fully = 0 deduction, Partial = -1 per, Not Implemented = -3 per (simplified)
  const maxSprs = companyInfo.level === 'L1' ? 17 : 110;
  let sprsDeductions = 0;
  for (const gap of gaps) {
    if (gap.status === 'Partially Implemented') sprsDeductions += 1;
    else if (gap.status === 'Not Implemented') sprsDeductions += 3;
  }
  const sprsScore = Math.max(maxSprs - sprsDeductions, -203);

  return {
    companyInfo,
    totalScore,
    maxScore,
    sprsScore,
    familyScores: familyScores.sort((a, b) => {
      const order = ['AC','AT','AU','CA','CM','IA','IR','MA','MP','PE','PS','RA','SC','SI'];
      return order.indexOf(a.familyCode) - order.indexOf(b.familyCode);
    }),
    gaps,
    completedAt: new Date().toISOString(),
  };
}
