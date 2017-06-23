var tty= require('tty'); 
       process.stdout.on('resize', () => {
	process.stdout.columns += 5;
        console.log('screen size has changed!');
        console.log(`${process.stdout.columns}x${process.stdout.rows}`);
            });
