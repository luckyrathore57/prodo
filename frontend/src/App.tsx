import TodoList from "./components/TodoList"

function App() {

  return (
    <div className="h-screen w-screen  flex">
      <div className=" w-72 bg-side-bar-color h-full"></div>
      <div className="w-full h-full overflow-hidden">
        <div className="h-20 w-full"></div>
        <TodoList />
      </div>
    </div>
  )
}
export default App
