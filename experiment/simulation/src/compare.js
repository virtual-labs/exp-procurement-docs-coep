  let grandTotalVendor1 = 0;
  let grandTotalVendor2 = 0;
  let grandTotalVendor3 = 0;


function compare(){
console.log(finalData);	
timerMasterJson.quat = $("#counter").text();
	console.log(timerMasterJson);
	seconds = 0;
	  updateCounter();

	$("#Header").html("<center><span>Comparative Statement</span></center>");
	htm = `
	<div id="tableContainer" style="border: 1px solid #ccc;">
	<table id="vendorTable" border="1" style="width: 100%; border-collapse: collapse;">
  <thead>
    <tr>
      <th class="srno">Sr No</th>
      <th class="instruName">Instrument Name</th>
      <th class="qut">Quantity</th>
      <th class="ven"> Vendor 1</th>
      <th class="ven">Vendor 2</th>
      <th class="ven"> Vendor 3</th>
    </tr>
  </thead>
  <tbody>
    <!-- Rows will be populated here -->
  </tbody>
</table>
</div>

	`;
	
	 $("#tableDivId").html(htm);
	 
	 
	 	htm1 = `
	<div id="tableContainer1" style="auto; border: 1px solid #ccc;"> 	
	<table id="plcTable" border="1" style="width: 100%; border-collapse: collapse;">
  <thead>
    <tr>
      <th class="srno">Sr No</th>
      <th class="instruName">PLC Name</th>
      <th class="qut">Quantity</th>
      <th class="ven"> Vendor 1</th>
      <th class="ven"> Vendor 2</th>
      <th class="ven"> Vendor 3</th>
    </tr>
  </thead>
  <tbody>
    <!-- Rows will be populated here -->
  </tbody>
</table>
</div>

	`;
	 $("#tableDivId").append(htm1); 
	 
	 	htm2 = `
	<div id="tableContainer1" style="border: 1px solid #ccc;"> 	
	<table id="softTable" border="1" style="width: 100%; border-collapse: collapse;">
  <thead>
    <tr>
      <th class="srno">Sr No</th>
      <th class="instruName">Software Name</th>
      <th class="qut">Quantity</th>
      <th class="ven">Vendor 1</th>
      <th class="ven">Vendor 2</th>
      <th class="ven">Vendor 3</th>
    </tr>
  </thead>
  <tbody>
    <!-- Rows will be populated here -->
  </tbody>
</table>
</div>

	`;
	 $("#tableDivId").append(htm2); 
	 
	 
	 	 	htm3 = `
	<div id="tableContainer1" style="border: 1px solid #ccc; ma"> 	
	<table id="serTable" border="1" style="width: 100%; border-collapse: collapse;">
  <thead>
    <tr>
      <th class="srno">Sr No</th>
      <th class="instruName">Service Name</th>
      <th class="qut">Quantity</th>
      <th class="ven">Vendor 1</th>
      <th class="ven">Vendor 2</th>
      <th class="ven">Vendor 3</th>
    </tr>
  </thead>
  <tbody>
    <!-- Rows will be populated here -->
  </tbody>
</table>
</div>
<br>
 

	`;
	 $("#tableDivId").append(htm3); 	 
	 
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
    

    // Find total prices from each vendor
    const vendor1Item =  finalData.Instvendor1?.quotationItems?.find(i => i.srNo == instrument.srNo);
    const vendor2Item =  finalData.Instvendor2?.quotationItems?.find(i => i.srNo == instrument.srNo);
    const vendor3Item =  finalData.Instvendor3?.quotationItems?.find(i => i.srNo == instrument.srNo);

    row.innerHTML = `
      <td>${instrument.srNo}</td>
      <td>${instrument.instrumentName}</td>
      <td>${instrument.quantity}</td>
      <td>${vendor1Item ? vendor1Item.totalPrice : '-'}</td>
      <td>${vendor2Item ? vendor2Item.totalPrice : '-'}</td>
      <td>${vendor3Item ? vendor3Item.totalPrice : '-'}</td>
    `;

    tableBody.appendChild(row);
  });
  
 	const vendor1QuotationItems = finalData.Instvendor1?.quotationItems || [];
	const vendor1LastRow = vendor1QuotationItems[vendor1QuotationItems.length - 1];

	const vendor1GrandTotal = vendor1LastRow?.grandTotal || 0;
	
	const vendor1QuotationItems1 = finalData.Instvendor2?.quotationItems || [];
	const vendor1LastRow1 = vendor1QuotationItems1[vendor1QuotationItems1.length - 1];

	const vendor1GrandTotal1 = vendor1LastRow1?.grandTotal || 0;
	
	const vendor1QuotationItems2 = finalData.Instvendor3?.quotationItems || [];
	const vendor1LastRow2 = vendor1QuotationItems2[vendor1QuotationItems2.length - 1];

	const vendor1GrandTotal2 = vendor1LastRow2?.grandTotal || 0;

