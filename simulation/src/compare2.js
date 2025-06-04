 let selectedVendor = null;

function compare2(){
	   // After All Tables: Show Grand Total

  
  const vendors = [
    { name: "Vendor 1", data: finalData.Qutationform1 },
    { name: "Vendor 2", data: finalData.Qutationform2 },
    { name: "Vendor 3", data: finalData.Qutationform3 }
];
  
  
    const quotationForm = finalData.Qutationform1;
    const quotationForm1 = finalData.Qutationform2;
    const quotationForm2 = finalData.Qutationform3;
//  const quotationContainer = document.getElementById('quotation-form-details');
//  const grandTotalContainer = document.getElementById('vendor1-grand-total');

  // Render Quotation Form Details
  const formLabels = `
    <h3>Quotation Form Details</h3>
     <label><strong>Delivery Date:</strong> </label><br/>
     <div style="display: flex; gap: 20px;">
     <label> vendor 1 : ${quotationForm.deliveryDate}</label>
    <label> vendor 2 : ${quotationForm1.deliveryDate}</label>
    <label> vendor 2 : ${quotationForm2.deliveryDate}</label><br/>
    </div>
    <label><strong>Acceptance Criteria:</strong></label><br/>
    <div style="display: flex; gap: 20px;">
    <label> vendor 1 : ${quotationForm.acceptanceCriteria}</label><br/>
    <label> vendor 2 : ${quotationForm1.acceptanceCriteria}</label><br/>
    <label> vendor 2 : ${quotationForm2.acceptanceCriteria}</label><br/>
    </div>
    <label><strong>Additional Info:</strong></label><br/>
    <div style="display: flex; gap: 20px;">
     <label> vendor 1 :  ${quotationForm.additionalInfo}</label><br/>
    <label> vendor 2 :  ${quotationForm1.additionalInfo}</label><br/>
    <label> vendor 2 : ${quotationForm2.additionalInfo}</label><br/>
    </div>
    <label><strong>Certifications:</strong></label><br/>
    <div style="display: flex; gap: 20px;">
    <label> vendor 1 :  ${quotationForm.certifications}</label><br/>
    <label> vendor 2 :  ${quotationForm.certifications}</label><br/>
    <label> vendor 2 : ${quotationForm.certifications}</label><br/> 
    </div>
    <label><strong>Installation Schedule:</strong></label><br/>
    <div style="display: flex; gap: 20px;">
  	<label> vendor 1 :  ${quotationForm.installationSchedule}</label><br/>
    <label> vendor 2 :  ${quotationForm1.installationSchedule}</label><br/>
    <label> vendor 2 : ${quotationForm2.installationSchedule}</label><br/>
     </div>
    <label><strong>Payment Terms:</strong></label><br/>
    <div style="display: flex; gap: 20px;">
   <label> vendor 1 :  ${quotationForm.paymentTerms}</label><br/>
    <label> vendor 2 :  ${quotationForm.paymentTerms}</label><br/>
    <label> vendor 2 : ${quotationForm.paymentTerms}</label><br/>
    </div>
    <label><strong>Support Terms:</strong></label><br/>
    <div style="display: flex; gap: 20px;">
    <label> vendor 1 :  ${quotationForm.supportTerms}</label><br/>
    <label> vendor 2 :  ${quotationForm.supportTerms}</label><br/>
    <label> vendor 2 : ${quotationForm.supportTerms}</label><br/>
     </div>
    <label><strong>Validity Period:</strong> </label><br/>
    <div style="display: flex; gap: 20px;">
    <label> vendor 1 :  ${quotationForm.validityPeriod}</label><br/>
    <label> vendor 2 :  ${quotationForm.validityPeriod}</label><br/>
    <label> vendor 2 : ${quotationForm.validityPeriod}</label><br/>
     </div>
    <label><strong>Warranty Period:</strong> </label><br/>
    <div style="display: flex; gap: 20px;">
    <label> vendor 1 :  ${quotationForm.warrantyPeriod}</label><br/>
    <label> vendor 2 :  ${quotationForm1.warrantyPeriod}</label><br/>
    <label> vendor 2 : ${quotationForm2.warrantyPeriod}</label><br/>
    </div>

  `;
 let tableHtml = `<table border="1" cellpadding="8" cellspacing="0" style="width:100%; text-align:left;  margin-bottom: 20px;"> 
    <thead>
        <tr>
            <th>Label</th>
            <th>Vendor 1</th>
            <th>Vendor 2</th>
            <th>Vendor 3</th>
        </tr>
    </thead>
   
      <tbody>
    <tr>
      <td>Grand Total</td>
      <td>${Math.round(grandTotalVendor1)}</td>
      <td>${Math.round(grandTotalVendor2)}</td>
      <td>${Math.round(grandTotalVendor3)}</td>
    </tr>
    <tr>
     <td>Delivery Date</td>
     <td> ${quotationForm.deliveryDate}</td>
      <td> ${quotationForm1.deliveryDate}</td>
      <td> ${quotationForm2.deliveryDate}</td>
    </tr>
     <tr>
     <td>Acceptance Criteria</td>
     <td> ${quotationForm.acceptanceCriteria}</td>
      <td> ${quotationForm1.acceptanceCriteria}</td>
      <td> ${quotationForm2.acceptanceCriteria}</td>
    </tr>
      <tr>
     <td>Additional Info</td>
     <td> ${quotationForm.additionalInfo}</td>
      <td> ${quotationForm1.additionalInfo}</td>
      <td> ${quotationForm2.additionalInfo}</td>
    </tr>
     <tr>
     <td>Certifications</td>
     <td> ${quotationForm.certifications}</td>
      <td> ${quotationForm1.certifications}</td>
      <td> ${quotationForm2.certifications}</td>
    </tr>
     <tr>
     <td>Installation Schedule</td>
     <td> ${quotationForm.installationSchedule}</td>
      <td> ${quotationForm1.installationSchedule}</td>
      <td> ${quotationForm2.installationSchedule}</td>
    </tr>
     <tr>
     <td>Payment Terms</td>
     <td> ${quotationForm.paymentTerms}</td>
      <td> ${quotationForm1.paymentTerms}</td>
      <td> ${quotationForm2.paymentTerms}</td>
    </tr>
     <tr>
     <td>Support Terms</td>
     <td> ${quotationForm.supportTerms}</td>
      <td> ${quotationForm1.supportTerms}</td>
      <td> ${quotationForm2.supportTerms}</td>
    </tr>
      <tr>
     <td>Validity Period</td>
     <td> ${quotationForm.validityPeriod}</td>
      <td> ${quotationForm1.validityPeriod}</td>
      <td> ${quotationForm2.validityPeriod}</td>
    </tr>
      <tr>
     <td>Warranty Period</td>
     <td> ${quotationForm.warrantyPeriod}</td>
      <td> ${quotationForm1.warrantyPeriod}</td>
      <td> ${quotationForm2.warrantyPeriod}</td>
    </tr>
    
     </tbody>
     </table>`;
  $("#tableDivId").html(tableHtml);
 
   const grandTotalHtml = `
  <h3>Reason for selecting the vendor</h3>

 <div style="margin-bottom: 20px;">
	<input type="checkbox" name="option1" style="width: 4%; height: 18px;"> 
	<span style="font-size: 18px;">Cost of solution</span> <br/>
	<input type="checkbox" name="option2" style="width: 4%; height: 18px;"> 
	<span style="font-size: 18px;">Delivary period</span> <br/>
	<input type="checkbox" name="option3" style="width: 4%; height: 18px;"> 
	<span style="font-size: 18px;">Terms and condition</span> <br/>
	<input type="checkbox" name="option4" style="width: 4%; height: 18px;"> 
	<span style="font-size: 18px;">Any other</span>
 </div>    
   
 <div>
   <button id="vendor1Btn" class = "btn" style="margin-bottom: 20px;">Select Vendor 1</button>
   <button id="vendor2Btn" class = "btn" style="margin-bottom: 20px;">Select Vendor 2</button>
   <button id="vendor3Btn" class = "btn" style="margin-bottom: 20px;">Select Vendor 3</button>
 </div>

  `;
  $("#tableDivId").append(grandTotalHtml);



 const checkboxes = document.querySelectorAll('.vendor-check');
  const buttons = document.querySelectorAll('.btn');

  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('click', () => {
      buttons.forEach(button => {
        button.disabled = true; // disable all vendor buttons
      });
    });
  });

  function selectVendor(vendorNumber) {
    selectedVendor = vendorNumber;
    console.log("Selected Vendor:", selectedVendor);

    // Remove highlight from all buttons
    document.getElementById("vendor1Btn").classList.remove("selected");
    document.getElementById("vendor2Btn").classList.remove("selected");
    document.getElementById("vendor3Btn").classList.remove("selected");

    // Add highlight to the selected button
    document.getElementById("vendor" + vendorNumber + "Btn").classList.add("selected");
  }
  
  $("#vendor1Btn").click(function() {
	  selectedVendor = 1;
	   console.log("Selected Vendor:", selectedVendor);
	   purchaseform();
	  
  });
  
    $("#vendor2Btn").click(function() {
	  selectedVendor = 2;
	   console.log("Selected Vendor:", selectedVendor);
	  purchaseform();
  });
  
    $("#vendor3Btn").click(function() {
	  selectedVendor = 3;
	   console.log("Selected Vendor:", selectedVendor);
	  purchaseform();
  });
	
	
}