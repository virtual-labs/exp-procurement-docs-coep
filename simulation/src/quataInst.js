let instCnt = 0;
 let insflg = 0;
function Quan1(){
	
	
	instCnt++;
	console.log(instCnt);
	
		
		$("#Header").html("<center><span> VENDOR-1 INSTRUMENT QUOTATION</span></center>");
	
	
	
	
	htm = `
	 <table id="quotationTable" border="1" cellpadding="10">
  <thead>
    <tr>
      <th>Sr. No.</th>
      <th>Instrument Name</th>
      <th>Quantity</th>
      <th>Make and Model</th>
      <th>Unit Price</th>
      <th>Taxes</th>
      <th>Total Price</th>
    </tr>
  </thead>
  <tbody></tbody>
</table>
<br>
 <button id="submitQuotation" class = "btn mb-5" data-toggle="modal" data-target="#preReq" >SUBMIT QUOTATION</button>	
`;

		  
//		  
//htm += `<!-- 			    The Modal  ProStr -->
//<div class="modal fade " id="preReq">
//<div class="modal-dialog modal-md" >
//<div class="modal-content">
//<!-- 		        Modal Header -->
//<div class="modal-header" style="    background-color: teal;color: #fff;">
//<h4 class="modal-title" >Message Box</h4>
//<button type="button" class="close modalOptClose" data-dismiss="modal">&times;</button>
//</div>
//<!-- 		        Modal body -->
//<div class="modal-body" id="modal1">
//</div>
//<!-- 			        Modal footer -->
//<div class="modal-footer">
//<button type="button" class="btn btn-danger modalOptClose" data-dismiss="modal" >Ok</button> 
//</div>
//</div>
//</div>
//</div>
//<!-- 			  End Modal ProStr -->	`	;  

 $("#tableDivId").html(htm);
 

 
// 
//        // Modal box logic
//    var modal = $('#exampleModal');
//    var span = $('.close');
//     
//       function showModal(message) {
//        $('#modalMessage').html(message);
//        modal.css('display', 'block');
//    }

//    span.click(function () {
//        modal.css('display', 'none');
//    });

//    $(window).click(function (event) {
//		
//        if (event.target === modal[0]) {
//            modal.css('display', 'none');
//        }
//    });
    
    $(".modalOptClose").click(function(){
		$("#exampleModal").modal("hide");
	})
    

	
	
	const jsonData = {
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
    { srNo: 13, instrumentName: "I/P Converter and penumatically operated cotrol valve", quantity: 1 }
  ]
};




function renderQuotationTable(data) {
  const tbody = document.querySelector("#quotationTable tbody");
  tbody.innerHTML = "";

  data.instrumentList.forEach(item => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${item.srNo}</td>
      <td class="instr-name">${item.instrumentName}</td>
  		<td class="qty">${item.quantity}</td>
      <td>
        <input type="text" class="make-model" placeholder="Enter Make and model">
      </td>
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
      let qty = parseFloat(this.dataset.qty);
      let unitPrice = parseFloat(this.value) || 0;
      let tax1 = parseFloat(tax);
       let gst = unitPrice * (tax1/100);
        let totalWithGst = unitPrice + gst;
        let finalTotal = totalWithGst * qty;
      let row = this.closest("tr");
      let totalCell = this.closest("tr").querySelector(".total-price");
      let taxCell = this.closest("tr").querySelector(".tax-price");
      totalCell.textContent = finalTotal.toFixed(2);
      taxCell.textContent = gst.toFixed(2);
      console.log(gst);
    });
  });
}

renderQuotationTable(jsonData);

 

