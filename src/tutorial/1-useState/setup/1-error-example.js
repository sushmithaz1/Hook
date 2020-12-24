import React,{useState} from 'react';

const ErrorExample = () => {
  const[text,setText] = useState('ranndom title');

  const handleClick = () =>{
    if(text==='random title'){
    setText('hello world');
    }
    else{
      setText('random title');
    }
  }
  
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className="btn" onClick={handleClick}>change title</button>
    </React.Fragment>
  );
};

export default ErrorExample;
