function software(){
	$("#Header").html("<center><span>INQUIRY - SOFTWARE</span></center>");
	htm = `
	
	 <table id="dynamicTable">
        <thead>
            <tr>
                <th>Sr. No.</th>
                <th>Software Required</th>
                <th>Quantity</th>
                <th>Specification</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
             <td>
                    <select class="instrument-name">
                        <option value=""> ----- Select Software ----- </option>
                        <option value="1">Ladder programming software </option>
                        <option value="2">SCADA programming software </option>
                        <option value="3">Historian software </option>
                        <option value="4">Reports and database software </option>
          
                    </select>
                </td>
               
                
                <td><input type="number" class="quantity" ></td>
                <td><input type="text" class="total-final-cost" ></td>
                <td><button class=" btn remove-btn" >Remove</button></td>
            </tr>
        </tbody>
    </table>
    
     <div>
     <input type="checkbox" id="agree"  name="agree" style="width:4%;">
     <label for="agree">I agree and confirm the list</label>
    </div>
    
    <div class="btn-container">
     <button class="btn add-btn" data-toggle="modal" data-target="#preReq">ADD ROW</button>
     <button  id="submitBtn"  type="submit"class="btn check-btn" data-toggle="modal" data-target="#preReq3" style="display: none;">SUBMIT & NEXT</button>
     
     
    </div> `

    
     htm +=  `	<!-- 			    The Modal  ProStr -->
  <div class="modal fade " id="preReq3">
	    <div class="modal-dialog modal-md" >
		      <div class="modal-content">
		       
	        <div class="modal-header">
	          <h4 class="modal-title"><center>Message Box</center></h4>
	          <button type="button" class="close" data-dismiss="modal">&times;</button>
	        </div>
<!-- 		        Modal body -->
		        <div class="modal-body" id="Message2" style="color:red">

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

			$(".instrument-name, .total-final-cost, .quantity").on("blur", function() {
                    let value = $(this).val().trim();
                    
//                    if ($(this).hasClass(".total-final-cost") && (value === "" || parseFloat(value) <= 0)) {
//                        $(this).addClass("error");
//                        isValid = false;
//                    } else 
                    if ($(this).hasClass("quantity") && (value === "" || parseInt(value) <= 0)) {
                        $(this).addClass("error");
                        isValid = false;
                    } else if ($(this).hasClass("instrument-name") && (value === "" || parseInt(value) <= 0)) {
                        $(this).addClass("error");
                        isValid = false;
                    }else{
                        $(this).removeClass("error");
                    }
                });

            $(".add-btn").click(function() {
              
                    let isValid = true;
					
                $(".instrument-name, .total-final-cost, .quantity").each(function() {
                    let value = $(this).val().trim();
                    
//                    if ($(this).hasClass(".total-final-cost") && (value === "" || parseFloat(value) <= 0)) {
//                        $(this).addClass("error");
//                        isValid = false;
//                    } else 
                    if ($(this).hasClass("quantity") && (value === "" || parseInt(value) <= 0)) {
                        $(this).addClass("error");
                        isValid = false;
                    } else if ($(this).hasClass("instrument-name") && (value === "" || parseInt(value) <= 0)) {
                        $(this).addClass("error");
                        isValid = false;
                    }else{
                        $(this).removeClass("error");
                    }
                });

                if (isValid) {
					  let newRow = $("#dynamicTable tbody tr:first").clone();
                     newRow.find("input").val("");
                     newRow.find("select").val("");
                     newRow.appendTo("#dynamicTable tbody");
                     updateRowNumbers();
                     $("#Message2").html(`<strong style="color:#153f68;font-size: large;"> Adding a new row.</strong>`);
					
				}
				
				
		
            });

            $(document).on("click", ".remove-btn", function() {
				
				
                if ($("#dynamicTable tbody tr").length > 1) {
                    $(this).closest("tr").remove();
                    updateRowNumbers();
                     $("#Message2").html(`<strong style="color:#153f68;font-size: large;">Selected one row is removed</strong>`);
                } else {
                  
                     $("#Message2").html(`<strong style="color:#153f68;font-size: large;">At least one row is required</strong>`);
                }
            });
            
             const checkbox = document.getElementById('agree');
  			const submitBtn = document.getElementById('submitBtn');

 			 checkbox.addEventListener('change', function () {
  			  submitBtn.style.display = this.checked ? 'inline-block' : 'none';
  			  
  			  });
             let flg3 = 0;
             $(".check-btn").click(function() { 
				 flg3++;
			const table = document.getElementById('dynamicTable').getElementsByTagName('tbody')[0];
   			 const rows = table.getElementsByTagName('tr');
   			 const data = []; 
				     let isValid = true;
                $("  .unit-cost,.total-final-cost,.instrument-name").each(function() {
                    if ($(this).val().trim() === "") {
                        $(this).addClass("error");
                        isValid = false;
                    } else {
                        $(this).removeClass("error");
                    }
                });
                if (!isValid) {
					$("#Message2").html(`<strong style="color:#153f68;font-size: large;">Please fill in all required fields</strong>`);
                    
                }
                
       for (let i = 0; i < rows.length; i++) {
         const row = rows[i];

//      const instrument = row.querySelector('.instrument-name').value;
      const instrumentSelect = row.querySelector('.instrument-name');
      const instrumentValue = instrumentSelect.value;
      const instrumentName = instrumentSelect.options[instrumentSelect.selectedIndex].text;
      const quantity = row.querySelector('.quantity').value;
      const totalcost = row.querySelector('.total-final-cost').value;

      // Validate non-empty fields
      if (instrumentValue && quantity && totalcost) {
        data.push({
          srNo: i + 1,
           instrumentId: instrumentValue,
          instrumentName: instrumentName,
//          instrumentName: instrument,
          quantity: quantity,
          totalcost: totalcost
        });
      }
    } 
    finalData.QutationSoftware = data;
	console.log(finalData);
    console.log("Collected Data as JSON:", JSON.stringify(data, null, 2));
//    alert("Data collected successfully!\nCheck console for JSON output.");  

	let validRowCount = 0;
    let invalidRowCount = 0;
   
        let requiredSet = {
        1: 1,   // Name TT → Quantity must be 1
        2: 1,   // Name SCR → Quantity must be 1
        3: 1,   // Name TSL → Quantity must be 3
        4:1 // control valve 
        
     
     
    };
       
          
         $("#dynamicTable tbody tr").each(function() {
			 
        let row = $(this);
        let basePrice = parseFloat(row.find(".base-price").val()) || 0;
        let name = row.find(".instrument-name").val();
       
        let quantity = parseInt(row.find(".quantity").val()) || 1;
        let autoCorrect = false; 
        resultJson.rows = $("#dynamicTable tbody tr").length;     
                
         if (requiredSet[name] !== undefined && requiredSet[name] === quantity) {
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
//        $("#Message2").html(`
//            <strong style="color:red;font-size: large;">${invalidRowCount} rows are invalid!</strong><br>
//            Please correct them and click "Check" again.
//        `);
//       
//    } else {
//		 resultJson.flg3 = flg3;
//        // All values are correct, show the final message
//        $("#Message2").html(`
//            <strong style="color:#153f68;font-size: large;">Total Valid Rows: ${validRowCount}</strong><br>
//            <strong style="color:red;font-size: large;">Total Invalid Rows: ${invalidRowCount}</strong>
//        `);
//
//                
//    }  
    		if(validRowCount == 4){
				 $("#tableDivId").html('');
                service();
			}else{
				
		 resultJson.flg3 = flg3;
//			$(".auto-correct-btn").show();
			 $("#tableDivId").html('');
			 htm1 =  `<div class="instructions">The softwares required for this project selected by you is incomplete for the boiler and heat exchanger plant. <br/> The standard list containing the required software list is as follows.</div>
			 <div>
			 <center>
			 <img src="images/softStd.png" class="img-fluid rounded" style="margin-bottom : 20px; max-width: 100%; height: auto;  align-items: center;">
			 <div class="btn-container">
			 <button class="btn nextEn mb-5"  >NEXT</button> 
			 </div>
			 </center>
			 </div>`
			 ;
			 $("#tableDivId").html(htm1);
			 
			  $(".nextEn").click(function() {
				 $("#tableDivId").html('');
                service();
	           });

			}


   });   
				 
		   
    
				
				 
	}); 
			
			$(document).on("input", ".unit-cost", function() {
				let row = $(this).closest("tr");
                let basePrice = parseFloat(row.find(".unit-cost").val()) || 0;
                let qty = parseInt(row.find(".quantity").val()) || 1;
                let totalCost = basePrice*qty;
				 row.find(".total-final-cost").val(totalCost.toFixed(2));
		    });

			 $(".project-header").prop("disabled",true); 
});

}
	
	
