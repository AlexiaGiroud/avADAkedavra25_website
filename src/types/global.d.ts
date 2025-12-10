// Declarations to silence editor problems for static assets and Vite env
declare module 'figma:asset/*' {
  const src: string;
  export default src;
}

declare module '*.png' {
  const src: string;
  export default src;
}
declare module '*.jpg' {
  const src: string;
  export default src;
}
declare module '*.jpeg' {
  const src: string;
  export default src;
}
declare module '*.svg' {
  const src: string;
  export default src;
}

interface ImportMetaEnv {
  readonly BASE_URL?: string;
  // add other env vars your app uses here
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
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
