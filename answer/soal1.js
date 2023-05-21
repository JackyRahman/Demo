const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
rl.question('Masukkan nilai : ', (number) => {
  console.log(test1(number))
  rl.close();
});


/* 

####   PSEUDOCODE   ####

FUNCTION test1(n)
    output SET EMPTY STRING
    
    FOR row FROM 1 to n
        temp SET EMPTY STRING
        
        FOR col FROM 1 to n
            IF row mod 2 is equal 0
                APPEND (n - (col - 1)) to temp
            ELSE
                APPEND col to temp
            END IF
            
        APPEND '\n' to temp
        APPEND temp to output
    END FOR
    
    RETURN output
END FUNCTION

PRINT "Masukkan nilai: "
READ n FROM USER INPUT

PRINT test1(n)

*/

// ####  Program   ####
function test1(n) {
    let output = ''
    for (let row = 1; row <= n; row++) {
        let temp = '';
        for (let col = 1; col <= n; col++) {
            if (row % 2 === 0) {
                temp += n - (col - 1);
            } else {
                temp += col;
            }
        }
        temp += '\n';
        output += temp;  
    }
    return output;
}