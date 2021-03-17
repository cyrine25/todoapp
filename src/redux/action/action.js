import { FINISHED_TASK, MORE_TASK, REMOVE_TASK, REVISE_TASK } from "../const/actionType"

//payload :task id isDone
export const More =(payload)=>{
    return {type:MORE_TASK,payload}

};
//payload : id revisedOne
export const Revise =(payload)=>{
    return {type:REVISE_TASK,payload}
};
//payload:id
export const Finish =(payload)=>{
    return{type:FINISHED_TASK,payload}
    
};
// payload : id
export const Remove =(payload)=>{
    return{type:REMOVE_TASK,payload}
};