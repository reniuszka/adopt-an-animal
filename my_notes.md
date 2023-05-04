My notes how to add pretttier and eslint and vite and react, react DOM

1.  npm init -y -> no questions
2.  npm i -D prettier@2.7.1 --> -D === --save-dev (developer dependencies)
3.  .prettierrc - config file - > {} - use whatever defaults are and i dont care what they are, we tell VSC if you see prettier config, use prettier automatically
4.  ctrl+ , -> prettier require config checked - VS will check if the project has a prettier file to read it as prioryty
5.  npm run format - add to scripts in package.json : "format": "prettier --write \"src/\*_/_.{js,jsx,ts,tsx} \"", (zamist \_ to \*) to format the files in scr folder, write ==overwrite
6.  ESLINT - npm i -D eslint@8.24.0 eslint-config-prettier@8.5.0
7.  create .eslintrc.json
8.  package.json: "lint": "eslint \"src/\*_/_.{js,jsx,ts,tsx} \" --quiet", -> npm run lint
9.  .gitignore
10. vite: npm i -D vite@3.1.4 @vitejs/plugin-react@2.1.0
11. vite.config.js
12. npm i react@18.2.0 react-dom@18.2.0 and addd to script "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
13. update eslint to not have any errors with imports (making eslint to understand react and jsx import Component and use of it <Component/>) : npm install -D eslint-plugin-import@2.26.0 eslint-plugin-jsx-a11y@6.6.1 eslint-plugin-react@7.31.8
    npm install -D eslint-plugin-import@2.26.0 eslint-plugin-jsx-a11y@6.6.1 eslint-plugin-react@7.31.8 ---> npm run lint - check if no errors
14. official eslint for react hooks to use them in a good way : npm install -D eslint-plugin-react-hooks@4.6.0 and add in esling cofig file : "plugin:react-hooks/recommended",
15. useEffect - go to do something outside of the life cycle of my component (retrieve data from api when I click submit)
16. when I want to sort my array, I have the same group of elements in my array, but I have decided to order them differently. React knows that the array has changed and it doestn know how it changed so its gonna destroy everythin inside that render tree and rerender it from scratch which is unnecessary. So its better if its just 'you have rerendered the same things but in different order' so instead if destroy everything and rerender it REact would just swap them, giving it a KEY (must be unique per object on my array)
17. Custom hooks are other hooks packaged together, calling useState and useEffect a couple of times, package it up all together, I later I can say useBreedList instead of blah long code. its easy to test, reusuable,
18. smaller components its easier to share, easier to understand
19. {...pets} - i shouldnt use it, its very implicit, saying pass all along. Do I want to pass everything, i do not know yet, its better to be explicit to see what comes from where, pet component expects this specific, so i am giving the pet component this specific prop BUT its good to pass {...pets} throgh the component if it doesnt do anything with it and doesnt care as ts just passing it down to he lower component
20. React Router: npm install react-router-dom@6.4.1
21. a vs Link -> a make a full rerender of the new page which is slow
22. useParams()- its a hook, BrowserRouter is a context (browser router) and we can get data from it
23. React Query is a data-fetching library that helps with fetching, caching, synchronising, and updating the server state in your react application. it handles API requests so Thanks to that I do not need to use useEffect---> npm install @tanstack/react-query@4.10.1
24. HIgher Order Components (HOC)- things like React.memo(), Browser Router and QueryClientProvider - they are basically wrapping components that they themselves dont display anything. its providing context to components underneath it
25. results?.data - if results if available give me that, if not, dont give me an error
26. ?? if any of results?.data?.breeds fails give me back an empty array
27. arrow function doesnt create a new scope and normal function whenever you invoke it it creates a new function - a new scope at the point of invocation
28. to make a popup - use portal which allowes to render to a different place from within a component -> <div id ='modal'><div/> in index.html
29. null renders nothing
30. context is really usefull when I have 10or more pages where to 9 of them the logged in user has the access ( i can do it with useState in app.js and to <Route path='/' element={<Details user={user}/> to add this prop to have access) USe state shows me the flow of data, in context its easy to use, but Im losing the info od data flow
31. Context is the app level, generalized state
32. in context i do not have to have a dedault value, but with typescript i need to have it
33. useNavigate - reroutes someone
34. https://legacy.reactjs.org/docs/error-boundaries.html
35. useRef -> allows to grab a specific DOM node/element, it has one property : current !!!IMPORTANT: ref.current is surviving between various render cycles of the component(it is NOT created and destroyed every single render cycle). Therefore I will always have the exact same object === object meaning ref.current hits-> the same DOM node
36. MEMO will guarantee, if I provide the component with it, If I provide this exact same props to this component, it wont renreder (React.memo tells React "as long as the parameters being passed into this component don't change, do not re-render it ever. ),
    https://react-v8.holt.courses/lessons/hooks-in-depth/useref
37. If i use memo to function, and I pass objects into thath function, i need to use a ref or a useMemo, or useCallback --> https://dmitripavlutin.com/use-react-memo-wisely/
38. useReducer allows us to do Redux-style reducers but inside a hook. it says: I have a function, that function takes a bit of state, it takes an action and it gives you back a new bit of state. The reducer is very testable
39. useMemo can add performance optimizations to a component by eliminating re-rendering in the DOM. This can help keep animations smooth and reduce studdering or janky behavior. Use it when have a function to recalculate it only when count is different(coz we added sth to count)

40. useCallback hook memoizes a callback function. This allows a resource-intensive function to be isolated so it will not run on every render.
41. useLayoutEffect is called immediately after the render function(useEffect is slower) so any calls to setState inside that effect will result in only one re-render instead of two.(useEffect has two). useful when i have sth and i need to mesure sth thath happens in DOM
    42.!NEW! useId - gives me a specific id for one component, usefull with label and inputs, click on the label and input is focused

link: https://react-v8.holt.courses/ and https://github.com/btholt/citr-v8-project
ESLint and Prettier apps required to have:
Prettier catches all formating problems
ESLint -catches very simple JS problems
