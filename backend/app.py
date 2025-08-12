from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS so frontend can access backend

@app.route('/api/data', methods=['GET'])
def get_data():
    return jsonify({"message": "Hello from Flask!", "number": 42})

@app.route('/api/data', methods=['POST'])
def post_data():
    data = request.get_json()
    print("Received from React:", data)
    return jsonify({"status": "success", "received": data})

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=81)