console.log('Vendor 1 Grand Total:', vendor1GrandTotal);




 const totalRow = document.createElement('tr');
    totalRow.style.fontWeight = "bold";
    totalRow.style.backgroundColor = "#f2f2f2";
    
      totalRow.innerHTML = `
      <td colspan="3" style="text-align: right;">Total</td>
      <td>${Math.round(vendor1GrandTotal)}</td>
      <td>${Math.round(vendor1GrandTotal1)}</td>
      <td>${Math.round(vendor1GrandTotal2)}</td>
    `;
    tableBody.appendChild(totalRow);
    // Add to Grand Total
    grandTotalVendor1 += vendor1GrandTotal;
    grandTotalVendor2 += vendor1GrandTotal1;
    grandTotalVendor3 += vendor1GrandTotal2;
	
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

    // Find total prices from each vendor
    const vendor1Item =  finalData.Plcvendor1?.quotationItems?.find(i => i.srNo == Plc.srNo);
    const vendor2Item =  finalData.Plcvendor2?.quotationItems?.find(i => i.srNo == Plc.srNo);
    const vendor3Item =  finalData.Plcvendor3?.quotationItems?.find(i => i.srNo == Plc.srNo);

    row.innerHTML = `
      <td>${Plc.srNo}</td>
      <td>${Plc.Plc}</td>
      <td>${Plc.quantity}</td>
      <td>${vendor1Item ? vendor1Item.totalPrice : '-'}</td>
      <td>${vendor2Item ? vendor2Item.totalPrice : '-'}</td>
      <td>${vendor3Item ? vendor3Item.totalPrice : '-'}</td>
    `;

    tableBody.appendChild(row);
  });
  
   	const vendor1QuotationItems = finalData.Plcvendor1?.quotationItems || [];
	const vendor1LastRow = vendor1QuotationItems[vendor1QuotationItems.length - 1];

	const vendor1GrandTotal = vendor1LastRow?.grandTotal || 0;
	
		const vendor1QuotationItems1 = finalData.Plcvendor2?.quotationItems || [];
	const vendor1LastRow1 = vendor1QuotationItems1[vendor1QuotationItems1.length - 1];

	const vendor1GrandTotal1 = vendor1LastRow1?.grandTotal || 0;
	
	const vendor1QuotationItems2 = finalData.Plcvendor3?.quotationItems || [];
	const vendor1LastRow2 = vendor1QuotationItems2[vendor1QuotationItems2.length - 1];

	const vendor1GrandTotal2 = vendor1LastRow2?.grandTotal || 0;

