from flask import Flask, jsonify, request, json
#import requests
import os
import ForeCast as fc

app = Flask(__name__)

@app.route('/get_data', methods=['GET'])
def foreCast_data():
    jsonData = []
    lat = request.args.get('latitude', type=str)
    lon = request.args.get('longitude', type=str)
    forecast = fc.handleDataForecast(lat, lon)
    return jsonify(forecast.toJson())

@app.route('/get_current', methods=['GET'])
def current_data():
    jsonData = []
    lat = request.args.get('latitude', type=str)
    lon = request.args.get('longitude', type=str)
    current = fc.handleDataForecast(lat, lon)
    return jsonify(current.toJsonCurrent())

@app.route('/current_temp', methods=['GET'])
def current_temp():
    jsonData = []
    lat = request.args.get('latitude', type=str)
    lon = request.args.get('longitude', type=str)
    currentTemp = fc.handleDataForecast(lat, lon)
    return jsonify(currentTemp.toCurrentTemp)

def cal_setTime():
    jsonData = []
    lat = request.args.get('latitude', type=str)
    lon = request.args.get('longitude', type=str)
    # need beginning time and end time to be passed in the url
    setTime = fc.handleDataForecast(lat, lon)
    

@app.route('/multiple10', methods=['GET'])
def ten_multi():
    return jsonify({'pulse': 120})
    
if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)
    