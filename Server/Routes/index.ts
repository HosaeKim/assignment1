import express from 'express';
const router = express.Router();

import {DisplayHomePage,DisplayAboutPage,DisplayProjectPage,DisplayServicePage,DisplayContactPage, DisplayMovieList} from '../Controllers/index';


router.get('/',DisplayHomePage);


router.get('/home', DisplayHomePage);


router.get('/about',DisplayAboutPage );


router.get('/project', DisplayProjectPage);


router.get('/service',DisplayServicePage );


router.get('/contact',DisplayContactPage );
;

router.get('/movie-list',DisplayMovieList);

export default router;