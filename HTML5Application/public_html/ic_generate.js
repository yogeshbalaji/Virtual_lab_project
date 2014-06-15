/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var no_of_pins=8;
var current_display_x ;
var current_display_y ;
var ic_current_display_width = no_of_pins*dist_between_slots;
var ic_current_display_height = height_between_slots*2+offset1*2;
var ic_no1;
// Pin arrangement -- relative display heights

pin_height_top = (ic_current_display_height-(height_between_slots+offset1)*2)/2;
pin_height_bottom = pin_height_top+2*(height_between_slots+offset1);

pin_width_left = (ic_current_display_width-(no_of_pins/2)*dist_between_slots)/2;
pin_width_right = pin_width_left+no_of_pins*dist_between_slots;

function display_ic(display_x,display_y,ic_no)
{
    ic_select_ind=1;
    ic_no1=ic_no;
    current_display_x = display_x;
    current_display_y = display_y;
        
    context.beginPath();
    context.rect(display_x, display_y, ic_current_display_width, ic_current_display_height);
    context.fillStyle = 'black';
    context.fill();
    context.lineWidth = 2;
    context.strokeStyle = 'black';
    context.stroke();
    context.closePath();
        context.font = '9pt Calibri';
        context.fillStyle = 'white';
        context.fillText(ic_no, display_x+ic_current_display_width/2-10, display_y+ic_current_display_height/2);	    
    
}

function ic_display_pin_info()
{
    
    for(var i=0;i<no_of_pins;i++)
    {
        context.beginPath();
        context.arc(current_display_x+pin_width_left+dist_between_slots*i,current_display_y+pin_height_top,2, 0, 2 * Math.PI, false);
        context.fillStyle = 'blue';
        context.fill();
        
        context.beginPath();
        context.arc(current_display_x+pin_width_left+dist_between_slots*i,current_display_y+pin_height_bottom-offset1,2, 0, 2 * Math.PI, false);
        context.fillStyle = 'blue';
        context.fill();
    }
    
    
}
function ic_fit_to_slot()
{
    var point;
    point = {x: current_display_x+pin_width_left,y: bread_board_y+bread_board_height/2-offset1-pin_height_top-height_between_slots };
    
    //check if the drag goes out of bound
    
    if(point.x<bread_board_x)
        point.x = bread_board_x+offset2;
    if(point.x>bread_board_x+bread_board_width)
        point.x = bread_board_x+bread_board_width-ic_current_display_width-offset2;
    point1 = closestPoint(canvas,point);
    
    draw_pins();
    display_ic(point1.x-pin_width_left,bread_board_y+bread_board_height/2-offset1-pin_height_top-height_between_slots,ic_no1);
    ic_display_pin_info();
    elems.push({id:no_of_elements+1,type:'ic',start:point1.x-pin_width_left,end:bread_board_y+bread_board_height/2-offset1-pin_height_top-height_between_slots,no:ic_no1,height:ic_current_display_height,width:ic_current_display_width});
    no_of_elements=no_of_elements+1;
       ic_select_ind=0; 
}
function check(point_x,point_y)
{
    if(((point_x>current_display_x)&&(point_x<current_display_x + ic_current_display_width))&&((point_y>current_display_y)&&(point_y<current_display_y + ic_current_display_height)))
        return 1;
    else
        return 2;
}
/*
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
*/
