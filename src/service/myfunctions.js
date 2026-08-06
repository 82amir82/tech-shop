
const func_total=(list)=>{
    let total= list.reduce((x,item)=>x+item.Price * item.count ,0 );
    return total;
}

const func_countall =(list)=>{
    
    let countall= list.reduce((x,item)=>x + item.count ,0 );
    return countall;
}
const func_count =(state ,id)=>{
    const x = state.listbasket.findIndex(item=>item.ProductID ==id );
    
    if(x>-1){
    return state.listbasket[x].count;
    }
    else{
        return 0
    }
}

const func_plus =(list,id)=>{
    const y = list.map(item=>item.ProductID == id ? {...item , count : item.count+1} : item)
    return y
}
const func_minus =(list,id)=>{
    const y = list.map(item=>item.ProductID == id ? {...item , count : item.count-1} : item)
    return y
}
const func_delete =(list,id)=>{
    const y = list.filter(item=>item.ProductID != id )
    return y
}


export {func_total,func_countall,func_count,func_plus,func_minus,func_delete }