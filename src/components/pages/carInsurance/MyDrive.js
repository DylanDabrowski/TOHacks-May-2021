import "./CarInsurance.css";
import "./MyDrive.css";
import SideNav from "../../CarSideNav.js";
import graphImage from "./../../../assets/graph.png";
import mapImage from "./../../../assets/map.png"
import db from '../../../firebase'
import React,{useState,useEffect} from 'react';



function MyDrive() {
  const [info, setInfo] = useState([]);
  const [image, setImage] = useState([]);
const fetchInfo = async() => {
  const response = db.collection('users');
  const data = await response.get();
  data.docs.forEach(item => {
    setInfo([...info, item.data()])
  })
}

const fetchImageInfo = async() => {
  const imgResponse = db.storage().ref("users/" + db.auth().currentUser.uid + "/profile.png")
  const imgData = await imgResponse.getDownloadURL()
  imgData.then((dbImage) => {
    setImage([...dbImage. dbImage.data()]);
  })
}

useEffect(() => {
  fetchInfo();
}, []);


    return (
      <div className="mydrive">
        {
          info && info.map(inf => {
            return(
              <div>
            <h4>{inf.score}</h4>
            <SideNav className="navBar" />
            <div className="row">
              <div className="column">
                <h2>Your Score</h2>
                <div className="score">{inf.score}</div>
                <img className="image" src={graphImage} alt="graph" />
              </div>
              <div className="column">
                <h2>Vehicle</h2>
                <h1>{inf.vehicle}</h1>
              </div>
            </div>
            <div className="row">
          <div className="column">
            <h1>Showing: weekly results</h1>
            <div className="row">
              <div className="column">
                <h2>Harsh Breaking</h2>
                <h1 className="results-box-bad">-5%</h1>
                <h3>{inf.harshBreaking}</h3>
              </div>
              <div className="column">
                <h2>Speed</h2>
                <h1 className="results-box-good">+10%</h1>
                <h3>
                  Congratulations, you have exceeded the speed limit 0 times this
                  week
                </h3>
              </div>
              <div className="column">
                <h2>Harsh Breaking</h2>
                <h1 className="results-box-good">+16%</h1>
                <h3>Congratulations, you have maintained focus this week</h3>
              </div>
            </div>
          </div>
        </div>
        
        <div className="recent-trips">
          
          <h2>Recent Trips:</h2>
          <img className="image" src={mapImage} alt="location" />
        </div>
            </div>
            )
          })
        }

       
        
      </div>
    
  );
}

export default MyDrive;
