Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_qulity: 90
});
camera = document.getElementById("camera");
Webcam.attach('#camera');

function takeSnapshot() {
    Webcam.snap(function(data_uri) {
        document.getElementById("results").innerHTML = '<img id="captureimage" src="' + data_uri + ' "/>';
    });
    console.log('ml5 verison:', ml5.virsion);
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/orEIOj0Ol/model.json ', modelLoaded);


    function modelLoaded() {
        console.log('model loaded!');
    }

    function speak() {
        var synth = window.speechSynthis;
        speak_data1 = "The first prediction is " + prediction_1;
        speak_data2 = "And second prediction is " + prediction_2;
        var utterThis = new SpeechSynthesisUtterance(speak_data1, speak_data2);
        synth.speak(utterThis);
    }