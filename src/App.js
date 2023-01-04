import logo from "./logo.svg";
import "./App.css";

function App() {
  const calling = () => {
    let myScript = "<script>alert('hello)</script>";
    myScript = myScript.replace("<script>", "");
    myScript = myScript.replace("</script>", "");

  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Hello React, welcome to the E-Mailer Application</h2>
        {calling}
      </header>
    </div>
  );
}

export default App;
