import { MyContextProvider } from '../contexts/MyContextProvider';
import MyApp from './MyApp';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <MyContextProvider>
      <MyApp Component={Component} pageProps={pageProps} />
    </MyContextProvider>
  );
}
