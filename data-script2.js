var body = document.body;

        var display_target = 0;

        var workers = [
            {
                "firstName": "Ben",
                "lastName": "Ofili",
                "occupation": "Software Developer",
                "phoneNumber": "08089999999",
            },
            {
                "firstName": "Ruth",
                "lastName": "Ofili",
                "occupation": "Accountant"
            },
            {
                "firstName": "Chuka",
                "lastName": "Okrika",
                "occupation": "Data Scientist",
                "phoneNumber": "08099098888",
            },
            {
                "firstName": "Ben",
                "lastName": "Ofili",
                "occupation": "Software Developer",
                "phoneNumber": "08089999999",
            },
            {
                "firstName": "Ruth",
                "lastName": "Ofili",
                "occupation": "Accountant",
                "phoneNumber": "08019090999",
            },
            {
                "firstName": "Chuka",
                "lastName": "Okrika",
                "occupation": "Data Scientist",
                "phoneNumber": "08099098888",
            },
            {
                "firstName": "Ben",
                "lastName": "Ofili",
                "occupation": "Software Developer",
                "phoneNumber": "08089999999",
            },
            {
                "firstName": "Ruth",
                "lastName": "Ofili",
                "occupation": "Accountant",
                "phoneNumber": "08019090999",
            },

            {
                "firstName": "Ben",
                "lastName": "Ofili",
                "occupation": "Software Developer",
                "phoneNumber": "08089999999",
            },
            {
                "firstName": "Ruth",
                "lastName": "Ofili",
                "occupation": "Accountant",
                "phoneNumber": "08019090999",
            },



            {
                "firstName": "Ben",
                "lastName": "Ofili",
                "occupation": "Software Developer",
                "phoneNumber": "08089999999",
            },
            {
                "firstName": "Ruth",
                "lastName": "Ofili",
                "occupation": "Accountant",
                "phoneNumber": "08019090999",
            },



            {
                "firstName": "Ben",
                "lastName": "Ofili",
                "occupation": "Software Developer",
                "phoneNumber": "08089999999",
            },
            {
                "firstName": "Ruth",
                "lastName": "Ofili",
                "occupation": "Accountant",
                "phoneNumber": "08019090999",
            },


            {
                "firstName": "Ben",
                "lastName": "Ofili",
                "occupation": "Software Developer",
                "phoneNumber": "08089999999",
            },
            {
                "firstName": "Ruth",
                "lastName": "Ofili",
                "occupation": "Accountant",
                "phoneNumber": "08019090999",
            },
            {
                "firstName": "Ruth",
                "lastName": "Ofili",
                "occupation": "Accountant",
                "phoneNumber": "08019090999",
            },
        ];

        // show JSON data on page
        var init = document.getElementById("data");
        init.innerHTML = JSON.stringify(workers);


        var extractHeader= function(worker){
            return Object.getOwnPropertyNames(worker);
        }
        
        var headers = extractHeader(workers[0]);
        // console.log( extractHeader(workers[0]));
        var table = document.createElement('table');
        table.setAttribute("id", "data_table");


        function CreateTable(){
            var max_displayable = 5;
            var target_len = 0;
           
            var pagination_required = false;
            table.appendChild(insertHeader(headers));
            target_len = (workers.length >= max_displayable) ? (pagination_required = true,max_displayable) : workers.length;

            for(var i = 0; i < target_len; i++){
                var worker = workers[i];
                createTableRow(worker);
            }

            if(pagination_required){
                var pagination_count = Math.ceil(workers.length/max_displayable);
                for(var i = 0,len = pagination_count; i < len; i++){
                    var index = i;
                    var button = document.createElement('button');
                    button.innerText = index + 1;
                    button.value = index;
                    button.onclick = function(){
                        table.innerHTML = '';
                        table.appendChild(insertHeader(headers));
                       var curr_index = this.value * max_displayable;
                       var available_length = workers.length - curr_index;
                       for(var i = 0, count = 1; i < available_length; i++, count++, curr_index++){
                            createTableRow(workers[curr_index]);
                            if(count == max_displayable) break;
                       }
                        // for(var i = index, len = 1; i < workers.length - index; i++,len++ ){
                        //     console.log(index);
                        //     if(len == pagination_count) break;
                        //     createTableRow(worker[i]);
                        // }
                    } 
                    // table.insertAdjacentHTML("afterend","<div id='buttons'></div");
                    body.appendChild(button);
                    // document.getElementById("buttons").appendChild(button);
                }
            }

            body.appendChild(table);
            
        }


        function insertHeader(headers){
            var tr = document.createElement('tr');
            headers.forEach(function(text, index){
                var th = document.createElement('th');
                // console.log(index)
                th.setAttribute("onclick", "sortTable("+index+")");
                th.innerHTML = text;
                tr.appendChild(th);
            });
            return tr;

            // for(var i = 0, len = target_len; i < len; i++){
            //     console.log(workers[i]);
            // }
        }


        function createTableRow(worker){
            var tr = document.createElement('tr');

            headers.forEach(function(header, index){
                var td =  document.createElement('td');
                console.log(index)
                if(worker == "" || worker === undefined){
                    // td.innerHTML = "NOT AVAILABLE";
                } else {
                    td.innerHTML = worker[header];
                }

                // if () {
                    
                // } else {
                    
                // }
                
                console.log(index);
                tr.appendChild(td);
            });

            table.appendChild(tr);
        }


        // createTable();

        function sortTable(n) {
            var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
            
            table = document.getElementById("data_table");
            
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