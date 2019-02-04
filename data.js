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
  },
  {
      "firstName": "Ruth",
      "lastName": "Ofili",
      "occupation": "Accountant",
      "phoneNumber": "08019090999"
  },
    {
      "firstName": "Ruth",
      "lastName": "Ofili",
      "occupation": "Accountant",
      "phoneNumber": "08019090999"
    },
    {
      "firstName": "Ruth",
      "lastName": "Ofili",
      "occupation": "Accountant",
      "phoneNumber": "08019090999"
    },
    {
      "firstName": "Ruth",
      "lastName": "Ofili",
      "occupation": "Accountant",
      "phoneNumber": "08019090999"
    },
    {
      "firstName": "Ruth",
      "lastName": "Ofili",
      "occupation": "Accountant",
      "phoneNumber": "08019090999"
    },
    {
      "firstName": "Ruth",
      "lastName": "Ofili",
      "occupation": "Accountant",
      "phoneNumber": "08019090999"
    },
    {
      "firstName": "Ruth",
      "lastName": "Ofili",
      "occupation": "Accountant",
      "phoneNumber": "08019090999"
    },
    {
      "firstName": "Ruth",
      "lastName": "Ofili",
      "occupation": "Accountant",
      "phoneNumber": "08019090999"
    },
    {
      "firstName": "Ruth",
      "lastName": "Ofili",
      "occupation": "Accountant",
      "phoneNumber": "08019090999"
    },
    {
      "firstName": "Ruth",
      "lastName": "Ofili",
      "occupation": "Accountant",
      "phoneNumber": "08019090999"
    },
    {
      "firstName": "Ruth",
      "lastName": "Ofili",
      "occupation": "Accountant",
      "phoneNumber": "08019090999"
    },
    {
      "firstName": "Ruth",
      "lastName": "Ofili",
      "occupation": "Accountant",
      "phoneNumber": "08019090999"
    },
    {
      "firstName": "Ruth",
      "lastName": "Ofili",
      "occupation": "Accountant",
      "phoneNumber": "08019090999"
    }
]



function CreateTable() {

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
    console.log(table)
    // CREATE TABLE HEADERS
    var tr = table.insertRow(-1); // create a table row.

    for (var i = 0; i < col.length; i++) { // loop through the elements in the col array
        var th = document.createElement("th"); // create a table head element and save it in th variable
        // console.log(col[i]);
        th.innerHTML = col[i]; // add each element of the col array in our th table head.
        console.log(i);
        th.setAttribute("onclick", "sortTable("+[i]+")");
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


    // create pagination

    // get the table element
    // var table = document.getElementsByTagName("table"),
    // number of rows per page
    var $n = 5,
    // number of rows of the table
    $rowCount = table.rows.length,
    // get the first cell's tag name (in the first row)
    $firstRow = table.rows[0].firstElementChild.tagName,
    // boolean var to check if table has a head row
    $hasHead = ($firstRow === "th"),
    // an array to hold each row
    $tr = [],
    // loop counters, to start count from rows[1] (2nd row) if the first row has a head tag
    $i, $ii, $j = ($hasHead) ? 1 : 0,
    // holds the first row if it has a (<TH>) & nothing if (<TD>)
    $th = ($hasHead ? table.rows[(0)].outerHTML : "");
    // count the number of pages
    var $pageCount = Math.ceil($rowCount / $n);
    // console.log($pageCount)

    // if we had one page only, then we have nothing to do ..
    if ($pageCount > 1) {
        // assign each row outHTML (tag name & innerHTML) to the array
        for ($i = $j, $ii = 0; $i < $rowCount; $i++, $ii++)
            $tr[$ii] = table.rows[$i].outerHTML;
            
        // create a div block to hold the buttons
        table.insertAdjacentHTML("afterend","<div id='buttons'></div");
        // the first sort, default page is the first one
        sort(1);
        // console.log(sort(1))
    }

    // ($p) is the selected page number. it will be generated when a user clicks a button
    function sort($p) {
        /* create ($rows) a variable to hold the group of rows
        ** to be displayed on the selected page,
        ** ($s) the start point .. the first row in each page, Do The Math
        */
        var $rows = $th, $s = (($n * $p)-$n);
        for ($i = $s; $i < ($s+$n) && $i < $tr.length; $i++)
            $rows += $tr[$i];
        
        // now the table has a processed group of rows ..
        table.innerHTML = $rows;
        // create the pagination buttons
        document.getElementById("buttons").innerHTML = pageButtons($pageCount, $p);
        // CSS Stuff
        document.getElementById("id"+$p).setAttribute("class","active");
    }


    // ($pCount) : number of pages,($cur) : current page, the selected one ..
    function pageButtons($pCount, $cur) {
        /* this variables will disable the "Prev" button on 1st page
        and "next" button on the last one */
        var	$prevDis = ($cur == 1)?"disabled":"",
            $nextDis = ($cur == $pCount)?"disabled":"",
            /* this ($buttons) will hold every single button needed
            ** it will creates each button and sets the onclick attribute
            ** to the "sort" function with a special ($p) number..
            */
            $buttons = "<input type='button' value='&lt;&lt; Prev' onclick='sort("+($cur - 1)+")' "+$prevDis+">";
        for ($i=1; $i<=$pCount;$i++)
            $buttons += "<input type='button' id='id"+$i+"'value='"+$i+"' onclick='sort("+$i+")'>";
        $buttons += "<input type='button' value='Next &gt;&gt;' onclick='sort("+($cur + 1)+")' "+$nextDis+">";
        return $buttons;
    }

}


function sortTable(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  // console.log(rows);
  table = document.getElementsByTagName("table");
  // console.log(table)
  switching = true;
  // Set the sorting direction to ascending:
  dir = "asc"; 
  /* Make a loop that will continue until
  no switching has been done: */
  while (switching) {
    // Start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /* Loop through all table rows (except the
    first, which contains table headers): */
    for (i = 1; i < (rows.length - 1); i++) {
      // Start by saying there should be no switching:
      shouldSwitch = false;
      /* Get the two elements you want to compare,
      one from current row and one from the next: */
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      /* Check if the two rows should switch place,
      based on the direction, asc or desc: */
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          // If so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          // If so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark that a switch has been done: */
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      // Each time a switch is done, increase this count by 1:
      switchcount ++; 
    } else {
      /* If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again. */
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}


