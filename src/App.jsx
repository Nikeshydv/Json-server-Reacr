 import Table from 'react-bootstrap/Table';



 // this is the exapmle of json server 


const App=()=>{
  const[mydata,setData]=useState([])

  const loadData=()=>{
    let url ="https://jsonplaceholder.typicode.com/todos/";
    axios.get(url).then((res)=>{
      setData(res.data)
      console.log(res.data);
    });
  }


const loadData=()=>{
  let api="http://localhost:3000/student";
  axios.get(api).then(res)=>{
    console.log(res.data);
    setMydata(res.data);

  });


  useEffect(()=>{
    loadData();
  },[])

  let status ="";
  const ans=mydata.map((key)=>{
    if(key.completed==true){
      status="True";
    }
    else{
      status="false"
    }

    return(
      <>
      <tbody>
      <tr>
        <td>{key.userId}</td>
        <td>{key.id}</td>
        <td>{key.title}</td>
        <td>{status}</td>
      </tr>
      </tbody>
      </>
    )
  })

  return(
    <>
    <table  striped bordered hover>
     
      <tr className="border">
        <th>USER ID</th>
        <th>id</th>
        <th>title</th>
        <th>completed</th>
      </tr>
<h1 className="text-center"> json </h1>
<Table striped bordered hover size="sm" style={{width:'fit-content', margin:'auto', marginTop:'20px'}}>
      <thead>
        <tr>
          <th>USERID</th>
          <th>ID</th>
          <th>TITLE</th>
          <th>COMPLETED</th>
        </tr>
      </thead>
      
      {ans}
    </Table>
    </>
  )
}

export default App;







const App=()=>{

  const[myData,setMydata]=useState([]);


  const loadData=()=>{
    let api="http://localhost:3000/student";
    axios.get(api).then((res)=>{
      console.log(res.data);
      setMydata(res.data);

    });
  
}

const ans=myData.map((key)=>{
  return(
    <>
    <tr >
      <td>{key.Rollno}</td>
      <td>{key.Name}</td>
      <td>{key.City}</td>
      <td>{key.Fees}</td>
    </tr>
    </>
  )


});

useEffect(()=>{
  loadData();
},[]);

return(
  <>
  <h1> welcome to student data</h1>
  <Table  striped>
  <tbody>
        <tr >
          <td>Roll no</td>
          <td>Name</ td>
          <td>city</td>
          <td>Fess</td>
        </tr>
        </tbody>
        {ans}
        </Table>
  </>
)
}

export default App;