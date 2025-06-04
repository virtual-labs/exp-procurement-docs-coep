function enquiryplc(){
	
	$("#Header").html("<center><span>INQUIRY - PLC</span></center>");
		htm = `
	 <table id="dynamicTable">
        <thead>
            <tr>
                <th>Sr. No.</th>
                <th>PLC Required</th>
                <th>Quantity</th>
                <th>Configuration</th>
                <th>Specific Requirement</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
             <td>
                    <select class="instrument-name">
                        <option value=""> ----- Select PLC ----- </option>
                        <option value="1">Rockwell</option>
                        <option value="2">Siemens</option>
                        <option value="3">Delta</option>
                        <option value="4"> Schindler</option>
                      
                
                    </select>
                </td>
               
                <td><input type="number" class="quantity" placeholder="Enter qty"></td>
                
               	<td>
               	 <select class="confi-name">
               	 <option value=""> ----- Select Configuration ----- </option>
                 <option value="1">CPU</option>
                 <option value="2">I/O Modules</option>
                 <option value="3">Communication Modules</option>
                 <option value="4">Memory Module</option>
                 <option value="5"> Power Supply (back plane)</option>
                 <option value="6"> Workstation (i7 with 1TB storage)</option>
                 <option value="7">Control Panel (with all consumables included)</option>
                 <option value="8">HMI (10") touch screen</option>
                
              	</td>
              	
                <td><input type="text" class="unit-cost" ></td>
                <td><button class=" btn remove-btn" data-toggle="modal" data-target="#preReq">Remove</button></td>
            </tr>
        </tbody>
    </table>
    
    <div>
     <input type="checkbox" id="agree" name="agree" style="width: 4%;">
     <label for="agree">I agree and confirm the list</label>
    </div>
    
    <div class="btn-container">
     <button class="btn add-btn" data-toggle="modal" data-target="#preReq">ADD ROW</button>
     <button  id="submitBtn"  type="submit"class="btn check-btn" data-toggle="modal" data-target="#preReq2" style="display: none;">SUBMIT & NEXT</button>
 
    </div>`

    
     htm +=  `	<!-- 			    The Modal  ProStr -->
  <div class="modal fade " id="preReq2">
	    <div class="modal-dialog modal-md" >
		      <div class="modal-content">
		       
	        <div class="modal-header">
	          <h4 class="modal-title"><center>Message Box</center></h4>
	          <button type="button" class="close" data-dismiss="modal">&times;</button>
	        </div>
<!-- 		        Modal body -->
		        <div class="modal-body" id="Message1" style="color:red">

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
    

   $(document).ready(function() {  
	   
	    function updateRowNumbers() {
                $("#dynamicTable tbody tr").each(function(index) {
                    $(this).find("td:first").text(index + 1);
                });
            }
            
            $(".instrument-name, .quantity,.confi-name,.unit-cost").on("blur", function() {
                    let value = $(this).val().trim();
                    
                    if ($(this).hasClass("instrument-name") && (value === "" || parseFloat(value) <= 0)) {
						$(this).addClass("error");
						isValid = false;
//					} else if ($(this).hasClass(".unit-cost") && (value === "" || parseFloat(value) <= 0)) {
//                        $(this).addClass("error");
//                        isValid = false;
                    } else if ($(this).hasClass("quantity") && (value === "" || parseInt(value) <= 0)) {
                        $(this).addClass("error");
                        isValid = false;
                    } else if ($(this).hasClass("confi-name") && (value === "" || parseInt(value) <= 0)) {
                        $(this).addClass("error");
                        isValid = false;
                    } else {
                        $(this).removeClass("error");
                    }
                });

            $(".add-btn").click(function() {
              
                    let isValid = true;
					
                $(".instrument-name, .quantity,.confi-name,.unit-cost").each(function() {
                    let value = $(this).val().trim();
                    
                    if ($(this).hasClass("instrument-name") && (value === "" || parseFloat(value) <= 0)) {
						$(this).addClass("error");
						isValid = false;
//					} else if ($(this).hasClass(".unit-cost") && (value === "" || parseFloat(value) <= 0)) {
//                        $(this).addClass("error");
//                        isValid = false;
                    } else if ($(this).hasClass("quantity") && (value === "" || parseInt(value) <= 0)) {
                        $(this).addClass("error");
                        isValid = false;
                    } else if ($(this).hasClass("confi-name") && (value === "" || parseInt(value) <= 0)) {
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
                      $("#Message1").html(`<strong style="color:#153f68;font-size: large;"> Adding a new row.</strong>`);
					
				}
				
				
		
            });

            $(document).on("click", ".remove-btn", function() {
				
				
                if ($("#dynamicTable tbody tr").length > 1) {
                    $(this).closest("tr").remove();
                    updateRowNumbers();
                      $("#Message1").html(`<strong style="color:#153f68;font-size: large;">Selected one row is removed</strong>`);
                } else {
                  
                      $("#Message1").html(`<strong style="color:#153f68;font-size: large;">At least one row is required</strong>`);
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
		    
		    const checkbox = document.getElementById('agree');
  			const submitBtn = document.getElementById('submitBtn');

 			 checkbox.addEventListener('change', function () {
  			  submitBtn.style.display = this.checked ? 'inline-block' : 'none';
  			  
  			  });

            let flg2 = 0;
             $(".check-btn").click(function() { 
				 flg2++;
				  const table = document.getElementById('dynamicTable').getElementsByTagName('tbody')[0];
   			 const rows = table.getElementsByTagName('tr');
   			 const data = []; 
				  let isValid = true;
                $("  .quantity,.instrument-name,.unit-cost").each(function() {
                    if ($(this).val().trim() === "") {
                        $(this).addClass("error");
                        isValid = false;
                    } else {
                        $(this).removeClass("error");
                    }
                });
                if (!isValid) {
					 $("#Message1").html(`<strong style="color:#153f68;font-size: large;">Please fill in all required fields</strong>`);
                    
                } 
				 
				 

    
    let validRowCount = 0;
    let invalidRowCount = 0;
   
        let requiredSet = {
        1: 1,   // Name TT → Quantity must be 1
        2: 4,   // Name SCR → Quantity must be 1
        3: 1,   // Name TSL → Quantity must be 3
        4:1, // control valve 
        
        5: 1,  // Name VFD → Quantity must be 2
        6: 1,  // Name Vvalve → Quantity must be 4
        7: 1,  // Name TSH → Quantity must be 1
       
        8 :1  // PT -> 1
     
    };
       
          
         $("#dynamicTable tbody tr").each(function() {
			 
        let row = $(this);
        let basePrice = parseFloat(row.find(".base-price").val()) || 0;
        let name = row.find(".instrument-name").val();
        let config = row.find(".confi-name").val();
        let quantity = parseInt(row.find(".quantity").val()) || 1;
        let autoCorrect = false; 
        resultJson.rows = $("#dynamicTable tbody tr").length;     
                
         if (requiredSet[config] !== undefined && requiredSet[config] === quantity) {
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
//         $("#Message1").html(`
//            <strong style="color:red;font-size: large;">${invalidRowCount} rows are invalid!</strong><br>
//            Please correct them and click "Check" again.
//        `);
//       
//    } else {
//		 resultJson.flg2 = flg2;
//        // All values are correct, show the final message
//        $("#Message1").html(`
//            <strong style="color:#153f68;font-size: large;">Total Valid Rows: ${validRowCount}</strong><br>
//            <strong style="color:red;font-size: large;">Total Invalid Rows: ${invalidRowCount}</strong>
//        `);
//
//                
//    }  
    		if(validRowCount == 8){
				$('.modal-backdrop').remove(); // manually remove backdrop
				        $('body').removeClass('modal-open'); // remove body scroll lock
				        $('#preReq').modal('hide');
				 $("#tableDivId").html('');
                software();
			}else{
				
			 resultJson.flg2 = flg2;
//			$(".auto-correct-btn").show();
			 $('.modal-backdrop').remove(); // manually remove backdrop
			  $('body').removeClass('modal-open'); // remove body scroll lock
			  $('#preReq').modal('hide');
			 $("#tableDivId").html('');
			 htm1 =  `<div class="instructions">The PLC based system selected by you is incomplete for the boiler and heat exchanger plant. <br/> The standard list containing the required PLC system is as follows.</div>
			 <div>
			 <center>
			 <img src="images/plcStd.png" class="img-fluid rounded" style=" max-width: 100%; height: auto;  align-items: center;">
			 <div class="btn-container">
			 <button class="btn nextEn mb-5"  >NEXT</button> 
			 </div>
			 </center>
			 </div>
			 `;
			 $("#tableDivId").html(htm1);
			 
			  $(".nextEn").click(function() {
				$('.modal-backdrop').remove(); // manually remove backdrop
				        $('body').removeClass('modal-open'); // remove body scroll lock
				        $('#preReq').modal('hide');
				 $("#tableDivId").html('');
                software();
	           });
			}

	

   });
				 
	}); 
	
	






});
}