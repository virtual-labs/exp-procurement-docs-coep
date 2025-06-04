function purchase(){
	$("#Header").html("<center><span>Purchase Order</span></center>");
		htm = `
	 <table id="dynamicTable">
        <thead>
            <tr>
                <th>Sr. No.</th>
                <th>Description</th>
                 <th>Vendor</th>
                <th>Quantity</th>
                <th>Unit Price</th>
                <th>Total Price</th>
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
               	<td><input type="number" class="vendor" ></td>
                <td><input type="number" class="quantity" placeholder="Enter qty"></td>
                <td><input type="text" class="unit-cost" ></td>
                <td><input type="text" class="total-final-cost" ></td>
                <td><button class=" btn remove-btn" data-toggle="modal" data-target="#preReq">Remove</button></td>
            </tr>
        </tbody>
    </table>
    <div class="btn-container">
     <button class="btn add-btn" data-toggle="modal" data-target="#preReq">ADD ROW</button>
     <button  type="submit"class="btn check-btn" data-toggle="modal" data-target="#preReq" >SUBMIT</button>
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
                     showModal(`<strong style="color:#153f68;font-size: large;"> Adding a new row.</strong>`);
					
				}
				
				
		
            });

            $(document).on("click", ".remove-btn", function() {
				
				
                if ($("#dynamicTable tbody tr").length > 1) {
                    $(this).closest("tr").remove();
                    updateRowNumbers();
                     showModal(`<strong style="color:#153f68;font-size: large;">Selected one row is removed</strong>`);
                } else {
                  
                     showModal(`<strong style="color:#153f68;font-size: large;">At least one row is required</strong>`);
                }
            });
            
//            $(".check-btn").hide(); 
            
            	$(document).on("input", ".unit-cost", function() {
				let row = $(this).closest("tr");
                let basePrice = parseFloat(row.find(".unit-cost").val()) || 0;
                let qty = parseInt(row.find(".quantity").val()) || 1;
                let totalCost = basePrice*qty;
				 row.find(".total-final-cost").val(totalCost.toFixed(2));
				 
		    });

            let flg2 = 0;
             $(".check-btn").click(function() { 
				  let isValid = true;
                $("  .quantity,.total-final-cost,.instrument-name").each(function() {
                    if ($(this).val().trim() === "") {
                        $(this).addClass("error");
                        isValid = false;
                    } else {
                        $(this).removeClass("error");
                    }
                });
                if (!isValid) {
					showModal(`<strong style="color:#153f68;font-size: large;">Please fill in all required fields</strong>`);
                    
                } else {
                    
                    showModal(`<strong style="color:#153f68;font-size: large;">All values are entered correctly</strong>`);
                }
				 
		    let validRowCount = 0;
            let invalidRowCount = 0;
   
        let requiredSet = {
        9: 6,   // Name TT → Quantity must be 1
        24: 1,   // Name SCR → Quantity must be 1
        3: 6,   // Name TSL → Quantity must be 3
         
        
        21: 2,  // Name VFD → Quantity must be 2
        12: 2,  // Name Vvalve → Quantity must be 4
        1: 1,  // Name TSH → Quantity must be 1
        2: 1,  // Name PSH → Quantity must be 1
        8 :1,  // PT -> 1
        33:2,
        34:2,
        25:1,
        7:1  // Name LT → Quantity must be 2
    };			 
				 
				
		$("#dynamicTable tbody tr").each(function() {
        let row = $(this);
        let basePrice = parseFloat(row.find(".unit-cost").val()) || 0;
        let name = row.find(".instrument-name").val();
        let quantity = parseInt(row.find(".quantity").val()) || 1;
        let autoCorrect = false; 
        
        let basaCorr = 0;
        if (name == 1) { basaCorr = 12500; }
        else if (name == 2) { basaCorr = 8500; }
        else if (name == 3) { basaCorr = 9500; }
        else if (name == 4) { basaCorr = 14500; }
        else if (name == 5) { basaCorr = 12500; }
        else if (name == 6) { basaCorr = 7500; }
        else if (name == 7) { basaCorr = 35000; }
        else if (name == 8) { basaCorr = 18500; }
        else if (name == 9) { basaCorr = 7500; }
        else if (name == 10) { basaCorr = 55000; }
        else if (name == 11) { basaCorr = 45000; }
        else if (name == 12) { basaCorr = 8500; }
        else if (name == 13) { basaCorr = 13500; }
        else if (name == 14) { basaCorr = 9750; }
        else if (name == 15) { basaCorr = 15600; }
        else if (name == 16) { basaCorr = 28500; }
        else if (name == 17) { basaCorr = 45500; }
        else if (name == 18) { basaCorr = 85000; }
        else if (name == 19) { basaCorr = 13500; }
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
        else if (name == 33){basaCorr = 250000;}
        else if (name == 34){basaCorr = 38000;}

        let minRange = basaCorr - (basaCorr * 0.30);
        let maxRange = basaCorr + (basaCorr * 0.30);

        function isValidAmount(amount) {
            return amount >= minRange && amount <= maxRange;
        }     
                
         if (requiredSet[name] !== undefined && requiredSet[name] === quantity  &&isValidAmount(basePrice)) {
            validRowCount++;
            row.removeClass("error-row"); // Remove error class if previously added
        } else {
            invalidRowCount++;
            row.addClass("error-row"); // Apply error class to invalid rows
            autoCorrect = true; // Mark that correction is needed
//            resultJson.invalidRowCount = invalidRowCount;
        }
          
          
       if (autoCorrect) {
			flg2++;
			
        // Show correction message and ask the user to correct values
        showModal(`
            <strong style="color:red;font-size: large;">${invalidRowCount} rows are invalid!</strong><br>
            Please correct them and click "Check" again.
        `);
       
    } else {
        // All values are correct, show the final message
        showModal(`
            <strong style="color:#153f68;font-size: large;">Total Valid Rows: ${validRowCount}</strong><br>
            <strong style="color:red;font-size: large;">Total Invalid Rows: ${invalidRowCount}</strong>
        `);
           $("#mainDiv").html('');
                result(); 
                
    }  
    
            if(flg2 === 4){
//			 resultJson.flg = flg;
//			$(".auto-correct-btn").show();
			 $("#tableDivId").html('');
			 htm1 =  `<div class="btn-container">
			 <button class="btn result"  >Result</button> 
			 </div>
			 <img src="../resources/vlabs/elctricalLabs/PMEnggLab1/exp9/images/quatationStd.png" class="img-fluid rounded" style=" max-width: 100%; height: auto;  align-items: center;">`;
			 $("#tableDivId").html(htm1);
			 
			  $(".result").click(function() {
				 $("#mainDiv").html('');
                result(); 
	           });

		} 
     });  
				 
			}); 


});
}