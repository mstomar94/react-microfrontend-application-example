import React, { Suspense } from "react";
const RemoteApp = React.lazy(() => import("App1/ChildComp"));

const App = () => {
  return (
    <div className="parent-container">
      <h1>Container App</h1>
      <Suspense>
        <RemoteApp val="Test" />
      </Suspense>
    </div>
  );
};

export default App;