console.log('Vendor 1 Grand Total:', vendor1GrandTotal);




 const totalRow = document.createElement('tr');
    totalRow.style.fontWeight = "bold";
    totalRow.style.backgroundColor = "#f2f2f2";
    
      totalRow.innerHTML = `
      <td colspan="3" style="text-align: right;">Total</td>
      <td>${Math.round(vendor1GrandTotal)}</td>
      <td>${Math.round(vendor1GrandTotal1)}</td>
      <td>${Math.round(vendor1GrandTotal2)}</td>
    `;
    tableBody.appendChild(totalRow);
    // Add to Grand Total
    grandTotalVendor1 += vendor1GrandTotal;
    grandTotalVendor2 += vendor1GrandTotal1;
    grandTotalVendor3 += vendor1GrandTotal2;
  
  }
  
   function renderQuotationTable2(data) { 
   const tableBody = document.querySelector("#softTable tbody");
   

  // Loop through instruments
  softData.softList.forEach(soft => {
    const row = document.createElement('tr');

    // Find total prices from each vendor
    const vendor1Item =  finalData.softvendor1?.quotationItems?.find(i => i.srNo == soft.srNo);
    const vendor2Item =  finalData.softvendor2?.quotationItems?.find(i => i.srNo == soft.srNo);
    const vendor3Item =  finalData.softvendor3?.quotationItems?.find(i => i.srNo == soft.srNo);

    row.innerHTML = `
      <td>${soft.srNo}</td>
      <td>${soft.Plc}</td>
      <td>${soft.quantity}</td>
      <td>${vendor1Item ? vendor1Item.totalPrice : '-'}</td>
      <td>${vendor2Item ? vendor2Item.totalPrice : '-'}</td>
      <td>${vendor3Item ? vendor3Item.totalPrice : '-'}</td>
    `;

    tableBody.appendChild(row);
  });
  
    const vendor1QuotationItems = finalData.softvendor1?.quotationItems || [];
	const vendor1LastRow = vendor1QuotationItems[vendor1QuotationItems.length - 1];

	const vendor1GrandTotal = vendor1LastRow?.grandTotal || 0;
	
		const vendor1QuotationItems1 = finalData.softvendor2?.quotationItems || [];
	const vendor1LastRow1 = vendor1QuotationItems1[vendor1QuotationItems1.length - 1];

	const vendor1GrandTotal1 = vendor1LastRow1?.grandTotal || 0;
	
	const vendor1QuotationItems2 = finalData.softvendor3?.quotationItems || [];
	const vendor1LastRow2 = vendor1QuotationItems2[vendor1QuotationItems2.length - 1];

	const vendor1GrandTotal2 = vendor1LastRow2?.grandTotal || 0;

console.log('Vendor 1 Grand Total:', vendor1GrandTotal);




 const totalRow = document.createElement('tr');
    totalRow.style.fontWeight = "bold";
    totalRow.style.backgroundColor = "#f2f2f2";
    
      totalRow.innerHTML = `
      <td colspan="3" style="text-align: right;">Total</td>
      <td>${Math.round(vendor1GrandTotal)}</td>
      <td>${Math.round(vendor1GrandTotal1)}</td>
      <td>${Math.round(vendor1GrandTotal2)}</td>
    `;
    tableBody.appendChild(totalRow);
    // Add to Grand Total
    grandTotalVendor1 += vendor1GrandTotal;
    grandTotalVendor2 += vendor1GrandTotal1;
    grandTotalVendor3 += vendor1GrandTotal2;
  
  
  
  }
  
    
   function renderQuotationTable3(data) { 
   const tableBody = document.querySelector("#serTable tbody");

  // Loop through instruments
  servData.softList.forEach(soft => {
    const row = document.createElement('tr');

    // Find total prices from each vendor
    const vendor1Item =  finalData.servendor1?.quotationItems?.find(i => i.srNo == soft.srNo);
    const vendor2Item =  finalData.servendor2?.quotationItems?.find(i => i.srNo == soft.srNo);
    const vendor3Item =  finalData.servendor3?.quotationItems?.find(i => i.srNo == soft.srNo);

    row.innerHTML = `
      <td>${soft.srNo}</td>
      <td>${soft.Plc}</td>
      <td>${soft.quantity}</td>
      <td>${vendor1Item ? vendor1Item.totalPrice : '-'}</td>
      <td>${vendor2Item ? vendor2Item.totalPrice : '-'}</td>
      <td>${vendor3Item ? vendor3Item.totalPrice : '-'}</td>
    `;

    tableBody.appendChild(row);
  });
  
    	const vendor1QuotationItems = finalData.servendor1?.quotationItems || [];
	const vendor1LastRow = vendor1QuotationItems[vendor1QuotationItems.length - 1];

	const vendor1GrandTotal = vendor1LastRow?.grandTotal || 0;
	
		const vendor1QuotationItems1 = finalData.servendor2?.quotationItems || [];
	const vendor1LastRow1 = vendor1QuotationItems1[vendor1QuotationItems1.length - 1];

	const vendor1GrandTotal1 = vendor1LastRow1?.grandTotal || 0;
	
	const vendor1QuotationItems2 = finalData.servendor3?.quotationItems || [];
	const vendor1LastRow2 = vendor1QuotationItems2[vendor1QuotationItems2.length - 1];

	const vendor1GrandTotal2 = vendor1LastRow2?.grandTotal || 0;
console.log('Vendor 1 Grand Total:', vendor1GrandTotal);




 const totalRow = document.createElement('tr');
    totalRow.style.fontWeight = "bold";
    totalRow.style.backgroundColor = "#f2f2f2";
    
      totalRow.innerHTML = `
      <td colspan="3" style="text-align: right;">Total</td>
      <td>${Math.round(vendor1GrandTotal)}</td>
      <td>${Math.round(vendor1GrandTotal1)}</td>
      <td>${Math.round(vendor1GrandTotal2)}</td>
    `;
    tableBody.appendChild(totalRow);
    // Add to Grand Total
    grandTotalVendor1 += vendor1GrandTotal;
    grandTotalVendor2 += vendor1GrandTotal1;
    grandTotalVendor3 += vendor1GrandTotal2;
  
  }
  
  finalData.vendor1total = grandTotalVendor1;
   finalData.vendor2total = grandTotalVendor2;
    finalData.vendor3total = grandTotalVendor3;
 
   $(document).on("click", "#next", function () {
	   compare2();
	   
	});	    
   // After All Tables: Show Grand Total
