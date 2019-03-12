var characters = {'Captain America': ["r","S","sh","s", "n", "2"],
                 'Iron Man':  ["s","B", "g", "r", "n", "1"], 
                 'Dr. Strange': ["r","B", "sh", "a", "n", "3"], 
                 'Hulk': ["s","S","s", "s", "n", "1"], 
                 'Falcon': ["r","S","g", "a", "n", "1"], 
                 'Black Panther': ["r","Bth","sh", "r", "n", "1"], 
                 'Spider Man': ["s","Bth", "g", "a", "n", "1"], 
                 'Bucky Barnes': ["s","S", "g", "s", "n", "2"],
                 'Thor': ["s", "S", "s", "s", "n", "2"],
             	 'Star Lord': ["r", "S", "g", "s", "s", "2"],
             	 'Rocket': ["s", "S", "g", "r", "s", "2"],
             	 'Black Widow': ["r", "Bth", "g", "a", "s", "2"],
                 'Vision': ["r", "Bth", "g", "s", "s", "3"],
                 'Scarlet Witch': ["r", "Bth", "s", "s", "s", "3"],
     		     'Groot': ["r", "S", "s", "s", "s", "2"],
 				 'Gamora': ["r", "S", "s", "a", "s", "2"],
 				 'Ant Man': ["r", "S", "g", "a", "s", "1"],
 				 'War Machine': ["r", "S", "g", "s", "s", "1"]}
var count = {'Captain America':0,
                 'Iron Man': 0, 
                 'Dr. Strange':0, 
                 'Hulk':0, 
                 'Falcon':0, 
                 'Black Panther':0, 
                 'Spider Man':0, 
                 'Bucky Barnes':0,
                 'Thor':0,
             	 'Star Lord':0,
             	 'Rocket':0,
             	 'Black Widow':0,
                 'Vision': 0,
                 'Scarlet Witch': 0,
     		     'Groot': 0,
 				 'Gamora': 0,
 				 'Ant Man': 0,
 				 'War Machine': 0}
var heroes = ['Captain America','Iron Man','Dr. Strange', 'Hulk', 'Falcon', 'Black Panther', 'Spider Man', 'Bucky Barnes','Thor','Star Lord','Rocket','Black Widow','Vision','Scarlet Witch','Groot','Gamora', 'Ant Man', 'War Machine']
var result = ""
function pressedButton(){
	count = {'Captain America':0,
                 'Iron Man': 0, 
                 'Dr. Strange':0, 
                 'Hulk':0, 
                 'Falcon':0, 
                 'Black Panther':0, 
                 'Spider Man':0, 
                 'Bucky Barnes':0,
                 'Thor':0,
             	 'Star Lord': 0,
             	 'Rocket':0,
             	 'Black Widow':0,
                 'Vision': 0,
                 'Scarlet Witch': 0,
     		     'Groot': 0,
 				 'Gamora': 0,
 				 'Ant Man': 0,
 				 'War Machine': 0}

    var q1 = "none";
    var q2 = "none";
    var q3 = "none";
    var q4 = "none";
    var q5 = "none";
    var q6 = "none";
    if(document.getElementById('q1o1').checked){
    	q1 = document.getElementById('q1o1').value;
    } else if(document.getElementById('q1o2').checked){
    	q1 = document.getElementById('q1o2').value;
    }
    if(document.getElementById('q2o1').checked){
    	q2 = document.getElementById('q2o1').value;
    } else if(document.getElementById('q2o2').checked){
    	q2 = document.getElementById('q2o2').value;
    } else if(document.getElementById('q2o3').checked){
    	q2 = document.getElementById('q2o3').value;
    }
    if(document.getElementById('q3o1').checked){
    	q3 = document.getElementById('q3o1').value;
    } else if(document.getElementById('q3o2').checked){
    	q3 = document.getElementById('q3o2').value;
    } else if(document.getElementById('q3o3').checked){
    	q3 = document.getElementById('q3o3').value;
    }
    if(document.getElementById('q4o1').checked){
    	q4 = document.getElementById('q4o1').value;
    } else if(document.getElementById('q4o2').checked){
    	q4 = document.getElementById('q4o2').value;
    } else if(document.getElementById('q4o3').checked){
    	q4 = document.getElementById('q4o3').value;
    }
    if(document.getElementById('q5o1').checked){
    	q5 = document.getElementById('q5o1').value;
    } else if(document.getElementById('q5o2').checked){
    	q5 = document.getElementById('q5o2').value;
    } else if(document.getElementById('q5o3').checked){
    	q5 = document.getElementById('q5o3').value;
    }
    if(document.getElementById('q6o1').checked){
    	q6 = document.getElementById('q6o1').value;
    } else if(document.getElementById('q6o2').checked){
    	q6 = document.getElementById('q6o2').value;
    } else if(document.getElementById('q6o3').checked){
    	q6 = document.getElementById('q6o3').value;
    }
    for(var i = 0;i<16;i++){
        if (characters[heroes[i]][0] == q1){
            count[heroes[i]] += 1;
        }
        else{
            count[heroes[i]] -= 1;
        }
        if (characters[heroes[i]][1] == q2){
            count[heroes[i]] += 1;
        }
        else{
            count[heroes[i]] -= 1;
        }

        if (characters[heroes[i]][2] == q3){
            count[heroes[i]] += 1;
        }
        else{
            count[heroes[i]] -= 1;
        }

        if (characters[heroes[i]][3] == q4){
            count[heroes[i]] += 1;
        }
        else{
            count[heroes[i]] -= 1;
        }
    } 
    var temp = 0;
    var hero = "Hawkeye"
    for(var i = 0;i<16;i++){
    	if(count[heroes[i]] >= temp){
    		hero = heroes[i];
    		temp = count[heroes[i]];
    	}
    }
    document.write("You are " + hero+"!") 
    return "None"
}

function right(){
    var arr = ["q1uestion","q2uestion","q3uestion","q4uestion","q5uestion","q6uestion", "sub"]
    for(var i = 0;i<6;i++){
        console.log(i)
        if(document.getElementById(arr[i]).style.display == "inherit"){
            document.getElementById(arr[i]).style.display = "none";
            document.getElementById(arr[i+1]).style.display ="inherit";
            break;
        } 
    }
    
}

function left(){
    var arr = ["sub","q6uestion","q5uestion","q4uestion","q3uestion","q2uestion", "q1uestion"]
    for(var i = 0;i<6;i++){
        if(document.getElementById(arr[i]).style.display == "inherit"){
            document.getElementById(arr[i]).style.display = "none";
            document.getElementById(arr[i+1]).style.display ="inherit";
            break;
        } 
    }
    
}


