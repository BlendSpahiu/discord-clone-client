import { QueryClient, QueryClientProvider } from 'react-query';
import { RouterProvider } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { client } from './config/apollo';
import { ToastrProvider } from './context/toaster/ToasterContext';
import { router } from './routes/routes';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ToastrProvider>
        <ApolloProvider client={client}>
          <RouterProvider router={router}></RouterProvider>
        </ApolloProvider>
      </ToastrProvider>
    </QueryClientProvider>
  );
};

export default App;
