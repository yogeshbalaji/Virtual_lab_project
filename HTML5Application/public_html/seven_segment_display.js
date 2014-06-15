/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



var current_display_x ;
var current_display_y ;
var current_display_width = dist_between_slots*5;
var current_display_height = height_between_slots*3.5+offset1*2;

// Pin arrangement -- relative display heights

pin_height_top = (current_display_height-(height_between_slots+offset1)*2)/2;
pin_height_bottom = pin_height_top+2*(height_between_slots+offset1);

pin_width_left = (current_display_width-4*dist_between_slots)/2;
pin_width_right = pin_width_left+4*dist_between_slots;

function display_7segment(display_x,display_y)
{
    seven_select_ind=1;
    current_display_x = display_x;
    current_display_y = display_y;
        
    context.beginPath();
    context.rect(display_x, display_y, current_display_width, current_display_height);
    context.fillStyle = 'white';
    context.fill();
    context.lineWidth = 2;
    context.strokeStyle = 'black';
    context.stroke();
    context.closePath();
    
    
}

function display_pin_info()
{
    
    for(var i=0;i<5;i++)
    {
        context.beginPath();
        context.arc(current_display_x+pin_width_left+dist_between_slots*i,current_display_y+pin_height_top,2, 0, 2 * Math.PI, false);
        context.fillStyle = 'blue';
        context.fill();
        
        context.beginPath();
        context.arc(current_display_x+pin_width_left+dist_between_slots*i,current_display_y+pin_height_bottom,2, 0, 2 * Math.PI, false);
        context.fillStyle = 'blue';
        context.fill();
    }
    
    
}
function sev_fit_to_slot()
{
    var point;
    point = {x: current_display_x+pin_width_left,y: bread_board_y+bread_board_height/2-offset1-pin_height_top-height_between_slots };
    
    //check if the drag goes out of bound
    
    if(point.x<bread_board_x)
        point.x = bread_board_x+offset2;
    if(point.x>bread_board_x+bread_board_width)
        point.x = bread_board_x+bread_board_width-current_display_width-offset2;
    point1 = closestPoint(canvas,point);
    
    draw_pins();
    display_7segment(point1.x-pin_width_left,bread_board_y+bread_board_height/2-offset1-pin_height_top-height_between_slots);
    //display_pin_info();
}
function check(point_x,point_y)
{
    if(((point_x>current_display_x)&&(point_x<current_display_x + current_display_width))&&((point_y>current_display_y)&&(point_y<current_display_y + current_display_height)))
        return 1;
    else
        return 2;
}