import { QueryClient, QueryClientProvider } from 'react-query';
import { RouterProvider } from 'react-router-dom';
import { ToastrProvider } from './context/toaster/ToasterContext';
import { router } from './routes/routes';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ToastrProvider>
        <RouterProvider router={router}></RouterProvider>
      </ToastrProvider>
    </QueryClientProvider>
  );
};

export default App;
