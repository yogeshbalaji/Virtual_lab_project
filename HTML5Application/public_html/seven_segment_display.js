/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */




var sev_current_display_width = dist_between_slots*5;
var sev_current_display_height = height_between_slots*3.5+offset1*2;

// Pin arrangement -- relative display heights

pin_height_top = (sev_current_display_height-(height_between_slots+offset1)*2)/2;
pin_height_bottom = pin_height_top+2*(height_between_slots+offset1);

pin_width_left = (sev_current_display_width-4*dist_between_slots)/2;
pin_width_right = pin_width_left+4*dist_between_slots;



// Display arrangement
var led_long_h = sev_current_display_width*(6/8);
var led_short = sev_current_display_height/15;
var led_long;

var led_a_x,led_a_y,led_b_x,led_b_y,led_c_x,led_c_y,led_d_x,led_d_y,led_e_x,led_e_y,led_f_x,led_f_y,led_g_x,led_g_y,led_h_x,led_h_y;

function set_led_parameters(trigger)
{
    led_long = (sev_current_display_height-2*sev_current_display_height/8+led_short)/2;
    
    led_a_x = current_display_x+sev_current_display_width/8;
    led_a_y = current_display_y+sev_current_display_height/8;
    
    led_b_x = current_display_x+sev_current_display_width/8+led_long_h-led_short;
    led_b_y = current_display_y+sev_current_display_height/8;
    
    led_c_x = current_display_x+sev_current_display_width/8+led_long_h-led_short;
    led_c_y = current_display_y+sev_current_display_height/8+led_long-led_short;
        
    led_d_x = current_display_x+sev_current_display_width/8;
    led_d_y = current_display_y+sev_current_display_height/8+2*led_long-2*led_short;
    
    led_e_x = current_display_x+sev_current_display_width/8;
    led_e_y = current_display_y+sev_current_display_height/8+led_long-led_short;
    
    led_f_x = current_display_x+sev_current_display_width/8;
    led_f_y = current_display_y+sev_current_display_height/8;
    
    led_g_x = current_display_x+sev_current_display_width/8;
    led_g_y = current_display_y+sev_current_display_height/8+led_long-led_short;
    
     context.beginPath();
     if(trigger[0]===1)
        context.rect(led_a_x, led_a_y,led_long_h, led_short);
     if(trigger[1]===1)
        context.rect(led_b_x, led_b_y,led_short, led_long);
     if(trigger[2]===1)
        context.rect(led_c_x, led_c_y,led_short, led_long);
     if(trigger[3]===1)
        context.rect(led_d_x, led_d_y,led_long_h, led_short);
     if(trigger[4]===1)
        context.rect(led_e_x, led_e_y,led_short, led_long);
     if(trigger[5]===1)
        context.rect(led_f_x, led_f_y,led_short, led_long);
     if(trigger[6]===1)
        context.rect(led_g_x, led_g_y,led_long_h, led_short);
     //if(trigger[7]===1)
       //  context.arc(bread_board_x+offset2+dist_between_slots*(j+4*i)+i*block_dist,bread_board_y+height_offset_1,2, 0, 2 * Math.PI, false);
    context.fillStyle = 'red';
    context.fill();
    context.closePath();
}

function initialise_7segment(display_x,display_y)
{
    elems.push({id:no_of_elements+1,type:'7seg',start:display_x,end:display_y,no:0,height:sev_current_display_height,width:sev_current_display_width});
    no_of_elements=no_of_elements+1;
    display_7segment(display_x,display_y);
    
    }

function display_7segment(display_x,display_y)
{
    
    current_display_x = display_x;
    current_display_y = display_y;
    

    context.beginPath();
    context.rect(display_x, display_y, sev_current_display_width, sev_current_display_height);
    context.fillStyle = 'white';
    context.fill();
    context.lineWidth = 2;
    context.strokeStyle = 'black';
    context.stroke();
    context.closePath();
    

    var trigger = [1,1,0,1,1,0,1];
    set_led_parameters(trigger);
    
}

function sev_display_pin_info(display_x,display_y)
{
    
    for(var i=0;i<5;i++)
    {
        context.beginPath();
        context.arc(display_x+pin_width_left+dist_between_slots*i,display_y,2, 0, 2 * Math.PI, false);
        context.fillStyle = '#333333';
        context.fill();
        
        context.beginPath();
        context.arc(display_x+pin_width_left+dist_between_slots*i,display_y+sev_current_display_height,2, 0, 2 * Math.PI, false);
        context.fillStyle = '#333333';
        context.fill();
    }
    
    
}

function sev_fit_to_slot()
{
    var point;
    point = {x: current_display_x+pin_width_left,y: bread_board_y+bread_board_height/2-offset1-pin_height_top-2*height_between_slots };
    
    //check if the drag goes out of bound
    
    if(point.x<bread_board_x)
        point.x = bread_board_x+offset2;
    if(point.x>bread_board_x+bread_board_width)
        point.x = bread_board_x+bread_board_width-sev_current_display_width-offset2;
    point1 = closestPoint(canvas,point);
    
   if (cli!==-1)
    {
        if (check_overlap(point1.x,point1.y)===1)
        {
                elems[cli].start=bread_board_x;
    elems[cli].end=bread_board_y;
    
    }
    else
    {
    elems[cli].start=point1.x-pin_width_left;
    elems[cli].end=bread_board_y+bread_board_height/2-offset1-height_between_slots;
    }
    
    }
    draw_pins();
    //display_7segment(point1.x-pin_width_left,bread_board_y+bread_board_height/2-offset1-height_between_slots);
    //sev_display_pin_info(point1.x-pin_width_left,bread_board_y+bread_board_height/2-offset1-height_between_slots);
    //sev_select_ind=0;
}
function sev_check(point_x,point_y)
{
    if(((point_x>current_display_x)&&(point_x<current_display_x + sev_current_display_width))&&((point_y>current_display_y)&&(point_y<current_display_y + sev_current_display_height)))
        return 1;
    else
        return 2;
    }
