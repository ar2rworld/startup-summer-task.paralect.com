import React from 'react'
const Slider=(props)=>{
  var numberOfSlices = Math.ceil(props.numberOfRepos/4)
  return(<div className="Slider">
    <p>{(props.sliceNumber-1)*4+1}-{(props.sliceNumber===numberOfSlices?props.numberOfRepos:(props.sliceNumber)*4)} of {props.numberOfRepos}{" "}
    {(props.sliceNumber!==1?<button className="SliderButtonArrow SliderButton" onClick={()=>{
      if(props.sliceNumber-1>0){
        props.setSliceNumber(props.sliceNumber-1)
      }
    }}
    >{"<"}</button>:"")}
    {(props.sliceNumber>2?<button className="SliderButton" onClick={()=>{
      props.setSliceNumber(1)
    }}
    >{1}</button>:"")}
    {(props.sliceNumber-2>1?<button className="SliderButton"
      onClick={()=>{
        props.setSliceNumber(Math.round((props.sliceNumber)/2))}}
    >{"..."}</button>:"")}
    {(props.sliceNumber>1?<button className="SliderButton" onClick={()=>{
        props.setSliceNumber(props.sliceNumber-1)
    }}
    >{props.sliceNumber-1}</button>:"")}
    <button className="SliderButtonCurrent SliderButton">{props.sliceNumber}</button>
    {(props.sliceNumber+1<=numberOfSlices?<button className="SliderButton" onClick={()=>{
      props.setSliceNumber(props.sliceNumber+1)
    }}
    >{props.sliceNumber+1}</button>:"")}
    {(props.sliceNumber+2<numberOfSlices?<button className="SliderButton"
      onClick={()=>{
        props.setSliceNumber(Math.round((numberOfSlices-props.sliceNumber)/2+props.sliceNumber))}}
    >{"..."}</button>:"")}
    {(props.sliceNumber+1<numberOfSlices?<button className="SliderButton" onClick={()=>{
      props.setSliceNumber(numberOfSlices)
    }}
    >{numberOfSlices}</button>:"")}
    {(props.sliceNumber!==numberOfSlices?<button className="SliderButtonArrow SliderButton" onClick={()=>{
      props.setSliceNumber(props.sliceNumber+1)
    }}
    >{">"}</button>:"")}
    </p>
  </div>)
}
export default Slider