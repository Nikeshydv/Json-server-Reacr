// import Header from "./header";
// import Data from "./data";
// import Footer from "./footer";

// import employee from "./employee";

// const nm="Nikesh";
// const emp="E123";
// const Sal="45784";

// import Student from "./student"

// const Student={
//   "name":"Rahul",
//   "city":"Bhopal",
//   "rollno":1221

// }

// const App=()=>{
//   return(
//     <>
//     <h1> welcome to cybrom</h1>
//     <Student rno={Student.rollno} nm={Student.name} ct={Student.city}   />
//     </>
//   )
// }

// export default App;


// import Employee from "./Employee.jsx";

// const App=()=>{
//   return(
//     <>
//   <Employee name={nm} empn={emp} sal={Sal} />
//     </>
//   )
// }

// export default App;



// const App=()=>{
//   return(
//     <>
//     <h1> welcome to cybrom !!!!</h1>
//     <Header/>
//     <Middle/>
//     <Footer/>
    
//     </>
//   )
// }

// export default App;


// const App=()=>{
//   return(
//     <>
//     <h1> This is form </h1>
//     Name:<input type="text"/>
//     <br/>
//     <br/>
//     Enter city:<input type="text"/>
//     </>
//   )
// }

// export default App;

// const name=["ram","shaym","mohan","sohan"];


// const App=()=>{
//   const ans=name.map((key)=>{
//     return(
//       <>
//       <h1>{key+key}</h1>
//       </>
//     )
//   })
//   return(
//     <>
//     <h1>welcome to cybrom bhopal</h1>
//     {ans}
//     </>
//   )
// }

// export default App;

// const age=[24,20,6,8,10,13];
// const myage=age.map((key)=>{
//   return(
//     <>
//     <h1>{key}</h1>
//     </>
//   )
// })
// const App=()=>{
//   return(
//     <>
//     <h1> welcoe to cybrom student age</h1>
//     {myage};
//     </>
//   )
// }

// export default App;




// const city=["bhopal","ujjain","indore","jabalpur","narmadapuram"];
// const mycity=city.map((key)=>{
//   return(
//     <>
//     <option>{key}</option>
//     </>
//   )
// })

// const App=()=>{
//   return(
//     <>
//     <select>{mycity}</select>
//     </>
//   )
// }

// export default App;



// const subject=["php","orcles","java","asp","python"];

// const mysub=subject.map((key)=>{
//   return(
//     <>
//     <li>{key}</li>
//     </>
//   )
// })

// const App=()=>{
// return(
//   <>
//   <ul>{mysub}</ul>
//   </>
// )
// }

// export default App;



// const student=[
//     {
//         "rollno":120,
//         "name":"nikesh",
//         "city":"Bhopal"
//     },
//     {
//         "rollno":121,
//         "name":"Abishek",
//         "city":"indore"
//     },
//     {
//         "rollno":122,
//         "name":"Raj",
//         "city":"hoshangabad"
//     },
//     {
//         "rollno":123,
//         "name":"Ritika",
//         "city":"delhi"
//     }
// ]

// const ans=student.map((key)=>{
//     return(
//         <>
        
//          <tr>
//             <td>{key.rollno}</td>
//             <td>{key.name}</td>
//             <td>{key.city}</td>
//         </tr>
        
            
        

//         </>
//     )
// })

// const App=()=>{
//     return(
//         <>
//         <h1>welcome to cybrom</h1>
//         <table border="2" width="500" bgcolor="pink">
//         <tr bgcolor="blue">
//             <th>Roll no</th>
//             <th>Name</th>
//             <th>city</th>
            
//         </tr>
//         {ans}
//         </table>
//         </>
//     )
// }

// export default App;


import employee from "./employee"


const ans =employee.map((key)=>{
    return(
        <>
        <tr>
            <td>{key.Empno}</td>
             <td>{key.name}</td>
            <td>{key.salary}</td>
             <td>{key.city}</td>

        </tr>
        
        
        </>
    )
})

const App=()=>{
    return(
        <>
        <table border="2" width="500" bgcolor="pink" >
            <tr>
            <th>Employee number</th>
            <th>Employee Name</th>
            <th>Employee salary</th>
            <th>Employee city</th>
            </tr>
            {ans}
        </table>
        
        </>
    )
}
export default App;