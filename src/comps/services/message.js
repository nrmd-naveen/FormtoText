
export const message =(data,date) =>{
    console.log("msg",data)
    const head = `*Patient Details*          *Date :* ${date}

`
    let msg = head;
    data.forEach((el,i) => {
        var gender = el.gender;
        if(Number(el.age)<18){
            gender = gender === 'male' ? "male child" : "female child";
        }
        let user = `***************************************

    ${i+1})
        Name          -       ${el.name}
        Age             -       ${el.age}
        Gender           -      ${gender} 
        D/o              -      ${el.fmname}
        Village         -       ${el.village}  
        Phone          -      ${el.phone}
        
`
        msg += user;
    });
    //console.log(msg);
    return msg;
}