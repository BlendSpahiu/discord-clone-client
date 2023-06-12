import { RouterProvider } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { client } from './config/apollo';
import { ToastrProvider } from './context/toaster/ToasterContext';
import { router } from './routes/routes';

const App = () => {
  return (
    <ToastrProvider>
      <ApolloProvider client={client}>
        <RouterProvider router={router}></RouterProvider>
      </ApolloProvider>
    </ToastrProvider>
  );
};

export default App;
