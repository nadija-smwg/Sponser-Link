import { useEffect, useState } from "react";
import { Auth } from "./Components/auth";
 

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


const queryClient = new QueryClient({
  defaultOptions:{
    queries:{staleTime:5*1000}
  }
})
function App() {
  
  return (
    <QueryClientProvider client={queryClient}>
      <Auth/>
   </QueryClientProvider>
  );
}

export default App;