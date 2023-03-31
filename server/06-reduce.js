const items = [1,3,2,3,3,7,10]

const rta = items.reduce((obj, item) => {
    if (!obj[item]){
        obj[item] = 1
    } else{
        obj[item] = obj[item] + 1
    }
    return obj
}, {})

// console.log(rta)



    const rta2 = items.reduce((obj, item)=>{

        if (item>=1 && item <=5){
            obj['1-5'] +=1
        }
        if (item>=6 && item<=8){
            obj['6-8'] += 1 
        }
        if (item>=9 && item<=10){
            obj['9-10'] += 1 
        }
        return obj     

    },{'1-5':0, '6-8':0, '9-10':0})    
    


console.log(rta2)