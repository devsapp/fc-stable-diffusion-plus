'use strict';
const path = require('path');
const fs = require('fs');
const downloads = require('@serverless-devs/downloads').default;


exports.handler = async (_event, _context, callback) => {
    const region = process.env.region || 'cn-hangzhou'
    const fileUrl = `https://serverless-ai-models-${region}.oss-${region}-internal.aliyuncs.com/stable-diffusion/models/sd-v1-5-inpainting.ckpt`;
    const filename = path.basename(fileUrl);
    const downloadDir = '/mnt/auto/sd/models/Stable-diffusion';
    const sdCkpt = path.join(downloadDir, filename);
    if (fs.existsSync(sdCkpt)) {
        callback(null, 'sd ckpt is exist');
    } else {
        await downloads(fileUrl, {
            dest: downloadDir,
            filename,
            extract: true
        });
        callback(null, 'download success');
    }

}
