const router = require('express').Router();
const passport = require('passport');
const User = require('../models/user');
const express = require('express')

  
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/signup', (req, res, next) => {
  res.render('signup');
});

router.post('/signup', passport.authenticate('local-signup', {
  successRedirect: '/profile',
  failureRedirect: '/signup',
  failureFlash: true
})); 

router.get('/signin', (req, res, next) => {
  res.render('signin');
});


router.post('/signin', passport.authenticate('local-signin', {
  successRedirect: '/profile',
  failureRedirect: '/signin',
  failureFlash: true
}));

router.get('/profile',isAuthenticated, async(req, res, next) => {
  res.render('profile');

  /*const {email} = req.params*/

  

  /*const usuario = JSON.parse(JSON.stringify(req.user))*/

  /*const usuario = await User.findOne({_email: email});*/
  
  /*permisos=[usuario._id]*/

 /*const accede = usuario.permisos.includes('aragon');*/

 /*console.log(accede);*/
  
  /*
  

  


  console.log(accede);

  console.log(usuario.permisos.length);*/

  /*const lista = await User.findOne({_email: email},{permisos:1,_id:0}).permisos;*/
 
 

 /*const user = await User.findOne({ email });*/
 
});




router.get('/aeropuerto',isAuthenticated, (req, res, next) => {

 const usuario = JSON.parse(JSON.stringify(req.user))
 
 const accede = usuario.permisos.includes('aeropuerto');

 if(accede){res.render('aeropuerto');}
 
 res.redirect('/profile');

});


router.get('/aragon',isAuthenticated, (req, res, next) => {

 const usuario = JSON.parse(JSON.stringify(req.user))
 
 const accede = usuario.permisos.includes('aragon');

 if(accede){res.render('aragon');}
 
 res.redirect('/profile');  
  
});


router.get('/constitucion',isAuthenticated, (req, res, next) => {


 const usuario = JSON.parse(JSON.stringify(req.user))
 
 const accede = usuario.permisos.includes('constitucion');

 if(accede){res.render('constitucion');}
 
 res.redirect('/profile');
});


router.get('/chalco_ixtapaluca',isAuthenticated, (req, res, next) => {

 const usuario = JSON.parse(JSON.stringify(req.user))
 
 const accede = usuario.permisos.includes('chalco_ixtapaluca');

 if(accede){res.render('chalco_ixtapaluca');}
 
 res.redirect('/profile');
  
});


router.get('/coacalco',isAuthenticated, (req, res, next) => {
   
 const usuario = JSON.parse(JSON.stringify(req.user))
 
 const accede = usuario.permisos.includes('coacalco');

 if(accede){res.render('coacalco');}
 
 res.redirect('/profile');
  
});


router.get('/ecatepec',isAuthenticated, (req, res, next) => {
   
 const usuario = JSON.parse(JSON.stringify(req.user))
 
 const accede = usuario.permisos.includes('ecatepec');

 if(accede){res.render('ecatepec');}
 
 res.redirect('/profile');

  
});


router.get('/huehuetoca',isAuthenticated, (req, res, next) => {

 const usuario = JSON.parse(JSON.stringify(req.user))
 
 const accede = usuario.permisos.includes('huehuetoca');

 if(accede){res.render('huehuetoca');}
 
 res.redirect('/profile');

});

router.get('/iztapalapa',isAuthenticated, (req, res, next) => {

 const usuario = JSON.parse(JSON.stringify(req.user))
 
 const accede = usuario.permisos.includes('iztapalapa');

 if(accede){res.render('iztapalapa');}
 
 res.redirect('/profile');

});

router.get('/los_reyes',isAuthenticated, (req, res, next) => {
 const usuario = JSON.parse(JSON.stringify(req.user))
 
 const accede = usuario.permisos.includes('los_reyes');

 if(accede){res.render('los_reyes');}
 
 res.redirect('/profile');
});


router.get('/neza1',isAuthenticated, (req, res, next) => {

 const usuario = JSON.parse(JSON.stringify(req.user))
 
 const accede = usuario.permisos.includes('neza1');

 if(accede){res.render('neza1');}
 
 res.redirect('/profile');
  
});

router.get('/neza2',isAuthenticated, (req, res, next) => {
  
 const usuario = JSON.parse(JSON.stringify(req.user))
 
 const accede = usuario.permisos.includes('neza2');

 if(accede){res.render('neza2');}
 
 res.redirect('/profile');

  
});

router.get('/oda',isAuthenticated, (req, res, next) => {
 
 const usuario = JSON.parse(JSON.stringify(req.user))
 
 const accede = usuario.permisos.includes('oda');

 if(accede){res.render('oda');}
 
 res.redirect('/profile');
  
});

router.get('/tecamac',isAuthenticated, (req, res, next) => {
   
 const usuario = JSON.parse(JSON.stringify(req.user))
 
 const accede = usuario.permisos.includes('tecamac');

 if(accede){res.render('tecamac');}
 
 res.redirect('/profile');  
});


router.get('/texcoco',isAuthenticated, (req, res, next) => {
   
 const usuario = JSON.parse(JSON.stringify(req.user))
 
 const accede = usuario.permisos.includes('texcoco');

 if(accede){res.render('texcoco');}
 
 res.redirect('/profile');

});

router.get('/tlerma',isAuthenticated, (req, res, next) => {

 const usuario = JSON.parse(JSON.stringify(req.user))
 
 const accede = usuario.permisos.includes('tlerma');

 if(accede){res.render('tlerma');}
 
 res.redirect('/profile');
  
});

router.get('/tsncarlos',isAuthenticated, (req, res, next) => {

 const usuario = JSON.parse(JSON.stringify(req.user))
 
 const accede = usuario.permisos.includes('tsncarlos');

 if(accede){res.render('tsncarlos');}
 
 res.redirect('/profile');
  
});

router.get('/tzonac',isAuthenticated, (req, res, next) => {

 const usuario = JSON.parse(JSON.stringify(req.user))
 
 const accede = usuario.permisos.includes('tzonac');

 if(accede){res.render('tzonac');}
 
 res.redirect('/profile');
  
});

router.get('/tultepec',isAuthenticated, (req, res, next) => {
 
 const usuario = JSON.parse(JSON.stringify(req.user))
 
 const accede = usuario.permisos.includes('tultepec');

 if(accede){res.render('tultepec');}
 
 res.redirect('/profile');

});

router.get('/vallechalco',isAuthenticated, (req, res, next) => {

 const usuario = JSON.parse(JSON.stringify(req.user))
 
 const accede = usuario.permisos.includes('valle_chalco');

 if(accede){res.render('vallechalco');}
 
 res.redirect('/profile')

});


router.get('/login', (req, res, next) => {
  res.render('login');
})


router.get('/logout', function(req, res, next){
  req.logout(function(err) {
    if (err) { return next(err); }
    res.redirect('/');
  });
});


function accede (req,res,next){


}


function isAuthenticated(req, res, next) {
  if(req.isAuthenticated()) {
    return next();
  }

  res.redirect('/')
}

module.exports = router;
