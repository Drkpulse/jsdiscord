/*
const { exec } = require('child_process');

module.exports = {
	data:{
		name: 'botupdate',
        description: 'Update the Git repository and start nodemon',
	},



    async execute(interaction) {
        // Execute the bash script
        exec('/path/to/your/script.sh', (error, stdout, stderr) => {
            if (error) {
                console.error(`Error: ${error.message}`);
                interaction.reply('Error updating the repository.');
                return;
            }
            if (stderr) {
                console.error(`Error: ${stderr}`);
                interaction.reply('Error updating the repository.');
                return;
            }
            console.log(`Script output: ${stdout}`);
            interaction.reply('Repository updated successfully and nodemon started.');
        });
    },
};
*/
