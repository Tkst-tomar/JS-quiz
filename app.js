const data = [{
        question: `Inside which element do we put the JavaScript?`,
        option: [`&lt; scripting &gt;`,
                `&lt; js &gt;`,
                `&lt; script &gt;`,
                `&lt; javascript &gt;`],
        result: `< script >`
},
{
        question: `What is the correct JavaScript syntax to change the content of the HTML elements below? <br><br> &lt; p id='demo' &gt;This is a demontration &lt; /p &gt;`,
        option: [`document.getElementById('demo').innerHTML = 'Hello World!';`,
                `#demo.innerHTML = 'Hello World!';`,
                `document.getElementByName('p').innerHTML = 'Hello World!';`,
                `document.getElement('p').innerHTML = 'Hello World!';`],
        result: `document.getElementById('demo').innerHTML = 'Hello World!';`
},
{
        question: `Where is the correct place to insert a JavaScript?`,
        option: [`Both the &lt; head &gt; section and the &lt; body &gt; section are correct`,
                `The &lt; head &gt; section`,
                `The &lt; body &gt; section`],
        result: `Both the < head > section and the < body > section are correct`
},
{
        question: `What is the correct syntax for reffering to an external script called 'xxx.js'`,
        option: [`&lt; script name='xxx.js' &gt;`,
                `&lt; script herf='xxx.js' &gt;`,
                `&lt; script src='xxx.js' &gt;`],
        result: `< script src='xxx.js' >`
},
{
        question: `The external JavaScript file must contain the &lt; script &gt; tag`,
        option: [`True`,
                `False`],
        result: `False`
},
{
        question: `How do you write 'Hello World' in an alert box?`,
        option: [`msg('Hello World');`,
                `msgBox('Hello World');`,
                `alertBox('Hello World');`,
                `alert('Hello World');`],
        result: `alert('Hello World');`
},
{
        question: `How do you create a function in JavaScript?`,
        option: [`function = myFunction()`,
                `function myFunction()`,
                `function:myFunction()`],
        result: `function myFunction()`
},
{
        question: `How do you call a function named 'myFunction()'?`,
        option: [`myFunction()`,
                `call function myFunction()`,
                `call myFunction()`],
        result: `call myFunction()`
},
{
        question: `How do you write an IF statement in JavaScript?`,
        option: [`if i = 5 then`,
                `if i == 5 then`,
                `if i = 5`,
                `if (i == 5)`],
        result: `if (i == 5)`
},
{
        question: `How to write an IF statement for executing some code if 'i' is NOT equal to 5?`,
        option: [`if i &lt;&gt; 5`,
                `if i =! 5 then`,
                `if (i &lt;&gt; 5)`,
                `if ( i!=5 )`],
        result: `if ( i!=5 )`
},
{
        question: `How does a WHILE loop start?`,
        option: [`while i = 1 to 10`,
                `while (i &lt;= 10; i++ )`,
                `while (i &lt= 10)`],
        result: `while (i <= 10)`
},
{
        question: `How does a FOR loop start?`,
        option: [`for (i = 0; i &lt= 5 )`,
                `for (i &lt= 5; i++ )`,
                `for (i = 0; i &lt= 5; i++)`,
                `for i = 1 to 5`],
        result: `for (i = 0; i &lt= 5; i++)`
},
{
        question: `How do you add a comment in a JavaScript?`,
        option: [`//This is a comment`,
                `'This is a comment`,
                `<&#x21;--This is a comment-->`],
        result: `//This is a comment`
},
{
        question: `How to insert a comment that has more than one line?`,
        option: [`<&#x21;--This comment has <br> more than one line-->`,
                `//This comment has <br> more than one line//`,
                `/*This comment has <br> more than one*/`],
        result: `/*This comment has <br> more than one*/`
},
{
        question: `What is the correct way to write a JavaScript array?`,
        option: [`var colors = {1:"red",2:"green",3:"blue"}`,
                `var colors = ["red","green","blue"]`,
                `var colors = "red","green","blue"`,
                `var colors = 1 = ("red"),2 = ("green"),3 = ("blue")`],
        result: `var colors = ["red","green","blue"]`
},
{
        question: `How do you round the number 7.25, to the nearest integer?`,
        option: [`Math.rnd(7.25)`,
                `Math.round(7.25)`,
                `round(7.25)`,
                `rnd(7.25)`],
        result: `Math.round(7.25)`
},
{
        question: `How do you find the number with the highest value of x and y?`,
        option: [`ceil(x,y)`,
                `Math.ceil(x,y)`,
                `top(x,y)`,
                `Math.max(x,y)`],
        result: `Math.max(x,y)`
},
{
        question: `What is the correct JavaScript syntax for opeaning a new window called "w2"?`,
        option: [`w2 = window.open("http://www.w3schools.com");`,
                `w2 = window.new("http://www.w3schools.com")`],
        result: `w2 = window.open("http://www.w3schools.com");`
},
{
        question: `JavaScript is the same as JAVA`,
        option: [`True`,
                `False`],
        result: `False`
},
{
        question: `How can you detect the client's browser name?`,
        option: [`navigator.appName`,
                `browser.name`,
                `client.navName`],
        result: `navigator.appName`
},
{
        question: `Which event occures when the user clicks on a HTML element?`,
        option: [`onmouseclick`,
                `onclick`,
                `onmouseover`,
                `onchange`],
        result: `onclick`
},
{
        question: `How do you declare a JavaScript variable?`,
        option: [`v carName`,
                `variable carName`,
                `var carName`],
        result: `var carName`
},
{
        question: `Which operator is used to assign a value to a variable?`,
        option: [`*`,
                `X`,
                `-`,
                `=`],
        result: `=`
},
{
        question: `What will the following code return: Boolean(10 > 9)?`,
        option: [`NaN`,
                `True`,
                `False`],
        result: `True`
},
{
        question: `Is JavaScript case sensitive?`,
        option: [`Yes`,
                `No`],
        result: `Yes`
}
]
var studentData = []
var filterData = ""
var student = new Object()
var answer = ""
var questionCount = 0
document.getElementById("submit").onclick = function () {

        student.userName = document.getElementById("name").value
        student.id = document.getElementById("idNumber").value
        student.right = 0
        student.wrong = 0

        studentData.push(student)


        document.getElementById("userData").style.display = "none"
        document.getElementById("testPage").style.display = "block"



        document.getElementById("testPage").innerHTML = `<div id="test">
                                                    <h1>JavaScript Quiz</h1>
                                                    <h3>Question ${questionCount + 1} of 25:</h3>
                                                    <p id="question">${data[questionCount].question}</p>

                                                    <ul id="optionList">
                                                        
                                                    </ul>

                                                    <button id="btn" onclick="displayQuestion(this.parentElement)">NEXT</button>
                                                 </div>`

        data[questionCount].option.forEach(element => {
                filterData += "<li class='options' onclick='answerSave(this.children)'><p class='check'></p><p id='option'>" + element + "</p></li>"
                console.log(element)
        });


        document.getElementById("optionList").innerHTML = filterData

}




