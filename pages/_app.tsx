import "../styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";
import { Provider } from "react-redux";
import store from "../redux/store";
import Head from "next/head";
import SideBar from "components/SideBar";
import Music from "components/MusicPlay";
import Main from "components/Main";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <div className="w-full h-full">
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="w-full h-main flex">
          <SideBar />
          <Main>
            <Component {...pageProps} />
          </Main>
        </div>
        <Music />
      </div>
    </Provider>
  );
}
export default MyApp;
