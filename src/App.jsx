

// const display=()=>{
//   alert("this is alert box")
// }

// const App=()=>{
//   return<>
//   <h1> this is event</h1>
//   <button onClick={display}>click</button>
//   </>
// }

// export default App;


// //passing the argunmnet//

// const myName=(nm,ln)=>{
//   alert("my name : "+ nm +" "+ ln +" from bhoapl");
// }

// const App=()=>{
//   return(
//     <>
//     <button onClick={()=>{myName("Nikesh","Yadavanshi")}}> click</button>
//     </>
//   )
// }

// export default App;


// //functuion to add the number

// const myAdd=(a,b)=>{
//  alert(a+b);
// }

// const App=()=>{
//   return(
//     <>
//     <h1> this is the add function </h1>
//     <button onClick={()=>{myAdd(23,520)}}>Click to add</button>
//     </>
//   )
// }
// export default App;




// //function to find out the event tyype


// const display=(nm,b)=>{
//   alert(nm+" event type: "+ b.type)
// }

// const App=()=>{
//   return(
//     <>
//     <button onClick={(e)=>{display("ranu",e)}}> click</button>
//     </>
//   )
// }

// export default App;


// //without giving the parameter in dispaly button event

// const dispaly=(e)=>{
//   alert("event type :"+ e.type)
// }

 
// const App=()=>{
//   return(
//     <>
//     <button onClick={dispaly}>click to find the eventy</button>
//     </>
//   )
// }

// export default App;

// const myVal=(e)=>{
//  let nm=e.target.name;
//  let val=e.target.value;
//  let typ=e.target.type;
//  alert("name :"+ nm +"value" + val +"type :" + typ +" event :"+ e.type);
// }


// const App=()=>{
//   return(
//     <>
//     <button type="button" value="myBtn" name="btn1" onClick={myVal}>click</button>
//     </>
//   )
// }

// export default App;