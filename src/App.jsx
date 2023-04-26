import { Suspense, useState } from "react";
import styles from "./App.module.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { Outlet, useLoaderData } from "react-router-dom";

function App() {

  const user = useLoaderData()
  console.log(user);


  const [log, setLog] = useState(true)

  function logout () {
    setLog(false)
  }

  return (
    <div className={`d-flex flex-column ${styles.appContainer}`}>
        <Header log={log} logout={logout} />
        <Suspense>
          <Outlet />
        </Suspense>
        <Footer />
    </div>
  );
}

export default App;