function answerSave(val) {
        let x = document.getElementsByClassName("check")

        for (i = 0; i < x.length; i++) {
                x[i].style.backgroundColor = "white"
        }
        val[0].style.backgroundColor = "#1597E5"
        answer = val[1].innerText

}


function displayQuestion() {
        if (data[questionCount].result == answer) {
                studentData[studentData.length - 1].right++
        }
        else {
                studentData[studentData.length - 1].wrong++
        }
        console.log(studentData)
        questionCount++
        if (questionCount < 25) {
                document.getElementById("testPage").innerHTML = `   <div id="test">
                                                                        <h1>JavaScript Quiz</h1>
                                                                        <h3>Question ${questionCount + 1} of 25:</h3>
                                                                        <p id="question">${data[questionCount].question}</p>

                                                                        <ul id="optionList">
                                                                        
                                                                        </ul>

                                                                        <button id="btn" onclick="displayQuestion()">NEXT</button>
                                                                </div>`
                filterData = ""
                data[questionCount].option.forEach(element => {
                        filterData += "<li class='options' onclick='answerSave(this.children)'><p class='check'></p><p id='option'>" + element + "</p></li>"
                        
                });


                document.getElementById("optionList").innerHTML = filterData
        }else
        {
                document.getElementById("testPage").style.display = "none"
                document.getElementById("result").style.display = "block"
                document.getElementById("studentMarks").innerText = studentData[studentData.length-1].right
                document.getElementById("studentName").innerText = studentData[studentData.length-1].userName
                document.getElementById("studentId").innerText = studentData[studentData.length-1].id
                if(studentData[studentData.length-1].right > 12)
                {
                        document.getElementById("res").innerText = "Pass"
                        document.getElementById("res").style.color = "green"
                }
                else
                {
                        document.getElementById("res").innerText = "Fail"
                        document.getElementById("res").style.color = "red"
                }
        }
}
