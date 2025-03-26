function enquiry(){
	
	
	htm = `
	    <div class="letterhead">Inquiry for Quotation: Field Instruments and PLC for Automation Project</div>
    <form>
        <label>Project Name: <input type="text" name="project_name" required></label><br><br>
        <label>Industry/Sector: <input type="text" name="industry" required></label><br><br>
        <label>Project Details: <input type="text" name="industry" required></label><br><br>
        <label>Location: <input type="text" name="location" required></label><br><br>
        <table>
            <thead>
                <tr>
                	<th>Sr. No.</th>
                    <th>Instrument Type</th>
                    <th>Quantity</th>
                    <th>Specification</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody id="instrumentTable">
                <tr>
                    <td><input type="text" name="instrument_type[]" required></td>
                    <td><input type="number" name="quantity[]" min="1" required></td>
                    <td><input type="text" name="specification[]" required></td>
                    <td><button type="button" class="btn remove-row" onclick="removeRow(this)">Remove</button></td>
                </tr>
            </tbody>
        </table>
        <button type="button" class="btn .add-btn "  >Add Instrument</button>
        <button type="submit" class="btn">Submit</button>
    </form>`
    
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
    
    $("#mainDiv").html(htm);
   $(document).ready(function() {  
            function addRow() {
            let table = document.getElementById("instrumentTable");
            let row = table.insertRow();
            row.innerHTML = `
                <td><input type="text" name="instrument_type[]" required></td>
                <td><input type="number" name="quantity[]" min="1" required></td>
                <td><input type="text" name="specification[]" required></td>
                <td><button type="button" class="btn remove-row" onclick="removeRow(this)">Remove</button></td>
            `;
        }

        function removeRow(button) {
            let row = button.parentElement.parentElement;
            row.remove();
        }
       
        $(document).on("click", ".add-btn", function() {
			addRow();
		});
});

}