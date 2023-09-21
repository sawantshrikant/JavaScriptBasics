const fs = require('fs');
const filepath = 'FSModule.json'

const jsonData = {
       Name : 'Shrikant',
       Batch : 'CFP238',
       Study : 'JavaScript'     
};

fs.writeFile(filepath,JSON.stringify(jsonData, null,2),(err) =>{
    if(err) {
        console.error('Error writing in json file :', err)
    } else {
        console.log('Data has been written to FSModule.json')
    }
});