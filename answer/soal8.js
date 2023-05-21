/*
  #### PSEUDOCODE ####
  FOR i FROM 1 TO 100 
    SET output = i + "."
    IF i MOD 3 EQUAL 0 
        SET output = output + "Fizz"
    END IF
    IF i MOD 5 EQUAL 0 
        SET output = output + "Buzz"
    END IF
    PRINT output
END FOR
*/


for (let i = 1; i <= 100; i++) {
    let output = `${i}. `
    if(i % 3 ===0){
        output += 'Fizz';
    }
    if(i % 5 ===0){
        output += 'Buzz';
    }
    console.log(output);
}