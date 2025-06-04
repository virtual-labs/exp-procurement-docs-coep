
function quateform2() {
	
	
		const vendor1QuotationItems = finalData.Instvendor2?.quotationItems || [];
	const vendor1LastRow = vendor1QuotationItems[vendor1QuotationItems.length - 1];

	let vendorinst = vendor1LastRow?.grandTotal || 0;
	
	const vendor1QuotationItems1 = finalData.Plcvendor2?.quotationItems || [];
	const vendor1LastRow1 = vendor1QuotationItems1[vendor1QuotationItems1.length - 1];

	let vendorplc = vendor1LastRow1?.grandTotal || 0;
	
	const vendor1QuotationItems2 = finalData.softvendor2?.quotationItems || [];
	const vendor1LastRow2 = vendor1QuotationItems2[vendor1QuotationItems2.length - 1];

	let vendorsoft = vendor1LastRow2?.grandTotal || 0;
	
	const vendor1QuotationItems3 = finalData.servendor2?.quotationItems || [];
	const vendor1LastRow3 = vendor1QuotationItems3[vendor1QuotationItems3.length - 1];

	let vendorServ = vendor1LastRow3?.grandTotal || 0;
	
	let Ventotal = vendorinst + vendorplc + vendorServ + vendorsoft ;


	$("#Header").html("<center><span>VENDOR-2 QUOTATION (TERMS AND CONDITION)</span></center>");

	htm = `
  <div class="row prjHeader"><center> Total cost of the project in Rs. (Quoted) </center></div>
  <div class="container-fluid">
  <div class="row">
  <div class="col-1" ></div>
  <div class="col-10" style="border:2px solid grey; padding: 20px; border-radius: 10px;margin-bottom: 50px;">
  <form  class="qut-form-wrapper" id = 'form2'>
  
  <div class="row">
  <div class="col-4">
  <label class="subTagHeader">Instrumentation</label>
  <input type="number" name="instrumentation" value = "${vendorinst}" disabled>
  </div>
  <div class="col-4">
  <label class="subTagHeader">PLC</label>
  <input type="number" name="plc" value = "${vendorplc}" disabled>
  </div>
  <div class="col-4">
  <label class="subTagHeader">Software and Programming</label>
  <input type="number" name="softwareProgramming" value = "${vendorsoft}" disabled>
  </div>
  <div class="col-4">
  <label class="subTagHeader">Services</label>
  <input type="number" name="services" value = "${vendorServ}" disabled>
  </div>
  <div class="col-4">
  <label class="subTagHeader">Total Price for All Items Quoted</label>
  <input type="number" name="totalPrice" value = "${Ventotal}" disabled>
  </div>
  </div>
  
  <div class="row mt-5">
  <div class="col-6">
  <div class="tagHeader">Delivery and Installation</div>
  <label class="subTagHeader">Expected Delivery Date</label>
  <input type="date" id = "deliveryDate" name="deliveryDate">
  <label class="subTagHeader">Installation and Commissioning Schedule</label>
  <textarea name="installationSchedule" rows="3"></textarea>
  </div>
  <div class="col-6">
  <div class="tagHeader">Warranty and Support (In Months)</div>
  <label class="subTagHeader">Warranty Period</label>
  <input type="number" name="warrantyPeriod">
  <label class="subTagHeader">Support and Maintenance Terms</label>
  <textarea name="supportTerms" rows="3"></textarea>
  </div>
  </div>

  <div class="row mt-5">
  <div class="col-6">
  <div class="tagHeader">Payment Terms</div>
  <label class="subTagHeader">Payment Terms</label>
  <input type="text" name="paymentTerms">
  </div>
  <div class="col-6">
  <div class="tagHeader">Certifications and Compliance</div>
  <label class="subTagHeader">Certifications/Compliance Requirements</label>
  <textarea name="certifications" rows="3"></textarea>
  </div>
  </div>

  <div class="row mt-5">
  <div class="col-4">
  <div class="tagHeader">Additional Information</div>
  <label class="subTagHeader">Additional Comments</label>
  <textarea name="additionalInfo" rows="3"></textarea>
  </div>
  <div class="col-4">
  <div class="tagHeader">Acceptance Criteria</div>
  <label class="subTagHeader">Acceptance Criteria</label>
  <textarea name="acceptanceCriteria" rows="3"></textarea>
  </div>
  <div class="col-4">
  <div class="tagHeader">Quotation Validity (In Months)</div>
  <label class="subTagHeader">Quotation Valid For</label>
  <input type="number" name="validityPeriod">
  </div>
  </div>
  
  <div>
  <center>
  <button type="submit">SUBMIT QUOTATION</button>
  <center>
  <div>
  
  </form>
  
   </div>
  <div class="col-1"></div>
  </div>
  
  </div>

	`
	$("#tableDivId").html(htm);


	const today = new Date();
	const yyyy = today.getFullYear();

	// Format today's date as YYYY-MM-DD
	const minDate = today.toISOString().split('T')[0];

	// Set max date as Dec 31 of next year
	const maxDate = new Date(yyyy + 1, 11, 31).toISOString().split('T')[0];

	const dateInput = document.getElementById('deliveryDate');
	dateInput.addEventListener('focus', () => {
      if (dateInput.showPicker) {
        dateInput.showPicker(); //  Triggers native date picker (Chrome, Edge)
      }
    });
	
	dateInput.min = minDate;
	dateInput.max = maxDate;
	document.querySelector('#form2').addEventListener('submit', function(e) {
		e.preventDefault(); // prevent actual form submission
		forCnt++;
		const form = e.target;
		const formData = new FormData(form);
		const data = {};

		let isValid = true;

		// Check all fields
		for (let [key, value] of formData.entries()) {
			if (!value.trim()) {
				isValid = false;
//				alert(`Please fill the field: ${key}`);
				Swal.fire({
					title: 'Warning',
					html: '<p>Please fill up the all required field</p>',
					width: 600,
					icon: 'warning',
					confirmButtonText: 'OK',
					allowOutsideClick: true,
					allowEscapeKey: true,
				});
				
				break;
			}
			data[key] = value.trim();
		}

		if (isValid) {
			Quan3();
			finalData.Qutationform2 = data;
			resultJson.Qfflg1 = forCnt;
		}
	});
}