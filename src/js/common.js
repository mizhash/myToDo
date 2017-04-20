//console.log(someD.exec(/\d\d:\d\d/));

/*var main = document.querySelector('main');
var elem = document.createElement('h1');
elem.classList.add('title');
main.appendChild(elem);*/



//var inner = document.createTextNode(timeR);
//elem.appendChild(inner);
//main.appendChild(elem);

/*function timer() {
	var someD = new Date();
	var match = /\d\d:\d\d:\d\d/;
	var timeR = match.exec(someD);
	var cont = document.querySelector('.title');
	//var cont = document.createTextNode(timeR);
	cont.innerHTML = timeR;
}
setInterval(timer, 1000);

function replaceImages() {
	var images = document.body.getElementsByTagName("img");
	
	for (var i = images.length - 1; i >= 0; i--) {
		var image = images[i];
		if (image.alt) {
			var text = document.createTextNode(image.alt);
			image.parentNode.replaceChild(text, image);
		}
	}
}*/

/*var mountains = [
	{
		name: 'Kilimanjaro',
		height: 5895,
		country: 'Tanzania'
	},
	{
		name: 'Djomolungma',
		height: 8848,
		country: 'China'
	},
	{
		name: 'Chogory',
		height: 8614,
		country: 'China'
	}
];*/

/*var item1 = mountains[1];
var elem1 = Object.keys(mountains[0]);

console.log('item', item1);
console.log('elem', elem1[0]);
console.log( item1[elem1[0]]);


function createTable(element, data) {
	var cont = document.querySelector(element);
	console.log(cont);
	var table = document.createElement('table');
	cont.appendChild(table);

	var fields = Object.keys(data[0]);

	function createTableHead() {
		
		var tr = document.createElement('tr');
		for(var i = 0; i < fields.length; i++) {
			var th = document.createElement('th');
			var text = document.createTextNode(fields[i]);
			th.appendChild(text);
			tr.appendChild(th);
		}
		table.appendChild(tr);
	}

	function createBody() {
		data.forEach(function(object) {
			var tr = document.createElement('tr');

			fields.forEach(function(field) {
				var td = document.createElement('td');
				td.textContent = object[field];
				if (typeof object[field] == 'number') {
					td.style.textAlign = 'right';
				}
				tr.appendChild(td);
			});

			table.appendChild(tr);
		});
	}

	createTableHead();
	createBody();
}

createTable('#table', mountains);*/



/*var world = new World(plan, {"#": Wall, "o": BouncingCritter});
console.log(world.toString());*/


var button = document.querySelector('.controls__btn');
button.addEventListener('click', function() {
  saveToDo();
});


function getToDoItems() {
  var notes = new Array;
  var notes_str = localStorage.getItem("notes");
  if(notes_str != null) {
	notes = JSON.parse(notes_str);
  }
  
  return notes;
}

function saveToDo() {
  var notes =  getToDoItems();
  var title = document.querySelector('.controls__input');
  //var text = document.getElementById('text_field');
  
  var newSave = {
	name: title.value,
  text: ''
	//text: text.value
  } 
  notes.push(newSave);
  localStorage.setItem("notes", JSON.stringify(notes));
  //console.log(localStorage);
  createToDoList();
  title.value = '';
  //text.value = '';
}

function createToDoList() {
  var notes = getToDoItems();
  //var list = document.getElementById('list');
  var html = '<div class="toDo">'
  for (var i = 0; i < notes.length; i++) {
	html += '<div class="toDo__item" data-index="' + i + '">';
	html += '<input class="toDo__title" type="text" value="' + notes[i].name + '">';
	html += '<textarea class="toDo__desc">' + notes[i].text + '</textarea>';
	html += '<button class="remove">&times;</button>'
	html += '</div>';
  }
  html += '</div>';
  document.getElementById('toDoWrap').innerHTML = html;
  var titles = document.querySelectorAll('.toDo__title');
  var texts = document.querySelectorAll('.toDo__desc');
  var buttons = document.querySelectorAll('.remove');
  /*function setListener(elem, func, event) {
	for (var i = 0; elem.length; i++) {
	  elem[i].addEventListener(event, function() {
		func(elem[i]);
	  });
	}
	
  }*/
  for (var i = 0; i < titles.length; i++) {
	   
	titles[i].addEventListener('change', function() {
		saveToDoEdit(this);
	  });
	}
  
  for (var i = 0; i < texts.length; i++) {
	   
	texts[i].addEventListener('change', function() {
		saveToDoEdit(this);
	  });
	}
  
  for (var i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener('click', function() {
		removeTodoItem(this);
	});
  }

}

function saveToDoEdit(element) {
  var parent = element.parentNode;
  var index = parent.getAttribute('data-index');
  var notes = getToDoItems();
  //console.log(element.tagName);
  if (element.tagName == "INPUT") {
	notes[index].name = element.value;
  } else if (element.tagName == "TEXTAREA") {
	notes[index].text = element.value;
  }
  
  localStorage.setItem("notes", JSON.stringify(notes));
  createToDoList();
  /*var id = element.getAttribute('data-index');
  console.log(notes[id]);*/
}

function removeTodoItem(element) {
  var parent = element.parentNode;
  var index = parent.getAttribute('data-index');
  var notes = getToDoItems();
  notes.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notes));
  createToDoList();
}

createToDoList();



