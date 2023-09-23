const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');

const translator = new Translator();

suite('Unit Tests', () => {
  suite('American => British', () => {
    //#1
    test("Mangoes are my favorite fruit.", (done) => {
      let str = "Mangoes are my favorite fruit."
      let newStr = "Mangoes are my <span class=\"highlight\">favourite</span> fruit."
      let locale = 'american-to-british'
      assert.equal(translator.translate(str, locale), newStr)
      done()
    })
    //#2
    test("I ate yogurt for breakfast.", (done) => {
      let str = "I ate yogurt for breakfast."
      let newStr = "I ate <span class=\"highlight\">yoghurt</span> for breakfast."
      let locale = 'american-to-british'
      assert.equal(translator.translate(str, locale), newStr)
      done()
    })
    //#3
    test("We had a party at my friend's condo.", (done) => {
      let str = "We had a party at my friend's condo."
      let newStr = "We had a party at my friend's <span class=\"highlight\">flat</span>."
      let locale = 'american-to-british'
      assert.equal(translator.translate(str, locale), newStr)
      done()
    })
    //#4
    test("Can you toss this in the trashcan for me?", (done) => {
      let str = "Can you toss this in the trashcan for me?"
      let newStr = "Can you toss this in the <span class=\"highlight\">bin</span> for me?"
      let locale = 'american-to-british'
      assert.equal(translator.translate(str, locale), newStr)
      done()
    })
    //#5
    test("The parking lot was full.", (done) => {
      let str = "The parking lot was full."
      let newStr = "The <span class=\"highlight\">car park</span> was full."
      let locale = 'american-to-british'
      assert.equal(translator.translate(str, locale), newStr)
      done()
    })
    //#6
    test("Like a high tech Rube Goldberg machine.", (done) => {
      let str = "Like a high tech Rube Goldberg machine."
      let newStr = "Like a high tech <span class=\"highlight\">Heath Robinson device</span>."
      let locale = 'american-to-british'
      assert.equal(translator.translate(str, locale), newStr)
      done()
    })
    //#7
    test("To play hooky means to skip class or work.", (done) => {
      let str = "To play hooky means to skip class or work."
      let newStr = "To <span class=\"highlight\">bunk off</span> means to skip class or work."
      let locale = 'american-to-british'
      assert.equal(translator.translate(str, locale), newStr)
      done()
    })
    //#8
    test("No Mr. Bond, I expect you to die.", (done) => {
      let str = "No Mr. Bond, I expect you to die."
      let newStr = "No <span class=\"highlight\">Mr</span> Bond, I expect you to die."
      let locale = 'american-to-british'
      assert.equal(translator.translate(str, locale), newStr)
      done()
    })
    //#9
    test("Dr. Grosh will see you now.", (done) => {
      let str = "Dr. Grosh will see you now."
      let newStr = "<span class=\"highlight\">Dr</span> Grosh will see you now."
      let locale = 'american-to-british'
      assert.equal(translator.translate(str, locale), newStr)
      done()
    })
    //#10
    test("Lunch is at 12:15 today.", (done) => {
      let str = "Lunch is at 12:15 today."
      let newStr = "Lunch is at <span class=\"highlight\">12.15</span> today."
      let locale = 'american-to-british'
      assert.equal(translator.translate(str, locale), newStr)
      done()
    })

  })

  suite('British => American', () => {
    //#11
    test("We watched the footie match for a while.", (done) => {
      let str = "We watched the footie match for a while."
      let newStr = "We watched the <span class=\"highlight\">soccer</span> match for a while."
      let locale = 'british-to-american'
      assert.equal(translator.translate(str, locale), newStr)
      done()
    })
    //#12
    test("Paracetamol takes up to an hour to work.", (done) => {
      let str = "Paracetamol takes up to an hour to work."
      let newStr = "<span class=\"highlight\">Tylenol</span> takes up to an hour to work."
      let locale = 'british-to-american'
      assert.equal(translator.translate(str, locale), newStr)
      done()
    })
    //#13
    test("First, caramelise the onions.", (done) => {
      let str = "First, caramelise the onions."
      let newStr = "First, <span class=\"highlight\">caramelize</span> the onions."
      let locale = 'british-to-american'
      assert.equal(translator.translate(str, locale), newStr)
      done()
    })
    //#14
    test("I spent the bank holiday at the funfair.", (done) => {
      let str = "I spent the bank holiday at the funfair."
      let newStr = "I spent the <span class=\"highlight\">public holiday</span> at the <span class=\"highlight\">carnival</span>."
      let locale = 'british-to-american'
      assert.equal(translator.translate(str, locale), newStr)
      done()
    })
    //#15
    test("I had a bicky then went to the chippy.", (done) => {
      let str = "I had a bicky then went to the chippy."
      let newStr = "I had a <span class=\"highlight\">cookie</span> then went to the <span class=\"highlight\">fish-and-chip shop</span>."
      let locale = 'british-to-american'
      assert.equal(translator.translate(str, locale), newStr)
      done()
    })
    //#16
    test("I've just got bits and bobs in my bum bag.", (done) => {
      let str = "I've just got bits and bobs in my bum bag."
      let newStr = "I've just got <span class=\"highlight\">odds and ends</span> in my <span class=\"highlight\">fanny pack</span>."
      let locale = 'british-to-american'
      assert.equal(translator.translate(str, locale), newStr)
      done()
    })
    //#17
    test("The car boot sale at Boxted Airfield was called off.", (done) => {
      let str = "The car boot sale at Boxted Airfield was called off."
      let newStr = "The <span class=\"highlight\">swap meet</span> at Boxted Airfield was called off."
      let locale = 'british-to-american'
      assert.equal(translator.translate(str, locale), newStr)
      done()
    })
    //#18
    test("Have you met Mrs Kalyani?", (done) => {
      let str = "Have you met Mrs Kalyani?"
      let newStr = "Have you met <span class=\"highlight\">Mrs.</span> Kalyani?"
      let locale = 'british-to-american'
      assert.equal(translator.translate(str, locale), newStr)
      done()
    })
    //#19
    test("Prof Joyner of King's College, London.", (done) => {
      let str = "Prof Joyner of King's College, London."
      let newStr = "<span class=\"highlight\">Prof.</span> Joyner of King's College, London."
      let locale = 'british-to-american'
      assert.equal(translator.translate(str, locale), newStr)
      done()
    })
    //#20
    test("Tea time is usually around 4 or 4.30.", (done) => {
      let str = "Tea time is usually around 4 or 4.30."
      let newStr = "Tea time is usually around 4 or <span class=\"highlight\">4:30</span>."
      let locale = 'british-to-american'
      assert.equal(translator.translate(str, locale), newStr)
      done()
    })

  })

  suite('Highlight Translation', () => {
    //#21
    test("Mangoes are my favorite fruit.", (done) => {
      let str = "Mangoes are my favorite fruit."
      let locale = 'british-to-american'
      assert.equal(translator.translate(str, locale), 'Everything looks good to me!')
      done()
    })
    //#22
    test("I ate yogurt for breakfast.", (done) => {
      let str = "I ate yogurt for breakfast."
      let locale = 'british-to-american'
      assert.equal(translator.translate(str, locale), 'Everything looks good to me!')
      done()
    })
    //#23
    test("We watched the footie match for a while.", (done) => {
      let str = "We watched the footie match for a while."
      let locale = 'american-to-british'
      assert.equal(translator.translate(str, locale), 'Everything looks good to me!')
      done()
    })
    //#24
    test("Paracetamol takes up to an hour to work.", (done) => {
      let str = "Paracetamol takes up to an hour to work."
      let locale = 'american-to-british'
      assert.equal(translator.translate(str, locale), 'Everything looks good to me!')
      done()
    })

  })
});
