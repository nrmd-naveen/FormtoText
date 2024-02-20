
export const message =(data,date) =>{
    if(data.length===0||data[0]===null || data===null|| data === undefined){
        return null;
    }
    console.log("msg",data)
    const head = `*Patient Details*          *Date :* ${date}

`
    const foot = `
***************************************`
    let msg = head;
    
    data.forEach((el,i) => {
        let user = '';
        
        var gender = el.gender;
        if(Number(el.age)<18){
            gender = gender === 'male' ? "male child" : "female child";
        }
        let garHead = 'D/o';
        if(el.fmnameHead){
            garHead = el.fmnameHead;
        }else{
            garHead = gender==='male' || "male child"?'S/o':(Number(el.age)>25?'W/o':'D/o')
        }
        
        if(el.street === ""|| el.street === " "||el.street === null){
        user = `***************************************

*${i+1})*
        Name          -       ${el.name}
        Age             -       ${el.age}
        Gender        -      ${gender} 
        ${garHead}              -      ${el.fmname}
        Town            -       ${el.village}  
        Phone          -      ${el.phone}
        
`}  else{

    user = `***************************************

*${i+1})*
        Name          -       ${el.name}
        Age             -       ${el.age}
        Gender        -      ${gender} 
        ${garHead}              -      ${el.fmname}
        Street          -      ${el.street}
        Town            -       ${el.village}  
        Phone          -      ${el.phone}
        
`

}

        msg += user;
    });
    msg+=foot;
    //console.log(msg);
    return msg;
}