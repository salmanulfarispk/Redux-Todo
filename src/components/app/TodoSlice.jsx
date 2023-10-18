import { createSlice } from "@reduxjs/toolkit";




  const  INITIAL_STATE={
       
    todo:[]


  }


 const Todoslice=createSlice({

    name:'todolist',
    initialState:INITIAL_STATE,
    reducers:{
          

       addtodo:(state,action)=>{

            state.todo.push({
              id:Date.now(),
              value:action.payload,
              editkey:true

                 })
       },

        editTodo:(state,action)=>{

            state.todo.find((item)=>{
              
                if(item.id==action.payload){
                    item.editkey=false        
                }
            })
        },

        deletetodo:(state,action)=>{

            const filtereditem=state.todo.filter((item)=>
              item.id !== action.payload    
            )
             state.todo=filtereditem               
        },
       
        savetodo:(state,action)=>{
            state.todo.find((item)=>{
             
                if(item.id ==action.payload.id){                        
                    item.value =action.payload.value                      
                    item.editkey =true
                }
          

            })
            
                                                                                                                     
        },

    }

 })



 export const { addtodo, editTodo, deletetodo, savetodo } = Todoslice.actions

export default Todoslice.reducer