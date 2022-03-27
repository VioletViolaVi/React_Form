import "./App.css";

function App() {
  return (
    <>
      <form>
        <input
          type="text"
          id="firstName"
          name="firstName"
          placeholder="firstName"
        />
        <br />

        <input
          type="text"
          id="lastName"
          name="lastName"
          placeholder="lastName"
        />
        <br />

        <input type="checkbox" id="subscribe" name="subscribe" />
        <br />

        <button>Submit</button>
      </form>
    </>
  );
}

export default App;
