import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppRouter from "./AppRouter";
import AppToaster from "./ui/AppToaster";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { staleTime: 0 * 1000 },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppRouter />

      <AppToaster />
    </QueryClientProvider>
  );
}

export default App;
