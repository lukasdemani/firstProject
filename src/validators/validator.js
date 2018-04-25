var errors = [];

function ValidationContract() {
	errors = [];
}

ValidationContract.prototype.isRequired = (value, message) => {
	if (!value || value.length <= 0)
		errors.push({ messsage: message });
}

ValidationContract.prototype.hasMinLen = (value, min, message) => {
	if (!value || value.length <= min)
		errors.push({ messsage: message });
}

ValidationContract.prototype.hasMaxLen = (value, max, message) => {
	if (!value || value.length > max)
		errors.push({ messsage: message });
}

ValidationContract.prototype.hasFixedLen = (value, len, message) => {
	if (value.length != len)
		errors.push({ messsage: message });
}

ValidationContract.prototype.isRequired = (value, message) => {
	if (!value || value.length <= 0)
		errors.push({ messsage: message });
}

ValidationContract.prototype.isEmail = (value, message) => {
	var reg = new RegExp(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/);
	if (!reg.test(value))
		errors.push({ messsage: message });
}

ValidationContract.prototype.errors = () => {
	return errors;
}

ValidationContract.prototype.isValid = () => {
	return errors.length == 0;
}

module.exports = ValidationContract;