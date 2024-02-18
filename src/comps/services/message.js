
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
        let user = ''
        var gender = el.gender;
        if(Number(el.age)<18){
            gender = gender === 'male' ? "male child" : "female child";
        }
        if(el.street === ""|| el.street === " "||el.street === null){
        user = `***************************************

*${i+1})*
        Name          -       ${el.name}
        Age             -       ${el.age}
        Gender        -      ${gender} 
        D/o              -      ${el.fmname}
        Town            -       ${el.village}  
        Phone          -      ${el.phone}
        
`}  else{

    user = `***************************************

*${i+1})*
        Name          -       ${el.name}
        Age             -       ${el.age}
        Gender        -      ${gender} 
        D/o              -      ${el.fmname}
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