
import {HomePage} from "./pages/HomePage";
import {RegisterPage} from "./pages/RegisterPage";
import {NewsPage} from "./pages/NewsPage";
import {FAQPage} from "./pages/FAQPage";
import {LoginPage} from "./pages/LoginPage";
import {LaundryPage} from "./pages/LaundryPage";
import {MarketPage} from "./pages/MarketPage";
import {RequestsPage} from "./pages/RequestsPage";

import {Routes, Route} from 'react-router-dom'

import {Footer} from "./components/Footer";
import {Header} from "./components/Header";

function App() {

  return (
      <>
          <Header />
          <main>
              <Routes>
                  <Route path="/" element={<HomePage />}/>
                  <Route path="/register" element={<RegisterPage />}/>
                  <Route path="/news" element={<NewsPage />}/>
                  <Route path="/faq" element={<FAQPage />}/>
                  <Route path="/laundry" element={<LaundryPage />}/>
                  <Route path="/market" element={<MarketPage />}/>
                  <Route path="/requests" element={<RequestsPage />}/>
                  <Route path="/login" element={<LoginPage />} />
              </Routes>
          </main>
          <Footer />
      </>
  )
}

export default App
