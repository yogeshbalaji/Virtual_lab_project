/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var ic_select=0;
var ic_no;
var ptselx=[];
var ptsely=[];
function ic_message(canvas, message) {
        var context = canvas.getContext('2d');
        
        context.font = '9pt Calibri';
        context.fillStyle = 'white';
        context.fillText(message, 10, 10);
      }

function select_ic(id,ic_no1)
{
    ic_no=ic_no1;
var canvas=document.getElementById('myCanvas');
var ctx=canvas.getContext('2d');

writeMessage(canvas,"Please select the start and end points to place the IC");
ic_select=1;


if (ptselx.length==2)
{
    var rect = canvas.getBoundingClientRect();
    var msg='Clicked x is ' + Math.abs(ptsely[0]+rect.top) + 'y is ' +ptsely[0];
            writeMessage(canvas,msg);
    
ctx.fillStyle='#000000';
ctx.fillRect(bread_board_x,bread_board_y,10,10);//,Math.abs(ptselx[1]-ptselx[0]),Math.abs(ptsely[1]-ptsely[0]));
ctx.fillStyle='#0000FF';
ctx.fillRect(rect.left,rect.top,10,10);
ic_message(canvas,ic_no);
}
}