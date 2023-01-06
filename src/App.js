import logo from './logo.svg';
import './App.css';
import ClassComp from './components/ClassComp';
import FuncComp from './components/FuncComp';

function App() {
  return (
    <div className="App">
      <p>Rikkei Academy chào đón các bạn lớp Java - 08</p>
      <ClassComp companyName="Rikkei Academy">Java-08</ClassComp>
      <ClassComp companyName="Rikkei Education">Java 08</ClassComp>
      <FuncComp studentName="Nguyễn Văn Khánh" />
    </div>
  );
}

export default App;
