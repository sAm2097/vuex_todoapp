import axios from 'axios'

const state={
    todos:[]

};
 
const getters={
    allTodos:(state)=>state.todos
}

const actions ={
async fetchTodos({commit}){
const response=await axios.get("https://jsonplaceholder.typicode.com/todos")
commit('setTodos',response.data);
},

async AddTodo({commit},title){
const response=await axios.post("https://jsonplaceholder.typicode.com/todos",{title, completes:false})
commit('newTodo',response.data)
},

async deleteTodo({commit},id){
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    commit('removeTodo',id)
},

async filterTodo({commit},e){
//get selected number todos
const limit=parseInt(e.target.options[e.target.options.selectedIndex].innerText)
const response=await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`)
commit('setTodos',response.data)
},

async updateTodo({commit},updated){
    const response=await axios.put(`https://jsonplaceholder.typicode.com/todos/${updated.id}`,updated)
commit('updateTodo',response.data)
}

}

const mutations={
    setTodos:(state,todos)=>(state.todos=todos),
    newTodo:(state,todo)=>(state.todos.unshift(todo)),
    removeTodo: (state,id)=> state.todos=state.todos.filter(todo=>todo.id!==id),
    updateTodo:(state,updated)=>{
        const index=state.todos.findIndex(todo=>todo.id===updated.id)
        if(index!=-1){
            state.todos.splice(index,1,updated)
        }
    }
}


export default {
    state,
    getters,
    actions,
    mutations
}