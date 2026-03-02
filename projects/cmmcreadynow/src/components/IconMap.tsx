import {
  ShieldCheck,
  Search,
  BarChart3,
  Mail,
  Clock,
  MapPin,
  Shield,
  Target,
  Users,
  Building2,
  type LucideIcon,
} from 'lucide-react';

const icons: Record<string, LucideIcon> = {
  ShieldCheck,
  Search,
  BarChart3,
  Mail,
  Clock,
  MapPin,
  Shield,
  Target,
  Users,
  Building2,
};

export function Icon({ name, className = '' }: { name: string; className?: string }) {
  const Comp = icons[name] || Shield;
  return <Comp className={className} />;
}
