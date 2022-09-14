import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

interface ReactQueryProviderProps {
  children?: ReactNode;
}

export const ReactQueryProvider = ({ children }: ReactQueryProviderProps) => (
  <QueryClientProvider client={queryClient}>
    {children}

    <ReactQueryDevtools position="bottom-right" />
  </QueryClientProvider>
);
