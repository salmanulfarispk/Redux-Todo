import React, { useRef } from 'react'
import { MDBRow,MDBContainer,MDBCol,MDBCardBody,MDBCard,MDBBtn } from 'mdb-react-ui-kit'
import { addtodo,editTodo,deletetodo,savetodo } from './components/app/TodoSlice'
import { useDispatch, useSelector } from 'react-redux'


const Todopage = () => {

  const dispatch=useDispatch()
  const todovalue=useSelector((state)=>state.todolist.todo)   


 const myRef=useRef(null)


const handleAdd=(e)=>{
  e.preventDefault()
  const getvalue=e.target.addname.value
  dispatch(addtodo(getvalue));
  // console.log(getvalue); 
  e.target.reset()

}



const save = (id)=>{
  const saveValue = myRef.current.value
  dispatch(savetodo({id:id,value:saveValue}))
}


// const reversetodo=[...todovalue].reverse();

  return (
    <div>


<MDBContainer fluid className="my-5">
      <MDBRow className="justify-content-center">
      <MDBCol md="8" lg="6" xl="4">
          <MDBCard style={{ borderRadius: "15px" }}>

                      


                      <MDBCardBody>
                      <h1><strong>Daily Workload!</strong></h1>
                      <p>A comprehensive list of tasks and responsibilities that you need to manage and complete within a single day.</p>
                                <br/>
                       <form onSubmit={handleAdd}>
                     
                        <div className="d-flex flex-row align-items-center">
                        
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Add tasks..."
                            id='addname'
                            required
                           
                           />
                          <div className="mx-2">
                            <MDBBtn>Add</MDBBtn>
                          </div>

                        </div>
                       
                        </form>
                        <br/><br/>
                        <hr/>


                        
     
        <ul class="list-group list-group-light">
          {  todovalue.map((todoitem)=>(

    <li class="list-group-item list-group-item-action px-3 border-0 rounded-3 mb-2" key={todoitem.id}>

          {todoitem.editkey==true ? (
           
            <div>
                     <input type='text' value={todoitem.value}   style={{ border:'none',background: 'light',outline:'none'}} />
                     
             
        <button type="button" className="btn btn-success ms-3 mt-1" data-mdb-ripple-color="dark"onClick={()=>{
           dispatch(editTodo(todoitem.id))
        }} >Edit</button>

        
       
<MDBBtn className="btn-close ms-4 mb-1" color="none" aria-label="Close"   onClick={()=>{
          dispatch(deletetodo(todoitem.id))
        }} />

            </div>
          ) :  (
           <div>
         <input type='text' ref={myRef} style={{ border:'none'}}/>
        
        
         <button type="button" class="btn btn-dark ms-3 mt-1" data-mdb-ripple-color="dark" onClick={()=>{
            save(todoitem.id)
         }}>Save</button>
         </div>
       
        )}
    
    </li>
    ))}
    </ul>




                      </MDBCardBody>   

          </MDBCard>
        </MDBCol>
       
      </MDBRow>
    </MDBContainer>
    





















    </div>
  )
}

export default Todopage