import Login from "./screens/LoginPage/LoginPage";

const App = () => {
  return (
    <div
      className="mood-tracker-app"
      style={{
        height: "calc(100vh - 16px)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Login />
    </div>
  );
};

export default App;
