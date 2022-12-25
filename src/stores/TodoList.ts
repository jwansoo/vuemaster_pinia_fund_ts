import { defineStore } from "pinia";
import type { TodoItem } from "./TodoItem";
export const useTodoListStore= defineStore('TodoList',{
  state:()=>({
    todoList:[] as TodoItem[],
    id:0 
  }),
  actions:{
    addTodo(item:any){
      this.todoList.push({item,id:this.id++,completed:false})
    },
    deleteTodo(itemId:any){
      this.todoList=this.todoList.filter((object)=>{
        return object.id !==itemId
      })
    },
    toggleCompleted(idToFind:any){
      const todo=this.todoList.find((obj)=>obj.id===idToFind)
      if(todo){
        todo.completed=!todo.completed
      }
    }  
  }
})