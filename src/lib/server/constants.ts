import { ExpiringTokenBucket, RefillingTokenBucket } from './rate-limit';

export const globalBucket = new RefillingTokenBucket<string>(100, 1);

export const getGithubDataBucket = new ExpiringTokenBucket<string>(1, 60 * 10);
