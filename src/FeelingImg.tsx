type Props = React.SVGProps<SVGSVGElement> & { num: number };

const FEELING_ICONS = [
  <path
    fill="#e6354d"
    d="m68.96,137.43C29.54,139.42,2.1,103.82.22,76.27c-1.44-21.13,3.97-39.9,18.88-55.4C30.02,9.52,43,1.95,58.91.48c23.38-2.16,44.41,2.69,61.04,20.79,11.31,12.32,17.15,26.68,18.37,43.29,3.13,42.92-34.11,75.46-69.35,72.87Zm1.56-60.91c-10.76-.02-14.06,1.27-21.48,9.19-2.21,2.36-6.11,5.48-2.33,8.79,3.53,3.09,5.32-1.25,7.27-3.51,9.9-11.48,23.88-10.65,32.32,1.7.9,1.32,3.41,1.54,5.17,2.27.31-1.91,1.51-4.3.79-5.66-4.69-8.78-11.86-13.71-21.75-12.77Zm35.95-9.85c1.34-.89,3.98-1.73,4.74-3.42.77-1.7.39-4.82-.78-6.27-1.5-1.86-1.37-2.36,0-4.11.73-.93.22-3.59-.66-4.79-.65-.88-3.09-1.32-4.23-.81-3.46,1.53-6.91,3.31-9.88,5.62-1.11.87-1.84,4.18-1.11,5.11,2.29,2.93,5.29,5.32,8.15,7.75.66.56,1.86.49,3.77.92Zm-74.42.03c1.98-.47,3.25-.38,3.83-.97,2.68-2.72,5.4-5.46,7.57-8.57.58-.83-.28-3.66-1.32-4.41-2.93-2.11-6.2-3.86-9.55-5.24-1.31-.54-4.05-.28-4.59.58-.8,1.29-.24,3.43-.26,5.22-.01,1.3.02,2.6-.04,3.9-.1,2.02-.98,4.41-.19,5.95.89,1.71,3.28,2.63,4.55,3.56Z"
  />,
  <path
    fill="#fd7e20"
    d="m69.45,0C31.09,0,0,31.09,0,69.46s31.09,69.45,69.45,69.45,69.46-31.09,69.46-69.45S107.82,0,69.45,0Zm-30.58,58.74c-.55,2.23-3.95,5.23-6.09,5.21-2.19-.03-5.94-3.2-6.07-5.2-.15-2.1,3.17-4.44,6.51-8.58,2.96,4.24,6.08,6.84,5.65,8.57Zm51.27,34.19c-1.52.12-3.74-.46-4.62-1.58-10.42-13.19-23.11-13.33-34.18-.43-1.08,1.27-3.55,1.36-5.37,2-.39-1.75-1.71-4.1-1.03-5.17,4.61-7.21,10.53-12.66,19.72-13.49,11.39-1.03,20.73,1.95,26.6,12.48.48.85.77,1.8,1.37,3.25-.77.97-1.56,2.87-2.49,2.94Zm21.73-34.5c-.78,2.39-3.92,5.32-6.26,5.5-1.95.15-5.72-3.18-5.87-5.18-.16-2.1,3.04-4.45,6.24-8.58,3.07,4.1,6.36,6.79,5.89,8.26Z"
  />,
  <path
    fill="#fecf2c"
    d="m68.58,0c38.68-.27,68.93,29.82,70.11,65.96,1.36,41.53-30.91,72.61-68.6,72.75C31.42,138.85,2.08,109.06.1,71.92-2.13,30.11,33.91-.5,68.58,0Zm15.18,90.09c-1.72-1.91-2.39-3.29-3.43-3.69-8.47-3.3-16.96-6.57-25.59-9.43-1.23-.41-3.44,1.23-4.69,2.44-.35.34.77,3.36,1.77,3.76,8.74,3.47,17.56,6.77,26.49,9.71,1.19.39,3.15-1.55,5.44-2.79Zm22.6-34.09c-3.97-.44-6.91.55-6.74,5.09.15,3.78,2.8,5.85,6.21,5.67,3.28-.17,6.7-1.46,6.62-5.82-.07-3.97-2.26-5.67-6.1-4.94Zm-79.67,5.15c.45,3.47,2.44,5.63,6.1,5.72,3.92.1,7.21-2.99,6.85-6.27-.54-4.81-4.02-4.75-7.73-4.72-3.62.03-5.11,1.73-5.21,5.26Z"
  />,
  <path
    fill="#acd91c"
    d="m68.23.07c41.75-1.71,67.78,28.9,70.74,61.56,3.98,43.82-29.08,71.42-56.53,74.95C27.36,143.65,2.14,102.26.15,72.76-2.47,33.85,29.62-.82,68.23.07Zm-.07,99.1c11.03-.58,19.43-3.9,24.34-12.93.94-1.72,1.07-5.53.01-6.35-2.57-1.98-4.65-.04-6.22,2.61-3.82,6.43-9.65,9.24-17.1,8.9-7.38-.34-11.88-5.01-16.31-10.18-1-1.17-3.62-.96-5.49-1.38-.22,1.67-1.21,3.81-.52,4.92,5.13,8.4,12.76,13.18,21.29,14.41Zm-34.7-43.94c-3.55-.36-6,1.3-6.13,5.16-.13,3.79,2.17,5.74,5.94,5.84,3.86.1,6.74-1.55,6.75-5.6,0-3.71-2.48-5.58-6.56-5.4Zm72.97,0c-3.54-.34-6.04,1.25-6.15,5.14-.11,3.78,2.25,5.68,5.96,5.84,3.93.17,6.62-1.68,6.7-5.64.08-3.81-2.48-5.53-6.51-5.34Z"
  />,
  <path
    fill="#4fcb57"
    d="m138.72,69.05c.21,39.54-31.2,69.88-69.19,69.69C29.84,138.53,1.16,108.24.04,72.1-1.31,28.82,32.39.72,67.09.02c40.7-.82,71.47,29.69,71.63,69.04Zm-69.34,8.2v-.02c-5.15,0-10.3-.1-15.44.04-3.53.1-7.05.54-10.58.82,1.95,3.24,3.57,6.75,5.93,9.66,6.82,8.39,14.89,14.39,26.61,11.11,9.79-2.74,15.24-10.06,19.2-18.8,1.4-3.1-1.02-2.79-2.81-2.8-7.64-.03-15.27-.01-22.91-.01Zm37.25-21.3c-4.38.03-6.99,1.22-6.84,5.39.13,3.92,2.54,5.44,6.17,5.54,4.04.11,6.46-2.04,6.43-5.88-.03-3.89-2.92-5.19-5.75-5.05Zm-74.23,10.97c4.02-.04,6.85-1.34,7.01-5.19.17-4.06-2.38-5.68-6.33-5.78-3.81-.09-6.17,1.43-6.24,5.26-.07,3.81,2.45,5.46,5.56,5.72Z"
  />,
];

export default function FeelingImg({ num = 0, style = {}, ...props }: Props) {
  return (
    <svg
      {...props}
      style={{ height: 50, ...style }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 138.5 137.58"
    >
      {FEELING_ICONS[num]}
    </svg>
  );
}
