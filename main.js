Webcam.set({
    width:350,height:300,image_format:"png",png_quality:90
});
camera=document.getElementById("camera");

Webcam.attach("#camera");

function takeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="capture_image" src="'+data_uri+'"/>'
    });
}

console.log("ml5version:",ml5.version);

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/cDVRdD_tZ/model.json",modelLoaded);

function modelLoaded(){
 console.log("Model Is Loaded.");
}

function check(){
    Picture=document.getElementById("capture_image");
    classifier.classify(Picture,GotResult);
}
function GotResult(error,results){
  if(error){
      console.error(error)

  }
  else{
      console.log(results);
      document.getElementById("result_name").innerHTML=results[0].label;
      document.getElementById("result_accuracy").innerHTML=results[0].confidence.toFixed(2);
  }
}