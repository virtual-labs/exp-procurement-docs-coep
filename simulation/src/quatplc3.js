

function Quanplc3(){
//	$("#exampleModal").modal("hide");
	
		$("#Header").html("<center><span> VENDOR-3 PLC QUOTATION</span></center>");
	
	
	
	htm = `
	 <table id="quotationTable" border="1" cellpadding="10">
  <thead>
    <tr>
      <th>Sr. No.</th>
      <th>PLC Name</th>
      <th>Quantity</th>
      <th>Unit Price</th>
      <th>Taxes</th>
      <th>Total Price</th>
    </tr>
  </thead>
  <tbody></tbody>
</table>
<br>
 <button id="submitPlc3" class = "btn" data-toggle="modal" data-target="#preReq" style="margin-bottom: 35px;">SUBMIT QUOTATION</button>	
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
//		        <div class="modal-body" id="modalMessage1" style="color:red">
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
 
 
 
        // Modal box logic
//    var modal = $('#preReq');
//    var span = $('.close');
     
//       function showModal(message) {
//        $('#modalMessage').html(message);
//        modal.css('display', 'block');
//    }
//
//    span.click(function () {
//        modal.css('display', 'none');
//    });
//
//    $(window).click(function (event) {
//        if (event.target === modal[0]) {
//            modal.css('display', 'none');
//        }
//    });
//    
//    
    function closeModal() {
  $('#preReq').modal('hide');
}
	
	const jsonData = {
 
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

function renderQuotationTable(data) {
  const tbody = document.querySelector("#quotationTable tbody");
  tbody.innerHTML = "";

  data.plcList.forEach(item => {
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
  $(document).on("click", "#submitPlc3", function () {
//	  $("#preReq").modal("show");
	  plcflg++;
	    let validRowCount = 0;
 	let invalidRowCount = 0;
    const rows = document.querySelectorAll("#quotationTable tbody tr");
    const quotationData = [];

    let isValid = true;
    let grandTotal = 0;

    rows.forEach(row => {
      let srNo = row.cells[0].textContent;
      let plcName = row.querySelector(".plc-name").textContent;
      let quantity = parseInt(row.querySelector(".qty").textContent);
       let unitPriceInput = row.querySelector(".unit-price");
      let unitPrice = parseFloat(row.querySelector(".unit-price").value);
      let taxPrice = parseFloat(row.querySelector(".tax-price").textContent);
      let totalPrice = parseFloat(row.querySelector(".total-price").textContent);
      grandTotal += totalPrice;

      if ( isNaN(unitPrice)) {
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
   
    
    
//    let basaCorr = 0;
//        if (srNo == 1) { basaCorr = 225000; }
//        else if (srNo == 2) { basaCorr = 650000; }
//        else if (srNo == 3) { basaCorr = 35000; }
//        else if (srNo == 4) { basaCorr = 75000; }
//        else if (srNo == 5) { basaCorr = 1,00,000; }
//        else if (srNo == 6) { basaCorr = 25000;}
//        else if (srNo == 7) { basaCorr = 25000;  }
//        else if (srNo == 8) { basaCorr = 5000; }
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
 	
// 	  if (autoCorrect) {
//			
//			
//        // Show correction message and ask the user to correct values
//         $("#modalMessage1").html(`
//            <strong style="color:red;font-size: large;">${invalidRowCount} rows are invalid!</strong><br>
//            Please correct them and click "Check" again.
//        `);
//       
//    } else {
//        // All values are correct, show the final message
//         $("#modalMessage1").html(`
//            <strong style="color:#153f68;font-size: large;">Total Valid Rows: ${validRowCount}</strong><br>
//            <strong style="color:red;font-size: large;">Total Invalid Rows: ${invalidRowCount}</strong>
//        `);
//        
//    }
    
    });

    if (!isValid) {
//      alert("Please fill in all required fields ( Unit Price).");
//		 $("#modalMessage1").html(`
//            <strong style="color:red;font-size: large;">Please fill in all required fields (Unit Price)</strong><br> 
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
		$('.modal-backdrop').remove(); // manually remove backdrop
        $('body').removeClass('modal-open'); // remove body scroll lock
        $('#preReq').modal('hide');
      
		 $("#tableDivId").html('');
		quatsoft3();
	}
    const finalJSON = {
      quotationItems: quotationData
    };
     finalData.Plcvendor3 = finalJSON;
     resultJson.Qpflg1 = plcflg;
	
//	if(plcCnt == 1){
//		 finalData.Plcvendor1 = finalJSON;
//		 resultJson.Qpflg1 = plcflg;
//		 	 console.log(resultJson);
//	}else if(plcCnt == 2){
//		 finalData.Plcvendor2 = finalJSON;
//		 resultJson.Qpflg2 = plcflg;
//		 	 console.log(resultJson);
//	}else if(plcCnt ==3 ){
//		
//		 resultJson.Qpflg3 = plcflg;
//		 	 console.log(resultJson);
//	}
	
	console.log(finalData);
    console.log("Final Quotation JSON:", finalJSON);
//    alert("Quotation submitted successfully! Check console for JSON.");
  });
	
	
	
	
}