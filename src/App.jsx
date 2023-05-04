// import React from "react"; //implicit using it
import { useState } from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SearchParams from "./components/SearchParams";
import Details from "./components/Details";
import AdoptedPetContext from "./context/AdoptedPetContex";

//how long do you want me to cash things? for a session ==infinity, once you fetch something, dont refetch it
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cashTime: Infinity,
    },
  },
});
const App = () => {
  const adoptedPet = useState(null);
  return (
    <StrictMode>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          {/* //passing the whole hook to update the value  */}
          <AdoptedPetContext.Provider value={adoptedPet}>
            <header>
              <Link to="/">Adopt Me!</Link>
            </header>
            <div>
              <Routes>
                <Route path="/details/:id" element={<Details />} />
                <Route path="/" element={<SearchParams />} />
              </Routes>
            </div>
          </AdoptedPetContext.Provider>
        </QueryClientProvider>

        {/* <div>
        <Pet name="Pepper" animal="bird" breed="Cockatiel" />
        <Pet name="Doink" animal="cat" breed="Mix" />
        <Pet name="Luna" animal="dog" breed="Havanese" />
      </div> */}
      </BrowserRouter>
    </StrictMode>
  );
};
// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Adopt Me!"),
//     React.createElement(Pet, {
//       name: "Luna",
//       animal: "Dog",
//       breed: "Havanese",
//     }),
//     React.createElement(Pet, {
//       name: "Pepper",
//       animal: "Bird",
//       breed: "Cockatiel",
//     }),
//     React.createElement(Pet, { name: "Doink", animal: "Cat", breed: "Mix" }),
//   ]);
// };

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
// root.render(React.createElement(App));
