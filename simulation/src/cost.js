
let finalData = {};
var resultJson = {}
var timerMasterJson = {};
function cost() {
	timerMasterJson.cost = $("#counter").text();
	console.log(timerMasterJson);
	seconds = 0;
	updateCounter();
	$("#Header").html("<center><span>INQUIRY - INSTRUMENT</span></center>");

	var htm = ` <form id = "projectForm1">
        <div class="form-container" style="background-color: #67918f5e;">
            <div class="form-group">
                <label class="lblTopPadding">Project Name</label>
                <input type="text" name="project_name" class = "project-header ml-2" required>
            </div>
            <div class="form-group">
                <label class="lblTopPadding">Industry/Sector</label>
                <input type="text" name="industry" class = "project-header ml-2" required>
            </div>
            <div class="form-group">
                <label class="lblTopPadding">Project Number</label>
                <input type="text" name="details" class = "project-header ml-2" required>
            </div>
            <div class="form-group">
                <label class="lblTopPadding">Location</label>
                <input type="text" name="location" class = "project-header ml-2" required>
            </div>
        </div>
        
         <button type="submit" class = "btn submit mt-4">SUBMIT PROJECT DETAILS</button>
    </form>

<div id="tableDivId"  hidden>
    <table id="dynamicTable">
        <thead>
            <tr>
                <th>Sr. No.</th>
                <th>Name of the Instrument</th>
                <th>Quantity</th>
                <th>Brief Specification</th>
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
                        <option value="19">I/P Converter and penumatically operated cotrol valve</option>
                        <option value="20">VFD for 1 HP</option>
                        <option value="21">VFD for 5 HP</option>
                        <option value="22">VFD for 10 HP</option>
                        <option value="23">Peristaltic Pump (6.25 mmNB)</option>
                        <option value="24">SCR controlled Heater (18 KW)</option>
                        <option value="31">Development charges for Ladder program, SCADA, and Data Analytics</option>
                        <option value="32">Power supply (Bulk) 24 VDC 20 A</option>
                        <option value="33">Vortex type flow meter</option>
                        <option value="34">Modulating solenoid valve</option>
                    </select>
                </td>
               
                <td><input type="number" class="quantity" placeholder="Enter qty"></td>
                <td><input type="text" class="total-final-cost" ></td>
                <td><button class=" btn remove-btn" data-toggle="modal" data-target="#preReq">Remove</button></td>
            </tr>
        </tbody>
    </table>
    
    <div>
     <input type="checkbox" id="agree" name="agree" style="width: 4%;">
     <label for="agree">I agree and confirm the list</label>
    </div>
    
    <div class="btn-container" >
     <button class="btn add-btn" data-toggle="modal" data-target="#preReq">ADD ROW</button>
     <button   id="submitBtn" type="submit"class="btn check-btn" style="display: none;">SUBMIT & NEXT</button>
     
     
     </div>

    </div>`

	htm += `	<!-- 			    The Modal  ProStr -->
  <div class="modal fade " id="preReq1">
	    <div class="modal-dialog modal-md" >
		      <div class="modal-content">
		       
	        <div class="modal-header">
	          <h4 class="modal-title"><center>Message Box</center></h4>
	          <button type="button" class="close" data-dismiss="modal">&times;</button>
	        </div>
<!-- 		        Modal body -->
		        <div class="modal-body" id="Message4" style="color:red">

		        </div>
<!-- 			        Modal footer -->
		        <div class="modal-footer">
	             <button type="button" class="btn btn-danger" data-dismiss="modal" >Ok</button>
		        </div>
		      </div>
		    </div>
		  </div>
		  <!-- 			  End Modal ProStr -->`

	$("#mainDiv").html(htm);




	$(document).ready(function() {
		function updateRowNumbers() {
			$("#dynamicTable tbody tr").each(function(index) {
				$(this).find("td:first").text(index + 1);
			});
		}

		$(".instrument-name, .total-final-cost, .quantity").on("blur", function(){
			let value = $(this).val().trim();
				
				if ($(this).hasClass("instrument-name") && (value === "" || parseFloat(value) <= 0)) {
					$(this).addClass("error");
					isValid = false;
				} else if ($(this).hasClass("total-final-cost") && (value === "" || parseFloat(value) <= 0)) {
					$(this).addClass("error");
					isValid = false;
				} else if ($(this).hasClass("quantity") && (value === "" || parseInt(value) <= 0)) {
					$(this).addClass("error");
					isValid = false;
				} else {
					$(this).removeClass("error");
				}
		})
		

		$(".add-btn").click(function() {

			let isValid = true;

			$(".instrument-name, .total-final-cost, .quantity").each(function() {
				let value = $(this).val().trim();
				
				if ($(this).hasClass("instrument-name") && (value === "" || parseFloat(value) <= 0)) {
					$(this).addClass("error");
					isValid = false;
				} else if ($(this).hasClass("total-final-cost") && (value === "" || parseFloat(value) <= 0)) {
					$(this).addClass("error");
					isValid = false;
				} else if ($(this).hasClass("quantity") && (value === "" || parseInt(value) <= 0)) {
					$(this).addClass("error");
					isValid = false;
				} else {
					$(this).removeClass("error");
				}
			});

			if (isValid) {
				let newRow = $("#dynamicTable tbody tr:first").clone();
				newRow.find("input").val("");
				newRow.find("select").val("");
				newRow.appendTo("#dynamicTable tbody");
				updateRowNumbers();
				$("#Message4").html(`<strong style="color:#153f68;font-size: large;"> Adding a new row.</strong>`);
			}

			//				validateForm(event);

		});




		$(document).on("click", ".remove-btn", function() {


			if ($("#dynamicTable tbody tr").length > 1) {
				$(this).closest("tr").remove();
				updateRowNumbers();
				$("#Message4").html(`<strong style="color:#153f68;font-size: large;">Selected one row is removed</strong>`);
			} else {

				$("#Message4").html(`<strong style="color:#153f68;font-size: large;">At least one row is required</strong>`);
			}
		});

		$(document).on("input", ".base-price", function() {
			let row = $(this).closest("tr");

			let qty = parseInt(row.find(".quantity").val()) || 1;
			let name = row.find(".instrument-name").val();
			console.log(name);



		});

		let basePrice = 0;
		let name = 0;
		$(document).on("input", " .quantity", function() {
			let row = $(this).closest("tr");

			let qty = parseInt(row.find(".quantity").val()) || 1;




		});
		const checkbox = document.getElementById('agree');
		const submitBtn = document.getElementById('submitBtn');

		checkbox.addEventListener('change', function() {
			submitBtn.style.display = this.checked ? 'inline-block' : 'none';

		});
		let flg = 0;
		$(".check-btn").click(function() {
			flg++;
			//			validateForm(event);	

			const table = document.getElementById('dynamicTable').getElementsByTagName('tbody')[0];
			const rows = table.getElementsByTagName('tr');
			const data = [];

			let isValid1 = true;
			$("  .quantity,.total-final-cost,.instrument-name").each(function() {
				if ($(this).val().trim() === "") {
					$(this).addClass("error");
					isValid1 = false;
				} else {
					$(this).removeClass("error");
				}
			});
			if (!isValid1) {
				$("#Message4").html(`<strong style="color:#153f68;font-size: large;">Please fill in all required fields</strong>`);

			}
			//                else {
			//                    
			//                   $("#Message4").html(`<strong style="color:#153f68;font-size: large;">All values are entered correctly</strong>`);
			//                    
			//                }




			for (let i = 0; i < rows.length; i++) {
				const row = rows[i];

				//      const instrument = row.querySelector('.instrument-name').value;
				const instrumentSelect = row.querySelector('.instrument-name');
				const instrumentValue = instrumentSelect.value;
				const instrumentName = instrumentSelect.options[instrumentSelect.selectedIndex].text;
				const quantity = row.querySelector('.quantity').value;
				const specification = row.querySelector('.total-final-cost').value;

				// Validate non-empty fields
				if (instrumentValue && quantity && specification) {
					data.push({
						srNo: i + 1,
						instrumentId: instrumentValue,
						instrumentName: instrumentName,
						//          instrumentName: instrument,
						quantity: quantity,
						specification: specification
					});
				}
			}

			finalData.instrumentList = data;
			console.log(finalData);
			console.log("Collected Data as JSON:", JSON.stringify(data, null, 2));
			//    alert("Data collected successfully!\nCheck console for JSON output.");      
			let validRowCount = 0;
			let invalidRowCount = 0;

			let requiredSet = {
				9: 6,   // Name TT → Quantity must be 1
				24: 1,   // Name SCR → Quantity must be 1
				3: 6,   // Name TSL → Quantity must be 3
				19: 1, // control valve 

				20: 2,  // Name VFD → Quantity must be 2
				12: 2,  // Name Vvalve → Quantity must be 4
				1: 1,  // Name TSH → Quantity must be 1
				2: 1,  // Name PSH → Quantity must be 1
				8: 1,  // PT -> 1
				33: 2,
				34: 2,
				25: 1,
				7: 1  // Name LT → Quantity must be 2
			};


			$("#dynamicTable tbody tr").each(function() {
				let row = $(this);
				let basePrice = parseFloat(row.find(".base-price").val()) || 0;
				let name = row.find(".instrument-name").val();
				let quantity = parseInt(row.find(".quantity").val()) || 1;
				let autoCorrect = false;
				resultJson.rows = $("#dynamicTable tbody tr").length;

				if (requiredSet[name] !== undefined && requiredSet[name] === quantity) {
					validRowCount++;
					row.removeClass("error-row"); // Remove error class if previously added
				} else {
					invalidRowCount++;
					row.addClass("error-row"); // Apply error class to invalid rows
					autoCorrect = true; // Mark that correction is needed
					resultJson.invalidRowCount = invalidRowCount;
				}


				//       if (autoCorrect) {
				//			
				//			
				//        // Show correction message and ask the user to correct values
				//         $("#Message4").html(`
				//            <strong style="color:red;font-size: large;">${invalidRowCount} rows are invalid!</strong><br>
				//            Please correct them and click "Check" again.
				//        `);
				//       
				//    } else {
				//		 resultJson.flg = flg;
				//        // All values are correct, show the final message
				//         $("#Message4").html(`
				//            <strong style="color:#153f68;font-size: large;">Total Valid Rows: ${validRowCount}</strong><br>
				//            <strong style="color:red;font-size: large;">Total Invalid Rows: ${invalidRowCount}</strong>
				//        `);
				//         
				//          }     


				if (validRowCount == 13) {

					$("#tableDivId").html('');
					enquiryplc();
				} else {

					resultJson.flg = flg;
					//			 console.log(resultJson);
					$('.modal-backdrop').remove(); // manually remove backdrop
					$('body').removeClass('modal-open'); // remove body scroll lock
					$('#preReq1').modal('hide');
					//			$(".auto-correct-btn").show();
					$("#tableDivId").html('');
					htm1 = `<div class="instructions">The instrument list selected by you is incomplete for the boiler and heat exchanger plant. <br/> The standard list containing the required instrument is as follows.</div>
					<div>
					<center>
					<img src="images/instUpdate.png" class="img-fluid rounded" style=" margin-bottom : 20px; max-width: 100%; height: auto;  align-items: center;">
					<div class="btn-container">
			 		<button class="btn nextEn mb-5"  >NEXT</button> 
			 		</div>
					</center>
					</div>`
					
			 
					$("#tableDivId").html(htm1);

					$(".nextEn").click(function() {
						$('.modal-backdrop').remove(); // manually remove backdrop
						$('body').removeClass('modal-open'); // remove body scroll lock
						$('#preReq1').modal('hide');
						$("#tableDivId").html('');
						enquiryplc();
//										 Quan1();


					});

				}






			});





		});



		document.getElementById('projectForm1').addEventListener('submit', function(e) {
			e.preventDefault(); // Prevent actual form submission

			const form = e.target;
			const formData = new FormData(form);
			const jsonData = {};
			const inputs = form.querySelectorAll('input');


			let allFilled = true;

			for (let [key, value] of formData.entries()) {
				if (!value.trim()) {
					allFilled = false;
					break;
				}
				jsonData[key] = value;
			}

			if (allFilled) {
				finalData.projectDetails = jsonData;
				console.log(finalData);
				console.log("Form Data as JSON:", JSON.stringify(jsonData, null, 2));
				//        alert("Form submitted successfully!\n\nCheck console for JSON output.");

				$(".submit").hide();
				inputs.forEach(input => input.disabled = true);
				timerMasterJson.projectDetails = $("#counter").text();
				console.log(timerMasterJson);
				seconds = 0;
				updateCounter();

				$("#tableDivId").prop("hidden", false);

			} else {
				alert("Please fill in all fields before submitting.");
			}
		});



		function validateForm(event) {
			event.preventDefault(); // Prevent form submission

			let isValid = true;
			let errorMessage = "";

			// Select input fields
			let projectName = document.querySelector('input[name="project_name"]');
			let industry = document.querySelector('input[name="industry"]');
			let projectDetails = document.querySelector('input[name="details"]');
			let location = document.querySelector('input[name="location"]');

			// Clear previous styles
			let fields = [projectName, industry, projectDetails, location];
			fields.forEach(field => field.style.border = "");

			// Validate each field
			if (!projectName.value.trim()) {
				errorMessage += "Project Name is required.<br>";
				projectName.style.border = "2px solid red";

				isValid = false;
			}
			if (!industry.value.trim()) {
				errorMessage += "Industry/Sector is required.<br>";
				industry.style.border = "2px solid red";

				isValid = false;
			}
			if (!projectDetails.value.trim()) {
				errorMessage += "Project Details are required.<br>";
				projectDetails.style.border = "2px solid red";

				isValid = false;
			}
			if (!location.value.trim()) {
				errorMessage += "Location is required.<br>";
				location.style.border = "2px solid red";

				isValid = false;
			}

			// Show error message in modal
			if (!isValid) {
				document.getElementById("Message4").innerHTML = errorMessage;
				$("#preReq1").modal("show"); // Show modal

			} else {
				document.querySelector("form").submit(); // Submit form if valid

			}


		}



		// Auto-correct values on second click
		$(".auto-correct-btn").click(function() {
			$("#dynamicTable tbody tr").each(function() {
				let row = $(this);
				let name = row.find(".instrument-name").val();
				let basaCorr = 0;

				if (name == 1) { basaCorr = 12500; }
				else if (name == 2) { basaCorr = 8500; }
				else if (name == 3) { basaCorr = 9500; }
				else if (name == 4) { basaCorr = 14500; }
				else if (name == 5) { basaCorr = 12500; }
				else if (name == 6) { basaCorr = 7500; }
				else if (name == 7) { basaCorr = 35000; }
				else if (name == 8) { basaCorr = 35000; }
				else if (name == 9) { basaCorr = 7500; }
				else if (name == 10) { basaCorr = 55000; }
				else if (name == 11) { basaCorr = 45000; }
				else if (name == 12) { basaCorr = 45000; }
				else if (name == 13) { basaCorr = 13500; }
				else if (name == 14) { basaCorr = 9750; }
				else if (name == 15) { basaCorr = 15600; }
				else if (name == 16) { basaCorr = 28500; }
				else if (name == 17) { basaCorr = 45500; }
				else if (name == 18) { basaCorr = 85000; }
				else if (name == 19) { basaCorr = 75000; }
				else if (name == 20) { basaCorr = 28000; }
				else if (name == 21) { basaCorr = 43000; }
				else if (name == 22) { basaCorr = 78000; }
				else if (name == 23) { basaCorr = 38800; }
				else if (name == 24) { basaCorr = 23500; }
				else if (name == 25) { basaCorr = 225000; }
				else if (name == 26) { basaCorr = 350000; }
				else if (name == 27) { basaCorr = 45000000; }
				else if (name == 28) { basaCorr = 225000; }
				else if (name == 29) { basaCorr = 650000; }
				else if (name == 30) { basaCorr = 35000; }
				else if (name == 31) { basaCorr = 1800000; }
				else if (name == 32) { basaCorr = 15600; }
				else if (name == 32) { basaCorr = 250000; }
				else if (name == 32) { basaCorr = 15600; }

				// Auto-correct the price field
				row.find(".base-price").val(basaCorr);
				row.removeClass("error-row"); // Remove error highlighting
			});

			showModal(`
        <strong style="color:green;font-size: large;">All incorrect values have been corrected!</strong>
    `);
		});





	});

}