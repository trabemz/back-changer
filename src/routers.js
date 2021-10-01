const { Router } = require('express');
const img = require('./controllers/img');

const imgRouter = new Router();

imgRouter.post('/upload', img.uploadImg, img.insertImg);
imgRouter.get('/list', img.getImgs);
imgRouter.get('/image/:id', img.getImg);
imgRouter.delete('/image/:id', img.deleteImg);

///merge?front=<id>&back=<id>&color=145,54,32&threshold=5
imgRouter.get('/merge', img.mergeImgs);

exports.imgRouter = imgRouter;
