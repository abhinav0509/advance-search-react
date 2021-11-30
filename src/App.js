import BookData from "./data.json";
import Search from "./Search.js";
function App() {
  return (
    <div className="App">
      <h4 className="mt-4 text-center">Book Store</h4>
      <Search BookData={BookData} />
    </div>
  );
}

export default App;
