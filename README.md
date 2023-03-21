# react and typescript
## _Course Based on Youtube video with Fernando Herrera_
 [![@DevTalles](images/2023-03-21_114611.png)](https://www.youtube.com/watch?v=dNxaP_BTtwQ)

## Initial Steps to start the project:
1. Use or create a directory for react tutorials (the mine is in the unit "E:")
```sh
e:
cd \
md tutorials
cd tutorials
md react
cd react
```
>This is my path: "E:\tutorials\react".

2. Check for the version installed of nodejs
```sh
node --version
```
>It must be "v14.x.x" or up (the mine is in v16.15.1).

3. Run the command to create the project 
```sh
npx create-react-app react_n_typescript --template typescript
```
4. Move to the new directory
```sh
cd react_n_typescript
```
5. Start the Visual Studio Code
```sh
code .
```
6. Check for the new structure created:

![Initial structure](images/2023-03-21_112627.png)
>Open each file into "src" directory.

7. Open a new terminal into Visual Studio Code, and run the command to start the app:
```sh
npm start
```

## First Changes to the App
1. Delete the "App.css" file.
2. Delete the "App.test.tsx" file.
3. Open the "App.tsx" file.
4. Delete those three lines:
- import React from 'react';
- import logo from './logo.svg';
- import './App.css';
5. Delete all "header" Element (lines 5 to 18 aprox.)
6. Delete the className.
7. Transform the "div" just in a fragment
>This si the final result into "App.tsx" file:
```javascript
function App() {
  return (
    <>
      <h1>Hola Mundo</h1>
    </>
  );
}

export default App;
```
8. Delete the "index.css" file.
9. Open the "index.tsx" file.
10. Delete some elements to let "index.tsx" like this:
```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```
11. Delete the "logo.svg" file. 
12. Delete the "repostWebVitals.ts" file
13. Go to the https://getbootstrap.com/ page
14. Go the element "Include via CND" and copy the link
```sh
<link href="https://cdn.jsdelivr.net/npm/bootstrap@...">
```
15. Open in "Public" directory the "index.html" file.
16. And paste below of this line:
```sh
<title>React App</title>
```
>Almost line 28
17. Add in the "body" of "index.html" a class:
```sh
<body class ="container bg-dark text-white">
```

## License

MIT
