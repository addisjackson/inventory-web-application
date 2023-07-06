const selectedRow = null;

function onFormSubmit(e) {
    const formData = readFormData();
    if (selectedRow == null) {
        insertNewRecord(formData);
    } else {
        updateRecord(formData);
    }
    resetForm();
}

//Get data from form

function readFormData() {
    const formData = {};
    formData["date"] = document.getElementById('date').value;
    formData["flavor"] = document.getElementById('flavor').value;
    formData["purchasePrice"] = document.getElementById('puerchasePrice').value;
    formData["date"] = document.getElementById('date').value;
    formData["date"] = document.getElementById('date').value;
    formData["date"] = document.getElementById('date').value;
    formData["date"] = document.getElementById('date').value;
}