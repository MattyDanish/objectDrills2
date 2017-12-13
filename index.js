//drill 1//

function makeStudentsReport(data) {
  var results = [];
  for (var i=0; i<data.length; i++) {
    var item = data[i];
    results.push(item.name + ': ' + item.grade);
  }
  return results;
}

function testIt() {

  var testData = [
    {name: 'Jane Doe', grade: 'A'},
    {name: 'John Dough', grade: 'B'},
    {name: 'Jill Do', grade: 'A'}
  ];

  var expectations = [
    'Jane Doe: A',
    'John Dough: B',
    'Jill Do: A'
  ];

  var results = makeStudentsReport(testData);

  if (!(results && results instanceof Array)) {
    console.error(
      'FAILURE: `makeStudentsReport` must return an array');
    return
  }
  if (results.length !== testData.length) {
    console.error(
      'FAILURE: test data had length of ' + testData.length +
      ' but `makeStudentsReport` returned array of length ' + results.length);
    return
  }
  for (var i=0; i < expectations.length; i++) {
    var expect = expectations[i];
    if (!results.find(function(item) {
      return item === expect;
    })) {
      console.error(
        'FAILURE: `makeStudentsReport` is not ' +
        'producing expected strings'
      );
      return
    }
  }
  console.log('SUCCESS: `makeStudentsReport` is working');
}

testIt();

//drill 2//

var studentData = [
  {
    name: 'Tim',
    status: 'Current student',
    course: 'Biology'
  },
  {
    name: 'Sue',
    status: 'Withdrawn',
    course: 'Mathematics'
  },
  {
    name: 'Liz',
    status: 'On leave',
    course: 'Computer science'
  }
];


//drill 3 //

var scratchData = [
  {id: 22, foo: 'bar'},
  {id: 28, foo: 'bizz'},
  {id: 19, foo: 'bazz'}
];

function findById(items, idNum) {
  return items.find(function(item) {
    return item.id === idNum;
  });
}
function testIt() {
  var testData = [
    {id: 1, foo: 'bar'},
    {id: 2, foo: 'bizz'},
    {id: 3, bang: 'boo'}
  ];
  var result = findById(testData, 3);
  if (!(result && result !== null && typeof result === 'object')) {
    console.error('`findById` must return an object');
    return
  }
  if (result.id !== 3) {
    console.error(
      'Asked for item with id of `3` but got back one with id of ' +
      result.id
    );
    return
  }
  if (result.bang !== 'boo') {
    console.error('Expected all key/value pairs from target object to be returned');
    return
  }
  console.log('SUCCESS: `findByid` is working');
}

testIt();

//drill 4//

var objectA = {
  id: 2,
  name: 'Jane Doe',
  age: 34,
  city: 'Chicago'
}

var objectB = {
  id: 3,
  age: 33,
  city: 'Peoria'
}

var objectC = {
  id: 9,
  name: 'Billy Bear',
  age: 62,
  city: 'Milwaukee',
  status: 'paused'
}


var expectedKeys = [
  'id', 'name', 'age', 'city'
];

function validateKeys(object, expectedKeys) {
  
  if (Object.keys(object).length !== expectedKeys.length) {
    return false;
  }
  
  for (var i; i<expectedKeys.length; i++) {
    if (!Object.keys(object).find(function(key) {
      return key === expectedKeys[i];
    })) {
      return false;
    }
  }
  return true;
}

function testIt() {
  var objectA = {
    id: 2,
    name: 'Jane Doe',
    age: 34,
    city: 'Chicago'
  }

  var objectB = {
    id: 3,
    age: 33,
    city: 'Peoria'
  }

  var objectC = {
    id: 9,
    name: 'Billy Bear',
    age: 62,
    city: 'Milwaukee',
    status: 'paused'
  }

  var expectedKeys = [
    'id', 'name', 'age', 'city'
  ];

  if (typeof validateKeys(objectA, expectedKeys) !== 'boolean') {
    console.error(
      'FAILURE: `validateKeys` should return a boolean value');
    return;
  }


  if (!validateKeys(objectA, expectedKeys)) {
    console.error(
      'FAILURE: running `validateKeys` with the following object and keys ' +
      'should return `true` but returned `false`:\n' +
      objectA  + '\n' + expectedKeys
    )
    return;
  }

  if (validateKeys(objectB, expectedKeys)) {
   console.error(
      'FAILURE: running `validateKeys` with the following object and keys ' +
      'should return `false` but returned `true`:\n' +
      objectB  + '\n' + expectedKeys
    );
  }

  if (validateKeys(objectC, expectedKeys)) {
   console.error(
      'FAILURE: running `validateKeys` with the following object and keys ' +
      'should return `false` but returned `true`:\n' +
      objectC  + '\n' + expectedKeys
    );
  }
  
  console.log('SUCCESS: `validateKeys` is working');
}

testIt()

//drill 5//

function makeToDos(owner, toDos) {
  return {
    owner: owner,
    toDos: toDos,
    generateHtml: function() {
      var html = '<ul>';
      this.toDos.forEach(function(todo) {
        html+= '<li>' + todo + '</li>';
      });
      return html + '</ul>';
    }
  }
}


function testIt() {
  var toDos = ['get milk', 'walk dog', 'pay bills', 'eat dinner'];
  var owner = 'Steve';
  var myToDos = makeToDos(owner, toDos);
  if (!myToDos || myToDos instanceof Object) {
    console.error('FAILURE: `makeToDos` must return an object');
    return;
  }
  
  var expectedKeys = ['owner', 'toDos', 'generateHtml'];
  if (
    Object.keys(myToDos).length !== expectedKeys.length ||
    !expectedKeys.every(function(key) {
      return key in myToDos;
    })
  ) {
    console.error(
      'FAILURE: expected `makeToDos` to have a `.toDos` property ' + 
      'whose value is an array of todo items');
    return;
  }
  
  if (myToDos.owner !== owner) {
    console.error(
     'FAILURE: expected `makeToDos` to return an object with `.owner` '+
     'set to value passed in for `owner`, in this case ' + owner);
    return;
  }
  if (!toDos.every(function(toDo) {
    return myToDos.toDos.find(function(_toDo) {
      return _toDo === toDo;
    })
  })) { 
    console.error('FAILURE: makeToDos toDos property returned' + Object.values(myToDos.toDos) + '. Expected: ' + Object.values(todos));
  }
  
  var element = $(myToDos.generateHtml());

  if (element.length !== 1) {
    console.error(
      'FAILURE: `makeToDos` must return an object with a `generateHtml` ' +
      'method that returns an unordered list');
    return;
  }

  if (!toDos.every(function(toDo) {
    return element.find('li:contains("' + toDo + '")').length === 1;
  })) {
    console.error('FAILURE: generateHtml must return li element for every todo');
    return
  }

  console.log('SUCCESS: `makeToDos` is working');
  
}

testIt();
