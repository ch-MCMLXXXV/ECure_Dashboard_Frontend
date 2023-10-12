import '@/styles/globals.css';
import { AuthProvider } from '../../context/AuthContext';
import Sidebar from '../components/Sidebar';

export default function App({ Component, pageProps }) {
   return (
      <Sidebar>
         <AuthProvider>
            <Component {...pageProps} />
         </AuthProvider>
      </Sidebar>
   );
}
