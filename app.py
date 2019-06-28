import json
from flask import Flask, request
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app)

def determinar_valor(s,string):
    i = 0
    count = 0
    for l in string:
        if s == string[i:len(s)+i]:
            count+=1
        i+=1
    return ((len(s)*count))

@app.route("/", methods=['POST'])
@cross_origin()
def calculate():
    values = request.get_json()
    string = values.get('string', None)
    if string:
        dicc = {}
        for cant in range(1, len(string) + 1):
            for i in range(len(string) + 1 - cant):
                if not dicc.get(string[i : i + cant]):
                    dicc[string[i:i+cant]] = determinar_valor(string[i:i+cant], string)
        return json.dumps({'value':max(dicc.values())})
    else:
        return json.dumps({'error':'You must enter a string'})


if __name__ == "__main__":
    app.run()

