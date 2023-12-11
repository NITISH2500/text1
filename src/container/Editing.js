import React,{useState}from 'react'
import red  from './red.jpg'
import un from './undo.jpg'
export default function Editing(props) {
    
    const col=['black','blue','red','yellow','green','purple'];
    const fonts=['Arial','Georgia','Times New Roman','Verdana', 'Comic Sans MS'];
    let i=1;
    let size=[]
    for( i=1;i<100;i++){
        const px="px";
        size=[...size,i+px];
    }
    
    const [text,setText]=useState("Enter the text"); 
    const[text1,setText1]=useState("Add Text");
    const[selectedFont,setSelectedFont]=useState(fonts[0]);
    const[sizes,setSizes]=useState(size[10]);
    const [color,setColor]=useState(col[0]);
    const [historyStack, setHistoryStack] = useState([]); // History stack for undo
    const [redoStack, setRedoStack] = useState([]); 
    const change=(e)=>{
        setText(e.target.value);
        setHistoryStack([...historyStack, text]); // Push current state to history
        setRedoStack([]); 
    }
    const change1=(e)=>{
        setText1(e.target.value);
        
    }
    const click=()=>{
        const a=text;
        setText(a+text1);
        setHistoryStack([...historyStack, text]); // Push current state to history
        setRedoStack([]); 
    }
    const handleChange=(e)=>{
        setSelectedFont(e.target.value);
       
    }
    const change3=(e)=>{
        setSizes(e.target.value);
    }
    const change4=(e)=>{
        setColor(e.target.value);
    }
    const undo = () => {

        if (historyStack.length === 0) return; // Check if history is empty
        const previousState = historyStack.pop(); // Retrieve last state
        setRedoStack([...redoStack, text]); // Push current state to redo
        setText(previousState); // Update text with retrieved state
      };
    
      // Function to redo changes
      const redor = () => {
        if (redoStack.length === 0) return; // Check if redo is empty
        const nextState = redoStack.pop(); // Retrieve last redo state
        setHistoryStack([...historyStack, text]); // Push current state to history
        setText(nextState); // Update text with retrieved state
      };
  return (
    <div className="container" style={{flexWrap:"wrap"}}>
        <div className="left" style={{float:"left"}}>
           <button onClick={undo} ><img src={un} alt="un" style={{height:"30px"}}/>undo</button>
           <button onClick={redor} style={{marginLeft:"10px"}}><img src={red} alt="red" style={{height:"30px"}}/>redo</button>
        </div>
        
            <div style={{marginLeft:"500px", width:'300px',float:"left"}}>
     <textarea className='form-control' value={text}  id="myBox" rows="30" cols="20" onChange={change} style={{fontFamily:selectedFont,fontSize:sizes,color:color,backgroundColor:props.mode==="light"?"rgb(223 204 189)":"#063e36",resize:"none",overflow:"scroll",whiteSpace:"pre-wrap", width:"300px",height:"700px"}}  ></textarea>
     </div>    
    
    <div className='right' style={{float:"left", marginLeft:"70px",padding:"10px"}}>
    <div style={{float:""}}>
        <select onChange={handleChange}>
            {fonts.map((font)=>(
                <option value={font} key={font}>{font}</option>
))}
        </select>
        <span style={{fontFamily:selectedFont}}>change font</span>
     </div>
     <div style={{marginTop:"50px", width:"200px"}}>
        <select onChange={change3}>
            {size.map((siz)=>(
              <option value={siz} key={siz}>{siz}</option>
            )) }
        </select>
        change size
      </div>
      <div style={{marginTop:"50px", width:"200px"}}>
        <select onChange={change4}>
            {col.map((co)=>(
              <option value={co} key={co}>{co}</option>
            )) }
        </select>
        change size
      </div>
     <div style={{marginTop:"100px", width:"200px"}}>
     <div className="input-group">
  <input type="text" value={text1} aria-label="Last name" className="form-control" style={{fontFamily:selectedFont}} onChange={change1}/>
  <button onClick={click}>Add</button>
     </div>
     
     
         </div>
    </div>
    </div>
  )
}
