declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg';
declare module '*.gif';

declare module '*?url' {
  const src: string;
  export default src;
}

declare module 'figma:asset/*' {
  const src: string;
  export default src;
}

declare module 'react/jsx-runtime';

declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}
