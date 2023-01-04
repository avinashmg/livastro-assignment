import { useContext } from "react";
import "./App.css";
import Question from "./components/Question"; // Question component
import SubmittedAnswers from "./components/SubmittedAnswers";
import { Context, Provider } from "./Context";

const title: string = "LivAstro Assignment";

function Main() {
  const { submitted } = useContext<any>(Context);
  if (submitted)
    return (
      <main>
        <SubmittedAnswers />
      </main>
    );
  else
    return (
      <main>
        <Question />
      </main>
    );
}
function App() {
  return (
    <div className="App">
      <header className="App-header">{title}</header>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="Content">
        <Provider>
          <Main></Main>
        </Provider>
      </div>
    </div>
  );
}

export default App;