// Handle form submission
  $(document).on("click", "#submitQuotation", function () {
	  let validRowCount = 0;
 	let invalidRowCount = 0;
	  insflg++;
    const rows = document.querySelectorAll("#quotationTable tbody tr");
    const quotationData = [];

    let isValid = true;
    let grandTotal = 0;

    rows.forEach(row => {
		
      let srNo = row.cells[0].textContent;
//      var instrumentName = row.querySelector(".instr-name").textContent;
//      var quantity = parseInt(row.querySelector(".qty").textContent);
      var makeModel = row.querySelector(".make-model").value.trim();
      var unitPrice = parseFloat(row.querySelector(".unit-price").value);
      var taxPrice = parseFloat(row.querySelector(".tax-price").textContent);
      var totalPrice = parseFloat(row.querySelector(".total-price").textContent);
      grandTotal += totalPrice;
//!makeModel || 
      if (!makeModel || isNaN(unitPrice)) {
        isValid = false;
        row.style.backgroundColor = "#ffe0e0"; // highlight error
        return;
      } else {
        row.style.backgroundColor = ""; // clear highlight
      }
      
//	let basaCorr = 0;
//        if (srNo == 1) { basaCorr = 12500; }
//        else if (srNo == 2) { basaCorr = 18500; }
//        else if (srNo == 3) { basaCorr = 8500; }
//        else if (srNo == 4) { basaCorr = 9500; }
//        else if (srNo == 5) { basaCorr = 38000; }
//        else if (srNo == 6) { basaCorr = 35000;}
//        else if (srNo == 7) { basaCorr = 7500;  }
//        else if (srNo == 8) { basaCorr = 43000; }
//        else if (srNo == 9) { basaCorr = 225000; }
//        else if (srNo == 10) { basaCorr = 250000; }
//        else if (srNo == 11) { basaCorr = 23500; }
//        else if (srNo == 12) { basaCorr = 8500; }
//        else if (srNo == 13) { basaCorr = 75000; }
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
//            
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
//         $("#modal1").html(`
//            <strong style="color:red;font-size: large;">${invalidRowCount} rows are invalid!</strong><br>
//            Please correct them and click "Check" again.
//        `);
////			toastr.warning(invalidRowCount +"rows are invalid! Please correct them and click 'Check' again. ");
//       
//    } else {
//        // All values are correct, show the final message
//       $("#modal1").html(`
//            <strong style="color:#153f68;font-size: large;">Total Valid Rows: ${validRowCount}</strong><br>
//            <strong style="color:red;font-size: large;">Total Invalid Rows: ${invalidRowCount}</strong>
//        `);
//		$('.modal-backdrop').remove(); // manually remove backdrop
//        $('body').removeClass('modal-open'); // remove body scroll lock
//        $('#preReq').modal('hide');
//		
//		 $("#tableDivId").html('');
//		 Quanplc1();
//        
//    }

      quotationData.push({
        srNo,
//        instrumentName,
//        quantity,
        makeModel,
        unitPrice,
        taxPrice,
        totalPrice,
        grandTotal
      });
    });

    if (!isValid) {
//		 $("#modal1").html(`
//            <strong style="color:red;font-size: large;">Please fill in all required fields (Make & Model and Unit Price)</strong><br>
//        `)

        Swal.fire({
					title: 'Warning',
					html: '<p>Please fill in all required fields (Make & Model and Unit Price)</p>',
					width: 600,
					icon: 'warning',
					confirmButtonText: 'OK',
					allowOutsideClick: true,
					allowEscapeKey: true,
				});
        
      return;
    } else{
		$('.modal-backdrop').remove(); // manually remove backdrop
        $('body').removeClass('modal-open'); // remove body scroll lock
        $('#preReq').modal('hide');
        resultJson.Qflg = insflg;
		 console.log(resultJson);
		 $("#tableDivId").html('');
		 Quanplc1();
			
	}
	


    const finalJSON = {
      quotationItems: quotationData
    };
    finalData.Instvendor1 = finalJSON;
		resultJson.Qflg1 = insflg;
			 console.log(resultJson);
	
	if(instCnt == 1){
		finalData.Instvendor1 = finalJSON;
		resultJson.Qflg1 = insflg;
			 console.log(resultJson);		
	}else if(instCnt == 2){
		finalData.Instvendor2 = finalJSON;
		resultJson.Qflg2 = insflg;
					 console.log(resultJson);
	}else if(instCnt == 3){
		finalData.Instvendor3 = finalJSON;
		resultJson.Qflg3 = insflg;
			console.log(resultJson);
	}
	 
	console.log(finalData);
    console.log("Final Quotation JSON:", finalJSON);
//    alert("Quotation submitted successfully! Check console for JSON.");
  });

	
}