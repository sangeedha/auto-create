import logo from './logo.svg';
import './App.css';

function App({appstyle, name, count}) {
  
 const Call = ({style, name, count}) => {
  const handleChange = (e) => {
    console.log("name", e.target.name)
  e.target.name = e.target.value;
  }
  let temparr = [];
  for(let i = 1; i<=count; i++){
    temparr.push(i);
  }
  return (
    <>
    {temparr.map((i)=>{
      return(
      <div>
      <input 
   name = "callinput1"
   style={style} 
   onChange={handleChange}
   />
   </div>
      )
    })
   
  }
  </>
  );
 }

  return (
 <Call 
 style={appstyle}
 name = {name}
 count = {count}
 />
    
  );
}

export default App;
