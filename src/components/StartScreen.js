function StartScreen({ numQuestions, dispatch }) {
  return (
    <div className="start">
      <h1>Welcome to React Quiz</h1>
      <h3>
        {numQuestions} question{numQuestions === "1" ? "" : "s"} to test your
        React mastery.
      </h3>
      <button
        onClick={() => dispatch({ type: "start" })}
        className="btn btn-ui"
      >
        Let`s start
      </button>
    </div>
  );
}

export default StartScreen;
