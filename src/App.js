import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {

  const arr1=[{txt:"A"},{txt:"B"}]

  const [arr,changeArr]=useState({arr1:arr1,inp:''});

 const handleClick=(m)=>{

//	console.log(arr)
	changeArr(prevState=>({...prevState,arr1:prevState.arr1.filter(f=>f.txt!=m)}))
	}


const handleInput=(e)=>{
		const dd=e.target.value;

		changeArr((prev)=>({...prev,inp:dd}))
	}

const handleAdd=()=>{
		
		if(arr.inp!='')
		changeArr((prev)=>(
			
//			{...prev,arr1:prev.arr1.concat({txt:arr.inp})}
			{...prev,arr1:[...prev.arr1,{txt:arr.inp}]}		//concat new value spread. In {} value is overwriten & [] value is concatenated	
		))

		changeArr((prev)=>({...prev,inp:''}))
		
	}

//	console.log(arr)

  return (
    <div className="App">

	<input type="text" value={arr.inp} onChange={(e)=>handleInput(e)}></input>

	<button onClick={()=>handleAdd()}>ADD TO LIST</button>

	<ul>
    	{
		arr.arr1.map((data,key)=>{
			return (
				<>
				<li>{data.txt}</li>
				<button onClick={()=>handleClick(data.txt)}>DELETE</button>
				</>
			)
		})

	}

	</ul>
    </div>
  );
}

export default App;
