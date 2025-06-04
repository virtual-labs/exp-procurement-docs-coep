var tax = 0;

function enquiryform() {
	$("#Header").html("<center><span>INQUIRY (TERMS AND CONDITION)</span></center>");

	htm = `
		<div class="row prjHeader"><center>Project Requirement Form</center></div>
<div class="container-fluid">
<div class="row">
<div class="col-1" ></div>
<div class="col-10" style="border:2px solid grey; padding: 20px; border-radius: 10px;margin-bottom: 50px;">
  <form  class="plc-form-wrapper" id="projectForm">
    <!-- Project Timeline -->
    <div class="tagHeader">Project Timeline</div>
    <div class="row">
    <div class="col-4">
    <label for="delivery-date" class="subTagHeader">Expected Delivery Date</label>
    <input type="date" id="delivery-date" name="delivery-date" required>
    </div>

    <div class="col-8">
    <label for="install-schedule" class="subTagHeader">Installation and Commissioning Schedule</label>
    <textarea id="install-schedule" name="install-schedule" rows="2"></textarea>
    </div>
    </div>
    <!-- Technical Requirements -->
    <div class="tagHeader">Technical Requirements</div>
    <div class="row">
    <div class="col-4">
    <label for="technical-standards" class="subTagHeader">Specific Standards (e.g. IEC, ISA)</label>
    <input type="text" id="technical-standards" name="technical-standards">
    </div>

    <div class="col-8">
    <label for="integration" class="subTagHeader">Interface or Integration Requirements with Other Systems or Devices</label>
    <textarea id="integration" name="integration" rows="2"></textarea>
    </div>
    </div>

    <!-- Commercial Requirements -->
    <div class="tagHeader">Commercial Requirements</div>
    
    <label for="payment-terms" class="subTagHeader">Payment Terms</label>
    <input type="text" id="payment-terms" name="payment-terms">
    
     <div class="tagHeader">Taxes and other charges</div>
    <div class="row">
    <div class="col-4">
     <label for="taxes" class="subTagHeader">GST %</label>
    <input type="number" id="gst" name="Gst">
     </div>
     
    <div class="col-4">
     <label for="taxes" class="subTagHeader">Packing and forwarding </label>
    <input type="number" id="pck-forw" name="pack">
    </div>
    
    <div class="col-4">
     <label for="taxes" class="subTagHeader">Insurance</label>
    <input type="number" id="insu" name="insur">
    </div>
    </div>


    <div class="row">
    <div class="col-6">
    <label for="warranty-support" class="subTagHeader">Warranty and Support Requirements</label>
    <textarea id="warranty-support" name="warranty-support" rows="2"></textarea>
    </div>
    
    <div class="col-6">
    <label for="other-requirements" class="subTagHeader">Other Commercial Requirements (e.g.penalty clause)</label>
    <textarea id="other-requirements" name="other-requirements" rows="2"></textarea>
    </div>
    </div>
    
    <div>
    <center>
    <button type="submit">SUBMIT INQUIRY</button>
    <center>
    <div>
    
  </form>
  </div>
  <div class="col-1"></div>
  </div>
  
  </div>
	
	`
	$("#tableDivId").html(htm);
	var flg5 = 0;

	const today = new Date();
	const yyyy = today.getFullYear();

	// Format today's date as YYYY-MM-DD
	const minDate = today.toISOString().split('T')[0];

	// Set max date as Dec 31 of next year
	const maxDate = new Date(yyyy + 1, 11, 31).toISOString().split('T')[0];

	const dateInput = document.getElementById('delivery-date');
	 dateInput.addEventListener('focus', () => {
      if (dateInput.showPicker) {
        dateInput.showPicker(); //  Triggers native date picker (Chrome, Edge)
      }
    });
	dateInput.min = minDate;
	dateInput.max = maxDate;
	document.getElementById('projectForm').addEventListener('submit', function(e) {
		e.preventDefault(); // Prevent actual form submission
		flg5++;
		const form = e.target;
		const formData = new FormData(form);
		const jsonData = {};

		let allFilled = true;

		for (let [key, value] of formData.entries()) {
			if (!value.trim()) {
				allFilled = false;
				break;
			}
			jsonData[key] = value;
		}

		if (allFilled) {
			finalData.inquiryForm = jsonData;
			resultJson.flg5 = flg5;
			calculateTotalCharges();
			$("#tableDivId").html('');
			timerMasterJson.enquiey = $("#counter").text();
			seconds = 0;
			updateCounter();
			Quan1();
		} else {
			Swal.fire({
					title: 'Warning',
					html: '<p>Please fill in all fields before submitting</p>',
					width: 600,
					icon: 'warning',
					confirmButtonText: 'OK',
					allowOutsideClick: true,
					allowEscapeKey: true,
				});
		}
	});


	function calculateTotalCharges() {
		// Get input values and parse them as floats
		const gst = parseFloat(document.getElementById("gst").value) || 0;
		const packingForwarding = parseFloat(document.getElementById("pck-forw").value) || 0;
		const insurance = parseFloat(document.getElementById("insu").value) || 0;

		// Add the values
		tax = gst + packingForwarding + insurance;

		// Log or use the result
		console.log("GST:", gst);
		console.log("Packing and Forwarding:", packingForwarding);
		console.log("Insurance:", insurance);
		console.log("Total Charges:", tax);

		// Optionally display it somewhere
		//  document.getElementById("totalCharges").textContent = `Total: ₹${total.toFixed(2)}`;
	}
  
}