# AudioPlayerWeb
<!DOCTYPE html>
<html>
<head>
    <title>Audio Player</title>
    <style>
        body {
            font-family: sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            background-color: #f0f0f0;
        }

        audio {
            width: 80%;
            max-width: 500px;
        }
    </style>
</head>
<body>

    <audio controls>
        <source src="audio.mp3" type="audio/mpeg">
        Your browser does not support the audio element.
    </audio>

</body>
</html>
