function SendButtonClicked() {
    // Disable inputs
    $('#InputEmail').prop("disabled", true);
    $('#InputPassword').prop("disabled", true);
    $('#InputAPIKey').prop("disabled", true);
    $('#InputMessageSubject').prop("disabled", true);
    $('#InputMessageBody').prop("disabled", true);
    // Disable send button
    $('#btnSend').prop("disabled", true);
    // Show spinner on send button
    $('#btnSend').html(
        `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Sending...`
    );


    
}



function AddNationToLog(No, nationID) {
    var table = document.getElementById("tableNationLog");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = No;
    cell2.innerHTML = nationID;
}