const selectedRow = null;

function onFormSubmit(e) {
    const formData = readFormData();
    if (selectedRow == null) {
        insertNewRecord(formData);
    } else {
        updateRecord(formData);
    }
    resetF
}