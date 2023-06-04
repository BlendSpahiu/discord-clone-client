import { RouterProvider } from 'react-router-dom';
import { ToastrProvider } from './context/toaster/ToasterContext';
import { router } from './routes/routes';

const App = () => {
  return (
    <ToastrProvider>
      <RouterProvider router={router}></RouterProvider>
    </ToastrProvider>
  );
};

export default App;
