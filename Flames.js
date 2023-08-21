function fun(){
    you = document.getElementById("you").value;
    luv = document.getElementById("luv").value;
    you = you.toLowerCase();
    luv = luv.toLowerCase();
    let count = 0;
    for(let i of you){
        let x = luv.indexOf(i);
        if(x > -1){
            luv = luv.slice(0,x) + luv.slice(x+1);
            count += 1
        }
    }
    let result = "";
    flame = count % 6;
    if(flame == 0){
        result = "Enemy";
    }
    else if(flame == 1){
        result = "Siblings";
    }
    else if(flame == 2){
        result = "Friend";
    }
    else if(flame == 3){
        result = "Love";
    }
    else if(flame == 4){
        result = "Affection";
    }
    else{
        result = "Marriage";
    }
    document.getElementById("result").value = result;

}