
import {HomePage} from "./pages/HomePage";
import {RegisterPage} from "./pages/RegisterPage";
import {NewsPage} from "./pages/NewsPage";
import {FAQPage} from "./pages/FAQPage";
import {LaundryPage} from "./pages/LaundryPage";
import {MarketPage} from "./pages/MarketPage";
import {RequestsPage} from "./pages/RequestsPage";
import {Routes, Route} from 'react-router-dom'
import {NavBar} from "./components/NavBar";
import {LoginPage} from "./pages/LoginPage";

function App() {

  return (
      <>
          <NavBar />
          <div className="container max-w-5/6 mx-auto">
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
          </div>
          <div className="h-[350px] bg-orange-300" />
      </>
  )
}

export default App
