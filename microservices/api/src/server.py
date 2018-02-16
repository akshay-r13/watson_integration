from src import app
from flask import jsonify,request
import json
from watson_developer_cloud import NaturalLanguageUnderstandingV1
from watson_developer_cloud.natural_language_understanding_v1 import Features, EntitiesOptions, KeywordsOptions


nlu = NaturalLanguageUnderstandingV1(
  username='50182f00-5d1d-4bec-9fe1-e211d621fe9e',
  password='QXFaCLAJKplK',
  version='2017-02-27')
@app.route("/")
def home():
    return "Hasura Hello World"

@app.route("/intent",methods=['POST'])
def intent():
    try:
        text = request.json['text']
        response = nlu.analyze(text=text,
            features=Features(
            entities=EntitiesOptions(
            emotion=True,
            sentiment=True,
            limit=2),
            keywords=KeywordsOptions(
            emotion=True,
            sentiment=True,
            limit=2)))
        return(json.dumps(response, indent=2))
    except KeyError:
        return(jsonify({"message":"Invalid request"}))