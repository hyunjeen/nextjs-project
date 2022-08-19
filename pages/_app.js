import "../styles/globals.css";
import Layout from "../components/layout/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      {/* 우리의 컴포넌트가 렌더링됩니다 */}
    </Layout>
  );
}

export default MyApp;
