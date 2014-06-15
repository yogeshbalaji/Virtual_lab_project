/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');
      canvas.width = window.innerWidth;
      canvas.height = canvas.width/2;
      //var context2 = canvas.getContext('2d');
      //$(document).width();
      //$(document).height();
      //<!-- Breadboard parameters -->
      //$(document).width()
      
      var bread_board_x = canvas.width/5;
      var bread_board_y = canvas.height/6;
      var bread_board_width = canvas.width/2;
      var bread_board_height = (3*bread_board_width)/7;
      
      
    //  var display_x,display_y,display_width, display_height;  

      
      
      
      
      
      var number_of_rows = 64;
      var number_blocks = 10;
      var number_per_block = 5;
      var dist_between_slots =  (bread_board_width)/67;
      var height_between_slots = (bread_board_width)/50;
      var block_dist = (bread_board_width)/30;
      var offset1 = (bread_board_width-63*dist_between_slots)/2;     //offset for inner layer
      var offset2 = (bread_board_width-((number_blocks-1)*block_dist + number_blocks*(number_per_block-1)*dist_between_slots))/2;
      var height_offset_1 = (bread_board_height/6-height_between_slots)/2;
      var height_offset_2 = ((2*bread_board_height)/6-4*height_between_slots)/2;
    //Outer layer 1
      context.beginPath();
      
      function draw_pins()
      {
          //<!-- Breadboard layout -->
          context.clearRect(0,0,canvas.width,canvas.height);
      context.beginPath();
      context.rect(bread_board_x, bread_board_y, bread_board_width, bread_board_height);
      context.fillStyle = 'white';
      context.fill();
      context.lineWidth = 5;
      context.strokeStyle = 'black';
      context.stroke();
          
          
          //<!-- Breadboard boundary -->
            
      context.rect(bread_board_x-50,bread_board_y-50,bread_board_width+100,bread_board_height+100);
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
      context.closePath();
      //<!-- Breadboard lines and slots -->
      
      context.beginPath();
      context.moveTo(bread_board_x,bread_board_y+bread_board_height/6);
      context.lineTo(bread_board_x+bread_board_width,bread_board_y+bread_board_height/6);
            
      context.moveTo(bread_board_x,bread_board_y+bread_board_height/2);
      context.lineTo(bread_board_x+bread_board_width,bread_board_y+bread_board_height/2);
            
      context.moveTo(bread_board_x,bread_board_y+(5*bread_board_height)/6);
      context.lineTo(bread_board_x+bread_board_width,bread_board_y+(5*bread_board_height)/6);
      context.strokeStyle = '#E0E0E0 ';
      
      context.stroke();
      context.closePath();

      
    //Outer layer 1
      context.beginPath();

          
          
          
      for(var i=0;i<number_blocks;i++)
      {
          for(var j=0;j<number_per_block;j++)
          {
              context.beginPath();
              context.arc(bread_board_x+offset2+dist_between_slots*(j+4*i)+i*block_dist,bread_board_y+height_offset_1,2, 0, 2 * Math.PI, false);
              context.fillStyle = 'black';
              context.fill();
              
              context.beginPath();
              context.arc(bread_board_x+offset2+dist_between_slots*(j+4*i)+i*block_dist,bread_board_y+height_offset_1+height_between_slots,2, 0, 2 * Math.PI, false);
              context.fillStyle = 'black';
              context.fill();
              
              context.beginPath();
              context.arc(bread_board_x+offset2+dist_between_slots*(j+4*i)+i*block_dist,bread_board_y+(5*bread_board_height)/6+height_offset_1,2, 0, 2 * Math.PI, false);
              context.fillStyle = 'black';
              context.fill();
              
              context.beginPath();
              context.arc(bread_board_x+offset2+dist_between_slots*(j+4*i)+i*block_dist,bread_board_y+(5*bread_board_height)/6+height_offset_1+height_between_slots,2, 0, 2 * Math.PI, false);
              context.fillStyle = 'black';
              context.fill();
          }
      }
      
      
      for(var i=0;i<64;i++)
      {
          for (var j=1;j<=5;j++)
          {
              
            
              context.beginPath();
              context.arc(bread_board_x+offset1+dist_between_slots*i,bread_board_y+bread_board_height/6+height_offset_2 + (j-1)*height_between_slots,2, 0, 2 * Math.PI, false);
              context.fillStyle = 'black';
              context.fill();
              
              context.beginPath();
              context.arc(bread_board_x+offset1+dist_between_slots*i,bread_board_y+bread_board_height/2+height_offset_2 + (j-1)*height_between_slots,2, 0, 2 * Math.PI, false);
              context.fillStyle = 'black';
              context.fill();
          }
         
      }
      //context.beginPath();
      //context.arc(10, 10, 2, 0, 2 * Math.PI, false);
      context.fillStyle = 'black';
      context.fill();
  }

      

      
      function closestPoint(canvas,point)
      {
          //deciding height
          var outx,outy;
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
                  outx=point.x;
                  outy=point.y;
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
              outx=closer_index_rows;
              outy=point.y;
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
              outx=closer_index_rows;
              outy=point.y;
              
          }
          
          return [outx,outy];
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
        var mousePos = getMousePos(canvas, evt);
        closestPoint(canvas,mousePos);

        
        //var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
        //writeMessage(canvas, message);
      }, false);

      draw_pins();


      
      
    
     

