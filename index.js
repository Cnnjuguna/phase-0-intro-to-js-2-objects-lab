// Write your solution in this file!
const employee = {};
emplyee.name = "Rose";
employee.streetAddress = "Nairobi"


function updateEmployeeWithKeyAndValue(obj,key, value){
    return {
        ...obj,
        [key]: value,
    };
}
const newObj = updateEmployeeWithKeyAndValue(
    employee,
    "Jerry",
    "Kisumu",
      
);





function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
        
    obj[key] = value

    return obj;


}

const newerObject = destructivelyUpdateEmployeeWithKeyAndValue(
    
    employee["streetAddress"] = "Mombasa"

    
)  

 



function deleteFromEmployeeByKey(employee,key){
    
    const kk = Object.assign({}, employee);

    delete kk[key];
    return kk
     
}






function destructivelyDeleteFromEmployeeByKey(obj,Key){
        delete employee["name"];
        return employee
    
}