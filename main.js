var canvas = document.getElementById("MyCanvas");
var ctx = canvas.getContext("2d");

car1_width = 120;
car1_height = 70;
car1_x = 10;
car1_y = 10;
car1_image = "https://i.postimg.cc/bJqRgDfv/car1.png";

car2_width = 120;
car2_height = 70;
car2_x = 10;
car2_y = 100;
car2_image = "https://i.postimg.cc/SKKftwhz/car2.jpg";

background_image = "bg_canvas.jpg";

function add(){
    background_imgTag = new Image();
    background_imgTag.onload = UploadBackground;
    background_imgTag.src = background_image;

    car1_imgTag = new Image();
    car1_imgTag.onload = UploadCar1;
    car1_imgTag.src = car1_image;

    car2_imgTag = new Image();
    car2_imgTag.onload = UploadCar2;
    car2_imgTag.src = car2_image;
}

function UploadBackground(){
  ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function UploadCar1(){
ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
}

function UploadCar2(){
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
    }

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
   keyPressed = e.keyCode;
   console.log(keyPressed);
   if(keyPressed == '38'){
       car1_up();
       console.log("Up arrow key is pressed");
   }

   if(keyPressed == '40'){
       car1_down();
       console.log("Down arrow key is pressed");
   }

   if(keyPressed == '37'){
       car1_left();
       console.log("Left arrow key is pressed.");
   }

   if(keyPressed == '39'){
       car1_right();
       console.log("Right arrow key is pressed.");
       
   }

   if(keyPressed == '87'){
    car2_up();
    console.log("Up (w) arrow key is pressed.");
    
}

if(keyPressed == '83'){
    car2_down();
    console.log("Down (s) arrow key is pressed.");
}

if(keyPressed == '65'){
    car2_left();
    console.log("Left (a) arrow key is pressed.");
}

if(keyPressed == '68'){
    car2_right();
    console.log("Right (d) arrow key is pressed.");
}

if(car1_x > 700){
    console.log("Car-1 Won!")
    document.getElementById("game_stat").innerHTML = "Car-1 Won!!!"
}

if(car2_x > 700){
    console.log("Car-2 Won!")
    document.getElementById("game_stat").innerHTML = "Car-2 Won!!!"   
}

}

function car1_up(){
    if( car1_y > 0){
        car1_y = car1_y - 10;
        console.log("When up arrow key is pressed, x= " +car1_x+ "y = " +car1_y);
        UploadBackground();
        UploadCar1();
        UploadCar2();
    }
}

function car1_down(){
    if( car1_y <= 500){
        car1_y = car1_y + 10;
        console.log("When down arrow key is pressed, x= " +car1_x+ "y = " +car1_y);
        UploadBackground();
        UploadCar1();
        UploadCar2();
    }
}

function car1_left(){
    if( car1_x >  0){
        car1_x = car1_x - 10;
        console.log("When left arrow key is pressed, x= " +car1_x+ "y = " +car1_y);
        UploadBackground();
        UploadCar1();
        UploadCar2();
    }
}

function car1_right(){
    if (car1_x <= 700){
  car1_x = car1_x + 10;
  console.log("When right arrow key is clicked, x = " +car1_x+ "y = " +car1_y);
  UploadBackground();
  UploadCar1();
  UploadCar2();
}
} 


function car2_up(){
    if( car2_y > 0){
        car2_y = car2_y - 10;
        console.log("When up (w) arrow key is pressed, x= " +car2_x+ "y = " +car2_y);
        UploadBackground();
        UploadCar1();
        UploadCar2();
    }
}

function car2_down(){
    if( car2_y <= 500){
        car2_y = car2_y + 10;
        console.log("When down (s) arrow key is pressed, x= " +car2_x+ "y = " +car2_y);
        UploadBackground();
        UploadCar1();
        UploadCar2();
    }
}

function car2_left(){
    if( car2_x >  0){
        car2_x = car2_x - 10;
        console.log("When left (a) arrow key is pressed, x= " +car2_x+ "y = " +car2_y);
        UploadBackground();
        UploadCar1();
        UploadCar2();
    }
}

function car2_right(){
    if (car2_x <= 700){
  car2_x = car2_x + 10;
  console.log("When right (d) arrow key is clicked, x = " +car2_x+ "y = " +car2_y);
  UploadBackground();
  UploadCar1();
  UploadCar2();
}
} 


