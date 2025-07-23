import AppRouter from "./router/AppRouter";

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
      <AppRouter />
    </div>
  );
};

export default App;
