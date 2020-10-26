$env:FLASK_APP = "$PSScriptRoot\flask_controller.py"
$env:FLASK_ENV = "development"
start  http://localhost:5000/
python -m flask run