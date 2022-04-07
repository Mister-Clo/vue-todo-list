import { computed,reactive, ref} from 'vue'

export function moyenne(obj){
    let notes = 0
    obj.forEach(s => {
        notes+= s.note
    });
    return notes/obj.length
    
   }

export   var studentsB = reactive(
    [
          {nom:"Roronoha", prenom:"Zoro", note:ref(17)},
          {nom:"Vinsmoke", prenom:"Sanji", note:ref(16)},
    ]
)

export var studentsA = reactive(
    [
          {nom:"Mugiwara", prenom:"Luffy", note:ref(19)},
          {nom:"Boha", prenom:"Hankok", note:ref(18)},
    ]
)

export var studentsAB = reactive(
    [].concat(studentsA,studentsB)
)

export const moyenneTotale = computed(()=>{
    return moyenne(studentsAB)
  })

export const fields = ['nom', 'prenom', 'note']