const repl = require("repl");
const { evalString, evalObject } = require("./evaluator");

if (process.argv[2] != "") {
    	repl.start({
		prompt: "AwDB$ ",
		eval: evalString,
	});
}

module.exports = { evalObject };