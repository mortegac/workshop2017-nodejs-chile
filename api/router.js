import express from 'express';
import colors from 'colors/safe';


import {
    trackController,
    albumController,
    bandController
} from './controllers';


export const router = express.Router();



// API Routes
router.get('/tracks', trackController.getList);

router.get('/albums', albumController.getList);
router.get('/bands', bandController.getList);
