import React, {Suspense} from "react";
import App3Wrapper from "./components/App3Wrapper";
const RemoteApp = React.lazy(() => import("app2/App"));

const App = () => {
  return (
    <div>
      <div style={{
        margin:"10px",
        padding:"10px",
        textAlign:"center",
        backgroundColor:"greenyellow"
      }}>
        <h1>App1</h1>
      </div>
      <Suspense fallback={"loading App2..."}>
        <RemoteApp/>
      </Suspense>
        <App3Wrapper/>
    </div>
    
    )
}


export default App;
