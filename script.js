//let world=floor(random(0,2));
let point=0;
let trashx=500;
let trashy=550;
let sodax=572;
let soday=282;
let bottlex=148;
let bottley=240;
let cocax=381;
let cocay=231;
let foodcx=576;
let foodcy=416;
let paperx=464;
let papery=243;
let pbx=512;
let pby=117;
let pcx=146;
let pcy=389;
let utx=361;
let uty=291;
let wbx=24;
let wby=228;


//
let trash_bagX=50;
let trash_bagY=316;
let recycle_binX=100;
let recycle_binY=550;
function setup() {
    createCanvas(600, 600);
    imageMode(CENTER);
 }
function preload() {
   beach= loadImage("beach.jpg");
   //trash
   trash=loadImage("trash_can.png");
   //recycle
   recycle=loadImage("recycyle_bin.png");
   //pollutions
   trash_bag=loadImage("trash_bag_low.png");
   soda_can=loadImage("al_soda_cans_low.png");
   bottles_low=loadImage("bottles_low.png");
   coca_cola=loadImage("coca_cola_low.png");
   food_c=loadImage("food_container_low.png");
   paper=loadImage("paper_towels_low.png");
   pb=loadImage("plastic_bag_low.png");
   pc=loadImage("plastic_chips_low.png");
   ut=loadImage("utensils_low.png");
   wb=loadImage("water_bottle_low.png");





}
 function draw(){
   background(0);
   //////////////////////////////////////
   image(beach,300,200,600,500);
   image(trash_bag,trash_bagX,trash_bagY,60,60);
   image(soda_can,sodax,soday,60,60);
   image(bottles_low,bottlex,bottley,60,60);
   image(coca_cola,cocax,cocay,30,30);
   image(food_c,foodcx,foodcy,30,30);
   image(paper,paperx,papery,30,30);
   image(pb,pbx,pby,30,30);
   image(pc,pcx,pcy,30,30);
   image(ut,utx,uty,30,30);
   image(wb,wbx,wby,30,30);



   ///////////////////////////////////////
   image(trash,trashx,trashy,100,100);
   image(recycle,recycle_binX,recycle_binY,90,90);
   score();

}
function score(){
   if (trash_bagX <=trashx+50&&trash_bagX >=trashx-50&&trash_bagY>=trashy-50&&trash_bagY<=trashy+50) {trash_bagX=1000;trash_bagY=1000;console.log("trash_bag passed");point++;}
   if (sodax <=recycle_binX+50&&sodax >=recycle_binX-50&&soday>=recycle_binY-50&&soday<=recycle_binY+50) {sodax=1000;soday=1000;console.log("soda_can passed");point++;}
   if (cocax <=recycle_binX+50&&cocax >=recycle_binX-50&&cocay>=recycle_binY-50&&cocay<=recycle_binY+50) {cocax=1000;cocay=1000;console.log("coca_cola passed");point++;}
   if (bottlex <=recycle_binX+50&&bottlex >=recycle_binX-50&&bottley>=recycle_binY-50&&bottley<=recycle_binY+50) {bottlex=1000;bottley=1000;console.log("bottle_low passed");point++;}
   if (foodcx <=recycle_binX+50&&foodcx >=recycle_binX-50&&foodcy>=recycle_binY-50&&foodcy<=recycle_binY+50) {foodcx=1000;foodcy=1000;console.log("food_c passed");point++;}
   if (paperx <=recycle_binX+50&&paperx >=recycle_binX-50&&papery>=recycle_binY-50&&papery<=recycle_binY+50) {paperx=1000;papery=1000;console.log("paper passed");point++;}
   if (pbx <=recycle_binX+50&&pbx >=recycle_binX-50&&pby>=recycle_binY-50&&pby<=recycle_binY+50) {pbx=1000;pby=1000;console.log("pb passed");point++;}
   if (pcx <=recycle_binX+50&&pcx >=recycle_binX-50&&pcy>=recycle_binY-50&&pcy<=recycle_binY+50) {pcx=1000;pcy=1000;console.log("pc passed");point++;}
   if (utx <=recycle_binX+50&&utx >=recycle_binX-50&&uty>=recycle_binY-50&&uty<=recycle_binY+50) {utx=1000;uty=1000;console.log("ut passed");point++;}
   if (wbx <=recycle_binX+50&&wbx >=recycle_binX-50&&wby>=recycle_binY-50&&wby<=recycle_binY+50) {wbx=1000;wby=1000;console.log("wb passed");point++;}
   console.log(point,"/10");
   noStroke();
   fill(255,255,255);
   rect(0,0,100,50);
   fill(0);
   textSize(20);
   text(point+"/10",30,30);
   if(point==10){
      fill(255,255,255);
      rect(149,124,270,150);
      fill(0,255,0);
      textSize(22);
      text("Congratulations", 200, 159);text("keeping earth green", 185, 250);}
   



   


}
 function mouseDragged(){
    if (mouseX >= (trash_bagX+50) || mouseX <= (trash_bagX-50) || mouseY >= (trash_bagY+50) || mouseY <= (trash_bagY-50)) {}
    else{console.log("trash_bag moving");trash_bagX=mouseX;trash_bagY=mouseY;}
    if (mouseX >= (sodax+50) || mouseX <= (sodax-50) || mouseY >= (soday+50) || mouseY <= (soday-50)) {}
    else{console.log("soda_can moving");sodax=mouseX;soday=mouseY;}
    if (mouseX >= (cocax+50) || mouseX <= (cocax-50) || mouseY >= (cocay+50) || mouseY <= (cocay-50)) {}
    else{console.log("coca_cola moving");cocax=mouseX;cocay=mouseY;}
    if (mouseX >= (bottlex+50) || mouseX <= (bottlex-50) || mouseY >= (bottley+50) || mouseY <= (bottley-50)) {}
    else{console.log("bottle_low moving");bottlex=mouseX;bottley=mouseY;}
    if (mouseX >= (foodcx+30) || mouseX <= (foodcx-30) || mouseY >= (foodcy+30) || mouseY <= (foodcy-30)) {}
    else{console.log("food_c moving");foodcx=mouseX;foodcy=mouseY;}
    if (mouseX >= (paperx+50) || mouseX <= (paperx-50) || mouseY >= (papery+50) || mouseY <= (papery-50)) {}
    else{console.log("paper moving");paperx=mouseX;papery=mouseY;}
    if (mouseX >= (pbx+30) || mouseX <= (pbx-30) || mouseY >= (pby+30) || mouseY <= (pby-30)) {}
    else{console.log("pb moving");pbx=mouseX;pby=mouseY;}
    if (mouseX >= (pcx+30) || mouseX <= (pcx-30) || mouseY >= (pcy+30) || mouseY <= (pcy-30)) {}
    else{console.log("pc moving");pcx=mouseX;pcy=mouseY;}
    if (mouseX >= (utx+30) || mouseX <= (utx-30) || mouseY >= (uty+30) || mouseY <= (uty-30)) {}
    else{console.log("ut moving");utx=mouseX;uty=mouseY;}
    if (mouseX >= (wbx+30) || mouseX <= (wbx-30) || mouseY >= (wby+30) || mouseY <= (wby-30)) {}
    else{console.log("wb moving");wbx=mouseX;wby=mouseY;}
    //console.log("Right",(trash_bagX+50)>=mouseX);
    //console.log("Left",(50-trash_bagX)<=mouseX);
    //fix trash bag w,h & if trb in trash can 
 }
 function mouseClicked(){
   console.log("X: ",mouseX,"Y: ",mouseY);


 }