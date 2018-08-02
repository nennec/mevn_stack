const bodyParser = require("body-parser");


exports.check = (req, res, next) => {
    res.status(201).json({
        user: req.token.email
    });
};

exports.watsonImageRecognition = (req, res, next) => {
    events = {
        name: "Test Event",
        location_county: "Dublin",
        location_town: "Malahide"
    };
    res.status(201).json({
        "images" : [ {
          "classifiers" : [ {
            "classifier_id" : "default",
            "name" : "default",
            "classes" : [ {
              "class" : "fruit",
              "score" : 0.788
            }, {
              "class" : "olive color",
              "score" : 0.973
            }, {
              "class" : "lemon yellow color",
              "score" : 0.789
            } ]
          } ],
          "image" : "fruitbowl.jpg"
        } ],
        "images_processed" : 1,
        "custom_classes" : 2
      });
};