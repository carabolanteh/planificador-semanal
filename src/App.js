import Days from "./components/Days";
import Notes from "./components/Notes";

function App() {
  return (
    <div className="container mt-3">
      <div className="row mb-4">
         <h2 className="mt-4 col-8">Planificador Semanal</h2>
         <div className="mt-4 bd-highlight col-4">
            <label  
            className="form-label"
            for="calendario">Calendario</label>
            <input 
            className="form-control"
            type="date"
            name="calendario" id="calendario" />
         </div>
       
      </div>
     
      <div className="row">
        <div className="col-8">
          <Days/>
        </div>
        <div className="col-4">
          <Notes/>
        </div>
      </div>
    </div>
  );
}

export default App;
