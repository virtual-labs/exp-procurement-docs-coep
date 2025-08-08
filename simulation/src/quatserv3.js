
function quatserv3(){

	

		$("#Header").html("<center><span> VENDOR-3 SERVICE QUOTATION</span></center>");

	
	htm = `
	 <table id="quotationTable" border="1" cellpadding="10">
  <thead>
    <tr>
      <th>Sr. No.</th>
      <th>Service Name</th>
      <th>Quantity</th>
      <th>Unit Price</th>
      <th>Taxes</th>
      <th>Total Price</th>
    </tr>
  </thead>
  <tbody></tbody>
</table>
<br>
 <button id="submitSer3" class = "btn" data-toggle="modal" data-target="#preReq" style="margin-bottom: 35px;">SUBMIT QUOTATION</button>	
`;

// htm +=  `	<!-- 			    The Modal  ProStr -->
//  <div class="modal fade " id="preReq">
//	    <div class="modal-dialog modal-md" >
//		      <div class="modal-content">
//		       
//	        <div class="modal-header">
//	          <h4 class="modal-title"><center>Message Box</center></h4>
//	          <button type="button" class="close" data-dismiss="modal">&times;</button>
//	        </div>
//<!-- 		        Modal body -->
//		        <div class="modal-body" id="modalMessage3" style="color:red">
//
//		        </div>
//<!-- 			        Modal footer -->
//		        <div class="modal-footer">
//	             <button type="button" class="btn btn-danger" data-dismiss="modal" onclick="closeModal()" >Ok</button>
//		        </div>
//		      </div>
//		    </div>
//		  </div>
//		  <!-- 			  End Modal ProStr -->`

 $("#tableDivId").html(htm);
 
     function closeModal() {
		  $('#preReq').modal('hide');
 }
	
	const jsonData = {
 
  "softList": [
    { srNo: 1, "Plc": "Development of Automation project (ladder,network, SCADA and Historian)", "quantity": 1 },
    { srNo: 2, "Plc": "Field instruments", "quantity": 1 },
    { srNo: 3, "Plc": "Panel wiring installation, loopchecking ,testing and commissioning of autonation project", "quantity": 1 },
    { srNo: 4, "Plc": "Training to the plant personnel ", "quantity": 1 }
   
  ]

};

function renderQuotationTable(data) {
  const tbody = document.querySelector("#quotationTable tbody");
  tbody.innerHTML = "";

  data.softList.forEach(item => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${item.srNo}</td>
      <td class="plc-name">${item.Plc}</td>
  		<td class="qty">${item.quantity}</td>
      <td>
        <input type="number" class="unit-price" placeholder="Enter unit price" data-qty="${item.quantity}">
      </td>
      <td class="tax-price">0.00</td>
      <td class="total-price">0.00</td>
    `;

    tbody.appendChild(row);
  });

  // Recalculate total when unit price is entered
  document.querySelectorAll(".unit-price").forEach(input => {
    input.addEventListener("input", function () {
      const qty = parseFloat(this.dataset.qty);
      const unitPrice = parseFloat(this.value) || 0;
      const tax1 = parseFloat(tax);
       let gst = unitPrice * (tax1/100);
        let totalWithGst = unitPrice + gst;
        let finalTotal = totalWithGst * qty;
      const row = this.closest("tr");
      const totalCell = this.closest("tr").querySelector(".total-price");
      const taxCell = this.closest("tr").querySelector(".tax-price");
      totalCell.textContent = finalTotal.toFixed(2);
      taxCell.textContent = gst.toFixed(2);
      console.log(gst);
    });
  });
}

renderQuotationTable(jsonData);



// Handle form submission
  $(document).on("click", "#submitSer3", function () {
	  servflg++;
    const rows = document.querySelectorAll("#quotationTable tbody tr");
    const quotationData = [];

    let isValid = true;
    let grandTotal = 0;
     let validRowCount = 0;
 	let invalidRowCount = 0;

    rows.forEach(row => {
      const srNo = row.cells[0].textContent;
      const plcName = row.querySelector(".plc-name").textContent;
      const quantity = parseInt(row.querySelector(".qty").textContent);
       const unitPriceInput = row.querySelector(".unit-price");
      const unitPrice = parseFloat(row.querySelector(".unit-price").value);
      const taxPrice = parseFloat(row.querySelector(".tax-price").textContent);
      const totalPrice = parseFloat(row.querySelector(".total-price").textContent);
      grandTotal += totalPrice;

      if (  isNaN(unitPrice)) {
        isValid = false;
        row.style.backgroundColor = "#ffe0e0"; // highlight error
        return;
      } else {
        row.style.backgroundColor = ""; // clear highlight
      }

      quotationData.push({
        srNo,
        plcName,
        quantity,
       
        unitPrice,
        taxPrice,
        totalPrice,
        grandTotal
      });
      
//       let basaCorr = 0;
//        if (srNo == 1) { basaCorr =  350000; }
//        else if (srNo == 2) { basaCorr = 100000; }
//        else if (srNo == 3) { basaCorr = 150000; }
//        else if (srNo == 4) { basaCorr = 150000; }
// 
//       
//      
//        let minRange = basaCorr - (basaCorr * 0.30);
//        let maxRange = basaCorr + (basaCorr * 0.30);
//
//        function isValidAmount(amount) {
//            return amount >= minRange && amount <= maxRange;
//        }
//       
//          if (isValidAmount(unitPrice)) {
//            validRowCount++;
////            row.removeClass("error-row"); // Remove error class if previously added
//        } else {
//            invalidRowCount++;
//            autoCorrect = true;
////            row.addClass("error-row"); // Apply error class to invalid rows
//           console.log(invalidRowCount);
//            resultJson.invalidRowCount = invalidRowCount;
//        }
// 	
// 	
// 	  if (autoCorrect) {
//			
////		alert(invalidRowCount +"rows are invalid!" )	;
//        // Show correction message and ask the user to correct values
//       $("#modalMessage3").html(`
//            <strong style="color:red;font-size: large;">${invalidRowCount} rows are invalid!</strong><br>
//            Please correct them and click "Check" again.
//        `);
//       
//    } else {
//        // All values are correct, show the final message
//       $("#modalMessage3").html(`
//            <strong style="color:#153f68;font-size: large;">Total Valid Rows: ${validRowCount}</strong><br>
//            <strong style="color:red;font-size: large;">Total Invalid Rows: ${invalidRowCount}</strong>
//            $('.modal-backdrop').remove(); // manually remove backdrop
//       		 $('body').removeClass('modal-open'); // remove body scroll lock
//       		 $('#preReq').modal('hide');
//       		  $("#tableDivId").html('');
//				quateform();
//        `);
//        
//    }
    
    
    });

    
   

    if (!isValid) {
//      alert("Please fill in all required fields (Make & Model and Unit Price).");
//		 $("#modalMessage3").html(`
//            <strong style="color:red;font-size: large;">Please fill in all required fields (Unit Price)</strong><br>
//           
//        `);
        Swal.fire({
					title: 'Warning',
					html: '<p>Please fill in all required fields (Unit Price)</p>',
					width: 600,
					icon: 'warning',
					confirmButtonText: 'OK',
					allowOutsideClick: true,
					allowEscapeKey: true,
				});
      return;
    }
    
     else{
		 
		  	const finalJSON = {
      quotationItems: quotationData
    };
   finalData.servendor3 = finalJSON;
	resultJson.Qsvflg1 = servflg;
		 $('.modal-backdrop').remove(); // manually remove backdrop
        $('body').removeClass('modal-open'); // remove body scroll lock
        $('#preReq').modal('hide');
		 $("#tableDivId").html('');
		
			quateform3();
		
	}
 	


	
//	if(serCnt == 1){
//		finalData.servendor1 = finalJSON;
//		resultJson.Qsvflg1 = servflg;
//	}else if(serCnt == 2){
//		finalData.servendor2 = finalJSON;
//		resultJson.Qsvflg2 = servflg;
//	}else if(serCnt ==3 ){
//		finalData.servendor3 = finalJSON;
//		resultJson.Qsvflg3 = servflg;
//	}
	 
	console.log(finalData);
    console.log("Final Quotation JSON:", finalJSON);
//    alert("Quotation submitted successfully! Check console for JSON.");
  });
	
	

	
}