//  const grandTotalHtml = `
//    <div style="margin-top: 20px; font-weight: bold; font-size: 18px; margin-bottom: 50px; background-color: lightgrey; padding:10px">
//      Grand Total:<br>
//      Vendor 1: ${Math.round(grandTotalVendor1)} Rs. &emsp;&emsp;|| &emsp;&emsp;
//      Vendor 2: ${Math.round(grandTotalVendor2)} Rs. &emsp;&emsp;|| &emsp;&emsp;
//      Vendor 3: ${Math.round(grandTotalVendor3)} Rs.
//    </div>
//    
//    <button id="next" class = "btn mb-5">NEXT</button>
//  `;
//  $("#tableDivId").append(grandTotalHtml);


	htmN = `
	<div id="tableContainer1" style="border: 1px solid #ccc;"> 	
	<table id="softTable" border="1" style="width: 100%; border-collapse: collapse;">
  <thead>
    <tr>
      <th colspan="3"></th>
      <th class="ven">Vendor 1</th>
      <th class="ven">Vendor 2</th>
      <th class="ven">Vendor 3</th>
    </tr></thead>
  <tbody>
    <tr style="font-weight: bold; background-color: rgb(242, 242, 242);">
    <td colspan="3" style="text-align: right;">Grand Total (in Rs.):</td>
    <td>${Math.round(grandTotalVendor1)}</td>
    <td>${Math.round(grandTotalVendor2)}</td>
    <td>${Math.round(grandTotalVendor3)}</td>
    </tr>
  </tbody>
</table>
</div>
<button id="next" class = "btn mb-5">NEXT</button>
	`;
  
 $("#tableDivId").append(htmN);
	

}

