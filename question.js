$(document).ready(function(){

    const APIKEY = "60268a935ad3610fb5bb5f6e"






    var question100 = ["You make friends easily", 
                        "At social events, you rarely meet new people and mostly talk to the ones you already know", 
                        "You feel comfortable just walking up to someone you find interesting and striking up a conversation", 
                        "You enjoy participating in group activities",
                        "Frequent alone time is a necessity for you",
                        "You usually prefer to be around others rather than on your own",
                        "After a long and exhausting week, a lively social event is just what you need",
                        "You can spend entire weekends all by yourself without feeling bored",
                        "In your social circle, you are often the one who contacts your friends and initiates activities",
                        "You tend to think before speaking or acting"];
                
    var question101 = ["<button class=button001 onclick=q1e().>True</button> <button class=button001 onclick=q1i().>False</button> "];
    var question102 = ["<button class=button001 onclick=q1e().>True</button> <button class=button001 onclick=q1i().>False</button> "];
    var question103 = ["<button class=button001 onclick=q1e().>True</button> <button class=button001 onclick=q1i().>False</button> "];
    var question104 = ["<button class=button001 onclick=q1e().>True</button> <button class=button001 onclick=q1i().>False</button> "];
    var question105 = ["<button class=button001 onclick=q1e().>True</button> <button class=button001 onclick=q1i().>False</button> "];
    var question106 = ["<button class=button001 onclick=q1e().>True</button> <button class=button001 onclick=q1i().>False</button> "];
    var question107 = ["<button class=button001 onclick=q1e().>True</button> <button class=button001 onclick=q1i().>False</button> "];
    var question108 = ["<button class=button001 onclick=q1e().>True</button> <button class=button001 onclick=q1i().>False</button> "];
    var question109 = ["<button class=button001 onclick=q1e().>True</button> <button class=button001 onclick=q1i().>False</button> "];
    var question110 = ["<button class=button001 onclick=q1e().>True</button> <button class=button001 onclick=q1i().>False</button> "];


    var question200 = [];
                
    var question201 = ["<button class=button001 onclick=q2s().>True</button> <button class=button001 onclick=q2n().>False</button> "];
    var question202 = ["<button class=button001 onclick=q2s().>True</button> <button class=button001 onclick=q2n().>False</button> "];
    var question203 = ["<button class=button001 onclick=q2s().>True</button> <button class=button001 onclick=q2n().>False</button> "];
    var question204 = ["<button class=button001 onclick=q2s().>True</button> <button class=button001 onclick=q2n().>False</button> "];
    var question205 = ["<button class=button001 onclick=q2s().>True</button> <button class=button001 onclick=q2n().>False</button> "];
    var question206 = ["<button class=button001 onclick=q2s().>True</button> <button class=button001 onclick=q2n().>False</button> "];
    var question207 = ["<button class=button001 onclick=q2s().>True</button> <button class=button001 onclick=q2n().>False</button> "];
    var question208 = ["<button class=button001 onclick=q2s().>True</button> <button class=button001 onclick=q2n().>False</button> "];
    var question209 = ["<button class=button001 onclick=q2s().>True</button> <button class=button001 onclick=q2n().>False</button> "];
    var question210 = ["<button class=button001 onclick=q2s().>True</button> <button class=button001 onclick=q2n().>False</button> "];

    var question300 = ["Seeing other people cry can easily make you feel like you want to cry too", 
                        "Concrete facts and details, not theories and ideas, are what stick in your memory", 
                        "You are very sentimental", 
                        "You are more inclined to follow your head than your heart",
                        "You do your best to take others’ feelings into account when deciding something",
                        "You think the world would be a better place if people relied more on rationality and less on their feelings",
                        "You find it easy to empathize with a person whose experiences are very different from yours",
                        "If your supervisor is talking mindlessly and not going to the main point, would you stop him/her and ask questions to determine the main point",
                        "Would you directly tell your close friends that their fashion is terrible",
                        "Do you usually think about the future and the possibilities"];
                
    var question301 = ["<button class=button001 onclick=q3f().>True</button> <button class=button001 onclick=q3t().>False</button> "];
    var question302 = ["<button class=button001 onclick=q3f().>True</button> <button class=button001 onclick=q3t().>False</button> "];
    var question303 = ["<button class=button001 onclick=q3f().>True</button> <button class=button001 onclick=q3t().>False</button> "];
    var question304 = ["<button class=button001 onclick=q3f().>True</button> <button class=button001 onclick=q3t().>False</button> "];
    var question305 = ["<button class=button001 onclick=q3f().>True</button> <button class=button001 onclick=q3t().>False</button> "];
    var question306 = ["<button class=button001 onclick=q3f().>True</button> <button class=button001 onclick=q3t().>False</button> "];
    var question307 = ["<button class=button001 onclick=q3f().>True</button> <button class=button001 onclick=q3t().>False</button> "];
    var question308 = ["<button class=button001 onclick=q3f().>True</button> <button class=button001 onclick=q3t().>False</button> "];
    var question309 = ["<button class=button001 onclick=q3f().>True</button> <button class=button001 onclick=q3t().>False</button> "];
    var question310 = ["<button class=button001 onclick=q3f().>True</button> <button class=button001 onclick=q3t().>False</button> "];

    var question400 = ["You always do your best to prepare for potential obstacles in advance", 
                        "There are usually certain, specific ways you like to do things", 
                        "Even when you plan a particular daily routine, you usually just end up doing what you feel like at any given moment", 
                        "You prefer to completely finish one project before starting another",
                        "You prefer to do your chores before allowing yourself to relax",
                        "You often end up doing things at the last possible moment",
                        "You usually postpone finalizing decisions for as long as possible",
                        "You like to have a to-do list for each day",
                        "Does your itenary usually seem like a rough list of idea than specific details",
                        "Is your desk organized most of the time"];
                
    var question401 = ["<button class=button001 onclick=q4j().>True</button> <button class=button001 onclick=q4p().>False</button> "];
    var question402 = ["<button class=button001 onclick=q4j().>True</button> <button class=button001 onclick=q4p().>False</button> "];
    var question403 = ["<button class=button001 onclick=q4j().>True</button> <button class=button001 onclick=q4p().>False</button> "];
    var question404 = ["<button class=button001 onclick=q4j().>True</button> <button class=button001 onclick=q4p().>False</button> "];
    var question405 = ["<button class=button001 onclick=q4j().>True</button> <button class=button001 onclick=q4p().>False</button> "];
    var question406 = ["<button class=button001 onclick=q4j().>True</button> <button class=button001 onclick=q4p().>False</button> "];
    var question407 = ["<button class=button001 onclick=q4j().>True</button> <button class=button001 onclick=q4p().>False</button> "];
    var question408 = ["<button class=button001 onclick=q4j().>True</button> <button class=button001 onclick=q4p().>False</button> "];
    var question409 = ["<button class=button001 onclick=q4j().>True</button> <button class=button001 onclick=q4p().>False</button> "];
    var question410 = ["<button class=button001 onclick=q4j().>True</button> <button class=button001 onclick=q4p().>False</button> "];

    var page = 1; //page number


    var e = 0; //extrovert
    e++;
    var i = 0; //introvert
    i++;
    var s = 0; //sensing
    s++;
    var n = 0; //intuitive
    n++;
    var t = 0; //thinking
    t++;
    var f = 0; //feeling
    f++;
    var p = 0; //perceiving
    p++;
    var j = 0; //judging
    j++;

    function q1e(){
        e = e + 10;
    }
    function q1i(){
        i = i + 10;
    }
    function q2s(){
        s = s + 10;
    }
    function q2n(){
        n = n + 10;
    }
    function q3t(){
        t = t + 10;
    }
    function q3f(){
        f = f + 10;
    }
    function q4p(){
        p = p + 10;
    }
    function q4j(){
        j = j + 10;
    }

    function begin(){
        disappear.innerHTML = "";
        question1.innerHTML = question100[0];
        answer1.innerHTML = question101;
        question2.innerHTML = question100[1];
        answer2.innerHTML = question102;
        question3.innerHTML = question100[2];
        answer3.innerHTML = question103;
        question4.innerHTML = question100[3];
        answer4.innerHTML = question104;
        question5.innerHTML = question100[4];
        answer5.innerHTML = question105;
        question6.innerHTML = question100[5];
        answer6.innerHTML = question106;
        question7.innerHTML = question100[6];
        answer7.innerHTML = question107;
        question8.innerHTML = question100[7];
        answer8.innerHTML = question108;
        question9.innerHTML = question100[8];
        answer9.innerHTML = question109;
        question10.innerHTML = question100[9];
        answer10.innerHTML = question110;
        page = page + 1;
        //console.log(page);
    }
    function next(){
        if (page == "2"){
            question1.innerHTML = question200[0];
            answer1.innerHTML = question201;
            question2.innerHTML = question200[1];
            answer2.innerHTML = question202;
            question3.innerHTML = question200[2];
            answer3.innerHTML = question203;
            question4.innerHTML = question200[3];
            answer4.innerHTML = question204;
            question5.innerHTML = question200[4];
            answer5.innerHTML = question205;
            question6.innerHTML = question200[5];
            answer6.innerHTML = question206;
            question7.innerHTML = question200[6];
            answer7.innerHTML = question207;
            question8.innerHTML = question200[7];
            answer8.innerHTML = question208;
            question9.innerHTML = question200[8];
            answer9.innerHTML = question209;
            question10.innerHTML = question200[9];
            answer10.innerHTML = question210;
            page = page + 1;
            //console.log(page);
        }
        else if (page == "3"){
            question1.innerHTML = question300[0];
            answer1.innerHTML = question301;
            question2.innerHTML = question300[1];
            answer2.innerHTML = question302;
            question3.innerHTML = question300[2];
            answer3.innerHTML = question303;
            question4.innerHTML = question300[3];
            answer4.innerHTML = question304;
            question5.innerHTML = question300[4];
            answer5.innerHTML = question305;
            question6.innerHTML = question300[5];
            answer6.innerHTML = question306;
            question7.innerHTML = question300[6];
            answer7.innerHTML = question307;
            question8.innerHTML = question300[7];
            answer8.innerHTML = question308;
            question9.innerHTML = question300[8];
            answer9.innerHTML = question309;
            question10.innerHTML = question300[9];
            answer10.innerHTML = question310;
            page = page + 1;
            //console.log(page);
        } 
        else if (page = "4"){
            question1.innerHTML = question400[0];
            answer1.innerHTML = question401;
            question2.innerHTML = question400[1];
            answer2.innerHTML = question402;
            question3.innerHTML = question400[2];
            answer3.innerHTML = question403;
            question4.innerHTML = question400[3];
            answer4.innerHTML = question404;
            question5.innerHTML = question400[4];
            answer5.innerHTML = question405;
            question6.innerHTML = question400[5];
            answer6.innerHTML = question406;
            question7.innerHTML = question400[6];
            answer7.innerHTML = question407;
            question8.innerHTML = question400[7];
            answer8.innerHTML = question408;
            question9.innerHTML = question400[8];
            answer9.innerHTML = question409;
            question10.innerHTML = question400[9];
            answer10.innerHTML = question410;
            page = page + 1;
            //console.log(page);
        }
    }
})