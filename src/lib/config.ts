import { SiteConfigType } from '@/types';
import { DOMAIN_URL } from './constants';

export const siteConfig = {
  name: 'Zim Developers Labs',
  shortName: 'ZimDevLabs',
  twitterUsername: '@zimdevlabs',
  url: {
    logo: `${DOMAIN_URL}/apple-touch-icon.png`,
    web: `${DOMAIN_URL}`,
    twitter: `https://twitter.com/@zimdevlabs`,
    instagram: `https://www.instagram.com/zimdevlabs`,
    linkedin: `https://www.linkedin.com/company/zimdevlabs`,
    github: `https://github.com/orgs/Zim-Developers-Labs/repositories`,
    youtube: `https://www.youtube.com/@zimdevlabs`,
    facebook: `https://www.facebook.com/zimdevlabs`,
    banner: `${DOMAIN_URL}/banner.webp`,
  },
} satisfies SiteConfigType;
