const { exec } = require('child_process');

const executePython = {
  execute: function() {
    let shellstring = "./runPython.sh"
    exec(shellstring, (err, stdout, stderr) => {
      console.log(stdout);
    });
  }
};

exports.executePython = executePython;
// clickado.addEventListener("click", function(){
//
//
// });
