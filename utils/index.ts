

export const normaliseGraphData =(obj={})=>{
    const keys =Object.keys(obj)
    const values = Object.values(obj)
    const info = keys.map((key, index)=>({view:values[index], date:key}))
    return info
}


function getMonthName(monthIndex:number) {
    const months = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
    return months[monthIndex];
  }

 export function formatDate(dateString:string) {
    const date = new Date(dateString);
    const month = getMonthName(date.getMonth());
    const day = date.getDate();
    return `${month} ${day}`;
  }


  export function isUnicode(character) {
    
    if(character){
    const  codePoint = character.codePointAt(0); 
     return codePoint > 0x007F;
    }
    return false
  }

