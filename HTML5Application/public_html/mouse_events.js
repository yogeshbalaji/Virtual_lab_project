/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var clicked_flag=0;
var seven_selected =0;
var initial_seven;
var cli=-1;
var ic_select_ind = 0;
var seven_select_ind = 0;
var short_flag = 0;
var remove_elem=0;

//var current_display_x =bread_board_x;
//var current_display_y =bread_board_y;
function check_overlap(x,y)
{
    var detect=0;
    
      for (var i=0;i<no_of_elements;i++)
      {
          if  (cli===i)
              break;
          
            if((Math.abs(x-elems[i].start)<elems[cli].width) &&(Math.abs(y-elems[i].end)<elems[cli].height))
            detect=1;
               
      }
      writeMessage(canvas,detect);
    
      return detect;
    
    }

function closestPoint(canvas,point,rc)
      {
          //deciding height
          if((point.x>bread_board_x && point.x<bread_board_x+bread_board_width)&&(point.y>bread_board_y && point.y<bread_board_y+bread_board_height))
          {
          var closer_index_rows,closer_index_cols;
          closer_index_rows = 1;
          var temp_b,block_no;
          //var bread_board_x = canvas.width/5;
          //var bread_board_y = canvas.height/6;
          //var bread_board_width = canvas.width/2;
          //var bread_board_height = (3*bread_board_width)/7;
          // case for the outer row blocks
          if((point.y>bread_board_y)&&(point.y<(bread_board_y + bread_board_height/6)))
          {
                          
              //if(bread_board_x+offset2+dist_between_slots*(j+4*i)+i*block_dist
              temp_b = block_dist+4*dist_between_slots;
              block_no = (point.x-offset2-bread_board_x)/temp_b;
              
              block_no = parseInt(block_no);
              if(point.x>(bread_board_x+offset2+block_no*temp_b+4*dist_between_slots+block_dist/2))
                  block_no++;
              
              var min_dist = 10000;
              for(var i=0;i<number_per_block;i++)
              {
                  if(min_dist>((point.x-(offset2+bread_board_x+temp_b*block_no+dist_between_slots*i))*(point.x-(offset2+bread_board_x+temp_b*block_no+dist_between_slots*i)) + (point.y-(bread_board_y+height_offset_1))*(point.y-(bread_board_y+height_offset_1))))
                  {
                      min_dist = ((point.x-(offset2+bread_board_x+temp_b*block_no+dist_between_slots*i))*(point.x-(offset2+bread_board_x+temp_b*block_no+dist_between_slots*i)) + (point.y-(bread_board_y+height_offset_1))*(point.y-(bread_board_y+height_offset_1)));
                      closer_index_cols = i+5*block_no;
                      closer_index_rows = 1;
                  }
                  
                  if(min_dist>((point.x-(offset2+bread_board_x+temp_b*block_no+dist_between_slots*i))*(point.x-(offset2+bread_board_x+temp_b*block_no+dist_between_slots*i)) + (point.y-(bread_board_y+height_offset_1+height_between_slots))*(point.y-(bread_board_y+height_offset_1+height_between_slots))))
                  {
                      min_dist = ((point.x-(offset2+bread_board_x+temp_b*block_no+dist_between_slots*i))*(point.x-(offset2+bread_board_x+temp_b*block_no+dist_between_slots*i)) + (point.y-(bread_board_y+height_offset_1+height_between_slots))*(point.y-(bread_board_y+height_offset_1+height_between_slots)));
                      
                      closer_index_cols = i+5*block_no;
                      closer_index_rows = 2;
                  }
                  
                  
              }
              
              
                  context.beginPath();
                  context.arc(bread_board_x+offset2+temp_b*parseInt(closer_index_cols/5)+(closer_index_cols%5)*dist_between_slots,bread_board_y+height_offset_1+height_between_slots*(closer_index_rows-1),2, 0, 2 * Math.PI, false);
                  context.fillStyle = 'green';
                  context.fill();
              
                  var message = 'Mouse position: ' + point.x + ',' + point.y;
                  writeMessage(canvas, message);
                  if(rc===1){
                      return{
                          x: closer_index_rows,
                          y: closer_index_cols
                      };
                  }
              return {
          x: bread_board_x+offset2+temp_b*parseInt(closer_index_cols/5)+(closer_index_cols%5)*dist_between_slots ,
          y: bread_board_y+height_offset_1+height_between_slots*(closer_index_rows-1)
        };
          }
          
          
          
          else if((point.y>bread_board_y + 5*bread_board_height/6)&&(point.y<bread_board_y + bread_board_height))
          {
              //if(bread_board_x+offset2+dist_between_slots*(j+4*i)+i*block_dist
              temp_b = block_dist+4*dist_between_slots;
              block_no = (point.x-offset2-bread_board_x)/temp_b;
              
              block_no = parseInt(block_no);
              if(point.x>(bread_board_x+offset2+block_no*temp_b+4*dist_between_slots+block_dist/2))
                  block_no++;
              
              var min_dist = 10000;
              
              
              for(var i=0;i<number_per_block;i++)
              {
                  if(min_dist>((point.x-(offset2+bread_board_x+temp_b*block_no+dist_between_slots*i))*(point.x-(offset2+bread_board_x+temp_b*block_no+dist_between_slots*i)) + (point.y-(bread_board_y+height_offset_1+5*bread_board_height/6))*(point.y-(bread_board_y+height_offset_1+5*bread_board_height/6))))
                  {
                      min_dist = ((point.x-(offset2+bread_board_x+temp_b*block_no+dist_between_slots*i))*(point.x-(offset2+bread_board_x+temp_b*block_no+dist_between_slots*i)) + (point.y-(bread_board_y+height_offset_1+5*bread_board_height/6))*(point.y-(bread_board_y+height_offset_1+5*bread_board_height/6)));
                      closer_index_cols = i+5*block_no;
                      closer_index_rows = 13;
                  }
                  
                  if(min_dist>((point.x-(offset2+bread_board_x+temp_b*block_no+dist_between_slots*i))*(point.x-(offset2+bread_board_x+temp_b*block_no+dist_between_slots*i)) + (point.y-(bread_board_y+height_offset_1+height_between_slots+5*bread_board_height/6))*(point.y-(bread_board_y+height_offset_1+height_between_slots+5*bread_board_height/6))))
                  {
                      min_dist = ((point.x-(offset2+bread_board_x+temp_b*block_no+dist_between_slots*i))*(point.x-(offset2+bread_board_x+temp_b*block_no+dist_between_slots*i)) + (point.y-(bread_board_y+height_offset_1+height_between_slots+5*bread_board_height/6))*(point.y-(bread_board_y+height_offset_1+height_between_slots+5*bread_board_height/6)));
                      
                      closer_index_cols = i+5*block_no;
                      closer_index_rows = 14;
                  }
                  
                  
              }
              
              context.beginPath();
              context.arc(bread_board_x+offset2+temp_b*parseInt(closer_index_cols/5)+(closer_index_cols%5)*dist_between_slots,bread_board_y+5*bread_board_height/6+height_offset_1+height_between_slots*(closer_index_rows-13),2, 0, 2 * Math.PI, false);
              context.fillStyle = 'red';
              context.fill();
              
              var message = 'Mouse position: ' + closer_index_rows + ',' + point.y;
              writeMessage(canvas, message);
              if(rc===1){
                      return{
                          x: closer_index_rows,
                          y: closer_index_cols
                      };
                  }
              return {
          x: bread_board_x+offset2+temp_b*parseInt(closer_index_cols/5)+(closer_index_cols%5)*dist_between_slots ,
          y: bread_board_y+5*bread_board_height/6+height_offset_1+height_between_slots*(closer_index_rows-13)
        };
              
          }
          
          else if((point.y > bread_board_y+bread_board_height/6)&&(point.y < (bread_board_y+5*bread_board_height/6)))
          {
              var min_dist = 10000;
              for(var i=0;i<64;i++)
              {
                  for(var j=1;j<=5;j++)
                  {
                      if(min_dist>(point.x - (bread_board_x+offset1+dist_between_slots*i))*(point.x - (bread_board_x+offset1+dist_between_slots*i)) + (point.y - (bread_board_y+bread_board_height/6+height_offset_2 + (j-1)*height_between_slots))*(point.y - (bread_board_y+bread_board_height/6+height_offset_2 + (j-1)*height_between_slots)))
                      {
                          min_dist = (point.x - (bread_board_x+offset1+dist_between_slots*i))*(point.x - (bread_board_x+offset1+dist_between_slots*i)) + (point.y - (bread_board_y+bread_board_height/6+height_offset_2 + (j-1)*height_between_slots))*(point.y - (bread_board_y+bread_board_height/6+height_offset_2 + (j-1)*height_between_slots));
                          closer_index_rows = 2+j;
                          closer_index_cols = i;
                      }
                      
                      if(min_dist>(point.x - (bread_board_x+offset1+dist_between_slots*i))*(point.x - (bread_board_x+offset1+dist_between_slots*i)) + (point.y - (bread_board_y+bread_board_height/2+height_offset_2 + (j-1)*height_between_slots))*(point.y - (bread_board_y+bread_board_height/2+height_offset_2 + (j-1)*height_between_slots)))
                      {
                          min_dist = (point.x - (bread_board_x+offset1+dist_between_slots*i))*(point.x - (bread_board_x+offset1+dist_between_slots*i)) + (point.y - (bread_board_y+bread_board_height/2+height_offset_2 + (j-1)*height_between_slots))*(point.y - (bread_board_y+bread_board_height/2+height_offset_2 + (j-1)*height_between_slots));
                          closer_index_rows = 7+j;
                          closer_index_cols = i;
                      }
                      
                  }
              }
              
              context.beginPath();
              if(closer_index_rows<8)
                  context.arc(bread_board_x+offset1+dist_between_slots*closer_index_cols,bread_board_y+bread_board_height/6+height_offset_2 + (closer_index_rows-3)*height_between_slots,2, 0, 2 * Math.PI, false);
              if(closer_index_rows>7)
                  context.arc(bread_board_x+offset1+dist_between_slots*closer_index_cols,bread_board_y+bread_board_height/2+height_offset_2 + (closer_index_rows-8)*height_between_slots,2, 0, 2 * Math.PI, false);
              context.fillStyle = 'yellow';
              context.fill();
              
              var message = 'Mouse position: ' + closer_index_rows + ',' + point.y;
              writeMessage(canvas, message);
              
              if(rc===1){
                      return{
                          x: closer_index_rows,
                          y: closer_index_cols
                      };
                  }
              
              if(closer_index_rows<8)
                return {
          x: bread_board_x+offset1+dist_between_slots*closer_index_cols ,
          y: bread_board_y+bread_board_height/6+height_offset_2 + (closer_index_rows-3)*height_between_slots
        };
              else if(closer_index_rows>7)
                return {
          x: bread_board_x+offset1+dist_between_slots*closer_index_cols ,
          y: bread_board_y+bread_board_height/2+height_offset_2 + (closer_index_rows-8)*height_between_slots
        };
              
          }
      }
      
      }
