import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, fetchDataAsync } from "./actions";
import { AppDispatch, RootState } from "./store";
import MyComponent from "./MyComponent";
import Component from "./Component";
import Style from "./Style";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { AuthProvider } from "./AuthContext";
import { lazy, Suspense } from "react";
import ParentComponent from "./ParentComponent";
import FunctionalComponent from "./FunctionalComponent";
import Orderwithdata from "./order";

const LazyLogin = lazy(() => import("./Login"));
const LazyHome = lazy(() => import("./Home"));

const App: React.FC = () => {
  const { counter, asyncData, loading, error } = useSelector(
    (state: RootState) => state
  );
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDataAsync());
  }, [dispatch]);

  return (
    <div>
      <center>
        <h1>Counter: {counter}</h1>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
        {asyncData && (
          <div>
            <h2>Fetched Data:</h2>
            <p>{asyncData.title}</p>
            <p>{asyncData.id}</p>
          </div>
        )}
        <Orderwithdata name={"honey"} age={25} data={[]} />
        <AuthProvider>
          <Router>
            <nav>
              <ul>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/">Home</Link>
                </li>
              </ul>
            </nav>
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/login" element={<LazyLogin />} />
                <Route path="/" element={<LazyHome />} />
              </Routes>
            </Suspense>
          </Router>
        </AuthProvider>
        <MyComponent />
        <Style />
        <FunctionalComponent prop1={""} prop2={""} />
        <ParentComponent />
        <Component />
      </center>
    </div>
  );
};

export default App;
