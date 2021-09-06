import logo from './logo.svg';
import './App.css';
import './style.css';
import imageInSrc from "./imageInSrc.png"
function App() {
  return (
    <div className="App">
      <div style={{border:"solid 1px black",maxWidth:"100vw"}}>

        <h1 className="title red">malek</h1>

        <br />

        <img src={imageInSrc} alt ='src_image' width="320" height="240" />

        <br />

        <img src="/imageInPublic.png" alt="public_image"/>

        </div>
        <>
        <video width="320" height="240" controls/>

        <source src="myVideo.mp4" type="video/mp4" />
        </>
         
    </div>
  );
}

export default App;
