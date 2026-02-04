export type Platform = 'web' | 'mobile' | 'desktop';

export type Pricing = 'free' | 'paid';

export interface Template {
  id: number;
  name: string;
  description: string;
  useCase: string;
  framework: string;
  tags?: string[];
  pricing: Pricing;
  platform: Platform;
}

export const templates: Template[] = [];
