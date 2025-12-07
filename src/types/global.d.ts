// Custom type declarations to satisfy TypeScript for static assets and import.meta.env
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg';

interface ImportMetaEnv {
  readonly BASE_URL?: string;
  // add other env vars here as needed
  [key: string]: any;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
