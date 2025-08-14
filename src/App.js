import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Welcome to My Notebook</h1>
      <p>This is a simple notebook application.</p>
      <button onClick={() => alert('Button clicked!')}>Click Me</button>
      <footer>
        <p>&copy; 2023 My Notebook</p>
      </footer>
    </div>
  );
}

export default App;
