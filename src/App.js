import React, { lazy, useState, Suspense } from 'react';
import { Provider } from 'react-redux/es/exports';
import { BrowserRouter, Routes, Route, createBrowserRouter } from 'react-router-dom';

import './App.css';
import Body from './components/Body';
import NavBar from './components/NavBar';
import MenuContainer from './components/MenuContainer';
import store from './utils/store';
import myContext from './utils/myContext';
import SearchVideoContainer from './components/SearchVideoContainer';

const WatchPage = lazy(() => import('./components/WatchPage'));

function App() {
  const [text, setText] = useState();

  return (
    <myContext.Provider value={{ text, setText }}>
      <Provider store={store}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route
              path='/'
              element={<Body />}
            >
              <Route
                index // This means it will match if the path is "/"
                element={<MenuContainer />}
              />
            </Route>
            <Route path="/" element={<MenuContainer />} />
            <Route path="watch" element={<Suspense fallback={<div>Loading...</div>}>
              <WatchPage />
            </Suspense>} />
            <Route
              path="/search/:searchTerm"
              element={<SearchVideoContainer />}
            />
          </Routes>
        </BrowserRouter>
      </Provider>
    </myContext.Provider>
  );
}

export default App;


// import React, { lazy, useState, Suspense } from 'react';
// import { Provider } from 'react-redux/es/exports';
// import { BrowserRouter, Routes, Route, createBrowserRouter } from 'react-router-dom';

// import './App.css';
// import Body from './components/Body';
// import NavBar from './components/NavBar';
// import MenuContainer from './components/MenuContainer';
// import store from './utils/store';
// import myContext from './utils/myContext'
// import SearchVideoContainer from './components/SearchVideoContainer';

// const WatchPage = lazy(() => import('./components/WatchPage'));

// function App() {
//   const [text, setText] = useState("Home");

//   return (
//     <myContext.Provider value={{ text, setText }}>
//       <Provider store={store}>
//         <BrowserRouter>
//           <NavBar />
//           <Routes>
//             <Route
//               path='/'
//               element={<Body />}
//               children={
//                 {
//                   path= "/",
//                   element= <MenuContainer />
//                 },
//               }
//             />
//             <Route path="/" element={<MenuContainer />} />
//             <Route path="watch" element={<WatchPage />} />
//             <Route
//               path="/search/:searchTerm"
//               element={<SearchVideoContainer />}
//             />
//           </Routes>
//         </BrowserRouter>
//       </Provider>
//     </myContext.Provider>

//   );
// }

// function App() {
//   const [text, setText] = useState("Home");

//   return (
//     <myContext.Provider value={{ text, setText }}>
//       <Provider store={store}>
//         <BrowserRouter>
//           <NavBar />
//           <Routes>
//             <Route
//               path='/'
//               element={<Body />}
//             >
//               <Route
//                 index // This means it will match if the path is "/"
//                 element={<MenuContainer />}
//               />
//             </Route>
//             <Route path="/" element={<MenuContainer />} />
//             <Route path="watch" element={<WatchPage />} />
//             <Route
//               path="/search/:searchTerm"
//               element={<SearchVideoContainer />}
//             />
//           </Routes>
//         </BrowserRouter>
//       </Provider>
//     </myContext.Provider>
//   );
// }
//
// export default App;



// import React, { lazy, useState, Suspense } from 'react';
// import { Provider } from 'react-redux/es/exports';
// import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';

// import './App.css';
// import Body from './components/Body';
// import NavBar from './components/NavBar';
// import MenuContainer from './components/MenuContainer';
// import store from './utils/store';
// import myContext from './utils/myContext'
// import SearchVideoContainer from './components/SearchVideoContainer';

// const WatchPage = lazy(() => import('./components/WatchPage'));

// export const appRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "/",
//         element: <Body />
//       },
//       {
//         path: "/",
//         element: <MenuContainer />
//       },
//       {
//         path: "watch",
//         element: <Suspense><WatchPage /></Suspense>
//       },
//       {
//         path: "/search/:searchTerm",
//         element: <SearchVideoContainer />
//       },
//     ]
//   }
// ]);

// function App() {
//   const [text, setText] = useState("Home");

//   return (
//     <myContext.Provider value={{ text, setText }}>
//       <Provider store={store}>
//         <NavBar />
//         {/* <RouterProvider router={appRouter}>
//           <NavBar />
//         </RouterProvider> */}
//         <Outlet />
//       </Provider>
//     </myContext.Provider>

//   );
// }

// export default App;

