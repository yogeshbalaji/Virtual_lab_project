/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var no_of_pins=4;

var resistor_width = no_of_pins*dist_between_slots;
var resistor_height = 1.25*height_between_slots;


// Pin arrangement -- relative display heights


pin_height = height_between_slots;

var current_display_xr;
var current_display_yr;

function initialise_resistor(display_x,display_y)
{
    //elems.push({id:no_of_elements+1,type:'7seg',start:display_x,end:display_y,no:0,height:sev_current_display_height,width:sev_current_display_width});
    elems.push({id:no_of_elements+1,type:'resistor',start:display_x,end:display_y,height:resistor_height,width:resistor_width,row:0,col:0,rowtemp:0,coltemp:0});
    no_of_elements=no_of_elements+1;    
    display_resistor(display_x,display_y)    
}

function display_resistor(display_x,display_y)
{
    
    current_display_xr = display_x;
    current_display_yr = display_y;
    
    var arc_offset = resistor_height/3;
    
    context.beginPath();
    
    context.moveTo(display_x+arc_offset,display_y);
    context.lineTo(display_x+resistor_width-arc_offset,display_y);
    context.quadraticCurveTo(display_x+resistor_width,display_y,display_x+resistor_width,display_y+arc_offset);
    context.lineTo(display_x+resistor_width,display_y+resistor_height-arc_offset);
    context.quadraticCurveTo(display_x+resistor_width,display_y+resistor_height,display_x+resistor_width-arc_offset,display_y+resistor_height);
    context.lineTo(display_x+arc_offset,display_y+resistor_height);
    context.quadraticCurveTo(display_x,display_y+resistor_height,display_x,display_y+resistor_height-arc_offset);
    context.lineTo(display_x,display_y+arc_offset);
    context.quadraticCurveTo(display_x,display_y,display_x+arc_offset,display_y);
    context.closePath();
    
    context.fillStyle = '#FFA347';
    context.fill();
    context.lineWidth = 2;
    context.strokeStyle = '#CC8239';
    context.stroke();
    context.closePath();
    resistor_color_codes(1,2,3,4);
    /*    
    context.beginPath();
    context.rect(display_x, display_y,resistor_width , resistor_height);
    context.fillStyle = '#111111';
    context.fill();
    
    context.lineWidth = 2;
    context.strokeStyle = 'black';
    context.stroke();
    context.closePath();
    context.beginPath()
   */
       
    
}


function resistor_fit_to_slot()
{
    var point;
    point = {x: current_display_xr,y: current_display_yr+resistor_height/2 };
    
    //check if the drag goes out of bound
    
    if(point.x<bread_board_x)
        point.x = bread_board_x+offset2;
    if(point.x>bread_board_x+bread_board_width)
        point.x = bread_board_x+bread_board_width-sev_current_display_width-offset2;
    point1 = closestPoint(canvas,point,0);
    
    
    //display_ic(point1.x-pin_width_left,bread_board_y+bread_board_height/2-offset1,ic_no1);
    //ic_display_pin_info(point1.x-pin_width_left,bread_board_y+bread_board_height/2-offset1,ic_no1);
    if (cli!==-1)
    {
          if (check_overlap(point1.x,point1.y)===1)
        {
                elems[cli].start=bread_board_x;
                elems[cli].end=bread_board_y;
                
                elems[cli].row = 0;
                elems[cli].col = 0;
    
    }
    else
    {
       elems[cli].start=point1.x;
        elems[cli].end=point1.y-resistor_height/2;
        var ptrc = closestPoint(canvas,{x:point1.x,y:point1.y-resistor_height/2},1);
        elems[cli].row = ptrc.x;
        elems[cli].col = ptrc.y;
    }
     
    }
    draw_pins();
//    elems.push({id:no_of_elements+1,type:'ic',start:current_display_x,end:current_display_y,height:resistor_height,width:resistor_width,ic_no:ic_no1});
  //  no_of_elements=no_of_elements+1;
    
}
function resistor_check(point_x,point_y)
{
    if(((point_x>current_display_xr)&&(point_x<current_display_xr +resistor_width ))&&((point_y>current_display_yr)&&(point_y<current_display_yr + resistor_height)))
        return 1;
    else
        return 2;
}

/*
 * 
 * 
 * 
 * 
 */

function codes(c)
{
    if(c===0)
        return '#000000';
    else if(c===1)
        return '#632100';
    else if(c===2)
        return '#FF0000';
    else if(c===3)
        return '#FF6600';
    else if(c===4)
        return '#FFFF00';
    else if(c===5)
        return '#00FF00';
    else if(c===6)
        return '#0000FF';
    else if(c===7)
        return '#FF00FF';
    else if(c===8)
        return '#828279';
    else if(c===9)
        return '#FFFFFF';
}
function resistor_color_codes(c1,c2,c3,c4)
{
    var thick = resistor_width/15;
    var offset = resistor_width/7;
    
    context.beginPath();
    context.rect(current_display_xr+resistor_width/7,current_display_yr,thick,resistor_height);
    context.fillStyle = codes(c1);
    context.fill();
    context.closePath();
    
    context.beginPath();
    context.rect(current_display_xr+offset+resistor_width/7,current_display_yr,thick,resistor_height);
    context.fillStyle = codes(c2);
    context.fill();
    context.closePath();
    
    context.beginPath();
    context.rect(current_display_xr+2*offset+resistor_width/7,current_display_yr,thick,resistor_height);
    context.fillStyle = codes(c3);
    context.fill();
    context.closePath();
    
    context.beginPath();
    context.rect(current_display_xr+(4/5)*resistor_width,current_display_yr,thick,resistor_height);
    context.fillStyle = codes(c4);
    context.fill();
    context.closePath();
}