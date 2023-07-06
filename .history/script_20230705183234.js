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
    formData["date"]
}