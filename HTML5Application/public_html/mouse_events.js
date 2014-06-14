/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var clicked_flag=0;
var seven_selected =0;
var initial_seven;

display_7segment(bread_board_x,bread_board_y);
function closestPoint(canvas,point)
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
      canvas.addEventListener('mousedown', function(evt) {
          clicked_flag=1;
          
        var mousePos = getMousePos(canvas, evt);
        if(check(mousePos.x,mousePos.y)===1)
        {
            seven_selected = 1;
            initial_seven = mousePos;
        }
          if(check(mousePos.x,mousePos.y)===2)
        closestPoint(canvas,mousePos);
        
        //var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
        //writeMessage(canvas, message);
      }, false);
      
      canvas.addEventListener('mousemove', function(evt) {
        
          if(seven_selected===1)
          {
              var mousePos = getMousePos(canvas, evt);
              var inc_x = mousePos.x-initial_seven.x;
              var inc_y = mousePos.y-initial_seven.y;
              draw_pins();
              display_7segment(current_display_x+inc_x,current_display_y+inc_y);
              initial_seven.x = initial_seven.x+inc_x;
              initial_seven.y = initial_seven.y+inc_y;
          }
          var mousePos = getMousePos(canvas, evt);
        //closestPoint(canvas,mousePos);
        
        //var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
        //writeMessage(canvas, message);
      }, false);
      
      canvas.addEventListener('mouseup', function(evt) {
        clicked_flag=0;
        seven_selected=0;
        fit_to_slot();
         // var mousePos = getMousePos(canvas, evt);
        //closestPoint(canvas,mousePos);
        
        //var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
        //writeMessage(canvas, message);
      }, false);
      