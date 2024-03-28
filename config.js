'use strict';

module.exports = {
    timeZone: 'Asia/Kolkata', // Timezone for cron job
    users: [
        //    username   api-key        server url
        ['zeeshan@bhai.finance', 'Zee@007', 'http://localhost:3001/'],
        ['zeeshan@bhai.finance', 'Zee@007', 'https://bhai.it:3001/'],
        ['zeeshan@bhai.finance', 'Zee@007', 'https://bhai.it/']
    ], // All users that are going to use delta
    uploadpath: `${__dirname}/uploads`, // give full path
    cron: {
        schedule: '0 0 1 * *', // 1st Day of every month at 00:00
        min_age: 1, // Minimum days to keep file
        max_age: 30, // Maximym days to keep file
        max_size: 2000 // Size in KB to calculate retenstion period against
    },
    dbconfig: {
        port: 6379, // Redis port
        host: process.env.REDIS_HOST, // Redis host
        password: '' // Redis password, keep blank for default
    },
    port: 3001,
    urlLength: 5, // generate URLs of this length, try to keep above 3 to avoid clashing. 5 works best for me
    urlString:
        '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz-', // URL will have these characters
    maxFileSize: 2, // max File size in MB
    allowedExtentions: '*' // Either * or array of extentions like [".png", ".txt"], keep the dot
};
