import "./Hello.css"

function Profile() {
    return (
        <div>
      <img
        src="https://i.imgur.com/MK3eW3As.jpg"
        alt="Katherine Johnson"
      />
       </div>
    );
}
const Hello= ({name = "Jane",surename = "Doe",age = 10})=>{
   
    return (
        <>
            <Profile></Profile>
           <h1>Hello {name} {surename} {age} </h1>
        
        </>
    );
}

export default Hello;



