
let container = document.createElement("div");
container.innerHTML=`
<div class="display-div"><input type="text" class="display" placeholder="0" oninput="alertmessage()"></div>
<div class="num-row">
    <button value="del" onclick="deletevalue()"class="num-col del">DEL</button>
    <button value="clear" onclick="clearvalue()" class="num-col del">AC</button>
    <button value="+" onclick="display('+'); notinsert()" class="num-col sym">+</button>
    <button value="-" onclick="display('-'); notinsert()" class="num-col sym">-</button>
    
    <button value="*" onclick="display('*'); notinsert()" class="num-col sym">*</button>
    <button value="/" onclick="display('/'); notinsert()" class="num-col sym">/</button>
    <button value="%" onclick="display('%'); notinsert()" class="num-col sym">%</button>
    <button value="(" onclick="display('('); notinsert()" class="num-col sym">(</button>
     
    <button value=")" onclick="display(')'); notinsert()"class="num-col sym">)</button>
    <button value="1" onclick="display('1')" class="num-col">1</button>
    <button value="2" onclick="display('2')" class="num-col">2</button>
    <button value="3" onclick="display('3')"class="num-col">3</button>
    
    <button value="4" onclick="display('4')"class="num-col">4</button>
    <button value="5" onclick="display('5')"class="num-col">5</button>
    <button value="6" onclick="display('6')"class="num-col">6</button>
    <button value="7" onclick="display('7')"class="num-col">7</button>
      
    <button value="8" onclick="display('8')"class="num-col">8</button>
    <button value="9" onclick="display('9')"class="num-col">9</button>
    <button value="0" onclick="display('0')"class="num-col">0</button>
    <button value="." onclick="display('.'); notinsert()"class="num-col">.</button>
     
    <button value="=" onclick="evaluvate()" class="num-col equal">=</button>
</div>
`;
container.setAttribute("class","container");
document.body.append(container);


let disp = document.querySelector(".display");
let insert=true;
let insertcount=0;
function display(x)
{
    if(disp.value=="")
    {
      insertcount=0;
    }
   disp.value += x;
   insertcount++;
   if(insertcount>1)
   {
       insert=false;
   }
   else
   {
       insert = true;
   }
  
}

function clearvalue()
{
    disp.value ="";
   
}
function deletevalue()
{
    disp.value = disp.value.slice(0,disp.value.length-1);
}


function evaluvate()
{
    try{
        let ans = eval(disp.value);
        disp.value = ans;
    }
    catch(err)
    {
        alert("Invalid Input");
    }
  
}

function notinsert()
{
    if(!insert)
    {
        if(isNaN(disp.value[disp.value.length-1])==isNaN(disp.value[disp.value.length-2]))
      {
        disp.value=disp.value.slice(0,disp.value.length-1);
      }
    }
}

function alertmessage()
{
    let letter = disp.value.slice(disp.value.length-1,disp.value.length);
    let arr= ["+","-","*","/","%","(",")"];
    let flag = false;
    if(isNaN(letter))
    {  
        for(let i=0;i<arr.length;i++)
        {
            if(letter == arr[i])
            {
                flag =true;
            }
        }
        if(flag == false)
        {
            alert("Not a Number");
            disp.value = disp.value.slice(0,disp.value.length-1);
        }
    }
}