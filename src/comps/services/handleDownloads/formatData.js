
const setDateFormat = (date) =>{
    let arr = date.split("-");
    arr = arr.reverse();
    return arr.join("-");
  }


export const formatData = (data) =>{
    const alignedData = data.map((el,ind)=>{
        const nameHead = el.gender === 'male'? 'S/o':el.age > 25 ?"W/o":"D/o";
        return ({
          "S.No":ind+1,
          "Date":setDateFormat(el.date),
          "Name":el.name,
          "Age":el.age,
          "Gender":el.gender,
          " ":el.fmnameHead?el.fmnameHead:nameHead,
          "Relation":el.fmname,
          "Street":el.street,
          "Village":el.village,
          "Phone No":el.phone
        })
      })
    return alignedData;
}
