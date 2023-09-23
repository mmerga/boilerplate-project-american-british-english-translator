'use strict';

const Translator = require('../components/translator.js');
module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      const text = req.body.text;
      const locale = req.body.locale;

      if(text === undefined || !locale){
        res.json({error: 'Required field(s) missing'});
      }else if(text === ''){
        res.json({error: 'No text to translate'});
      }else{
        if(locale === 'american-to-british' || locale === 'british-to-american'){
          const newText = translator.translate(text, locale);
          res.json({text: text, translation: newText});
        }else{
          res.json({error: 'Invalid value for locale field'});
        }
      }
    });
};
