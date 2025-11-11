$(document).ready(function() {
    $textcontainer = $("#typetext");

    let finalText = $textcontainer.text().split('');
    let currentText = "";

    $textcontainer.text("");

    for(let i = 0; i < finalText.length; i++) {
        setTimeout(() => {
            currentText += finalText[i];
            $textcontainer.text(currentText + "|");
            
            if (i === finalText.length - 1) {
                setTimeout(() => {
                    $textcontainer.text(currentText);
                }, 100);
            }
        }, 75 * i);
    }
});