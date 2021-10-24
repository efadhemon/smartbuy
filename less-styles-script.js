var fs = require("fs")
var readline = require("readline")
var execSync = require("child_process").execSync

var inputLessFilePath = "./src/@styles/theme/antd/mytheme.less"
var outputCSSFilePath = "./src/@/styles/theme/antd/ant-result.css"
var outputSassVarsFilePath = "./src/@styles/theme/antd/ant-scss-var.scss"

execSync(`lessc --js ${inputLessFilePath} ${outputCSSFilePath}`)

function replace(line) {
	var str = line.trim()
	if (str.length < 2 || str[0] !== "@" || str.includes("import")) return
	return "$" + str.substr(1)
}

var linereader = readline.createInterface({
	input: fs.createReadStream(inputLessFilePath),
})

fs.writeFileSync(outputSassVarsFilePath, "")

linereader.on("line", function (line) {
	var res = replace(line)
	if (res) {
		fs.appendFileSync(outputSassVarsFilePath, res + "\n")
	}
})
