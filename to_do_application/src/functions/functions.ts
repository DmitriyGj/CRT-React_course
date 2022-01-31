export const onKeyDown = (keyName:string,func:()=>void ) =>{
    return (e:KeyboardEvent)=>{
        switch(e.key){
            case `${keyName}`:
                func();
                break;
        }
    }
}

export const toDateString = (date:Date)=>{
    const days = (`0${date.getDate()}`).slice(-2);
    const month =(`0${date.getMonth()+1}`).slice(-2);
    const year = date.getFullYear();
    return (`${year}-${month}-${days}`);
}