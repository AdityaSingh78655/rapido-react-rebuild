// import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Index from "./pages/Index";
// import NotFound from "./pages/NotFound";
// import AboutUs from "./components/AboutUs";
// import HelpCenter from "./components/HelpCenter";
// import Safety from "./components/Safety";
// import LostAndFound from "./components/LostAndFound";
// import PrivacyPolicy from "./components/PrivacyPolicy";
// import TermsOfService from "./components/TermsOfService";
// import RefundPolicy from "./components/RefundPolicy";

// const queryClient = new QueryClient();

// const App = () => (
//   <QueryClientProvider client={queryClient}>
//     <TooltipProvider>
//       <Toaster />
//       <Sonner />
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Index />} />
//           <Route path="/AboutUs" element={<AboutUs />} />
//            <Route path="/HelpCenter" element={<HelpCenter />} />
//             <Route path="/Safety" element={<Safety />} />
//              <Route path="/LostAndFound" element={<LostAndFound />} />
//               <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
//               <Route path="/TermsOfService" element={<TermsOfService />} />
//                <Route path="/RefundPolicy" element={<RefundPolicy />} />
//           {/* <Route path="/Safty" element={<Safty />} /> */}

//           {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </BrowserRouter>
//     </TooltipProvider>
//   </QueryClientProvider>
// );

// export default App;

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AboutUs from "./components/AboutUs";
import HelpCenter from "./components/HelpCenter";
import Safety from "./components/Safety";
import LostAndFound from "./components/LostAndFound";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsOfService from "./components/TermsOfService";
import RefundPolicy from "./components/RefundPolicy";
import Footer from "./components/Footer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Header />
        <main> {/* Prevents content from hiding under sticky header */}
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/HelpCenter" element={<HelpCenter />} />
            <Route path="/Safety" element={<Safety />} />
            <Route path="/LostAndFound" element={<LostAndFound />} />
            <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
            <Route path="/TermsOfService" element={<TermsOfService />} />
            <Route path="/RefundPolicy" element={<RefundPolicy />} />

            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
         <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
