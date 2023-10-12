import Dashboard from "./components/Dashboard"
import Sidebar from "./components/Sidebar"
import Content from "./components/Content"

const App = () => {
  return (
    <div className="flex">
    <div className="bg-[#1c2536]"> 
    <Sidebar />
    </div> 
   <div className="basis-[82%] border h-[100vh] overflow-scroll">
      <Dashboard />
      <Content />
      </div>
   </div>
  )
}

export default App

