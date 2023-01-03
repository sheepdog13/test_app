import './App.css';
import ClothesComp from './ClothesComp';

function App() {
  const clothesName = ["옷1","옷2","옷3"]
  return (
    <div className="App">
      <div className="bg">
      </div>
      <div className="container">
        <div className="cont_box clearfix">
          <a style={{display:"block", margin:"20px"}} href='#'>더보기</a>
          {clothesName.map((name)=>(<ClothesComp name={name}/>))}
        </div>
      </div>
      
    </div>
  );
}

export default App;
