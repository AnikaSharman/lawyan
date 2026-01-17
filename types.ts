import { ReactNode } from 'react';

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface FeatureProps {
  title: string;
  description: string;
  image: string;
  icon?: ReactNode;
  reversed?: boolean;
  id?: string;
}

export interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  recommended?: boolean;
}