function writeMessage(canvas, message) {
        var context = canvas.getContext('2d');
        context.clearRect(0, 0, 150, 150);
        context.font = '9pt Calibri';
        context.fillStyle = 'black';
        context.fillText(message, 10, 10);
      }
      
      function getMousePos(canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        
                  
        return {
          x: evt.clientX - rect.left,
          y: evt.clientY - rect.top
        };
      }
      function check_element(point_x,point_y)
    {
        
        var got=0;
           for (var i=0;i<no_of_elements;i++)
      {
        
              
    if(((point_x>elems[i].start)&&(point_x<elems[i].start + elems[i].width))&&((point_y>elems[i].end)&&(point_y<elems[i].end + elems[i].height)))
    {
        return i;
        got=1;    
    
    }
      }
    if (got===0)
        return  -1;
    }
      canvas.addEventListener('mousedown', function(evt) 
      {
          
          
          clicked_flag=1;
        
        var mousePos = getMousePos(canvas, evt);

        

        var pt_close = closestPoint(canvas,mousePos,0);
        
        if(short_flag===1)
        {
            elems[no_of_elements-1].start = pt_close.x;
            elems[no_of_elements-1].end = pt_close.y;
            var ptrc = closestPoint(canvas,{x:pt_close.x,y:pt_close.y},1);
            elems[no_of_elements-1].row = ptrc.x;
            elems[no_of_elements-1].col = ptrc.y;
            short_flag = 2;
            
            
        }
        else if(short_flag===2)
        {
            elems[no_of_elements-1].width = pt_close.x;
            elems[no_of_elements-1].height = pt_close.y;
            var ptrc = closestPoint(canvas,{x:pt_close.x,y:pt_close.y},1);
            elems[no_of_elements-1].rowtemp = ptrc.x;
            elems[no_of_elements-1].coltemp = ptrc.y;
            short_flag = 0;
            display_short(no_of_elements-1);
        }
        else
        {

        cli=check_element(mousePos.x,mousePos.y);
        if(cli!==-1)
        {
            if (remove_elem===1)
            {
               elems.splice(cli,1);
               no_of_elements=no_of_elements-1;
               draw_pins();
               remove_elem=0;
               cli=-1;
               
            }
            else
            {
        elems[cli].start=mousePos.x;
        elems[cli].end = mousePos.y;
        writeMessage(canvas,cli);
            }
        }

    }

        /*
        if(cli!==-1)
        {
        
            
            seven_selected = 1;
            //seven_select_ind=1;
            initial_seven = mousePos;
        }
          if(sev_check(mousePos.x,mousePos.y)===2)
        closestPoint(canvas,mousePos);
        
        //var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
        //writeMessage(canvas, message);
        */
      }, false);
      
      canvas.addEventListener('mousemove', function(evt) {
         // writeMessage(canvas,'Here also'+wire_sel)
          if(cli!==-1)
          {
              var mousePos = getMousePos(canvas, evt);
              var inc_x = mousePos.x-elems[cli].start;
              var inc_y = mousePos.y-elems[cli].end;
              draw_pins();

              if (elems[cli].type==='7seg')
              {
              display_7segment(elems[cli].start+inc_x,elems[cli].end+inc_y);
              
              
                }
              else if (elems[cli].type==='ic')
              {
              display_ic(elems[cli].start+inc_x,elems[cli].end+inc_y,ic_no1);
              
              }
              else if (elems[cli].type==='resistor')
              {
              display_resistor(elems[cli].start+inc_x,elems[cli].end+inc_y,ic_no1);
              
              }              
              elems[cli].start = elems[cli].start+inc_x;
              elems[cli].end = elems[cli].end+inc_y;
          }
          var mousePos = getMousePos(canvas, evt);
        //closestPoint(canvas,mousePos);
        
        //var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
        //writeMessage(canvas, message);
      }, false);
      
      canvas.addEventListener('mouseup', function(evt) {
        clicked_flag=0;
        
        if (cli!==-1)
        {
        if (elems[cli].type==='7seg')
        sev_fit_to_slot();
        if (elems[cli].type==='ic')
            ic_fit_to_slot();
        if (elems[cli].type==='resistor')
            resistor_fit_to_slot();
        cli=-1;
    }
         // var mousePos = getMousePos(canvas, evt);
        //closestPoint(canvas,mousePos);
        
        //var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
        //writeMessage(canvas, message);
      }, false);
      
