/--------------------------------\
| Karma/Jasmine/Browserify Setup |
\--------------------------------/

Purpose: Unit test framework for web client

Setup and run instructions (on prepared branch including this one)
------------------------------------------------------------------
   cd aya/web
   npm install
   npm install -g karma
   npm install browserify watchify karma-browserify brfs
   npm test

Detailed setup and run instructions (on new branch)
---------------------------------------------------
   git clone https://github.com/jcuratcha/ask-your-audience.git aya
      - switch to whichever branch is needed
   cd aya/web
   npm install
   npm install -g karma
   karma init
      testing framework - jasmine
      require.js - no
      capture browsers: (whatever is being tested on - chrome works)
      locations:
         src/shim_reflect-metadata.js     // allows browserify to work
         src/app/**/*.spec.js
      excluded: (none)
      watch all files and run tests on change: yes

   manual changes to karma.conf.js:
      // edit the following section:
      frameworks: ['browserify','jasmine'],

      // edit the following section:
      preprocessors: {
         'src/shim_reflect-metadata.js': ['browserify'],
         'src/app/**/*.spec.js': ['browserify']
      },

      // add the following section:
      browserify: {
         debug: true,
         transform: ['brfs']
      },

   create file /web/src/shim_reflect-metadata.ts:
      // Loads module needed for class decorators, for the karma testing suite only
      //    Note: class decorators include @Component declaration describing component.
      //    Without this file, these will not be linked properly

      import 'core-js/es7/reflect';
      import 'zone.js/dist/zone';

   npm install browserify
   npm install watchify
   npm install karma-browserify
   npm install brfs

   npm test
