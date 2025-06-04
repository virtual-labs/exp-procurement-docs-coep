function comparitive(){
	
		
	$("#Header").html("<center><span>comparision</span></center>");
	htm = `
	 <table id="dynamicTable">
        <thead>
            <tr>
                <th>Sr. No.</th>
                <th>Description</th>
                <th>Vendor 1</th>
                <th>Vendor 2</th>
                <th>Vendor 3</th>
                <th>Vendor 4</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
             <td>
                    <select class="instrument-name">
                        <option value=""> ----- Select Instrument ----- </option>
                        <option value="1">Temperature Switch</option>
                        <option value="2">Pressure Switch</option>
                        <option value="3">Level Switch</option>
                        <option value="4">Flow Switch</option>
                        <option value="5">Level Transmitter (RADAR)</option>
                        <option value="6">Level Transmitter (Ultrasonic)</option>
                        <option value="7">Level Transmitter (Capacitive)</option>
                        <option value="8">Pressure Transmitter (Capacitive)</option>
                        <option value="9">Temperature Transmitter</option>
                        <option value="10">Flow Transmitter (Magflow) 25 mmNB</option>
                        <option value="11">Flow Transmitter (ultrasonic)</option>
                        <option value="12">Solenoid Valve 25 mmNB</option>
                        <option value="13">Solenoid Valve 50 mmNB</option>
                        <option value="14">Angle Valve 25 mmNB</option>
                        <option value="15">Angle Valve 50 mmNB</option>
                        <option value="16">Diaphragm Valve 25 mmNB</option>
                        <option value="17">Diaphragm Valve 50 mmNB</option>
                        <option value="18">Diaphragm Valve 100 mmNB</option>
                        <option value="19">I/P Converter</option>
                        <option value="20">VFD for 1 HP</option>
                        <option value="21">VFD for 5 HP</option>
                        <option value="22">VFD for 10 HP</option>
                        <option value="23">Peristaltic Pump (6.25 mmNB)</option>
                        <option value="24">SCR controlled Heater (18 KW)</option>
                        <option value="25">PLC equivalent to SLC 1200</option>
                        <option value="26">SCADA Package with 25 screens</option>
                        <option value="27">Historian (OSI Pi) or equivalent</option>
                        <option value="28">Workstation (i7 with 1TB storage)</option>
                        <option value="29">Control Panel (with all consumables included)</option>
                        <option value="30">HMI (10") touch screen</option>
                        <option value="31">Development charges for Ladder program, SCADA, and Data Analytics</option>
                        <option value="32">Power supply (Bulk) 24 VDC 20 A</option>
                    </select>
                </td>
               
                <td><input type="number" class="ven1 vendor" placeholder=""></td>
                <td><input type="number" class="ven2 vendor" ></td>
                <td><input type="number" class="ven3 vendor" ></td>
                 <td><input type="number" class="ven4 vendor" ></td>
                <td><button class=" btn remove-btn" data-toggle="modal" data-target="#preReq">Remove</button></td>
            </tr>
        </tbody>
    </table>
    <div class="btn-container">
     <button class="btn add-btn" data-toggle="modal" data-target="#preReq">Add Row</button>
     <button  type="submit"class="btn check-btn">Submit & Next</button>
    </div>`

    
     htm +=  `	<!-- 			    The Modal  ProStr -->
  <div class="modal fade " id="preReq">
	    <div class="modal-dialog modal-md" >
		      <div class="modal-content">
		       
	        <div class="modal-header">
	          <h4 class="modal-title"><center>Message Box</center></h4>
	          <button type="button" class="close" data-dismiss="modal">&times;</button>
	        </div>
<!-- 		        Modal body -->
		        <div class="modal-body" id="modalMessage" style="color:red">

		        </div>
<!-- 			        Modal footer -->
		        <div class="modal-footer">
	             <button type="button" class="btn btn-danger" data-dismiss="modal" >Ok</button>
		        </div>
		      </div>
		    </div>
		  </div>
		  <!-- 			  End Modal ProStr -->`
    
    $("#tableDivId").html(htm);
    
          // Modal box logic
    var modal = $('#preReq');
    var span = $('.close');
     
       function showModal(message) {
        $('#modalMessage').html(message);
        modal.css('display', 'block');
    }

    span.click(function () {
        modal.css('display', 'none');
    });

    $(window).click(function (event) {
        if (event.target === modal[0]) {
            modal.css('display', 'none');
        }
    });
   $(document).ready(function() {  
	   
	    function updateRowNumbers() {
                $("#dynamicTable tbody tr").each(function(index) {
                    $(this).find("td:first").text(index + 1);
                });
            }

            $(".add-btn").click(function() {
              
                    let isValid = true;
					
                $(".instrument-name, .total-final-cost, .quantity").each(function() {
                    let value = $(this).val().trim();
                    
                    if ($(this).hasClass(".total-final-cost") && (value === "" || parseFloat(value) <= 0)) {
                        $(this).addClass("error");
                        isValid = false;
                    } else if ($(this).hasClass("quantity") && (value === "" || parseInt(value) <= 0)) {
                        $(this).addClass("error");
                        isValid = false;
                    } else {
                        $(this).removeClass("error");
                    }
                });

                if (!isValid) {
                    
                    showModal(`<strong style="color:#153f68;font-size: large;">Please enter quantity and specification before adding a new row.</strong>`);
                    return;
                }else{
					  let newRow = $("#dynamicTable tbody tr:first").clone();
                     newRow.find("input").val("");
                     newRow.find("select").val("");
                     newRow.appendTo("#dynamicTable tbody");
                     updateRowNumbers();
//                     removeAllLowestClasses();
//                     addRow();
                     showModal(`<strong style="color:#153f68;font-size: large;"> Adding a new row.</strong>`);
                       	  
}
		
            });
            
            
    function addRow() {
  const table = document.getElementById('vendorTable');
  const row = table.insertRow();

  for (let i = 0; i < 4; i++) {
    const cell = row.insertCell();
    const input = document.createElement('input');
    input.type = 'number';
    input.classList.add('vendor');
    input.classList.remove('lowest'); // just in case
    input.value = ''; // clear value
    cell.appendChild(input);
  }

  attachInputListeners(); // make sure new inputs get event listeners
				
}


function removeAllLowestClasses() {
  document.querySelectorAll('.vendor').forEach(input => {
    input.classList.remove('lowest');
  });
}

            $(document).on("click", ".remove-btn", function() {
				
				
                if ($("#dynamicTable tbody tr").length > 1) {
                    $(this).closest("tr").remove();
                    updateRowNumbers();
                } else {
                  
                     showModal(`<strong style="color:#153f68;font-size: large;">At least one row is required</strong>`);
                }
            });
            
            
             $(".check-btn").click(function() { 
				   $("#tableDivId").html('');
               		purchase(); 
				 
			}); 
		
 $(document).on( "input", " .ven4,.ven1,.ven2,.ven3", function() {
//	 getMinValue();
	  // Attach input listener to all vendor fields
	  
  document.querySelectorAll('.vendor').forEach(input => {
    input.addEventListener('input', highlightLowestInput);
  });
  
  // Add at the end of highlightLowestInput
//document.getElementById('summary').innerHTML = lowestVendorsPerRow.map(item =>
//  `Row ${item.row}: ${item.vendors.join(', ')} (₹${item.price})`
//).join('<br>');
 
	 
}); 
  function getMinValue() {
    const inputs = document.querySelectorAll('.vendor');
    const values = [];

    inputs.forEach(input => {
      const val = parseFloat(input.value);
      if (!isNaN(val)) {
        values.push(val);
      }
    });

    if (values.length > 0) {
      const minValue = Math.min(...values);
      console.log("Minimum value is:", minValue);
      return minValue;
    } else {
      console.log("No valid values entered.");
      return null;
    }
    
       
  
  }

  // Example: Run when a button is clicked
  // getMinValue(); // or call it after user input
  
//   function highlightLowestInput() {
//    const inputs = document.querySelectorAll('.vendor');
//    let minValue = Infinity;
//    let lowestInputs = [];
//
//    // First remove existing highlights
//    inputs.forEach(input => input.classList.remove('lowest'));
//
//    // Find the minimum value
//    inputs.forEach(input => {
//      const val = parseFloat(input.value);
//      if (!isNaN(val)) {
//        if (val < minValue) {
//          minValue = val;
//          lowestInputs = [input];
//        } else if (val === minValue) {
//          lowestInputs.push(input); // Handles ties
//        }
//      }
//    });
//
//    // Apply highlight to the lowest input(s)
//    lowestInputs.forEach(input => input.classList.add('lowest'));
//  }
  
  function highlightLowestInput() {
  // Get all rows in the table
  const rows = document.querySelectorAll('table tr');
    const lowestVendorsPerRow = [];

  rows.forEach((row,rowIndex) => {
    // Get all vendor inputs in this row
    const inputs = row.querySelectorAll('.vendor');
    let minValue = Infinity;
    let lowestInputs = [];
     let lowestIndexes = [];

    // Remove previous highlight from this row
    inputs.forEach(input => input.classList.remove('lowest'));

    // Find minimum value in this row
    inputs.forEach((input,index) => {
      const val = parseFloat(input.value);
      if (!isNaN(val)) {
        if (val < minValue) {
          minValue = val;
          lowestInputs = [input];
          lowestIndexes = [index];
        } else if (val === minValue) {
          lowestInputs.push(input); // Handle ties
          lowestIndexes.push(index);
        }
      }
    });

    // Apply highlight to the lowest input(s) in this row
    lowestInputs.forEach(input => input.classList.add('lowest'));
    
        // Add vendor(s) with lowest price to the result list
    if (lowestIndexes.length > 0) {
      const vendors = lowestIndexes.map(i => `Vendor ${i + 1}`);
      lowestVendorsPerRow.push({
        row: rowIndex + 1,
        vendors: vendors,
        price: minValue
      });
    }
  });
  
    console.log("Lowest vendors per row:", lowestVendorsPerRow);
}



});

	
	
	
}