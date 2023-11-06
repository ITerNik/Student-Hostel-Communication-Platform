import React from "react";

import {HomePage} from "./pages/HomePage";
import {AuthorizationPage} from "./pages/AuthorizationPage";
import {NewsPage} from "./pages/NewsPage";
import {FAQPage} from "./pages/FAQPage";
import {LaundryPage} from "./pages/LaundryPage";
import {MarketPage} from "./pages/MarketPage";
import {RequestsPage} from "./pages/RequestsPage";
import {Routes, Route} from 'react-router-dom'
import {NavBar} from "./components/NavBar";

function App() {

  return (
      <>
          <NavBar />
          <div className="container max-w-5/6 mx-auto pt-5">
              <Routes>
                  <Route path="/" element={<HomePage />}/>
                  <Route path="/authorization" element={<AuthorizationPage />}/>
                  <Route path="/news" element={<NewsPage />}/>
                  <Route path="/faq" element={<FAQPage />}/>
                  <Route path="/laundry" element={<LaundryPage />}/>
                  <Route path="/market" element={<MarketPage />}/>
                  <Route path="/requests" element={<RequestsPage />}/>
              </Routes>
          </div>
      </>
  )
}

export default App
