
(function() {
	function toJSONString( form ) {
		var obj = {};
		var elements = form.querySelectorAll( "input" );
		for( var i = 0; i < elements.length; ++i ) {
			var element = elements[i];
			var name = element.name;
			var value = element.value;

			if( name ) {
				obj[ name ] = value;
			}
		}

		return JSON.stringify( obj );
	}

	document.addEventListener( "DOMContentLoaded", function() {
		var form = document.getElementById( "test" );
		var output = document.getElementById( "table" );
		form.addEventListener( "submit", function( e ) {
			e.preventDefault();
			var json = toJSONString( this );
			output.innerHTML = json;

		}, false);

	});

})();


function CreateTable() {
    var workers = [
        {
          "firstName": "Ben",
          "lastName": "Ofili",
          "occupation": "Software Developer",
          "phoneNumber": "08089999999"
        },
        {
          "firstName": "Ruth",
          "lastName": "Ofili",
          "occupation": "Accountant",
          "phoneNumber": "08019090999"
        },
        {
          "firstName": "Chuka",
          "lastName": "Okrika",
          "occupation": "Data Scientist",
          "phoneNumber": "08099098888"
        }
      ]


    // var f = document.getElementById('firstName').value;
    // var l = document.getElementById('lastName').value;
    // var o = document.getElementById('occupation').value;
    // var p = document.getElementById('phone').value;

    // var form = document.getElementById("test")
    // var elements = form.querySelectorAll("input");
    // console.log(elements)

    // var obj = {}

    // for( var i = 0; i < elements.length; ++i ) {
    //     var element = elements[i];
    //     var name = element.name;
    //     var value = element.value;

    //     // console.log(element[i]);

    //     if(name) {
    //         obj[name] = value;
    //     }
    // }

    // return JSON.stringify( obj );

    // document.getElementById("table").innerHTML = toJSONString(this);

    // EXTRACT VALUE FOR HTML HEADER. 
    var col = []; // initialize an empty array called col
    for (var i = 0; i < workers.length; i++) { // loop through the elements/data in workers array
        for (var key in workers[i]) { // loop through the properties of each elements/data in the workers array
            if (col.indexOf(key) === -1) { // if each of the aforementioned property is not found in our col array
                col.push(key); // add each property to the col array
            }
        }
    }


    var table = document.createElement("table"); // create an HTML table element and save in table variable

    // CREATE TABLE HEADERS
    var tr = table.insertRow(-1); // create a table row.

    for (var i = 0; i < col.length; i++) { // loop through the elements in the col array
        var th = document.createElement("th"); // create a table head element and save it in th variable
        th.innerHTML = col[i]; // add each element of the col array in our th table head.
        tr.appendChild(th); // append our table head element to our table row
    }


     // add the remaining content of workers to the table.
    for (var i = 0; i < workers.length; i++) { // loop through the workers array again

        tr = table.insertRow(-1); // create another row element

        for (var j = 0; j < col.length; j++) {
            var tabCell = tr.insertCell(-1);
            tabCell.innerHTML = workers[i][col[j]];
        }
    }

    // insert the table into an html container.
    var divContainer = document.getElementById("table");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);

}