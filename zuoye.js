    //第一个
    var a,b;
    a=0,b=0;
    a>b? b=a:b=a-2;
    console.log(b);
    //第二个
    var a;
    var num=3;
    for(a=1;a<=100;a++)
{
    if(a%3==0)
    {console.log(a);}

}
    //第三个
    function Change(a,b){
        var a,b,t;
        t=a;
        a=b;
        b=t;
        return{a,b}
    }
    let creat=Change(1,2);
    console.log(creat);
    //第四个
    function sumOfSquares(a,b){
        arr=a*a+b*b;
        return arr
    }
    let res = sumOfSquares(11,22);
console.log(res);
    //第五个
    const num = [['a',0],['b',3],['c',6],['d',9]],
    list = [];
num.splice(0,1);
console.log(num);
    //第六个
    var str;
var test1='p';
var test2='myclass';
var test3='#myid';

function $(str){
    var re=0;
    if(str==test3){
        re=document.getElementById('myid');
    }
    if(str==test2){
        re=document.getElementById('myclass')
    }
    if(str==test1){
        re=document.getElementById('p');
    }
    return re;
}
console.log($('p'));
console.log($('.#myid'));
console.log($('.myclass'));
//第七个
const arrey=[1,1,1,2,2,3,4,4,5,5,5,];
function uniq(arrey){

    let arr=arrey
    let result=[]
    let i
    let j
    let len=arrey.length
    for (i = 0; i< len;i++){
        for (j=i+1;j<len;j++){
            if(arr[i]===arr[j]){
                j=++i
            }
        }
        result.push(arrey[i])
    }
    return result
}
console.log(uniq(arrey));
    //第八个
    function filterRange(num) {
    return num>=1&num<=4;
      }
      let arr = [5, 3, 8, 1]
      let filtered = arr.filter(filterRange)
      alert( filtered );
      alert( arr );
      //第九个（不会做)
      let john = {name:"John", surname:"Smith",id:1};
      let pete = {name:"pete", surname:"Hurt",id:2};
      let mary = {name:"Mary",surname:"Key",id:3};
      let users = [john, pete,mary ];
      let usersMapped=
      usersMapped = [
          { fullName:"John Smith", id:1},
          { fullName:"Pete Hunt", id:2},
          { fullName:"Mary Key",id:3}
      ]
      alert( usersMapped[0].id)
      alert( usersMapped[0].fullName)
      //第十个
      window.onload=function(){
        const items=document.getElementsByClassName('item');
        const week=['!_!','@_@','#_#','$_$','^_^'];
        for(let i=0;i<items.length;i++){
            items[i].onmouseover=function(){
                
                items[i].innerHTML=week[i];
                items[i].style.color='black';}
            items[i].onmouseout=function(){
                items[i].innerHTML=[i];
                items[i].style.color='black';
            }
            
            
            }
        }
    