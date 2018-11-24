var sum = " ";
var ctr1=0;
var ctr2=0;
        
function addcomment() 
            {
                var x; 
                
                x=document.getElementById("click").value;
                if (x=="")
                {
                     alert("comment missing");
                }
                else
                {
                    sum=sum +"<br>" + x;
                    document.getElementById("par").innerHTML=sum;
                    document.getElementById("click").value="";
                }
             }


function calc1()
            {
               ctr1++;
               document.getElementById("inc1").innerHTML=ctr1;
            }


function calc2()
            {
               ctr2++;
               document.getElementById("inc2").innerHTML=ctr2;
            }
function prev(){
    var x=document.getElementsByClassName('core') ;
    var y=x.src;
    document.write(y);
}