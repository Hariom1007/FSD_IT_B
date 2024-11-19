const parent=document.getElementById("root");
const element=React.createElement("h1",{style:{color:"red"}},"This is new Heading");

const root=ReactDOM.createRoot(parent);
     // root.render(element);
const h1=React.createElement("h1",{},"Shopping Cart");
const item1=React.createElement("li",{},"ITEM-1");
const item2=React.createElement("li",{},"ITEM-2");
const list=React.createElement("ol",{},item1,item2);
const branch=<ul>
      <li>CSE</li>
      <li>IT</li>
      <li>ME</li>
</ul>;
const App=()=>{
      return(
            <div> 
            <p>Semester List</p>
            <ul>
            <li>I</li>
            <li>II</li>
            <li>III</li>
            <li>V</li>
            <li>VI</li>
            </ul>
            </div>
      );
};
root.render(<App/>)

//root.render([element,h1,list,branch]);
