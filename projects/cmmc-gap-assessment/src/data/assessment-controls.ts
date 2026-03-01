import { Control } from '@/types';
import { controlFamilies, l1Controls, l2AdditionalControls } from './controls';

// Build a unified list of all controls for the assessment
// L1 controls come from l1Controls, L2 additional controls from l2AdditionalControls

export const allControls: Control[] = [];

// Add L1 controls
for (const c of l1Controls) {
  allControls.push({
    id: c.id,
    family: c.family,
    name: c.name,
    isL1: true,
  });
}

// Add L2 additional controls (these are NOT L1)
for (const familyGroup of l2AdditionalControls) {
  const familyInfo = controlFamilies.find(f => f.code === familyGroup.family);
  familyGroup.questions.forEach((q, idx) => {
    const controlId = `${familyGroup.family}.L2-${idx + 1}`;
    allControls.push({
      id: controlId,
      family: familyGroup.family,
      name: q,
      isL1: false,
    });
  });
}

export function getControlsForLevel(level: 'L1' | 'L2'): Control[] {
  if (level === 'L1') {
    return allControls.filter(c => c.isL1);
  }
  return allControls;
}

export function getControlsByFamily(controls: Control[]): Record<string, Control[]> {
  const grouped: Record<string, Control[]> = {};
  for (const c of controls) {
    if (!grouped[c.family]) grouped[c.family] = [];
    grouped[c.family].push(c);
  }
  return grouped;
}

export function getFamilyName(code: string): string {
  const f = controlFamilies.find(f => f.code === code);
  return f?.name ?? code;
}

export { controlFamilies };
