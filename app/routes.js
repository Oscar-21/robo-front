const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (comMod) => (componentModule) => {
  comMod(null, componentModule.default);
};

export default function createRoutes() {

  return [

    {
     path: '/Imarray',
     name: 'imarray',
     getComponent(nextState, comMod) {
       import('containers/Imarray')
         .then(loadModule(comMod))
         .catch(errorLoading);
     },
   },
    {
     path: '/SignUp',
     name: 'signup',
     getComponent(nextState, comMod) {
       import('containers/SignUp')
         .then(loadModule(comMod))
         .catch(errorLoading);
     },
   },

    {
     path: '/SignIn',
     name: 'signin',
     getComponent(nextState, comMod) {
       import('containers/SignIn')
         .then(loadModule(comMod))
         .catch(errorLoading);
     },
   },
      {
       path: '/StoreFront',
       name: 'storefront',
       getComponent(nextState, comMod) {
         import('containers/StoreFront')
           .then(loadModule(comMod))
           .catch(errorLoading);
       },
     },

      {
       path: '/Dashboard',
       name: 'dashboard',
       getComponent(nextState, comMod) {
         import('containers/Dashboard')
           .then(loadModule(comMod))
           .catch(errorLoading);
       },
     },
      {
       path: '/',
       name: 'home',
       getComponent(nextState, comMod) {
         import('containers/Home')
           .then(loadModule(comMod))
           .catch(errorLoading);
       },
     },
     {
      path: '*',
      name: 'notfound',
      getComponent(nextState, comMod) {
        import('containers/NotFoundPage')
          .then(loadModule(comMod))
          .catch(errorLoading);
      },
    },
  ];
}
