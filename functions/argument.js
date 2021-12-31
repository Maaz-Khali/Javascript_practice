let getTip = function(total, score){
    if(total==='number' && score==='number'){
   
}else{ 
    throw Error('Please provide numbers only')

    }
    let percent = (score / total)*100;
    
    if (percent===100 || percent>=90){
        console.log(`You got A grade and score ${percent}%`);
    }
    else if (percent<=89 || percent>=80){
        console.log(`You got B grade and score ${percent}%`);
    }
    else if (percent<=79 || percent>=70){
        console.log(`You got C grade and score ${percent}%`);
    }
    else if (percent<=69 || percent>=60){
        console.log(`You got D grade and score ${percent}%`);
    }
    else if (percent<=59 || percent>=0){
        console.log(`You got F grade and score ${percent}%`);
    }
    else{
        console.log("enter again")
    }
}
try{
    let tip = getTip(50, 35);
    console.log(tip);
    
}
catch(e){
    console.log(e.message)
}

