var total = 0;
function purchaseform() {
	$("#Header").html("<center><span>PURCHASE ORDER</span></center>");
	let quotationForm = null;
	timerMasterJson.compare = $("#counter").text();
	console.log(timerMasterJson);
	seconds = 0;
	updateCounter();
	var project = finalData.projectDetails;
	var total = 0;
	if (selectedVendor == 1) {
		quotationForm = finalData.Qutationform1;
		total = Math.round(grandTotalVendor1);
	} else if (selectedVendor == 2) {
		quotationForm = finalData.Qutationform2;
		total = Math.round(grandTotalVendor2);
	} else if (selectedVendor == 3) {
		quotationForm = finalData.Qutationform3;
		total = Math.round(grandTotalVendor3);
	}

	htm = `
	
	<div class="container-fluid">
	<div class="row">
	<div class="col-1" ></div>
	<div class="col-10" style="border:2px solid grey; padding: 20px; border-radius: 10px;margin-bottom: 50px;">
	<form class="qut-form-wrapper" id="purchaseFrm">
	
        <div class="row">
	    <div class="tagHeader">Vendor Information</div>
	    <div class="col-4">
	    <label class="subTagHeader">Vendor Company Name</label>
	    <input type="text" required>
	    </div>
	    <div class="col-4">
	    <label class="subTagHeader">Vendor Contact Person</label>
	    <input type="text" required>
	    </div>
	    <div class="col-4">
	    <label class="subTagHeader">Vendor Email</label>
	    <input type="email" required>
	    </div>
	    <div class="col-4">
	    <label class="subTagHeader">Vendor Phone</label>
	    <input type="number" required>
	    </div>
	    <div class="col-8">
	    <label class="subTagHeader">Vendor Address</label>
	    <input type="text" required>
	    </div>
	    </div>

	  <div class="tagHeader mt-5">Project Details</div>
	  <div class="row">
	  <div class="col-4">
	  <label class="subTagHeader">Project Name: ${project.project_name} </label>
	  </div>
	  <div class="col-4">
	  <label class="subTagHeader">Location: ${project.location}</label>
	  </div>
	  <div class="col-4">
	  <label class="subTagHeader">Industry/Sector: ${project.industry}</label>
	  </div>
	  </div>
		<div class="row mt-5">
		<div class="tagHeader">Items Ordered</div>
	
	<div class="col-6">
	<div id="tableContainer" style=" border: 1px solid #ccc;">
	<table id="vendorTable" border="1" style="width: 100%; border-collapse: collapse;">
	  <thead>
	    <tr>
	      <th class="srno">Sr No</th>
	      <th class="instruName">Instrument Name</th>
	      <th class="qut">Quantity</th>
	      <th class="ven">Vendor </th>
	    </tr>
	  </thead>
	  <tbody>
	    <!-- Rows will be populated here -->
	  </tbody>
	</table>
	</div>
	
	<div id="tableContainer1" style="border: 1px solid #ccc;"> 	
	<table id="softTable" border="1" style="width: 100%; border-collapse: collapse;">
	  <thead>
	    <tr>
	      <th class="srno">Sr No</th>
	      <th class="instruName">Software Name</th>
	      <th class="qut">Quantity</th>
	      <th class="ven"> Vendor </th>
	    </tr>
	  </thead>
	  <tbody>
	    <!-- Rows will be populated here -->
	  </tbody>
	</table>
	</div>
	</div>
	
	<div class="col-6">
	<div id="tableContainer1" style=" border: 1px solid #ccc;"> 	
	<table id="plcTable" border="1" style="width: 100%; border-collapse: collapse;">
	  <thead>
	    <tr>
	      <th class="srno">Sr No</th>
	      <th class="instruName">PLC Name</th>
	      <th class="qut">Quantity</th>
	      <th class="ven"> Vendor </th>
	    </tr>
	  </thead>
	  <tbody>
	    <!-- Rows will be populated here -->
	  </tbody>
	</table>
	</div>
	
	<div id="tableContainer1" class="mt-5" style="border: 1px solid #ccc;"> 	
	<table id="serTable" border="1" style="width: 100%; border-collapse: collapse;">
	  <thead>
	    <tr>
	      <th class="srno">Sr No</th>
	      <th class="instruName">Service Name</th>
	      <th class="qut">Quantity</th>
	      <th class="ven">Vendor </th>
	    </tr>
	  </thead>
	  <tbody>
	    <!-- Rows will be populated here -->
	  </tbody>
	</table>
	</div>
	
	<div>
	  <label class="subTagHeader">Total Value of the Purchase Order in Rs.:  ${total}</label><br>
	</div>
	
	</div>
	</div>
	
	<div class="row mt-5">
		<div class="col-6">
		  <div class="tagHeader">Delivery Details</div>
		  <label class="subTagHeader">Delivery Location</label>
		  <textarea rows="2" required></textarea>
		  <label>Expected Delivery Date: ${quotationForm.deliveryDate}</label><br>
		
		  <label class="subTagHeader">Delivery Schedule</label>
		  <textarea rows="2" required></textarea>
		</div>
		
		<div class="col-6">
		  <div class="tagHeader">Payment Terms</div>
		  <label class="subTagHeader">Payment Terms: ${quotationForm.paymentTerms}</label>
		  <label class="subTagHeader">Payment Method</label>
		  <input type="text" required>
		  
		  <div class="tagHeader">Warranty and Support (In Months)</div>
		  <label class="subTagHeader">Warranty Period:  ${quotationForm.warrantyPeriod}</label>
		  <label class="subTagHeader">Support and Maintenance Terms: ${quotationForm.supportTerms}</label>
		    
		  <div class="tagHeader">Certifications and Compliance</div>
		  <label class="subTagHeader">Certifications or Compliance Requirements:${quotationForm.certifications} </label>
		  </div>
	</div>


	  <div class="row mt-5">
	  <div class="col-4">
	  <div class="tagHeader">Special Conditions</div>
	  <label class="subTagHeader">Any Special Conditions or Requirements</label>
	  <textarea rows="2" required></textarea>
	  </div>
	   <div class="col-4">
	   <div class="tagHeader">Acceptance Criteria</div>
	  <label class="subTagHeader">Acceptance Criteria: ${quotationForm.acceptanceCriteria}</label>
	  <textarea rows="2" required></textarea>
	  </div>
	   <div class="col-4">
	  <div class="tagHeader">Cancellation and Termination</div>
	  <label class="subTagHeader">Cancellation and Termination Terms</label>
	  <textarea rows="2" required></textarea>
	  </div>
	  </div>

	<div class="row mt-5">
	  <div class="col-6">
	  <div class="tagHeader">Governing Law</div>
	  <label class="subTagHeader">Governing Law</label>
	  <textarea rows="2" required></textarea>
	  </div>
	  <div class="col-6">
	  <div class="tagHeader">Dispute Resolution</div>
	  <label class="subTagHeader">Dispute Resolution Mechanism</label>
	  <textarea rows="2" required></textarea>
	  </div>
	</div>
  
	 <div class="row mt-5">
	      <div class="tagHeader">Buyer Information</div>
	      <div class="col-4">
		  <label class="subTagHeader">Buyer Contact Person</label>
		  <input type="text" required>
		  </div>
		  <div class="col-4">
		  <label class="subTagHeader">Buyer Email</label>
		  <input type="email" required>
		  </div>
		  <div class="col-4">
		  <label class="subTagHeader">Buyer Phone</label>
		  <input type="number" required>
		  </div>
	 </div>

	 <div class="row mt-5">
	 <div class="col-6">
	  <div class="tagHeader">Buyer Signature</div>
	  <label class="subTagHeader">Signature of Authorized Buyer Representative</label>
	  <input type="text" placeholder="Signature Line" required>
	  <label class="subTagHeader">Date</label>
	  <input type="text" disabled value="`+new Date().toLocaleString()+`">
	  </div>
	  <div class="col-6">
	  <div class="tagHeader">Vendor Acknowledgement</div>
	  <p>The vendor acknowledges receipt of this purchase order and agrees to the terms and conditions stated herein.</p>
	  <label class="subTagHeader">Signature of Authorized Vendor Representative</label>
	  <input type="text" placeholder="Signature Line" required>
	  <label class="subTagHeader">Date</label>
	  <input type="text" disabled value="`+new Date().toLocaleString()+`">
	 </div>
	 </div>

	  <div>
	  <center>
	  <button type="submit" id = "submit">SUBMIT PURCHASE ORDER</button>
	  <center>
	  </div>
  
</form>
 </div>
  <div class="col-1"></div>
  </div>
  </div>

	`;

	$("#tableDivId").html(htm);
	
	
	document.querySelector('#purchaseFrm').addEventListener('submit', function (e) {
    e.preventDefault(); // prevent actual form submission
//	forCnt++;
    const form = e.target;
    const formData = new FormData(form);
    const data = {};

    let isValid = true;

    // Check all fields
    for (let [key, value] of formData.entries()) {
      if (!value.trim()) {
        isValid = false;
//        alert(`Please fill the field: ${key}`);
        
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
		 result();
    }
  });
	
	
	
	const instrumentData = {
		instrumentList: [
			{ srNo: 1, instrumentName: "Temperature Switch", quantity: 1 },
			{ srNo: 2, instrumentName: "Pressure Transmitter (Capacitive)", quantity: 1 },
			{ srNo: 3, instrumentName: "Pressure Switch", quantity: 1 },
			{ srNo: 4, instrumentName: "Level Switch", quantity: 6 },
			{ srNo: 5, instrumentName: "Modulating solenoid valve", quantity: 2 },
			{ srNo: 6, instrumentName: "Level Transmitter (Capacitive)", quantity: 1 },
			{ srNo: 7, instrumentName: "Temperature Transmitter", quantity: 6 },
			{ srNo: 8, instrumentName: "VFD for 5 HP", quantity: 2 },
			{ srNo: 9, instrumentName: "PLC equivalent to SLC 1200", quantity: 1 },
			{ srNo: 10, instrumentName: "Vortex type flow meter", quantity: 2 },
			{ srNo: 11, instrumentName: "SCR controlled Heater (18 KW)", quantity: 1 },
			{ srNo: 12, instrumentName: "Solenoid Valve 25 mmNB", quantity: 2 },
			{ srNo: 13, instrumentName: "I/P Converter and penumatically operated control valve", quantity: 1 }
		]
	};


	const plcData = {

		"plcList": [
			{ srNo: 1, "Plc": "Workstation (i7 with 1TB storage)", "quantity": 1 },
			{ srNo: 2, "Plc": "Control Panel (with all consumables included)", "quantity": 1 },
			{ srNo: 3, "Plc": "HMI (10\") touch screen", "quantity": 1 },
			{ srNo: 4, "Plc": "CPU", "quantity": 1 },
			{ srNo: 5, "Plc": "I/O modules", "quantity": 4 },
			{ srNo: 6, "Plc": "Communication Modules", "quantity": 1 },
			{ srNo: 7, "Plc": "Memory Module", "quantity": 1 },
			{ srNo: 8, "Plc": "Bulk Power Supply", "quantity": 1 }
		]

	};

	const softData = {

		"softList": [
			{ srNo: 1, "Plc": "Ladder programming software", "quantity": 1 },
			{ srNo: 2, "Plc": "SCADA programming software ", "quantity": 1 },
			{ srNo: 3, "Plc": "Historian software ", "quantity": 1 },
			{ srNo: 4, "Plc": "Reports and database software ", "quantity": 1 }

		]

	};


	const servData = {

		"softList": [
			{ srNo: 1, "Plc": "Development of Automation project (ladder,network, SCADA and Historian)", "quantity": 1 },
			{ srNo: 2, "Plc": "Field instruments", "quantity": 1 },
			{ srNo: 3, "Plc": "Panel wiring installation, loopchecking ,testing and commissioning of autonation project", "quantity": 1 },
			{ srNo: 4, "Plc": "Training to the plant personnel ", "quantity": 1 }

		]

	};

 
	function renderQuotationTable(data) {
		const tableBody = document.querySelector("#vendorTable tbody");

		// Loop through instruments
		instrumentData.instrumentList.forEach(instrument => {
			const row = document.createElement('tr');

			let vendor1Item = null;
			let vendor1GrandTotal = null;
			// Find total prices from each vendor
			if (selectedVendor == 1) {
				vendor1Item = finalData.Instvendor1?.quotationItems?.find(i => i.srNo == instrument.srNo);
				const vendor1QuotationItems = finalData.Instvendor1?.quotationItems || [];
				const vendor1LastRow = vendor1QuotationItems[vendor1QuotationItems.length - 1];

				vendor1GrandTotal = vendor1LastRow?.grandTotal || 0;
			} else if (selectedVendor == 2) {
				vendor1Item = finalData.Instvendor2?.quotationItems?.find(i => i.srNo == instrument.srNo);
				const vendor1QuotationItems = finalData.Instvendor2?.quotationItems || [];
				const vendor1LastRow = vendor1QuotationItems[vendor1QuotationItems.length - 1];

				vendor1GrandTotal = vendor1LastRow?.grandTotal || 0;

			} else if (selectedVendor == 3) {
				vendor1Item = finalData.Instvendor3?.quotationItems?.find(i => i.srNo == instrument.srNo);
				const vendor1QuotationItems = finalData.Instvendor3?.quotationItems || [];
				const vendor1LastRow = vendor1QuotationItems[vendor1QuotationItems.length - 1];

				vendor1GrandTotal = vendor1LastRow?.grandTotal || 0;
			}



			row.innerHTML = `
      <td>${instrument.srNo}</td>
      <td>${instrument.instrumentName}</td>
      <td>${instrument.quantity}</td>
      <td>${vendor1Item ? vendor1Item.totalPrice : '-'}</td>
     
    `;

			tableBody.appendChild(row);
		});
	let vendor1GrandTotal = 0;
	if (selectedVendor == 1) {
		const vendor1QuotationItems = finalData.Instvendor1?.quotationItems || [];
		const vendor1LastRow = vendor1QuotationItems[vendor1QuotationItems.length - 1];

		 vendor1GrandTotal = vendor1LastRow?.grandTotal || 0;
	}else if(selectedVendor == 2){
		const vendor1QuotationItems = finalData.Instvendor2?.quotationItems || [];
		const vendor1LastRow = vendor1QuotationItems[vendor1QuotationItems.length - 1];

		 vendor1GrandTotal = vendor1LastRow?.grandTotal || 0;
	}else if (selectedVendor){
		const vendor1QuotationItems = finalData.Instvendor3?.quotationItems || [];
		const vendor1LastRow = vendor1QuotationItems[vendor1QuotationItems.length - 1];

		 vendor1GrandTotal = vendor1LastRow?.grandTotal || 0;
	}
		console.log('Vendor 1 Grand Total:', vendor1GrandTotal);




		const totalRow = document.createElement('tr');
		totalRow.style.fontWeight = "bold";
		totalRow.style.backgroundColor = "#f2f2f2";

		totalRow.innerHTML = `
      <td colspan="3" style="text-align: right;">Total</td>
      <td>${Math.round(vendor1GrandTotal)}</td>
     
    `;
		tableBody.appendChild(totalRow);
		// Add to Grand Total
		grandTotalVendor1 += vendor1GrandTotal;


	}

	renderQuotationTable(instrumentData);

	renderQuotationTable1(plcData);
	renderQuotationTable2(softData);
	renderQuotationTable3(servData);

	function renderQuotationTable1(data) {
		const tableBody = document.querySelector("#plcTable tbody");

		// Loop through instruments
		plcData.plcList.forEach(Plc => {
			const row = document.createElement('tr');
			let vendor1Item = null;
			// Find total prices from each vendor
			if (selectedVendor == 1) {
				vendor1Item = finalData.Plcvendor1?.quotationItems?.find(i => i.srNo == Plc.srNo);
			} else if (selectedVendor == 2) {
				vendor1Item = finalData.Plcvendor2?.quotationItems?.find(i => i.srNo == Plc.srNo);
			} else if (selectedVendor == 3) {
				vendor1Item = finalData.Plcvendor3?.quotationItems?.find(i => i.srNo == Plc.srNo);
			}


			row.innerHTML = `
      <td>${Plc.srNo}</td>
      <td>${Plc.Plc}</td>
      <td>${Plc.quantity}</td>
      <td>${vendor1Item ? vendor1Item.totalPrice : '-'}</td>
     
    `;

			tableBody.appendChild(row);
		});
		
		let vendor1GrandTotal = 0;
		if (selectedVendor == 1){
			const vendor1QuotationItems = finalData.Plcvendor1?.quotationItems || [];
			const vendor1LastRow = vendor1QuotationItems[vendor1QuotationItems.length - 1];

		 	vendor1GrandTotal = vendor1LastRow?.grandTotal || 0;
		}else if(selectedVendor == 2){
			const vendor1QuotationItems = finalData.Plcvendor2?.quotationItems || [];
			const vendor1LastRow = vendor1QuotationItems[vendor1QuotationItems.length - 1];

		 	vendor1GrandTotal = vendor1LastRow?.grandTotal || 0;	
		}else if(selectedVendor == 3){
			const vendor1QuotationItems = finalData.Plcvendor3?.quotationItems || [];
			const vendor1LastRow = vendor1QuotationItems[vendor1QuotationItems.length - 1];

		 	vendor1GrandTotal = vendor1LastRow?.grandTotal || 0;
		}
		

		console.log('Vendor 1 Grand Total:', vendor1GrandTotal);




		const totalRow = document.createElement('tr');
		totalRow.style.fontWeight = "bold";
		totalRow.style.backgroundColor = "#f2f2f2";

		totalRow.innerHTML = `
      <td colspan="3" style="text-align: right;">Total</td>
      <td>${Math.round(vendor1GrandTotal)}</td>
     
    `;
		tableBody.appendChild(totalRow);


	}

	function renderQuotationTable2(data) {
		const tableBody = document.querySelector("#softTable tbody");


		// Loop through instruments
		softData.softList.forEach(soft => {
			const row = document.createElement('tr');
			let vendor1Item = null;

			if (selectedVendor == 1) {
				vendor1Item = finalData.softvendor1?.quotationItems?.find(i => i.srNo == soft.srNo);
			} else if (selectedVendor == 2) {
				vendor1Item = finalData.softvendor2?.quotationItems?.find(i => i.srNo == soft.srNo);
			} else if (selectedVendor == 3) {
				vendor1Item = finalData.softvendor3?.quotationItems?.find(i => i.srNo == soft.srNo);
			}

			// Find total prices from each vendor


			row.innerHTML = `
      <td>${soft.srNo}</td>
      <td>${soft.Plc}</td>
      <td>${soft.quantity}</td>
      <td>${vendor1Item ? vendor1Item.totalPrice : '-'}</td>
     
    `;

			tableBody.appendChild(row);
		});
		
			let vendor1GrandTotal = 0;
		
		if(selectedVendor == 1){
			const vendor1QuotationItems = finalData.softvendor1?.quotationItems || [];
		const vendor1LastRow = vendor1QuotationItems[vendor1QuotationItems.length - 1];

		 vendor1GrandTotal = vendor1LastRow?.grandTotal || 0;
		}else if (selectedVendor == 2){
			const vendor1QuotationItems = finalData.softvendor2?.quotationItems || [];
		const vendor1LastRow = vendor1QuotationItems[vendor1QuotationItems.length - 1];

		 vendor1GrandTotal = vendor1LastRow?.grandTotal || 0;
		}else if ( selectedVendor == 3){
			const vendor1QuotationItems = finalData.softvendor3?.quotationItems || [];
		const vendor1LastRow = vendor1QuotationItems[vendor1QuotationItems.length - 1];

		 vendor1GrandTotal = vendor1LastRow?.grandTotal || 0;
		}
		

		console.log('Vendor 1 Grand Total:', vendor1GrandTotal);




		const totalRow = document.createElement('tr');
		totalRow.style.fontWeight = "bold";
		totalRow.style.backgroundColor = "#f2f2f2";

		totalRow.innerHTML = `
      <td colspan="3" style="text-align: right;">Total</td>
      <td>${Math.round(vendor1GrandTotal)}</td>
     
    `;
		tableBody.appendChild(totalRow);
		// Add to Grand Total
		grandTotalVendor1 += vendor1GrandTotal;
		grandTotalVendor2 += vendor1GrandTotal;
		grandTotalVendor3 += vendor1GrandTotal;



	}


	function renderQuotationTable3(data) {
		const tableBody = document.querySelector("#serTable tbody");

		// Loop through instruments
		servData.softList.forEach(soft => {
			const row = document.createElement('tr');

			let vendor1Item = null;

			if (selectedVendor == 1) {
				vendor1Item = finalData.servendor1?.quotationItems?.find(i => i.srNo == soft.srNo);
			} else if (selectedVendor == 2) {
				vendor1Item = finalData.servendor2?.quotationItems?.find(i => i.srNo == soft.srNo);
			} else if (selectedVendor == 3) {
				vendor1Item = finalData.servendor3?.quotationItems?.find(i => i.srNo == soft.srNo);
			}

			// Find total prices from each vendor


			row.innerHTML = `
      <td>${soft.srNo}</td>
      <td>${soft.Plc}</td>
      <td>${soft.quantity}</td>
      <td>${vendor1Item ? vendor1Item.totalPrice : '-'}</td>
   
    `;

			tableBody.appendChild(row);
		});
	
		let vendor1GrandTotal =0;
		if(selectedVendor == 1){
			const vendor1QuotationItems = finalData.servendor1?.quotationItems || [];
		const vendor1LastRow = vendor1QuotationItems[vendor1QuotationItems.length - 1];

		 vendor1GrandTotal = vendor1LastRow?.grandTotal || 0;
		}else if (selectedVendor == 2){
		const vendor1QuotationItems = finalData.servendor2?.quotationItems || [];
		const vendor1LastRow = vendor1QuotationItems[vendor1QuotationItems.length - 1];

		 vendor1GrandTotal = vendor1LastRow?.grandTotal || 0;
		}else if (selectedVendor == 3){
			const vendor1QuotationItems = finalData.servendor3?.quotationItems || [];
		const vendor1LastRow = vendor1QuotationItems[vendor1QuotationItems.length - 1];

		 vendor1GrandTotal = vendor1LastRow?.grandTotal || 0;
		}
		console.log('Vendor 1 Grand Total:', vendor1GrandTotal);




		const totalRow = document.createElement('tr');
		totalRow.style.fontWeight = "bold";
		totalRow.style.backgroundColor = "#f2f2f2";

		totalRow.innerHTML = `
      <td colspan="3" style="text-align: right;">Total</td>
      <td>${Math.round(vendor1GrandTotal)}</td>
     
    `;
		tableBody.appendChild(totalRow);
		// Add to Grand Total
		grandTotalVendor1 += vendor1GrandTotal;
		grandTotalVendor2 += vendor1GrandTotal;
		grandTotalVendor3 += vendor1GrandTotal;

	}

//	$("#submit").click(function() {
//
//		result();
//	});


}