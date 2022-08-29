export const styleConsoleLog = (
  msg = '',
  cssStyles = `
    color: green;
    font-weight: 800;
    text-decoration: underline;
    padding: 50px 0;
    font-size: 24px;
  `,
) => console.log(`%c${msg}`, `${cssStyles}`);
