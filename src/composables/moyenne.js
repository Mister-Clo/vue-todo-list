export function moyenne(obj){
    let notes = 0
    obj.forEach(s => {
        notes+= s.note
    });
    return notes/obj.length
    
   }