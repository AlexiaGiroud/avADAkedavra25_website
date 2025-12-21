declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg';
declare module 'react/jsx-runtime';

declare namespace JSX {
	interface IntrinsicElements {
		[elemName: string]: any;
	}
}
