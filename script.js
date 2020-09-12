const fs = require('fs');

fs.readFile(__dirname +'/input.txt', (err, data) =>{
    console.time('funchallenge');

    
    if(err){
        throw err;
    }

    let start = 0;

    let str = data.toString();

    let position = [];

    for ( let i = 0, n = str.length; i < n ; i ++){
        switch(str[i]) {
            case '(' : start += 1;
                        
                        break;
            case ')' : start -= 1;
                        break;
            default: start;
        }

        if( start === -1)
            position.push(i + 1);

    }

    console.log(start);

    console.log(position[0]);

    console.timeEnd('funchallenge');
})